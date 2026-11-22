import { useState } from 'react';
import { Calendar, Check, Church, Clock, Copy, ExternalLink, MapPin, Users } from 'lucide-react';
import { weddingConfig, type WeddingEvent } from '../config/weddingConfig';
import { BotanicalCorner } from './BotanicalOrnament';

function EventCard({ event }: { event: WeddingEvent }) {
  const [copied, setCopied] = useState(false);
  const isLight = event.variant === 'light';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(event.venue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article
      className={`relative flex flex-col items-center justify-between rounded-xl p-8 sm:p-10 text-center transition-transform duration-200 ${
        isLight
          ? 'bg-[#F8F6EA] text-[#173B2B] shadow-xl'
          : 'bg-[#173B2B]/85 text-[#F8F6EA] border border-[#C5A04A]/40 shadow-xl'
      }`}
    >
      {/* Top Event Icon */}
      <div className="flex flex-col items-center">
        <div
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full border ${
            isLight
              ? 'border-[#C5A04A]/50 bg-[#064B32]/8 text-[#064B32]'
              : 'border-[#C5A04A]/50 bg-[#064B32]/60 text-[#DEC17A]'
          }`}
        >
          {event.id === 'engagement' ? (
            <Users className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Church className="h-5 w-5" aria-hidden="true" />
          )}
        </div>

        <h3
          className={`font-serif text-3xl sm:text-4xl font-semibold ${
            isLight ? 'text-[#064B32]' : 'text-[#F8F6EA]'
          }`}
        >
          {event.title}
        </h3>

        {/* Date & Time */}
        <div className="mt-4 flex flex-col items-center gap-1.5 text-xs sm:text-sm">
          <p
            className={`inline-flex items-center gap-2 font-medium uppercase tracking-[0.16em] ${
              isLight ? 'text-[#C5A04A]' : 'text-[#DEC17A]'
            }`}
          >
            <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{event.date}</span>
          </p>
          <p
            className={`inline-flex items-center gap-2 font-medium ${
              isLight ? 'text-[#173B2B]' : 'text-[#F8F6EA]/90'
            }`}
          >
            <Clock className="h-3.5 w-3.5 shrink-0 text-[#C5A04A]" aria-hidden="true" />
            <span>{event.time}</span>
          </p>
        </div>

        {/* Venue & Location */}
        <div className="mt-5 max-w-sm space-y-1.5">
          <p
            className={`text-sm sm:text-[15px] leading-relaxed ${
              isLight ? 'text-[#173B2B]/85' : 'text-[#F8F6EA]/85'
            }`}
          >
            {event.venue}
          </p>
          <p
            className={`inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.16em] ${
              isLight ? 'text-[#064B32]/70' : 'text-[#DEC17A]/80'
            }`}
          >
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{event.city}</span>
          </p>
        </div>
      </div>

      {/* Directions & Copy Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[42px] items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A] ${
            isLight
              ? 'bg-[#064B32] text-[#F8F6EA] hover:bg-[#173B2B]'
              : 'bg-[#F8F6EA] text-[#064B32] hover:bg-[#DEC17A] hover:text-[#062418]'
          }`}
        >
          <span>View Map</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={handleCopyAddress}
          className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A] ${
            isLight
              ? 'border-[#064B32]/25 text-[#064B32] hover:border-[#064B32] hover:bg-[#064B32]/5'
              : 'border-[#F8F6EA]/30 text-[#F8F6EA]/90 hover:border-[#DEC17A] hover:text-[#DEC17A]'
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#C5A04A]" aria-hidden="true" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Copy Address</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden botanical-emerald-surface py-20 sm:py-24 px-6 text-[#F8F6EA]"
    >
      <BotanicalCorner className="pointer-events-none absolute -top-6 -left-6 h-48 w-48 text-[#C5A04A]/25" />
      <BotanicalCorner className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 rotate-180 text-[#C5A04A]/25" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#DEC17A]">
            Celebrate With Us
          </p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-medium text-[#F8F6EA] text-balance">
            Wedding Events
          </h2>
          <p className="mt-3 text-sm text-[#F8F6EA]/75">
            {weddingConfig.brand.weddingDateDisplay} · {weddingConfig.brand.locationSummary}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-stretch">
          {weddingConfig.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
