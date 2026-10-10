"use client";

import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

export default function CopyButton({ value, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `${label} ${value}`}
      title={copied ? "Copied!" : label}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
        copied ? "border-emerald-600/30 text-emerald-700" : "border-line text-faint hover:border-accent/40 hover:text-accent"
      }`}
    >
      {copied ? <LuCheck size={15} /> : <LuCopy size={15} />}
    </button>
  );
}
