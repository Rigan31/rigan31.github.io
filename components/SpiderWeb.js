"use client";

import { useEffect, useRef } from "react";

// ---- Tunables ---------------------------------------------------------------
const STEP = 9; // px between simulated points along a thread
const INFLUENCE = 110; // radius (px) within which the cursor disturbs threads
const STIFFNESS = 0.04; // spring pulling each point back to its rest position
const DAMPING = 0.9; // velocity retained per frame (lower = settles faster)
const PUSH = 0.3; // how strongly the cursor pushes threads aside
const DRAG = 0.06; // how much cursor motion drags threads along with it
const MAX_OFFSET = 14; // max displacement of any point from rest (px)
const GLOW = 170; // radius of the accent tint around the cursor

const BASE = "rgba(23, 24, 28, 0.17)";
const GLOW_COLOR = "rgba(37, 71, 197, 0.7)";
const DEW = "rgba(23, 24, 28, 0.22)";
// [thread group, line width, alpha multiplier]
const STYLES = [
  ["frame", 1.05, 1],
  ["radial", 0.85, 0.95],
  ["hub", 0.7, 0.85],
  ["spiral", 0.7, 0.78],
];
const TAU = Math.PI * 2;

// Small seeded PRNG so the web looks the same on every visit.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Intersection of the ray (cx,cy)+t(dx,dy) with segment p→q; returns {t, u} or null.
function raySegment(cx, cy, dx, dy, px, py, qx, qy) {
  const ex = qx - px;
  const ey = qy - py;
  const den = dx * ey - dy * ex;
  if (Math.abs(den) < 1e-9) return null;
  const t = ((px - cx) * ey - (py - cy) * ex) / den;
  const u = ((px - cx) * dy - (py - cy) * dx) / den;
  return t > 0 && u >= 0 && u <= 1 ? { t, u } : null;
}

// ---- Scene construction -----------------------------------------------------
// Points are shared between threads at junctions, so the web stays connected
// however it is deformed.
function createScene() {
  const xs = [];
  const ys = [];
  const pins = [];
  const dew = [];
  const groups = { frame: [], radial: [], hub: [], spiral: [] };

  const point = (x, y, pinned = 0) => {
    xs.push(x);
    ys.push(y);
    pins.push(pinned);
    return xs.length - 1;
  };

  // A thread through existing points, subdividing long segments into STEP-sized pieces.
  // With `sag`, each segment bows toward (sag.x, sag.y) like slack silk.
  const thread = (indices, group, sag = null) => {
    const out = [indices[0]];
    for (let k = 1; k < indices.length; k++) {
      const a = indices[k - 1];
      const b = indices[k];
      const ax = xs[a];
      const ay = ys[a];
      const dx = xs[b] - ax;
      const dy = ys[b] - ay;
      const len = Math.hypot(dx, dy);
      const n = Math.max(1, Math.ceil(len / STEP));
      let cx = ax + dx / 2;
      let cy = ay + dy / 2;
      if (sag) {
        const tx = sag.x - cx;
        const ty = sag.y - cy;
        const tl = Math.hypot(tx, ty) || 1;
        cx += (tx / tl) * len * sag.amount;
        cy += (ty / tl) * len * sag.amount;
      }
      for (let j = 1; j < n; j++) {
        const t = j / n;
        const u = 1 - t;
        // Quadratic Bézier a → (cx, cy) → b; a straight line when there is no sag.
        out.push(point(u * u * ax + 2 * u * t * cx + t * t * xs[b], u * u * ay + 2 * u * t * cy + t * t * ys[b]));
      }
      out.push(b);
    }
    groups[group].push(out);
    return out;
  };

  return { xs, ys, pins, dew, groups, point, thread };
}

