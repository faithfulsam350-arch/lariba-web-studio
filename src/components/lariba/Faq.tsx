import { useState } from "react";
import arrow from "@/assets/lariba/weuiarrow-filled.png.asset.json";
import { faqs } from "@/data/lariba";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-cream px-5 py-10 sm:px-8 lg:px-[120px] lg:pt-6 lg:pb-9">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:gap-9">
        <h2 className="text-center font-display text-3xl text-black sm:text-4xl lg:text-[54px]">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="flex flex-col gap-0.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-lg bg-linear-to-r from-brand-cream-soft/70 to-white/60 backdrop-blur-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-3.5 px-5 py-6 text-left lg:px-6 lg:py-9"
                >
                  <span className="min-w-0 flex-1 text-lg font-semibold leading-tight text-black lg:text-2xl">
                    {faq.question}
                  </span>
                  <img
                    src={arrow.url}
                    alt=""
                    aria-hidden="true"
                    className={`h-4 w-7 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-6 text-base text-black lg:px-6 lg:pb-8 lg:text-xl">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
