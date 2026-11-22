import { useState } from 'react';
import { Expand, MailOpen, Plus, Minus } from 'lucide-react';
import { weddingConfig, type GalleryPhoto } from '../config/weddingConfig';

interface GallerySectionProps {
  onSelectPhoto: (index: number) => void;
  onOpenInvitation: () => void;
}

function GalleryTile({
  photo,
  index,
  onClick,
}: {
  photo: GalleryPhoto;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#173B2B] text-left shadow-sm ring-1 ring-[#C5A04A]/20 transition-all duration-200 hover:shadow-xl hover:ring-[#C5A04A]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064B32]"
    >
      {photo.src ? (
        <>
          <img
            src={photo.src}
            alt={photo.alt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062418]/75 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-[#F8F6EA] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#DEC17A]">
              {photo.category}
            </p>
            <p className="mt-0.5 font-serif text-base leading-snug">{photo.caption}</p>
          </div>
        </>
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-between botanical-emerald-surface p-5 text-center text-[#F8F6EA]">
          <div className="pointer-events-none absolute inset-2.5 rounded-lg border border-[#C5A04A]/25 transition-colors group-hover:border-[#C5A04A]/55" />
          <span className="relative z-10 text-[10px] uppercase tracking-[0.22em] text-[#DEC17A]/85">
            {photo.category}
          </span>
          <div className="relative z-10 my-auto flex flex-col items-center px-2">
            <span className="font-serif text-3xl italic text-[#C5A04A]/90">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-2 font-serif text-lg leading-snug text-[#F8F6EA]/95">
              {photo.caption}
            </p>
          </div>
          <span className="relative z-10 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#F8F6EA]/65 group-hover:text-[#DEC17A]">
            <Expand className="h-3 w-3" aria-hidden="true" />
            <span>Preview</span>
          </span>
        </div>
      )}
    </button>
  );
}

export function GallerySection({ onSelectPhoto, onOpenInvitation }: GallerySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const photos = weddingConfig.gallery;
  const visiblePhotos = expanded ? photos : photos.slice(0, 4);

  return (
    <section id="gallery" className="bg-[#FDFCF7] py-20 sm:py-24 px-6 border-b border-[#C5A04A]/15">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
            Memories
          </p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-medium text-[#064B32]">
            Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#173B2B]/70">
            Moments from our journey — from NYSC in Osun State to forever.
          </p>
        </div>

        {/* 4-Column Responsive Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {visiblePhotos.map((photo, index) => (
            <GalleryTile
              key={photo.id}
              photo={photo}
              index={index}
              onClick={() => onSelectPhoto(index)}
            />
          ))}
        </div>

        {/* View More Photos & View Invitation Card Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {photos.length > 4 && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#064B32]/30 bg-white px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#064B32] transition-colors hover:border-[#064B32] hover:bg-[#F8F6EA] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064B32]"
            >
              {expanded ? (
                <>
                  <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Show Fewer Photos</span>
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>View More Photos ({photos.length - 4})</span>
                </>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onOpenInvitation}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#064B32] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F8F6EA] shadow-md transition-colors hover:bg-[#173B2B] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A04A]"
          >
            <MailOpen className="h-4 w-4 text-[#DEC17A]" aria-hidden="true" />
            <span>View Invitation Card</span>
          </button>
        </div>
      </div>
    </section>
  );
}
