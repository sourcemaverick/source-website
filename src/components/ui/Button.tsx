interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-500 active:scale-[0.97]";

  const variants = {
    primary:
      "px-10 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] text-white hover:shadow-[0_0_50px_var(--accent-glow)] hover:brightness-110 btn-shine",
    secondary:
      "px-10 py-4 border border-[var(--border)] font-light text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-white hover:bg-[rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_var(--accent-glow)]",
    ghost:
      "px-6 py-3 font-light text-[var(--text-secondary)] hover:text-white",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
