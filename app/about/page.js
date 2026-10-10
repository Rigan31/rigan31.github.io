import Image from "next/image";
import {
  LuArrowUpRight,
  LuAudioLines,
  LuGraduationCap,
  LuMail,
  LuMapPin,
  LuScanEye,
  LuSmartphone,
} from "react-icons/lu";
import { TbCube3dSphere } from "react-icons/tb";
import NewsList from "@/components/NewsList";
import SectionHeading from "@/components/SectionHeading";
import { SOCIALS } from "@/components/SocialLinks";
import profile from "@/data/profile";
import news from "@/data/news";
import { researchAreas, researchIntro } from "@/data/research";
import { affiliations } from "@/data/experience";
import portrait from "@/public/cropped_rigan.jpg";

export const metadata = { title: "About" };

const AREA_ICONS = { cube: TbCube3dSphere, eye: LuScanEye, audio: LuAudioLines, phone: LuSmartphone };

export default function About() {
  return (
    <div className="container-page pb-24 pt-10 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[17.5rem_1fr] lg:gap-20">
        <aside className="rise lg:sticky lg:top-24 lg:self-start">
          <ProfileCard />
        </aside>

        <div className="min-w-0 space-y-20">
          <section id="news" className="rise" style={{ animationDelay: "80ms" }}>
            <SectionHeading eyebrow="Recent updates" title="News" />
            <NewsList items={news} />
          </section>

          <section id="research">
            <SectionHeading eyebrow="What I work on" title="Research focus">
              {researchIntro}
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {researchAreas.map((area) => {
                const Icon = AREA_ICONS[area.icon] ?? TbCube3dSphere;
                return (
                  <article
                    key={area.title}
                    className="card group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_-18px_rgba(37,71,197,0.45)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white dark:group-hover:text-paper">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-serif text-[1.3rem] font-medium leading-snug text-ink">{area.title}</h3>
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">{area.text}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {area.keywords.map((k) => (
                        <span key={k} className="tag">
                          {k}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="affiliations">
            <SectionHeading eyebrow="Where I've been" title="Affiliations" />
            <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {affiliations.map((a) => (
                <li key={a.name}>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex gap-4 p-5 transition-colors hover:bg-paper sm:items-center sm:gap-5 sm:p-6"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-[0.68rem] font-semibold tracking-wider text-white"
                      style={{ backgroundColor: a.color }}
                    >
                      {a.mark}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-medium text-ink">
                          {a.name}
                          <LuArrowUpRight className="ml-1 inline text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                        </h3>
                        <span className="shrink-0 font-mono text-xs text-faint">{a.period}</span>
                      </div>
                      <p className="mt-0.5 text-[0.93rem] text-ink/80">{a.role}</p>
                      {a.detail && <p className="mt-0.5 text-sm text-faint">{a.detail}</p>}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div>
      <div className="flex items-center gap-5 lg:block">
        <div className="relative w-28 shrink-0 sm:w-36 lg:w-full">
          <Image
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            priority
            className="aspect-square w-full rounded-xl object-cover shadow-[0_18px_40px_-22px_rgba(23,24,28,0.6)]"
          />
        </div>
        <div className="lg:mt-6">
          <h1 className="font-serif text-[1.65rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-[1.9rem]">
            {profile.name}
          </h1>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {profile.directions.map((d) => (
              <li key={d} className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-7 space-y-3.5 border-t border-line pt-6 text-[0.9rem]">
        <InfoRow icon={LuMail} label="Academic">
          <a href={`mailto:${profile.emails.academic}`} className="link-underline break-all text-ink">
            {profile.emails.academic}
          </a>
        </InfoRow>
        <InfoRow icon={LuMail} label="Personal">
          <a href={`mailto:${profile.emails.personal}`} className="link-underline break-all text-ink">
            {profile.emails.personal}
          </a>
        </InfoRow>
        <InfoRow icon={LuGraduationCap}>
          <span className="text-ink">
            {profile.role} @ {profile.affiliation}
          </span>
        </InfoRow>
        <InfoRow icon={LuMapPin}>
          <span className="text-ink">{profile.location}</span>
        </InfoRow>
      </ul>

      <ul className="mt-6 space-y-1 border-t border-line pt-5">
        {SOCIALS.map(({ key, label, href, Icon }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-1.5 text-[0.9rem] text-ink transition-colors hover:bg-ink/[0.04] hover:text-accent"
            >
              <Icon className="shrink-0 text-faint transition-colors group-hover:text-accent" size={16} />
              {label}
              <LuArrowUpRight className="ml-auto text-faint opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-3">
      <Icon className="mt-[0.2rem] shrink-0 text-faint" size={16} />
      <div className="min-w-0">
        {label && <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint">{label}</p>}
        {children}
      </div>
    </li>
  );
}
