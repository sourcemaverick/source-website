interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
}

export default function Badge({ children, pulse }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border border-[rgba(224,90,138,0.2)]">
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
        </span>
      )}
      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
        {children}
      </span>
    </span>
  );
}
