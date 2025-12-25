type Variant = "primary" | "secondary" | "ghost" | "danger";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed";

  const styles: Record<Variant, string> = {
    primary: "bg-accent text-black hover:brightness-95",
    secondary: "bg-accent2 text-white hover:brightness-110",
    ghost: "bg-transparent border border-border text-text hover:border-accent",
    danger: "bg-danger text-white hover:brightness-110",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
