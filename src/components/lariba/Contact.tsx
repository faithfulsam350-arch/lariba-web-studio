import { useState } from "react";
import phoneIcon from "@/assets/lariba/icon-8.png.asset.json";
import mailIcon from "@/assets/lariba/icon-9.png.asset.json";
import whatsappIcon from "@/assets/lariba/icon-10.png.asset.json";
import facebookIcon from "@/assets/lariba/icon-11.png.asset.json";
import instagramGlyph from "@/assets/lariba/group-4.png.asset.json";
import xGlyph from "@/assets/lariba/group-5.png.asset.json";
import linkedinIcon from "@/assets/lariba/icon-13.png.asset.json";

const fields = [
  { name: "firstName", label: "First Name", placeholder: "Enter Your First Name", type: "text" },
  { name: "lastName", label: "Last name", placeholder: "Enter your Last name", type: "text" },
] as const;

const inputClass =
  "w-full rounded-[10px] border-2 border-[#575757] p-2.5 text-base font-medium text-black placeholder:text-[#575757] focus:border-brand-green focus:outline-none";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const update = (name: string, value: string) => setValues((v) => ({ ...v, [name]: value }));

  return (
    <section id="contact" className="px-5 py-10 sm:px-8 lg:px-[120px] lg:pt-6 lg:pb-9">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <h2 className="text-center font-display text-3xl text-black sm:text-4xl lg:text-[54px]">Connect With Us</h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[51px]">
          <form
            className="flex flex-1 flex-col gap-3.5 lg:px-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
              setValues({ firstName: "", lastName: "", email: "", message: "" });
            }}
          >
            <p className="text-lg text-black lg:text-xl">
              Would you like to know more about us, or are you ready to take your business to the next level?
            </p>

            <div className="flex flex-col gap-3.5 sm:flex-row">
              {fields.map((field) => (
                <label key={field.name} className="flex flex-1 flex-col gap-1.5">
                  <span className="text-lg font-semibold text-black lg:text-xl">{field.label}</span>
                  <input
                    required
                    type={field.type}
                    value={values[field.name]}
                    onChange={(event) => update(field.name, event.target.value)}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                </label>
              ))}
            </div>

            <label className="flex flex-col gap-1.5 sm:max-w-[251px]">
              <span className="text-lg font-semibold text-black lg:text-xl">Email</span>
              <input
                required
                type="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="Enter your email"
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-lg font-semibold text-black lg:text-xl">Message</span>
              <textarea
                required
                rows={4}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Enter your message"
                className={inputClass}
              />
            </label>

            <button
              type="submit"
              className="h-[51px] rounded-[10px] bg-brand-green text-base font-semibold tracking-wide text-brand-gold transition-colors hover:bg-[#0c5c45]"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-base font-medium text-brand-green-soft" role="status">
                Thank you — your message has been recorded. Our team will reach out shortly.
              </p>
            )}
          </form>

          <div className="flex flex-1 flex-col gap-6 py-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl text-black lg:text-4xl">Get In Touch With Us</h3>
              <p className="text-lg text-black lg:text-xl">
                Have questions, feedback, or need assistance? Reach out anytime
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="tel:+2348121455663" className="flex items-start gap-4">
                <img src={phoneIcon.url} alt="" aria-hidden="true" className="h-[50px] w-[50px] shrink-0 rounded-xl" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xl font-semibold text-black lg:text-2xl">Phone</span>
                  <span className="text-lg text-black lg:text-xl">+234 812 145 5663</span>
                </span>
              </a>
              <a href="mailto:support@laribapay.com" className="flex items-start gap-4">
                <img src={mailIcon.url} alt="" aria-hidden="true" className="h-[50px] w-[50px] shrink-0 rounded-xl" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xl font-semibold text-black lg:text-2xl">Email</span>
                  <span className="text-lg break-words text-black lg:text-xl">support@laribapay.com</span>
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-[11px]">
              <a href="https://wa.me/2348121455663" aria-label="WhatsApp">
                <img src={whatsappIcon.url} alt="" className="h-[50px] w-[50px] rounded-xl" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src={facebookIcon.url} alt="" className="h-[50px] w-[50px] rounded-xl" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-green"
              >
                <img src={instagramGlyph.url} alt="" className="h-[22px] w-5" />
              </a>
              <a
                href="https://x.com"
                aria-label="X"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-green"
              >
                <img src={xGlyph.url} alt="" className="h-6 w-[26px]" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img src={linkedinIcon.url} alt="" className="h-[50px] w-[50px] rounded-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
