import aboutImage from "@/assets/lariba/about-us-image.png.asset.json";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 pt-12 sm:px-8 lg:flex-row lg:gap-[59px] lg:px-[120px] lg:pt-16"
    >
      <img
        src={aboutImage.url}
        alt="A client reading a Shariah-compliant financing agreement"
        className="w-full max-w-[527px]"
      />
      <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
        <h2 className="font-display text-3xl text-black sm:text-4xl lg:text-[54px]">About us</h2>
        <p className="text-lg text-black sm:text-xl lg:text-2xl">
          We&rsquo;re committed to making finance ethical, inclusive, and value-driven. At La Riba Pay, our goal is to
          provide interest-free, Shariah-compliant financial solutions that support personal and business growth.
          Whether you&apos;re planning, building, or protecting your wealth, our services are designed to align with
          your beliefs and meet your unique needs, without compromise.
        </p>
      </div>
    </section>
  );
};

export default About;
