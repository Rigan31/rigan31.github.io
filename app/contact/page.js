import { LuGraduationCap, LuMail, LuMapPin } from "react-icons/lu";
import ContactForm from "@/components/ContactForm";
import CopyButton from "@/components/CopyButton";
import PageHeader from "@/components/PageHeader";
import { SOCIALS } from "@/components/SocialLinks";
import profile from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function Contact() {
  return (
    <div className="container-page pb-24 pt-12 lg:pt-16">
      <PageHeader eyebrow="Say hello" title="Get in touch">
        <p>
          I&apos;m always happy to talk about research, potential collaborations, or anything around AI security
          and 3D vision.
        </p>
      </PageHeader>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="space-y-3">
          <EmailCard icon={LuGraduationCap} label="Academic email" email={profile.emails.academic} />
          <EmailCard icon={LuMail} label="Personal email" email={profile.emails.personal} />
          <div className="card flex items-center gap-4 p-5">
            <IconTile icon={LuMapPin} />
            <div className="min-w-0">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-faint">Location</p>
              <p className="text-ink">
                {profile.lab}, {profile.affiliation}
              </p>
              <p className="text-sm text-muted">{profile.location}, USA</p>
            </div>
          </div>

          <div className="pt-6">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-faint">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.map(({ key, label, href, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="text-base" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function IconTile({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
      <Icon size={19} />
    </span>
  );
}

function EmailCard({ icon, label, email }) {
  return (
    <div className="card group flex items-center gap-4 p-5 transition-colors hover:border-accent/30">
      <IconTile icon={icon} />
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-faint">{label}</p>
        <a href={`mailto:${email}`} className="block truncate text-ink transition-colors hover:text-accent">
          {email}
        </a>
      </div>
      <CopyButton value={email} label="Copy email" />
    </div>
  );
}
