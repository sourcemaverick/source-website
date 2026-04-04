interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export default function Section({ id, children, className = "", wide }: SectionProps) {
  return (
    <section id={id} className={`relative z-10 py-24 sm:py-32 px-6 ${className}`}>
      <div className={`${wide ? "max-w-7xl" : "max-w-6xl"} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
