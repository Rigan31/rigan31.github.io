"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  LuArrowUpRight,
  LuCode,
  LuFileText,
  LuGlobe,
  LuMaximize2,
  LuPresentation,
  LuVideo,
  LuX,
} from "react-icons/lu";
import { SiArxiv } from "react-icons/si";

const TYPE_STYLE = {
  conference: { label: "Conference", badge: "bg-accent text-white dark:text-paper" },
  journal: { label: "Journal", badge: "bg-emerald-700 text-white" },
  workshop: { label: "Workshop", badge: "bg-amber-600 text-white" },
};

const LINKS = [
  ["paper", "Paper", LuFileText],
  ["pdf", "PDF", LuFileText],
  ["arxiv", "arXiv", SiArxiv],
  ["code", "Code", LuCode],
  ["project", "Project", LuGlobe],
  ["slides", "Slides", LuPresentation],
  ["poster", "Poster", LuPresentation],
  ["video", "Video", LuVideo],
];

export default function PublicationList({ publications }) {
  const [filter, setFilter] = useState("all");

  const tabs = useMemo(() => {
    const counts = publications.reduce((acc, p) => ({ ...acc, [p.type]: (acc[p.type] ?? 0) + 1 }), {});
    return [
      { key: "all", label: "All", count: publications.length },
      ...Object.keys(TYPE_STYLE)
        .filter((t) => counts[t])
        .map((t) => ({ key: t, label: TYPE_STYLE[t].label, count: counts[t] })),
    ];
  }, [publications]);

  const byYear = useMemo(() => {
    const shown = publications.filter((p) => filter === "all" || p.type === filter);
    const groups = new Map();
    for (const p of shown) groups.set(p.year, [...(groups.get(p.year) ?? []), p]);
    return [...groups.entries()].sort((a, b) => b[0] - a[0]);
  }, [publications, filter]);

  return (
    <div>
      <div role="tablist" aria-label="Filter publications" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={filter === t.key}
            onClick={() => setFilter(t.key)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === t.key
                ? "border-ink bg-ink text-paper"
                : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink"
            }`}
          >
            {t.label}
            <span className={`font-mono text-[0.7rem] ${filter === t.key ? "text-paper/60" : "text-faint"}`}>
              {t.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {byYear.map(([year, pubs]) => (
          <section key={year} className="grid gap-x-10 border-t border-line pt-8 lg:grid-cols-[5.5rem_1fr]">
            <h2 className="mb-2 font-serif text-[2rem] font-normal leading-none text-faint/70 lg:sticky lg:top-24 lg:self-start">
              {year}
            </h2>
            <div className="divide-y divide-line/70">
              {pubs.map((p) => (
                <PublicationItem key={p.id} pub={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function PublicationItem({ pub }) {
  const style = TYPE_STYLE[pub.type] ?? TYPE_STYLE.conference;
  const primary = pub.links.paper ?? pub.links.pdf ?? pub.links.arxiv;
  const links = LINKS.filter(([key]) => pub.links[key]);

  return (
    <article
      id={pub.id}
      className="grid scroll-mt-24 gap-5 py-8 first:pt-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8"
    >
      <Thumbnail pub={pub} />

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-md px-2 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider ${style.badge}`}>
            {pub.venueShort}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">{style.label}</span>
        </div>

        <h3 className="mt-3 font-serif text-[1.28rem] font-medium leading-snug text-ink">
          {primary ? (
            <a href={primary} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>

        <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
          {pub.authors.map((a, i) => (
            <span key={a.name}>
              {a.me ? (
                <span className="font-semibold text-ink underline decoration-accent/50 decoration-2 underline-offset-[3px]">
                  {a.name}
                </span>
              ) : (
                a.name
              )}
              {a.equal && <sup className="ml-px text-accent">*</sup>}
              {i < pub.authors.length - 1 && ", "}
            </span>
          ))}
        </p>
        <p className="mt-1 text-[0.88rem] italic text-faint">{pub.venue}</p>

        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map(([key, label, Icon]) => (
              <a key={key} href={pub.links[key]} target="_blank" rel="noreferrer" className="chip-link">
                <Icon className="text-[0.8rem]" />
                {label}
                <LuArrowUpRight className="-ml-0.5 text-[0.75rem] opacity-60" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Thumbnail({ pub }) {
  const [open, setOpen] = useState(false);

  if (!pub.image) {
    return (
      <div className="relative aspect-[12/5] w-full overflow-hidden rounded-xl border border-line bg-surface">
        <SplatArt seed={pub.id} label={pub.venueShort} />
      </div>
    );
  }

  return (
    <>
      {/* Paper figures are drawn for white backgrounds, so they keep one in dark mode too. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge figure: ${pub.title}`}
        className="group relative block aspect-[12/5] w-full overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-[0_12px_30px_-18px_rgba(23,24,28,0.45)]"
      >
        <Image
          src={pub.image}
          alt={`Figure from ${pub.title}`}
          fill
          sizes="(min-width: 1024px) 26rem, 100vw"
          className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <LuMaximize2 size={13} />
        </span>
      </button>
      {open && <Lightbox src={pub.image} caption={pub.title} onClose={() => setOpen(false)} />}
    </>
  );
}

// Full-size figure viewer: closes on Escape, the close button, or a click outside the image.
function Lightbox({ src, caption, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black/80 p-4 backdrop-blur-sm sm:p-10"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <LuX size={22} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Figure from ${caption}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-full rounded-xl bg-white object-contain p-2 shadow-2xl sm:p-4"
      />
      <p className="max-w-3xl text-balance text-center font-serif text-lg text-white/85">{caption}</p>
    </div>
  );
}

// Decorative "Gaussian splat" thumbnail for papers without a teaser image.
function SplatArt({ seed, label }) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const palette = ["#2547c5", "#5b7cfa", "#9db2ff", "#c4622d", "#f0a36b", "#8a8f98"];
  const splats = Array.from({ length: 22 }, () => ({
    cx: 10 + rand() * 140,
    cy: 8 + rand() * 84,
    rx: 6 + rand() * 26,
    ry: 3 + rand() * 12,
    rot: rand() * 180,
    fill: palette[Math.floor(rand() * palette.length)],
    o: 0.18 + rand() * 0.4,
  }));
  const filterId = `blur-${seed}`;

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-soft via-surface to-warm/10">
      <svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`}>
          {splats.map((s, i) => (
            <ellipse
              key={i}
              cx={s.cx}
              cy={s.cy}
              rx={s.rx}
              ry={s.ry}
              fill={s.fill}
              opacity={s.o}
              transform={`rotate(${s.rot} ${s.cx} ${s.cy})`}
            />
          ))}
        </g>
      </svg>
      <span className="absolute bottom-2 left-2 rounded bg-surface/85 px-1.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-ink/70 backdrop-blur">
        {label}
      </span>
    </div>
  );
}
