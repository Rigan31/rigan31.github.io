/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        faint: token("faint"),
        line: token("line"),
        accent: token("accent"),
        "accent-soft": token("accent-soft"),
        warm: token("warm"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--ink) / 0.86)",
            "--tw-prose-headings": "rgb(var(--ink))",
            "--tw-prose-links": "rgb(var(--accent))",
            "--tw-prose-bold": "rgb(var(--ink))",
            "--tw-prose-quotes": "rgb(var(--muted))",
            "--tw-prose-quote-borders": "rgb(var(--accent) / 0.4)",
            "--tw-prose-code": "rgb(var(--ink))",
            "--tw-prose-hr": "rgb(var(--line))",
            "--tw-prose-th-borders": "rgb(var(--line))",
            "--tw-prose-td-borders": "rgb(var(--line))",
            "--tw-prose-bullets": "rgb(var(--faint))",
            "--tw-prose-counters": "rgb(var(--faint))",
            "--tw-prose-captions": "rgb(var(--faint))",
            "--tw-prose-pre-bg": "rgb(var(--code-bg))",
            "--tw-prose-pre-code": "rgb(var(--ink))",
            "h1, h2, h3, h4": {
              fontFamily: theme("fontFamily.serif").join(", "),
              fontWeight: "500",
              letterSpacing: "-0.01em",
            },
            a: {
              textDecoration: "underline",
              textDecorationColor: "rgb(var(--accent) / 0.35)",
              textUnderlineOffset: "3px",
              fontWeight: "500",
            },
            "a:hover": { textDecorationColor: "rgb(var(--accent))" },
            code: {
              fontWeight: "500",
              backgroundColor: "rgb(var(--code-bg))",
              borderRadius: "0.3rem",
              padding: "0.15rem 0.35rem",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            pre: {
              border: "1px solid rgb(var(--line))",
              borderRadius: "0.6rem",
            },
            "pre code": { backgroundColor: "transparent", padding: "0" },
            blockquote: { fontStyle: "normal", fontWeight: "400" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            img: { borderRadius: "0.6rem" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
