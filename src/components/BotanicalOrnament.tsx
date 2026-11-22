interface GoldDividerProps {
  className?: string;
  tone?: 'gold' | 'ivory' | 'emerald';
}

export function GoldDivider({ className = '', tone = 'gold' }: GoldDividerProps) {
  const lineColor =
    tone === 'ivory'
      ? 'bg-[#F8F6EA]/30'
      : tone === 'emerald'
        ? 'bg-[#064B32]/20'
        : 'bg-[#C5A04A]/45';

  const emblemColor =
    tone === 'ivory'
      ? 'text-[#F8F6EA]/80'
      : tone === 'emerald'
        ? 'text-[#064B32]/70'
        : 'text-[#C5A04A]';

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-12 sm:w-16 ${lineColor}`} />
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className={emblemColor}
      >
        <path
          d="M12 3C13.5 7 17 10.5 21 12C17 13.5 13.5 17 12 21C10.5 17 7 13.5 3 12C7 10.5 10.5 7 12 3Z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      </svg>
      <span className={`h-px w-12 sm:w-16 ${lineColor}`} />
    </div>
  );
}

export function BotanicalCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 168C28 118 66 72 132 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M36 132C28 106 38 82 58 68C56 92 48 114 36 132Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M66 96C88 86 112 90 128 104C104 110 84 106 66 96Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.38"
      />
      <path
        d="M94 64C92 42 104 24 122 14C120 36 110 52 94 64Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <circle cx="136" cy="36" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
