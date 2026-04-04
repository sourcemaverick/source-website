interface SectionHeaderProps {
  label: string;
  heading: string;
  subhead?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  heading,
  subhead,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 sm:mb-20 ${
        align === "center" ? "text-center" : "max-w-3xl"
      }`}
    >
      <span className="label mb-5 block tracking-[0.25em]">{label}</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] leading-tight">
        {heading}
      </h2>
      {subhead && (
        <p className="mt-6 text-[var(--text-secondary)] font-light text-base sm:text-lg max-w-xl leading-relaxed mx-auto">
          {subhead}
        </p>
      )}
    </div>
  );
}
