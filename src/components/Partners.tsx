type Partner = {
  name: string;
  href: string;
  /** Image badge: external CDN URL or a local /public path. */
  img?: string;
  /** Text lockup (used when no official badge image is available). */
  label?: string;
  sublabel?: string;
};

// Cloud / grant partners. To swap Google's text lockup for the official badge,
// drop the asset in public/partners/ (e.g. "/partners/google-for-startups-cloud.png")
// and replace this entry's `label`/`sublabel` with `img`.
const PARTNERS: Partner[] = [
  {
    name: "ElevenLabs Grants",
    href: "https://elevenlabs.io/startup-grants",
    img: "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp",
  },
  {
    name: "Google for Startups Cloud Program",
    href: "https://cloud.google.com/startup",
    label: "Google for Startups",
    sublabel: "Cloud Program",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative z-10 px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <span className="label mb-10 block tracking-[0.25em] text-[var(--text-muted)]">
          Backed by
        </span>
        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-10">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              // Identical fixed box for every partner so all badges are the same size.
              className="flex h-16 w-40 sm:h-20 sm:w-56 items-center justify-center rounded-2xl border border-[var(--border)] px-4 opacity-80 transition-all duration-300 hover:opacity-100 hover:border-[var(--border-hover)]"
            >
              {p.img ? (
                // eslint-disable-next-line @next/next/no-img-element -- partner badges are served from external CDNs
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-[60%] max-w-full object-contain"
                />
              ) : (
                <span className="flex flex-col items-center justify-center text-center leading-none">
                  <span className="text-sm sm:text-lg font-light tracking-[-0.01em]">
                    {p.label}
                  </span>
                  {p.sublabel && (
                    <span className="mt-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                      {p.sublabel}
                    </span>
                  )}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
