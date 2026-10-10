export default function SectionHeading({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`mb-7 ${className}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {children && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{children}</p>}
    </div>
  );
}
