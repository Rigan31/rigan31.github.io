"use client";

import { useState } from "react";
import {
  LuAward,
  LuBriefcase,
  LuBuilding2,
  LuChevronDown,
  LuFileText,
  LuGraduationCap,
  LuUsers,
} from "react-icons/lu";
import RichText from "./RichText";

const TYPES = {
  paper: { Icon: LuFileText, tint: "bg-accent/10 text-accent", label: "Paper" },
  position: { Icon: LuBriefcase, tint: "bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400", label: "Position" },
  career: { Icon: LuBuilding2, tint: "bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400", label: "Career" },
  award: { Icon: LuAward, tint: "bg-amber-500/15 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400", label: "Award" },
  milestone: { Icon: LuGraduationCap, tint: "bg-violet-600/10 text-violet-700 dark:bg-violet-400/10 dark:text-violet-400", label: "Milestone" },
  service: { Icon: LuUsers, tint: "bg-sky-600/10 text-sky-700 dark:bg-sky-400/10 dark:text-sky-400", label: "Service" },
};

export default function NewsList({ items, initial = 6 }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, initial);

  return (
    <div>
      <ol className="relative">
        <span aria-hidden className="absolute bottom-3 left-[calc(8rem-0.5px)] top-3 hidden w-px bg-line sm:block" />
        {shown.map((item, i) => {
          const { Icon, tint, label } = TYPES[item.type] ?? TYPES.milestone;
          return (
            <li key={i} className="relative grid grid-cols-1 gap-1 py-3 sm:grid-cols-[6rem_1fr] sm:gap-5">
              <time className="pt-1 font-mono text-[0.72rem] uppercase tracking-wider text-faint sm:text-right">
                {item.date}
              </time>
              <div className="flex gap-3.5">
                <span className="relative mt-0.5 shrink-0 rounded-md bg-paper ring-4 ring-paper" title={label}>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md ${tint}`}>
                    <Icon size={13} />
                  </span>
                </span>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <RichText text={item.text} />
                  {i === 0 && (
                    <span className="ml-2 inline-flex -translate-y-px rounded-full bg-warm/10 px-2 py-px align-middle font-mono text-[0.62rem] font-medium uppercase tracking-wider text-warm">
                      New
                    </span>
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      {items.length > initial && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-ink sm:ml-[7.25rem]"
        >
          {expanded ? "Show fewer" : `Show all ${items.length} updates`}
          <LuChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
