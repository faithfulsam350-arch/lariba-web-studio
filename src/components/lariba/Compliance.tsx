import complianceImage from "@/assets/lariba/image-146.png.asset.json";
import chevronIcon from "@/assets/lariba/icon-5.png.asset.json";
import { compliancePoints } from "@/data/lariba";
import GoldButton from "./GoldButton";

const Compliance = () => {
  return (
    <section className="px-5 pt-12 sm:px-8 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6">
        <h2 className="max-w-[900px] text-center font-display text-3xl leading-tight text-black sm:text-4xl lg:text-[54px]">
          Ensuring Financial Compliance with Integrity and Precision
        </h2>

        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <img
            src={complianceImage.url}
            alt="Team reviewing Shariah compliance certification documents"
            className="w-full max-w-[577px] rounded-[30px]"
          />
          <div className="flex w-full flex-col justify-center gap-5 rounded-[20px] p-4 lg:max-w-[539px] lg:gap-[22px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-bold text-black lg:text-4xl">NCR And Shariah-Compliant</h3>
              <p className="text-lg font-semibold text-black lg:text-2xl">NCR Registration Number: NCRCP19853</p>
            </div>
            <div className="flex flex-col gap-4">
              {compliancePoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <img src={chevronIcon.url} alt="" aria-hidden="true" className="h-12 w-12 shrink-0 rounded" />
                  <div className="flex min-w-0 flex-col">
                    <h4 className="text-xl font-semibold text-black lg:text-2xl">{point.title}</h4>
                    <p className="text-base text-black lg:text-lg">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <GoldButton href="#contact" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
