import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

// Simple SVGs for TikTok and X since lucide's may not exist / to keep thin-line consistency
const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12v6.5a2.5 2.5 0 1 1-2.5-2.5H9" />
    <path d="M15 3v3.5A4.5 4.5 0 0 0 19.5 11" />
    <path d="M15 3v12" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l16 16" />
    <path d="M20 4L4 20" />
  </svg>
);

const legalLinks = [
  { label: "Terms of Use", to: "/terms", testId: "footer-terms" },
  { label: "Privacy Policy", to: "/privacy", testId: "footer-privacy" },
  { label: "Support", to: "/support", testId: "footer-support" },
];

const socials = [
  { name: "Instagram", Icon: Instagram, href: "#", testId: "social-instagram" },
  { name: "TikTok", Icon: TikTokIcon, href: "#", testId: "social-tiktok" },
  { name: "YouTube", Icon: Youtube, href: "#", testId: "social-youtube" },
  { name: "X", Icon: XIcon, href: "#", testId: "social-x" },
];

export const SiteFooter = () => (
  <footer
    data-testid="site-footer"
    className="relative bg-[#050505] px-6 pb-14 pt-24 md:pb-16 md:pt-28"
  >
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-start gap-12 border-t border-white/10 pt-14 md:flex-row md:items-center md:justify-between md:gap-8">
        <Link to="/" className="flex items-baseline gap-2" data-testid="footer-brand">
          <span className="font-mystic text-xl font-medium tracking-wide text-white">
            The Source
          </span>
          <span className="font-ui text-[9px] uppercase tracking-[0.35em] text-white/35">
            Find Yourself
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {legalLinks.map((l, i) => (
            <span key={l.to} className="flex items-center gap-x-8">
              {i > 0 && <span className="text-white/15">·</span>}
              <Link
                to={l.to}
                data-testid={l.testId}
                className="nav-link font-ui text-[10px] uppercase tracking-[0.3em]"
              >
                {l.label}
              </Link>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ name, Icon, href, testId }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              data-testid={testId}
              className="text-white/50 transition-colors hover:text-[color:var(--gold)]"
            >
              <Icon className="h-5 w-5" strokeWidth={1.2} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-14 font-ui text-[10px] uppercase tracking-[0.3em] text-white/25">
        © 2026 Source. All rights reserved.
      </p>
    </div>
  </footer>
);
