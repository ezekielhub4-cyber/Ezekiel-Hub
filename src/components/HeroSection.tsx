import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { BotanicalCorner } from './BotanicalOrnament';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isWeddingDayOrPast: boolean;
}

function getTimeRemaining(targetIso: string): TimeRemaining {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isWeddingDayOrPast: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isWeddingDayOrPast: false,
  };
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const [countdown, setCountdown] = useState<TimeRemaining>(() =>
    getTimeRemaining(weddingConfig.brand.weddingIsoDate),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getTimeRemaining(weddingConfig.brand.weddingIsoDate));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hasHeroPhoto = Boolean(weddingConfig.photos.hero);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden hero-emerald-backdrop px-6 pt-28 pb-16 text-center text-[#F8F6EA]"
    >
      {/* Supplied Couple Hero Photograph (renders seamlessly when supplied in weddingConfig.photos.hero) */}
      {hasHeroPhoto && (
        <img
          src={weddingConfig.photos.hero ?? undefined}
          alt={`${weddingConfig.brand.brideName} and ${weddingConfig.brand.groomName}`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      )}

      {/* Measured Dark Emerald Overlay Scrim for guaranteed readable typography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#062418]/75 via-[#064B32]/68 to-[#062418]/88"
      />

      {/* Subtle Botanical Gold Linework Corners */}
      <BotanicalCorner className="pointer-events-none absolute top-16 left-4 h-36 w-36 text-[#C5A04A]/40 sm:left-10 sm:h-48 sm:w-48" />
      <BotanicalCorner className="pointer-events-none absolute bottom-10 right-4 h-36 w-36 rotate-180 text-[#C5A04A]/40 sm:right-10 sm:h-48 sm:w-48" />

      {/* Center Editorial Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="font-serif text-base sm:text-lg tracking-[0.28em] uppercase text-[#DEC17A] mb-3">
          {weddingConfig.brand.title}
        </p>

        {/* Main Display Couple Names */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.25rem] font-semibold leading-[1.04] tracking-tight text-[#F8F6EA] text-balance">
          <span>{weddingConfig.brand.brideName}</span>
          <span className="mx-3 sm:mx-4 font-normal italic text-[#C5A04A]">&amp;</span>
          <span>{weddingConfig.brand.groomName}</span>
        </h1>

        {/* Wedding Date */}
        <p className="mt-5 font-serif text-xl sm:text-2xl italic tracking-wide text-[#F8F6EA]/95">
          {weddingConfig.brand.weddingDateDisplay}
        </p>

        {/* Tagline */}
        <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.24em] text-[#DEC17A]/90">
          {weddingConfig.brand.tagline}
        </p>

        {/* Live Countdown Timer */}
        <div
          aria-label="Countdown to the wedding"
          className="mt-8 w-full max-w-xl border-y border-[#C5A04A]/30 py-4 px-2"
        >
          {countdown.isWeddingDayOrPast ? (
            <p className="font-serif text-lg sm:text-xl italic text-[#DEC17A]">
              Today We Celebrate Forever Together
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-4xl font-semibold text-[#F8F6EA] tabular-nums leading-none">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#DEC17A]/85">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sub-headline matching reference screenshot */}
        <p className="mt-7 font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#F8F6EA] text-balance">
          We&apos;re Getting Married
        </p>

        {/* Scroll Anchor */}
        <a
          href="#welcome"
          className="mt-5 inline-flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-[#F8F6EA]/75 hover:text-[#DEC17A] transition-colors"
        >
          <span>Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </a>

        {/* Primary & Secondary Hero Buttons matching reference screenshot */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#rsvp"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#F8F6EA] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#064B32] shadow-lg transition-colors hover:bg-[#DEC17A] hover:text-[#062418] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A]"
          >
            RSVP Now
          </a>
          <button
            type="button"
            onClick={onOpenInvitation}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#C5A04A]/70 bg-[#062418]/70 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F6EA] backdrop-blur-sm transition-colors hover:border-[#DEC17A] hover:bg-[#173B2B] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A]"
          >
            Invitation
          </button>
        </div>
      </div>
    </section>
  );
}
