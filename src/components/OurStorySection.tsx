import { weddingConfig } from '../config/weddingConfig';
import { GoldDivider } from './BotanicalOrnament';

function StoryPhotoFrame({
  src,
  alt,
  caption,
  badgeLabel,
  className = '',
}: {
  src: string | null;
  alt: string;
  caption: string;
  badgeLabel: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl bg-[#173B2B] shadow-xl ring-1 ring-[#C5A04A]/25 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-between botanical-emerald-surface p-6 text-center text-[#F8F6EA]">
          <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#C5A04A]/30" />
          <span className="relative z-10 text-[10px] uppercase tracking-[0.24em] text-[#DEC17A]/90">
            {badgeLabel}
          </span>
          <div className="relative z-10 my-auto flex flex-col items-center px-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
              className="mb-3 text-[#C5A04A]/80"
            >
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1" />
              <path
                d="M18 9C19.8 13.8 22.2 16.2 27 18C22.2 19.8 19.8 22.2 18 27C16.2 22.2 13.8 19.8 9 18C13.8 16.2 16.2 13.8 18 9Z"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <p className="font-serif text-xl sm:text-2xl italic text-[#F8F6EA]">
              {weddingConfig.brand.monogram}
            </p>
            <p className="mt-1.5 text-xs text-[#F8F6EA]/75 max-w-[14rem] leading-relaxed">
              {caption}
            </p>
          </div>
          <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] text-[#F8F6EA]/60">
            Couple Portrait
          </span>
        </div>
      )}
    </figure>
  );
}

export function OurStorySection() {
  const { eyebrow, heading, paragraphs, closingQuote } = weddingConfig.ourStory;
  const { storyPrimary, storySecondary } = weddingConfig.photos;

  const firstParagraph = paragraphs[0] ?? '';
  const firstLetter = firstParagraph.charAt(0);
  const firstParagraphRest = firstParagraph.slice(1);

  return (
    <section id="story" className="bg-[#FDFCF7] py-20 sm:py-28 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: Overlapping Dual Photograph Composition */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md pb-24 sm:pb-32 pr-4 sm:pr-6">
            {/* Primary Back Photo */}
            <StoryPhotoFrame
              src={storyPrimary.src}
              alt={storyPrimary.alt}
              caption={storyPrimary.caption}
              badgeLabel="NYSC · Osun State"
              className="aspect-[3/4] w-[74%]"
            />

            {/* Secondary Overlapping Foreground Photo */}
            <div className="absolute bottom-0 right-0 w-[54%] rounded-2xl bg-[#FDFCF7] p-2 shadow-2xl">
              <StoryPhotoFrame
                src={storySecondary.src}
                alt={storySecondary.alt}
                caption={storySecondary.caption}
                badgeLabel="DEstined '26"
                className="aspect-[3/4] w-full"
              />
            </div>
          </div>
        </div>

        {/* Right: Exact Story — A Divine Arrangement */}
        <div className="lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-medium leading-tight text-[#064B32] text-balance">
            {heading}
          </h2>

          <div className="mt-5 mb-7 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-14 bg-[#C5A04A]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A04A]" />
            <span className="h-px w-24 bg-[#C5A04A]/35" />
          </div>

          <div className="space-y-5 text-[15px] sm:text-base leading-[1.8] text-[#173B2B]/90">
            {/* Opening paragraph with editorial serif drop-cap */}
            <p>
              <span className="float-left mr-3 mt-1 font-serif text-5xl sm:text-6xl font-semibold leading-[0.82] text-[#064B32]">
                {firstLetter}
              </span>
              {firstParagraphRest}
            </p>

            {/* Remaining paragraphs verbatim */}
            {paragraphs.slice(1).map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  paragraph === 'Then came one fateful evening.'
                    ? 'font-serif text-xl italic font-medium text-[#064B32] pt-1'
                    : paragraph === 'Our meeting was not by chance. It was by divine arrangement.'
                      ? 'font-medium text-[#064B32]'
                      : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Subtle Gold Divider & Closing Quotation */}
          <div className="mt-10 border-t border-[#C5A04A]/30 pt-6">
            <GoldDivider className="justify-start mb-4" />
            <blockquote className="font-serif text-xl sm:text-2xl italic font-medium text-[#064B32]">
              {closingQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
