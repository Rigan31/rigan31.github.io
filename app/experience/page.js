import { LuAward, LuFileDown, LuMapPin, LuTrophy } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import RichText from "@/components/RichText";
import SectionHeading from "@/components/SectionHeading";
import profile from "@/data/profile";
import { awards, industry, research, service } from "@/data/experience";

export const metadata = {
  title: "Experience",
  description: `Industry and research experience of ${profile.name}.`,
};

export default function Experience() {
  return (
    <div className="container-page pb-24 pt-12 lg:pt-16">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        aside={
          <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-secondary">
            <LuFileDown />
            Full CV
          </a>
        }
      />

      <section className="mt-12">
        <SectionHeading eyebrow="Industry" title="Industry experience" />
        <div className="space-y-5">
          {industry.map((p) => (
            <PositionCard key={p.role + p.period} position={p} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Research" title="Research experience" />
        <div className="space-y-5">
          {research.map((p) => (
            <PositionCard key={p.role + p.period} position={p} />
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-14 border-t border-line pt-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <section>
          <SectionHeading eyebrow="Community" title="Teaching & academic service" />
          <ul className="space-y-3">
            {service.map((s) => (
              <li key={s.role + s.detail} className="card flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-medium text-ink">{s.role}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{s.detail}</p>
                </div>
                <span className="shrink-0 whitespace-nowrap font-mono text-xs text-faint">{s.year}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Recognition" title="Honors & awards" />
          <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {awards.map((a) => (
              <li key={a.title} className="flex items-start gap-4 px-5 py-4">
                <LuAward className="mt-0.5 shrink-0 text-amber-600" size={18} />
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-snug text-ink">{a.title}</p>
                  {(a.org || a.note) && (
                    <p className="mt-0.5 text-sm text-faint">{[a.org, a.note].filter(Boolean).join(" · ")}</p>
                  )}
                </div>
                <span className="shrink-0 whitespace-nowrap font-mono text-xs text-faint">{a.year}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function PositionCard({ position: p }) {
  return (
    <article className="card p-5 transition-shadow duration-300 hover:shadow-[0_14px_36px_-24px_rgba(23,24,28,0.4)] sm:p-8">
      <header className="flex gap-4 sm:gap-5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-[0.62rem] font-semibold tracking-wider text-white"
          style={{ backgroundColor: p.org.color }}
        >
          {p.org.mark}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-serif text-[1.45rem] font-medium leading-snug text-ink">
              {p.role}
              {p.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 px-2 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-wider text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                  Current
                </span>
              )}
            </h3>
            <span className="shrink-0 font-mono text-[0.75rem] text-ink/70">{p.period}</span>
          </div>
          <div className="mt-0.5 flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
            {p.org.url ? (
              <a href={p.org.url} target="_blank" rel="noreferrer" className="link-underline w-fit font-medium text-accent">
                {p.org.name}
              </a>
            ) : (
              <span className="font-medium text-accent">{p.org.name}</span>
            )}
            <span className="inline-flex shrink-0 items-center gap-1 text-xs text-faint">
              <LuMapPin /> {p.location}
            </span>
          </div>
        </div>
      </header>

      <div className="sm:pl-[4.25rem]">
        <ul className="mt-5 space-y-2.5">
          {p.points.map((pt) => (
            <li key={pt} className="relative pl-5 text-[0.95rem] leading-relaxed text-muted">
              <span aria-hidden className="absolute left-1 top-[0.68em] h-1.5 w-1.5 rounded-full bg-accent/50" />
              <RichText text={pt} />
            </li>
          ))}
        </ul>

        {p.highlights?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-800"
              >
                <LuTrophy /> {h}
              </span>
            ))}
          </div>
        )}

        {p.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
            {p.tags.map((t) => (
              <span key={t} className="tag font-mono text-[0.7rem]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
