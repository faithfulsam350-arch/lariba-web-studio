import mosque from "@/assets/lariba/mosque-silhouette-img.png.asset.json";
import coins from "@/assets/lariba/coin-bg-image.png.asset.json";
import maskGroup from "@/assets/lariba/mask-group.png.asset.json";
import moonVector from "@/assets/lariba/vector.svg.asset.json";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-teal/80">
      <img
        src={mosque.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-[130%] max-w-none -translate-x-1/2 opacity-70"
      />
      <img
        src={coins.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-0 w-[120%] max-w-none opacity-80"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-14 pb-0 sm:px-8 lg:grid-cols-[minmax(0,695px)_minmax(0,743px)] lg:gap-8 lg:px-[120px] lg:pt-[165px]">
        <div className="flex flex-col gap-5 pb-10 lg:pb-24">
          <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl lg:text-6xl">
            Experience Seamless,
            <br />
            Fully{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 -z-10 h-[60%] bg-brand-highlight" aria-hidden="true" />
              Shariah-Compliant
            </span>{" "}
            <span className="relative inline-flex h-9 w-9 shrink-0 translate-y-1 items-center justify-center rounded-full bg-black align-middle">
              <img src={moonVector.url} alt="" aria-hidden="true" className="h-5 w-5" />
            </span>
            <br />
            Financing Solutions Tailored for Everyone
          </h1>
          <p className="max-w-[587px] text-lg font-medium leading-snug text-black sm:text-xl lg:text-2xl">
            Fast approvals — Get up to R3 million in financing with approval within 24 hours.
            <br />
            All fully Shariah-compliant to meet your ethical and financial needs.
          </p>
        </div>

        <img
          src={maskGroup.url}
          alt="Customers reviewing Shariah-compliant financing options together"
          className="mx-auto w-full max-w-[743px] self-end"
        />
      </div>
    </section>
  );
};

export default Hero;
