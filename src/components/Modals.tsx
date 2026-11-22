import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';
import { weddingConfig, type GalleryPhoto } from '../config/weddingConfig';

export function InvitationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official Wedding Invitation Card"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#061B12]/90 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-[#F8F6EA] shadow-2xl ring-1 ring-[#C5A04A]/40"
      >
        <div className="flex items-center justify-between border-b border-[#C5A04A]/20 px-5 py-3.5">
          <div>
            <p className="font-serif text-lg font-semibold text-[#064B32]">
              {weddingConfig.brand.title} — Official Invitation
            </p>
            <p className="text-xs text-[#173B2B]/70">
              {weddingConfig.brand.brideName} &amp; {weddingConfig.brand.groomName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={weddingConfig.photos.invitationCard}
              download="DEstined-26-Wedding-Invitation.jpeg"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#064B32] px-3.5 text-xs font-medium text-[#F8F6EA] hover:bg-[#173B2B] transition-colors"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Save</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close invitation modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#173B2B] hover:bg-[#064B32]/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto bg-[#062418] p-3 sm:p-4 flex justify-center">
          <img
            src={weddingConfig.photos.invitationCard}
            alt="Official Wedding Invitation Card for Esther Ayomide and David Sunday"
            className="max-h-[76vh] w-auto rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export function LightboxModal({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null) return null;
  const current = photos[activeIndex];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Photo Lightbox"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05140D]/92 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#F8F6EA] hover:bg-white/20 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 sm:left-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#F8F6EA] hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-w-3xl flex-col items-center text-center"
      >
        {current.src ? (
          <img
            src={current.src}
            alt={current.alt}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
          />
        ) : (
          <div className="relative flex h-[60vh] w-[82vw] max-w-md flex-col items-center justify-between rounded-2xl botanical-emerald-surface p-8 text-[#F8F6EA] shadow-2xl ring-1 ring-[#C5A04A]/40">
            <div className="pointer-events-none absolute inset-4 rounded-xl border border-[#C5A04A]/30" />
            <span className="relative z-10 text-xs uppercase tracking-[0.24em] text-[#DEC17A]">
              {current.category}
            </span>
            <div className="relative z-10 my-auto px-4">
              <p className="font-serif text-4xl italic text-[#C5A04A]">
                {weddingConfig.brand.monogram}
              </p>
              <p className="mt-4 font-serif text-2xl text-[#F8F6EA]">{current.caption}</p>
              <p className="mt-3 text-xs text-[#F8F6EA]/70">
                Awaiting couple photograph in gallery configuration
              </p>
            </div>
            <span className="relative z-10 text-xs tracking-[0.18em] text-[#F8F6EA]/60">
              {activeIndex + 1} / {photos.length}
            </span>
          </div>
        )}

        <div className="mt-4 text-[#F8F6EA]">
          <p className="font-serif text-xl">{current.caption}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#DEC17A]/80">
            {current.category} · {activeIndex + 1} of {photos.length}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#F8F6EA] hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
