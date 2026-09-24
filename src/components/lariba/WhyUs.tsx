import businessman from "@/assets/lariba/igbobusinessmannobg-1.png.asset.json";
import chevronIcon from "@/assets/lariba/icon.png.asset.json";
import { whyChooseUs } from "@/data/lariba";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="bg-linear-to-l from-brand-cream to-white px-5 pt-12 sm:px-8 lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-7 lg:flex-row lg:gap-9">
        <div className="flex flex-col items-start justify-center gap-6 lg:gap-[30px]">
          <h2 className="font-display text-3xl text-black sm:text-4xl lg:text-[54px]">Why choose Lariba Pay ?</h2>
          <div className="flex flex-col gap-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <img src={chevronIcon.url} alt="" aria-hidden="true" className="h-12 w-12 shrink-0 rounded" />
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-xl font-semibold text-black lg:text-2xl">{item.title}</h3>
                  <p className="text-base text-black lg:text-lg">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={businessman.url}
          alt="A business owner financed through Lariba Pay"
          className="w-full max-w-[581px] self-end"
        />
      </div>
    </section>
  );
};

export default WhyUs;
