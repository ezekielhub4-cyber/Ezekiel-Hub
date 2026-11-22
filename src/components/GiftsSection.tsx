import { useState } from 'react';
import { Check, Copy, Gift } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function GiftsSection() {
  const [copied, setCopied] = useState(false);
  const { eyebrow, title, subtitle, showAccountDetails, bankName, accountNumber, accountName } =
    weddingConfig.gifts;

  const hasVerifiedAccount =
    showAccountDetails && Boolean(bankName) && Boolean(accountNumber) && Boolean(accountName);

  const handleCopyAccount = async () => {
    if (!accountNumber) return;
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="gifts" className="bg-[#F8F6EA] py-20 sm:py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-medium text-[#064B32]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-[15px] leading-relaxed text-[#173B2B]/80">
          {subtitle}
        </p>

        {/* Centered Gift Registry Card */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#C5A04A]/25 bg-white p-8 sm:p-10 shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#064B32]/8 text-[#064B32] ring-1 ring-[#C5A04A]/30">
            <Gift className="h-5 w-5" aria-hidden="true" />
          </div>

          {hasVerifiedAccount ? (
            <div className="mt-5">
              <h3 className="font-serif text-2xl font-medium text-[#064B32]">Cash Gift</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#173B2B]/55">
                Bank Transfer
              </p>

              <div className="mt-6 rounded-xl bg-[#F8F6EA] p-5 space-y-3 border border-[#C5A04A]/20">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#173B2B]/55">
                    Bank Name
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#064B32]">{bankName}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#173B2B]/55">
                    Account Number
                  </p>
                  <div className="mt-0.5 flex items-center justify-center gap-2">
                    <span className="font-serif text-2xl font-semibold tracking-wider text-[#173B2B] tabular-nums">
                      {accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      aria-label="Copy account number"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#064B32] hover:bg-[#064B32]/10 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-[#C5A04A]" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#173B2B]/55">
                    Account Name
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-[#173B2B]">{accountName}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <h3 className="font-serif text-2xl font-medium text-[#064B32]">
                Gift Registry Coming Soon
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#173B2B]/75">
                Your prayers, love, and presence on our special day are deeply cherished. Gift
                and registry details will be updated here once confirmed by the couple.
              </p>
              <a
                href="#rsvp"
                className="mt-6 inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#064B32]/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#064B32] transition-colors hover:border-[#064B32] hover:bg-[#F8F6EA]"
              >
                Contact RSVP Team
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
