import flagIcon from "@/assets/lariba/group.png.asset.json";
import visionIcon from "@/assets/lariba/vision-icon.png.asset.json";
import { values } from "@/data/lariba";

const Mission = () => {
  return (
    <section className="bg-brand-cream px-5 py-10 sm:px-8 lg:px-6 lg:pt-9 lg:pb-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-9">
        <h2 className="text-center font-display text-3xl capitalize text-black sm:text-4xl lg:text-[54px]">
          Our mission, vison and values
        </h2>

        <div className="flex w-full flex-col items-center gap-12 lg:gap-[73px]">
          <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:gap-9">
            <article className="flex w-full flex-col items-center justify-center gap-3 rounded-[20px] bg-white px-4 py-6 shadow-[5px_5px_5px_0px_rgb(0_0_0_/_0.25)] lg:w-[407px]">
              <div className="flex h-[101px] w-[101px] items-center justify-center rounded-full bg-brand-green">
                <img src={flagIcon.url} alt="" aria-hidden="true" className="h-[52px] w-11" />
              </div>
              <h3 className="text-center font-display text-2xl text-slate-800 lg:text-4xl">Our Mission</h3>
              <p className="text-center text-base text-black lg:text-xl">
                To provide ethical and interest-free financial solutions that empower individuals and businesses while
                adhering to the principles of Islamic finance.
              </p>
            </article>

            <article className="flex w-full flex-col items-center justify-center gap-3 rounded-[20px] bg-white p-6 shadow-[-6px_6px_4px_0px_rgb(0_0_0_/_0.25)] lg:w-[407px]">
              <img src={visionIcon.url} alt="" aria-hidden="true" className="h-[101px] w-[101px] rounded-full" />
              <h3 className="text-center font-display text-2xl text-slate-800 lg:text-4xl">Our vision</h3>
              <p className="text-center text-base text-black lg:text-xl">
                To be the leading provider of Shariah-compliant financial services, fostering economic growth and social
                well-being through fairness, transparency, and shared prosperity.
              </p>
            </article>
          </div>

          <div className="grid w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap">
            {values.map((value) => (
              <article
                key={value.title}
                className="flex flex-col items-center justify-center gap-3.5 overflow-hidden rounded-[30px] bg-white p-[30px] shadow-[-5px_5px_5px_0px_rgb(0_0_0_/_0.25)] lg:w-[244px]"
              >
                <div className="flex h-[101px] w-[101px] items-center justify-center rounded-full bg-brand-green">
                  <img src={value.icon} alt="" aria-hidden="true" className="h-12 w-12 object-contain" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="text-center text-lg font-semibold leading-tight text-black">{value.title}</h3>
                  <p className="text-center text-lg leading-tight text-black">{value.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
