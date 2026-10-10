"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import profile from "@/data/profile";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: profile.cv, label: "Resume", external: true },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname, href) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/85 shadow-[inset_0_-1px_0_rgb(var(--line))] backdrop-blur-md" : "bg-paper/0"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-[1.2rem] font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <NavLink item={item} active={!item.external && isActive(pathname, item.href)} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-full p-2 text-ink transition-colors hover:bg-ink/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line md:hidden">
          <ul className="container-page flex flex-col py-3">
            {NAV.map((item) => {
              const active = !item.external && isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Anchor
                    item={item}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-2 py-3 text-base ${
                      active ? "font-medium text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {item.external && <LuArrowUpRight className="text-faint" />}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, active }) {
  return (
    <Anchor
      item={item}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-flex items-center gap-0.5 rounded-full px-3 py-1.5 text-[0.9rem] transition-colors ${
        active ? "text-ink" : "text-muted hover:text-ink"
      }`}
    >
      {item.label}
      {item.external && (
        <LuArrowUpRight className="text-[0.8rem] opacity-60 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
      )}
      <span
        className={`absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-ink/30"
        }`}
      />
    </Anchor>
  );
}

// Static files (the CV PDF) need a plain <a> so Next doesn't try to prefetch them as routes.
function Anchor({ item, ...props }) {
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" {...props} />
  ) : (
    <Link href={item.href} {...props} />
  );
}
