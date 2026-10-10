// Title block at the top of inner pages.
export default function PageHeader({ eyebrow, title, children, aside }) {
  return (
    <header className="rise flex flex-col gap-6 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="font-serif text-[2.6rem] font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.25rem]">
          {title}
        </h1>
        {children && <div className="mt-4 text-[1.05rem] leading-relaxed text-muted">{children}</div>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </header>
  );
}
