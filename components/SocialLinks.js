import { FaGithub, FaGoogleScholar, FaLinkedinIn } from "react-icons/fa6";
import profile from "@/data/profile";

export const SOCIALS = [
  { key: "scholar", label: "Google Scholar", href: profile.links.scholar, Icon: FaGoogleScholar },
  { key: "github", label: "GitHub", href: profile.links.github, Icon: FaGithub },
  { key: "linkedin", label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedinIn },
];

// Row of round icon buttons.
export default function SocialLinks({ className = "", size = "md" }) {
  const box = size === "sm" ? "h-8 w-8 text-[0.95rem]" : "h-10 w-10 text-[1.05rem]";
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {SOCIALS.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className={`${box} flex items-center justify-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
