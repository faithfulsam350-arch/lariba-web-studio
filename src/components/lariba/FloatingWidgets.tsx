import { useState } from "react";
import chatBotIcon from "@/assets/lariba/fluent-mdl2chat-bot.png.asset.json";
import shareIcon from "@/assets/lariba/group-11.png.asset.json";
import facebookRound from "@/assets/lariba/group-8.png.asset.json";
import instagramRound from "@/assets/lariba/group-9.png.asset.json";
import whatsappCircle from "@/assets/lariba/vector-3.svg.asset.json";
import xGlyph from "@/assets/lariba/vector-4.svg.asset.json";

const FloatingWidgets = () => {
  const [shareOpen, setShareOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-3 z-40 flex flex-col-reverse items-center gap-3 sm:left-5">
        <button
          type="button"
          aria-label="Share this page"
          onClick={() => setShareOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green sm:h-[78px] sm:w-[78px]"
        >
          <img src={shareIcon.url} alt="" aria-hidden="true" className="h-8 w-8 sm:h-[38px] sm:w-[38px]" />
        </button>

        {shareOpen && (
          <div className="flex flex-col items-center gap-3">
            <a href="https://facebook.com" aria-label="Share on Facebook">
              <img src={facebookRound.url} alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
            </a>
            <a href="https://instagram.com" aria-label="Share on Instagram">
              <img src={instagramRound.url} alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
            </a>
            <a href="https://wa.me/2348121455663" aria-label="Share on WhatsApp">
              <img src={whatsappCircle.url} alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
            </a>
            <a
              href="https://x.com"
              aria-label="Share on X"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black sm:h-14 sm:w-14"
            >
              <img src={xGlyph.url} alt="" className="h-6 w-6 sm:h-[29px] sm:w-[29px]" />
            </a>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-3 z-40 flex flex-col items-end gap-3 sm:right-5">
        {chatOpen && (
          <div className="w-[260px] rounded-2xl bg-white p-4 shadow-[0px_0px_10px_0px_rgb(0_0_0_/_0.25)] sm:w-[300px]">
            <p className="text-base font-semibold text-brand-green">Assalamu alaikum</p>
            <p className="mt-1 text-sm text-black">
              Need help choosing a Shariah-compliant plan? Call +234 812 145 5663 or email support@laribapay.com and our
              team will assist you.
            </p>
          </div>
        )}
        <button
          type="button"
          aria-label="Open chat assistant"
          onClick={() => setChatOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green sm:h-[78px] sm:w-[78px]"
        >
          <img src={chatBotIcon.url} alt="" aria-hidden="true" className="h-9 w-9 sm:h-[52px] sm:w-[52px]" />
        </button>
      </div>
    </>
  );
};

export default FloatingWidgets;
