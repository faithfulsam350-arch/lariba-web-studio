import copyright from "@/assets/lariba/group-6.png.asset.json";
import arrowUp from "@/assets/lariba/group-7.png.asset.json";

const Footer = () => {
  return (
    <footer className="border-t border-[#b9b9b9] px-5 py-6 sm:px-8 lg:px-[120px] lg:py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1 text-base text-black lg:text-xl">
            <img src={copyright.url} alt="" aria-hidden="true" className="h-[17px] w-[17px]" />
            2025 - La Riba Pay
          </span>
          <span className="text-base text-black lg:text-xl">All Rights Reserved</span>
        </div>

        <p className="text-base text-black lg:text-xl">Terms Of Services | Privacy policy</p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 p-2.5 text-base font-semibold text-black/50 lg:text-xl"
        >
          Back to top
          <img src={arrowUp.url} alt="" aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
