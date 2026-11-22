import { useState } from 'react';
import { Check, Copy, Gift } from 'lucide-react';
import { weddingConfig, type GiftAccount } from '../config/weddingConfig';

async function copyTextToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below if clipboard API is blocked
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

function GiftAccountCard({ account }: { account: GiftAccount }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyTextToClipboard(account.accountNumber);
    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <article className="flex flex-col items-center rounded-2xl border border-[#C5A04A]/25 bg-white p-8 sm:p-10 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#064B32]/8 text-[#064B32] ring-1 ring-[#C5A04A]/30">
        <Gift className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-serif text-2xl sm:text-[1.75rem] font-medium text-[#064B32]">
        {account.giftTitle}
      </h3>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#173B2B]/55">
        Bank Transfer
      </p>

      <div className="mt-6 w-full rounded-xl border border-[#C5A04A]/20 bg-[#F8F6EA] px-5 py-6 space-y-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B2B]/55">
            Bank Name
          </p>
          <p className="mt-1 text-sm font-semibold text-[#064B32]">
            {account.bankName}
          </p>
        </div>

        <div className="border-y border-[#C5A04A]/15 py-3.5">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B2B]/55">
            Account Number
          </p>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${account.bankName} account number ${account.accountNumber}`}
            className="group mt-1.5 inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg px-3 py-1 transition-colors hover:bg-[#064B32]/6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064B32]"
          >
            <span className="font-serif text-2xl sm:text-[1.75rem] font-semibold tracking-wider text-[#173B2B] tabular-nums">
              {account.accountNumber}
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[#C5A04A] group-hover:bg-[#064B32]/10 group-hover:text-[#064B32] transition-colors">
              {copied ? (
                <Check className="h-4 w-4 text-[#064B32]" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
            </span>
          </button>

          <p
            aria-live="polite"
            className={`mt-1 text-xs font-medium text-[#064B32] transition-opacity duration-150 ${
              copied ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'
            }`}
          >
            Account number copied!
          </p>
        </div>

        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#173B2B]/55">
            Account Name
          </p>
          <p className="mt-1 text-sm font-medium text-[#173B2B]">
            {account.accountName}
          </p>
        </div>
      </div>
    </article>
  );
}

export function GiftsSection() {
  const { eyebrow, title, subtitle, accounts } = weddingConfig.gifts;

  return (
    <section
      id="gift-registry"
      className="bg-[#F8F6EA] py-20 sm:py-24 px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-medium text-[#064B32] text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-[15px] leading-relaxed text-[#173B2B]/80">
          {subtitle}
        </p>

        {/* Two Bank Transfer Cards: Side-by-side on desktop, stacked on mobile */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {accounts.map((account) => (
            <GiftAccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
}
