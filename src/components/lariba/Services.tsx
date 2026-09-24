import chevron from "@/assets/lariba/vector-2.svg.asset.json";
import { services } from "@/data/lariba";

const Services = () => {
  return (
    <section id="services" className="px-5 py-12 sm:px-8 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 lg:gap-12">
        <h2 className="text-center font-display text-3xl text-black sm:text-4xl lg:text-[54px]">Our Services</h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-9">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-5 rounded-[20px] border border-transparent bg-white p-4 shadow-[0px_0px_7px_0px_rgb(0_0_0_/_0.25)] transition hover:border-brand-green hover:bg-[#f5fdfb] lg:gap-[26px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-lg bg-brand-green">
                  <img src={service.icon} alt="" aria-hidden="true" className="h-[51px] w-[52px] object-contain" />
                </div>
                <h3 className="font-display text-2xl capitalize text-black lg:text-3xl">{service.title}</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-base text-black lg:text-xl">{service.body}</p>
                <a href="#contact" className="flex items-center gap-1 text-lg font-medium text-black/75 lg:text-2xl">
                  Learn More
                  <img src={chevron.url} alt="" aria-hidden="true" className="h-4 w-2.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
