import { solutions } from "@/data/lariba";

const Solutions = () => {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-[120px] lg:py-[59px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 lg:gap-[72px]">
        <h2 className="text-center font-display text-3xl text-black sm:text-4xl lg:text-[54px]">
          Tailored Financial Solutions
        </h2>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 lg:gap-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="relative mt-8 flex flex-col gap-3 rounded-xl border border-transparent bg-gray-50 p-[22px] transition hover:border-brand-green hover:bg-[#f5fdfb]"
            >
              <div className="absolute -top-8 left-3.5 flex h-[66px] w-[66px] items-center justify-center rounded-lg bg-brand-green">
                <img src={solution.icon} alt="" aria-hidden="true" className="h-9 w-7 object-contain" />
              </div>
              <h3 className="pt-6 text-xl font-semibold text-black lg:text-[26px]">{solution.title}</h3>
              <p className="text-base text-black lg:text-lg">{solution.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
