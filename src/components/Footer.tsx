import { ArrowUp } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function Footer() {
  return (
    <footer className="bg-[#061A11] text-[#F8F6EA] px-6 py-12 border-t border-[#C5A04A]/20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center text-center md:text-left">
          {/* Left: Branding & Couple */}
          <div>
            <p className="font-serif text-2xl font-semibold tracking-wide text-[#F8F6EA]">
              {weddingConfig.brand.title}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#DEC17A]/85">
              {weddingConfig.brand.brideName} &amp; {weddingConfig.brand.groomName}
            </p>
          </div>

          {/* Center: Tagline & Date */}
          <div className="text-center">
            <p className="font-serif text-lg sm:text-xl italic text-[#DEC17A]">
              “{weddingConfig.brand.footerTagline}”
            </p>
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-[#F8F6EA]/60">
              {weddingConfig.brand.weddingDateShort} · Ibadan
            </p>
          </div>

          {/* Right: Back to Top */}
          <div className="flex justify-center md:justify-end">
            <a
              href="#top"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#C5A04A]/35 px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#F8F6EA]/85 hover:border-[#DEC17A] hover:text-[#DEC17A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-[0.18em] text-[#F8F6EA]/50">
          <p>
            © 2026 {weddingConfig.brand.title} · {weddingConfig.brand.brideShort} &amp;{' '}
            {weddingConfig.brand.groomShort}
          </p>
          <p>Solemnization of Holy Matrimony · {weddingConfig.brand.locationSummary}</p>
        </div>
      </div>
    </footer>
  );
}