function orbWeb(s, { cx, cy, r, spokes, turns, seed, w, h, inner = r * 0.22, flare = 0, hubRings = true, dewCount = 9 }) {
  const rand = mulberry32(seed);
  const jitter = (amount) => (rand() * 2 - 1) * amount;

  // Irregular outer frame that the radii attach to.
  const sides = 5 + Math.floor(rand() * 2);
  const frameOffset = rand() * TAU;
  const frame = [];
  for (let i = 0; i < sides; i++) {
    const a = frameOffset + (i / sides) * TAU + jitter((0.3 * TAU) / sides);
    const rr = r * (0.95 + rand() * 0.25);
    frame.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr });
  }
  const frameIdx = frame.map((v) => s.point(v.x, v.y));
  const frameHits = frame.map(() => []);

  // Radii, with the junctions the hub rings and capture spiral will reuse.
  const hub = s.point(cx, cy);
  const hubRadii = hubRings ? [0.035, 0.06, 0.085].map((f) => f * r) : [];
  // Uneven spacing between turns makes the spiral look hand-spun rather than ruled;
  // `flare` widens the gaps toward the outside, like a real orb web.
  const turnWeights = Array.from({ length: turns }, (_, t) => (1 + (flare * t) / turns) * (0.75 + rand() * 0.5));
  const totalWeight = turnWeights.reduce((sum, v) => sum + v, 0);
  const turnStart = [0];
  for (let t = 0; t < turns; t++) turnStart.push(turnStart[t] + turnWeights[t] / totalWeight);
  const spokeOffset = rand() * TAU;
  const junctions = [];

  for (let k = 0; k < spokes; k++) {
    const a = spokeOffset + (k / spokes) * TAU + jitter((0.32 * TAU) / spokes);
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    let len = r;
    for (let e = 0; e < sides; e++) {
      const p = frame[e];
      const q = frame[(e + 1) % sides];
      const hit = raySegment(cx, cy, dx, dy, p.x, p.y, q.x, q.y);
      if (hit) {
        len = hit.t;
        frameHits[e].push({ u: hit.u, k });
        break;
      }
    }
    const at = (d) => s.point(cx + dx * d, cy + dy * d);
    const hubIdx = hubRadii.map(at);
    const outer = len * 0.93;
    const spiralIdx = [];
    for (let t = 0; t < turns; t++) {
      const gap = turnStart[t + 1] - turnStart[t];
      const f = turnStart[t] + (k / spokes) * gap + jitter(gap * 0.1);
      spiralIdx.push(at(inner + f * (outer - inner)));
    }
    const end = at(len);
    junctions.push({ hubIdx, spiralIdx, end });
    s.thread([hub, ...hubIdx, ...spiralIdx, end], "radial");
  }

  // Frame edges pass through the radius endpoints that land on them.
  frame.forEach((_, e) => {
    const mids = frameHits[e].sort((p, q) => p.u - q.u).map(({ k }) => junctions[k].end);
    s.thread([frameIdx[e], ...mids, frameIdx[(e + 1) % sides]], "frame", { x: cx, y: cy, amount: 0.03 });
  });

  // Hub rings.
  hubRadii.forEach((_, j) => {
    const ring = junctions.map((jn) => jn.hubIdx[j]);
    s.thread([...ring, ring[0]], "hub", { x: cx, y: cy, amount: 0.05 });
  });

  // Capture spiral: one continuous thread winding outward across the radii.
  const seq = [];
  for (let t = 0; t < turns; t++) for (let k = 0; k < spokes; k++) seq.push(junctions[k].spiralIdx[t]);
  const spiral = s.thread(seq, "spiral", { x: cx, y: cy, amount: 0.07 });
  for (let i = 0; i < dewCount; i++) s.dew.push(spiral[1 + Math.floor(rand() * (spiral.length - 2))]);

  // Anchor lines from frame corners to nearby edges of the canvas.
  frame.forEach((v, i) => {
    if (v.x < 0 || v.x > w || v.y < 0 || v.y > h) return;
    const a = Math.atan2(v.y - cy, v.x - cx) + jitter(0.3);
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    const tx = dx > 0 ? (w - v.x) / dx : dx < 0 ? -v.x / dx : Infinity;
    const ty = dy > 0 ? (h - v.y) / dy : dy < 0 ? -v.y / dy : Infinity;
    const d = Math.min(tx, ty);
    if (d > r * 0.85) return;
    const end = s.point(v.x + dx * (d + 2), v.y + dy * (d + 2), 1);
    s.thread([frameIdx[i], end], "frame");
  });
}

