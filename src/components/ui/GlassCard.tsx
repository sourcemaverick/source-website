interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div className={`glass-card ${hover ? "" : "pointer-events-none"} p-8 sm:p-10 ${className}`}>
      {children}
    </div>
  );
}
