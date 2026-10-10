import Link from "next/link";

// Renders a tiny Markdown subset used in the data files: **bold**, *italic*, [text](url).
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

export default function RichText({ text }) {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:/.test(href);
      return (
        <Link
          key={i}
          href={href}
          className="link-underline font-medium text-accent"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {label}
        </Link>
      );
    }
    return part;
  });
}