// One large web covering the whole canvas, its hub centred on `focus.hub` (the portrait).
function buildScene(w, h, focus) {
  const s = createScene();
  const hub = focus.hub ?? { x: w / 2, y: h / 2, r: 0 };
  const far = Math.max(
    Math.hypot(hub.x, hub.y),
    Math.hypot(w - hub.x, hub.y),
    Math.hypot(hub.x, h - hub.y),
    Math.hypot(w - hub.x, h - hub.y)
  );
  // Frame threads cut inside the circle, so oversize the web to reach every corner.
  const r = far / 0.78;
  const inner = hub.r ? hub.r + 26 : r * 0.2;
  const wide = w >= 900;
  const turns = Math.round((r * 0.93 - inner) / (wide ? 24 : 18));
  orbWeb(s, {
    cx: hub.x,
    cy: hub.y,
    r,
    spokes: wide ? 34 : 24,
    turns,
    seed: 7,
    w,
    h,
    inner,
    flare: 1.3,
    hubRings: !hub.r,
    dewCount: 26,
  });

  const n = s.xs.length;
  const groups = {};
  for (const [name, list] of Object.entries(s.groups)) groups[name] = list.map((a) => Int32Array.from(a));
  return {
    n,
    rx: Float32Array.from(s.xs),
    ry: Float32Array.from(s.ys),
    x: Float32Array.from(s.xs),
    y: Float32Array.from(s.ys),
    vx: new Float32Array(n),
    vy: new Float32Array(n),
    pins: Uint8Array.from(s.pins),
    groups,
    dew: s.dew,
    clear: focus.clear ?? null,
  };
}

