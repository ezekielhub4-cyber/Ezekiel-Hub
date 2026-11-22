import { weddingConfig } from '../config/weddingConfig';
import { GoldDivider } from './BotanicalOrnament';

export function UnionOfGraceSection() {
  const { eyebrow, title, leftColumn, rightColumn, toast } = weddingConfig.unionOfGrace;

  return (
    <section
      id="welcome"
      className="bg-[#F8F6EA] py-20 sm:py-24 px-6 border-b border-[#C5A04A]/20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#064B32] tracking-tight text-balance">
          {title}
        </h2>

        <GoldDivider className="mt-6 mb-12" />

        {/* Two-Column Christian Wedding Blessing */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-center">
          {/* Center vertical hairline on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[#C5A04A]/25"
          />

          <div className="space-y-6">
            {leftColumn.map((stanza, index) => (
              <p
                key={`left-${index}`}
                className="font-serif text-lg sm:text-[1.18rem] italic leading-relaxed text-[#173B2B]/90"
              >
                {stanza.lines.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            {rightColumn.map((stanza, index) => (
              <p
                key={`right-${index}`}
                className={`font-serif text-lg sm:text-[1.18rem] leading-relaxed ${
                  stanza.emphasis
                    ? 'font-semibold text-[#064B32] not-italic'
                    : 'italic text-[#173B2B]/90'
                }`}
              >
                {stanza.lines.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        {/* Official Invitation Toast */}
        <div className="mx-auto mt-12 max-w-2xl border-t border-[#C5A04A]/25 pt-8">
          <p className="font-serif text-base sm:text-lg italic leading-relaxed text-[#173B2B]/80">
            {toast}
          </p>
        </div>
      </div>
    </section>
  );
}
