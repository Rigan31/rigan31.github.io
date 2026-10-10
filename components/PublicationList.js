"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LuArrowUpRight, LuCode, LuFileText, LuGlobe, LuPresentation, LuVideo } from "react-icons/lu";
import { SiArxiv } from "react-icons/si";

const TYPE_STYLE = {
  conference: { label: "Conference", badge: "bg-accent text-white" },
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
    <article id={pub.id} className="grid scroll-mt-24 gap-5 py-7 first:pt-1 sm:grid-cols-[12rem_1fr] sm:gap-7">
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
  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-line bg-surface sm:aspect-[16/10]">
      {pub.image ? (
        <Image src={pub.image} alt="" fill sizes="(min-width: 640px) 12rem, 100vw" className="object-contain p-2" />
      ) : (
        <SplatArt seed={pub.id} label={pub.venueShort} />
      )}
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
  const palette = ["#2547c5", "#5b7cfa", "#9db2ff", "#c4622d", "#f0a36b", "#17181c"];
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
    <div className="absolute inset-0 bg-gradient-to-br from-accent-soft via-surface to-[#fbefe6]">
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