// ---- Component --------------------------------------------------------------
export default function SpiderWeb({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let scene = null;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let lastTime = 0;
    let stillFrames = 0;
    const pointer = { x: -1e4, y: -1e4, dx: 0, dy: 0, vx: 0, vy: 0, active: false };

    function draw() {
      const { x, y, groups, dew } = scene;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      let stroke = BASE;
      if (pointer.active) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, GLOW);
        g.addColorStop(0, GLOW_COLOR);
        g.addColorStop(1, BASE);
        stroke = g;
      }
      ctx.strokeStyle = stroke;

      for (const [name, width, alpha] of STYLES) {
        ctx.lineWidth = width;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        for (const strand of groups[name]) {
          ctx.moveTo(x[strand[0]], y[strand[0]]);
          for (let k = 1; k < strand.length; k++) ctx.lineTo(x[strand[k]], y[strand[k]]);
        }
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = DEW;
      ctx.beginPath();
      for (const i of dew) {
        ctx.moveTo(x[i] + 1.6, y[i]);
        ctx.arc(x[i], y[i], 1.6, 0, TAU);
      }
      ctx.fill();

      // Fade the top edge so the web doesn't end in a hard line under the navbar.
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      const top = ctx.createLinearGradient(0, 0, 0, 56);
      top.addColorStop(0, "rgba(0, 0, 0, 1)");
      top.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = top;
      ctx.fillRect(0, 0, w, 56);
      ctx.restore();

      // Soft elliptical fade behind the text so it stays readable.
      if (scene.clear) {
        const { x: ex, y: ey, rx, ry } = scene.clear;
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.translate(ex, ey);
        ctx.scale(rx, ry);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        g.addColorStop(0, "rgba(0, 0, 0, 0.9)");
        g.addColorStop(0.6, "rgba(0, 0, 0, 0.75)");
        g.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, TAU);
        ctx.fill();
        ctx.restore();
      }
    }

    // One physics tick; returns the largest squared point speed.
    function step() {
      const { n, x, y, vx, vy, rx, ry, pins } = scene;
      const { x: px, y: py, vx: pvx, vy: pvy, active } = pointer;
      const r2 = INFLUENCE * INFLUENCE;
      const max2 = MAX_OFFSET * MAX_OFFSET;
      let fastest = 0;

      for (let i = 0; i < n; i++) {
        if (pins[i]) continue;
        let ax = (rx[i] - x[i]) * STIFFNESS;
        let ay = (ry[i] - y[i]) * STIFFNESS;
        if (active) {
          const dx = x[i] - px;
          const dy = y[i] - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2) {
            const d = Math.sqrt(d2) + 1e-3;
            const f = (1 - d / INFLUENCE) ** 2;
            ax += (dx / d) * f * PUSH + pvx * f * DRAG;
            ay += (dy / d) * f * PUSH + pvy * f * DRAG;
          }
        }
        let nvx = (vx[i] + ax) * DAMPING;
        let nvy = (vy[i] + ay) * DAMPING;
        let nx = x[i] + nvx;
        let ny = y[i] + nvy;
        const ox = nx - rx[i];
        const oy = ny - ry[i];
        const o2 = ox * ox + oy * oy;
        if (o2 > max2) {
          const k = MAX_OFFSET / Math.sqrt(o2);
          nx = rx[i] + ox * k;
          ny = ry[i] + oy * k;
          nvx *= 0.5;
          nvy *= 0.5;
        }
        x[i] = nx;
        y[i] = ny;
        vx[i] = nvx;
        vy[i] = nvy;
        const sp = nvx * nvx + nvy * nvy;
        if (sp > fastest) fastest = sp;
      }
      return fastest;
    }

    function frame(time) {
      // Fixed 60 Hz physics regardless of display refresh rate.
      const ticks = lastTime ? Math.min(3, Math.max(1, Math.round((time - lastTime) / 16.67))) : 1;
      lastTime = time;

      let fastest = 0;
      for (let t = 0; t < ticks; t++) {
        pointer.vx = Math.max(-40, Math.min(40, pointer.vx * 0.55 + pointer.dx * 0.45));
        pointer.vy = Math.max(-40, Math.min(40, pointer.vy * 0.55 + pointer.dy * 0.45));
        pointer.dx = 0;
        pointer.dy = 0;
        fastest = Math.max(fastest, step());
      }
      draw();

      const pointerMoving = Math.abs(pointer.vx) + Math.abs(pointer.vy) > 0.05;
      stillFrames = fastest < 1e-4 && !pointerMoving ? stillFrames + 1 : 0;
      if (stillFrames > 20) {
        raf = 0; // web has settled; sleep until the pointer moves again
        lastTime = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    function wake() {
      stillFrames = 0;
      if (!raf && scene) raf = requestAnimationFrame(frame);
    }

    const root = canvas.parentElement;
    const hubEl = root?.querySelector("[data-web-hub]");
    const clearEl = root?.querySelector("[data-web-clear]");

    // Positions of the portrait (web hub) and text block (faded area), relative to the canvas.
    function measure(base) {
      const focus = {};
      if (hubEl) {
        const b = hubEl.getBoundingClientRect();
        focus.hub = { x: b.left - base.left + b.width / 2, y: b.top - base.top + b.height / 2, r: b.width / 2 };
      }
      if (clearEl) {
        const b = clearEl.getBoundingClientRect();
        focus.clear = {
          x: b.left - base.left + b.width / 2,
          y: b.top - base.top + b.height / 2,
          rx: b.width / 2 + 90,
          ry: b.height / 2 + 60,
        };
      }
      return focus;
    }

    function setup() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (!w || !h) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      scene = buildScene(w, h, measure(rect));
      draw();
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x > -INFLUENCE && y > -INFLUENCE && x < rect.width + INFLUENCE && y < rect.height + INFLUENCE;
      if (!inside) {
        if (pointer.active) {
          pointer.active = false;
          wake();
        }
        return;
      }
      if (pointer.active) {
        pointer.dx += x - pointer.x;
        pointer.dy += y - pointer.y;
      }
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      wake();
    }

    function onPointerLeave() {
      pointer.active = false;
      pointer.x = pointer.y = -1e4;
      wake();
    }

    function onPointerOut(e) {
      if (!e.relatedTarget) onPointerLeave();
    }

    function onPointerUp(e) {
      if (e.pointerType !== "mouse") onPointerLeave(); // touch: release the web when the finger lifts
    }

    setup();

    let resizeTimer = 0;
    const scheduleSetup = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 120);
    };
    const ro = new ResizeObserver(scheduleSetup);
    ro.observe(canvas);
    if (clearEl) ro.observe(clearEl);
    // Web fonts can shift the layout slightly once they load.
    document.fonts?.ready.then(scheduleSetup);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerLeave);
      document.addEventListener("pointerout", onPointerOut);
      window.addEventListener("blur", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerLeave);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
