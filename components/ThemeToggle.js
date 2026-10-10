"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

// The initial theme is applied by the inline script in app/layout.js; this button flips it
// and remembers the choice. Without a saved choice the site follows the system setting.
export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.dataset.theme === "dark" ? "dark" : "light");

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      let saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* storage unavailable */
      }
      if (saved) return;
      const next = e.matches ? "dark" : "light";
      root.dataset.theme = next;
      setTheme(next);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink ${className}`}
    >
      {theme === null ? (
        <span className="h-[18px] w-[18px]" />
      ) : theme === "dark" ? (
        <LuSun size={18} />
      ) : (
        <LuMoon size={18} />
      )}
    </button>
  );
}
