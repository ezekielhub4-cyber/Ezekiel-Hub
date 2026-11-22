import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

const NAV_LINKS = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#064B32]/95 backdrop-blur-md border-b border-[#C5A04A]/20 shadow-sm'
          : 'bg-gradient-to-b from-[#062418]/75 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single-line Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#F8F6EA] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A04A]"
        >
          {weddingConfig.brand.title}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-[#F8F6EA]/85 hover:text-[#DEC17A] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A04A]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A04A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F8F6EA] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#064B32] transition-colors hover:bg-[#DEC17A] hover:text-[#062418] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A]"
          >
            RSVP
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center rounded-full p-2 text-[#F8F6EA] hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] focus-visible:outline-2 focus-visible:outline-[#C5A04A]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C5A04A]/20 bg-[#064B32] px-6 py-5">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium uppercase tracking-[0.18em] text-[#F8F6EA]/90 hover:text-[#DEC17A] border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F8F6EA] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#064B32]"
            >
              RSVP Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
