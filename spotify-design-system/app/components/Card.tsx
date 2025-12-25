export default function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-surface p-5 shadow-soft border border-border/40 shadow-soft transition hover:-translate-y-0.5 hover:border-accent">
      <div className="mb-3">
        <div className="text-base font-semibold">{title}</div>
        {subtitle ? <div className="text-sm text-muted">{subtitle}</div> : null}
      </div>
      {children}
    </div>
  );
}
