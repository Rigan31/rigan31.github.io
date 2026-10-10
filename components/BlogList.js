"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { formatDate } from "@/lib/format";

export default function BlogList({ posts }) {
  const [tag, setTag] = useState(null);
  const tags = useMemo(() => [...new Set(posts.flatMap((p) => p.tags))].sort(), [posts]);
  const shown = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  return (
    <div>
      {tags.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <TagButton active={!tag} onClick={() => setTag(null)}>
            All
          </TagButton>
          {tags.map((t) => (
            <TagButton key={t} active={tag === t} onClick={() => setTag(t)}>
              #{t}
            </TagButton>
          ))}
        </div>
      )}

      <ul className="border-b border-line">
        {shown.map((post) => (
          <li key={post.slug} className="border-t border-line">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-2 py-8 sm:grid-cols-[10rem_1fr_auto] sm:gap-8"
            >
              <time dateTime={post.date} className="pt-1.5 font-mono text-[0.74rem] uppercase tracking-wider text-faint">
                {formatDate(post.date, "short")}
              </time>
              <div className="min-w-0">
                <h2 className="font-serif text-[1.6rem] font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                  {post.title}
                  {post.draft && (
                    <span className="ml-3 rounded bg-warm/10 px-1.5 py-0.5 align-middle font-mono text-[0.6rem] uppercase tracking-wider text-warm">
                      Draft
                    </span>
                  )}
                </h2>
                {post.description && <p className="mt-2 leading-relaxed text-muted">{post.description}</p>}
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
                  <span>{post.readingTime} min read</span>
                  {post.tags.map((t) => (
                    <span key={t} className="font-mono">
                      #{t}
                    </span>
                  ))}
                </p>
              </div>
              <LuArrowRight className="mt-2 hidden text-faint transition-all group-hover:translate-x-1 group-hover:text-accent sm:block" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TagButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1 font-mono text-[0.72rem] transition-colors ${
        active ? "border-ink bg-ink text-paper" : "border-line bg-surface text-muted hover:border-ink/30 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
