import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  Phone,
  AlertCircle,
} from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface FormState {
  fullName: string;
  phoneNumber: string;
  numberOfGuests: string;
  attendance: 'Joyfully Attending' | 'Unable to Attend';
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  phoneNumber: '',
  numberOfGuests: '1 Guest',
  attendance: 'Joyfully Attending',
  message: '',
};

function encodeNetlifyForm(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

export function RsvpSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = async (phone: string) => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(phone);
      window.setTimeout(() => setCopiedPhone(null), 2000);
    } catch {
      setCopiedPhone(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!form.fullName.trim() || !form.phoneNumber.trim()) {
      setErrorMessage('Please enter both your full name and phone number.');
      return;
    }

    setSubmitting(true);

    try {
      const payload = encodeNetlifyForm({
        'form-name': 'rsvp',
        fullName: form.fullName.trim(),
        phoneNumber: form.phoneNumber.trim(),
        numberOfGuests: form.numberOfGuests,
        attendance: form.attendance,
        message: form.message.trim(),
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setErrorMessage(
        'We could not reach the RSVP form server right now. Please try again or confirm directly via WhatsApp with any of our RSVP contacts on the left.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="botanical-emerald-surface py-20 sm:py-24 px-6"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-[#C5A04A]/25">
        {/* Left Column: RSVP Info & Contact Persons */}
        <div className="lg:col-span-5 bg-[#173B2B] p-8 sm:p-10 text-[#F8F6EA] flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#DEC17A]">
              {weddingConfig.rsvp.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-medium text-[#F8F6EA]">
              {weddingConfig.rsvp.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#F8F6EA]/80">
              {weddingConfig.rsvp.subtext}
            </p>
          </div>

          {/* Official RSVP Contact Persons */}
          <div className="mt-10 border-t border-[#C5A04A]/25 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DEC17A] mb-4">
              RSVP Contacts
            </p>

            <ul className="space-y-3">
              {weddingConfig.rsvp.contacts.map((contact) => {
                const isCopied = copiedPhone === contact.phone;
                return (
                  <li
                    key={contact.name}
                    className="flex items-center justify-between gap-3 rounded-lg bg-[#064B32]/45 px-3.5 py-2.5 border border-white/5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#F8F6EA]">{contact.name}</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-1.5 text-xs text-[#F8F6EA]/75 hover:text-[#DEC17A] tabular-nums transition-colors"
                      >
                        <Phone className="h-3 w-3 shrink-0 text-[#C5A04A]" aria-hidden="true" />
                        <span>{contact.phone}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyPhone(contact.phone)}
                        title={`Copy ${contact.name}'s phone number`}
                        aria-label={`Copy ${contact.name}'s phone number`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#F8F6EA]/80 hover:border-[#C5A04A] hover:text-[#DEC17A] transition-colors"
                      >
                        {isCopied ? (
                          <Check className="h-3.5 w-3.5 text-[#DEC17A]" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <a
                        href={`https://wa.me/${contact.whatsappInternational}?text=${encodeURIComponent(
                          "Hello! I'm reaching out regarding RSVP for Esther & David's wedding (DEstined '26).",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Chat with ${contact.name} on WhatsApp`}
                        aria-label={`Chat with ${contact.name} on WhatsApp`}
                        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#C5A04A]/20 px-3 text-[11px] font-medium text-[#DEC17A] hover:bg-[#C5A04A] hover:text-[#062418] transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Column: Confirm Attendance Netlify Form */}
        <div className="lg:col-span-7 bg-[#FDFCF7] p-8 sm:p-10 text-[#173B2B]">
          <h3 className="font-serif text-3xl font-medium text-[#064B32]">
            Confirm Attendance
          </h3>
          <p className="mt-1.5 text-sm text-[#173B2B]/70">
            Please complete the form below to let us know you&apos;ll be joining us.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-[#064B32]/20 bg-[#F8F6EA] p-6 sm:p-8 text-center">
              <CheckCircle2
                className="mx-auto h-10 w-10 text-[#064B32]"
                aria-hidden="true"
              />
              <h4 className="mt-3 font-serif text-2xl font-semibold text-[#064B32]">
                Thank You for Your RSVP
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#173B2B]/80">
                Your attendance response has been submitted. We look forward to celebrating
                with you on Saturday, 12 December 2026 in Ibadan!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#064B32]/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#064B32] hover:bg-white transition-colors"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form
              name="rsvp"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <input type="hidden" name="form-name" value="rsvp" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              {/* Guest Full Name */}
              <div>
                <label
                  htmlFor="rsvp-fullName"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-[#173B2B]/75 mb-1.5"
                >
                  Full Name <span className="text-[#064B32]">*</span>
                </label>
                <input
                  id="rsvp-fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-[#173B2B]/15 bg-white px-4 py-3 text-sm text-[#173B2B] placeholder:text-[#173B2B]/40 focus:border-[#064B32] focus:outline-none focus:ring-2 focus:ring-[#064B32]/15"
                />
              </div>

              {/* Phone Number & Number of Guests */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="rsvp-phoneNumber"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#173B2B]/75 mb-1.5"
                  >
                    Phone Number <span className="text-[#064B32]">*</span>
                  </label>
                  <input
                    id="rsvp-phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={form.phoneNumber}
                    onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                    placeholder="e.g. 0803 123 4567"
                    className="w-full rounded-lg border border-[#173B2B]/15 bg-white px-4 py-3 text-sm text-[#173B2B] placeholder:text-[#173B2B]/40 focus:border-[#064B32] focus:outline-none focus:ring-2 focus:ring-[#064B32]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rsvp-numberOfGuests"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#173B2B]/75 mb-1.5"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="rsvp-numberOfGuests"
                    name="numberOfGuests"
                    value={form.numberOfGuests}
                    onChange={(e) => setForm({ ...form, numberOfGuests: e.target.value })}
                    className="w-full rounded-lg border border-[#173B2B]/15 bg-white px-4 py-3 text-sm text-[#173B2B] focus:border-[#064B32] focus:outline-none focus:ring-2 focus:ring-[#064B32]/15"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5+ Guests">5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Attendance Confirmation */}
              <div>
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-[#173B2B]/75 mb-2">
                  Attendance Confirmation
                </span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {(['Joyfully Attending', 'Unable to Attend'] as const).map((option) => {
                    const selected = form.attendance === option;
                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                          selected
                            ? 'border-[#064B32] bg-[#064B32]/6 font-medium text-[#064B32]'
                            : 'border-[#173B2B]/15 bg-white text-[#173B2B]/80 hover:border-[#064B32]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          checked={selected}
                          onChange={() => setForm({ ...form, attendance: option })}
                          className="h-4 w-4 accent-[#064B32]"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Optional Message / Well Wishes */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-[#173B2B]/75 mb-1.5"
                >
                  Well Wishes &amp; Message (Optional)
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share a blessing, prayer, or note for Esther & David..."
                  className="w-full rounded-lg border border-[#173B2B]/15 bg-white px-4 py-3 text-sm text-[#173B2B] placeholder:text-[#173B2B]/40 focus:border-[#064B32] focus:outline-none focus:ring-2 focus:ring-[#064B32]/15"
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-xs text-red-900"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-700 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#064B32] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F6EA] shadow-md transition-colors hover:bg-[#173B2B] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064B32]"
              >
                <span>{submitting ? 'Submitting RSVP...' : 'Confirm Attendance'}</span>
                {!submitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
