import { weddingConfig } from '../config/weddingConfig';

export function ColoursOfDaySection() {
  const { heading, dressCodeMessage, swatches } = weddingConfig.coloursOfTheDay;

  return (
    <section className="bg-white py-16 sm:py-20 px-6 border-b border-[#C5A04A]/15">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#C5A04A]">
          Dress Code
        </p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-[#064B32]">
          {heading}
        </h2>
        <p className="mt-3 font-serif text-lg sm:text-xl italic text-[#173B2B]/85">
          “{dressCodeMessage}”
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {swatches.map((swatch) => (
            <div key={swatch.name} className="flex flex-col items-center">
              <div
                aria-hidden="true"
                style={{
                  background: swatch.gradient ?? swatch.hex,
                }}
                className={`h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-sm ring-2 ring-offset-4 ring-offset-white ${swatch.ringClass}`}
              />
              <span className="mt-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#173B2B]">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
