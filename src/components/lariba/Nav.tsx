import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/lariba";
import GoldButton from "./GoldButton";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-[#4a664b] bg-brand-green">
      <div className="mx-auto flex max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-[120px] lg:py-6">
        <a href="#home" className="font-display text-3xl text-brand-gold sm:text-4xl lg:text-5xl">
          LaRiba
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`px-2.5 py-2 text-lg font-semibold transition-colors ${
                active === item.label
                  ? "border border-brand-gold-dark text-brand-gold-dark"
                  : "text-brand-gold hover:text-brand-gold-dark"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GoldButton href="#contact" className="hidden shrink-0 px-4 py-2 text-sm sm:inline-flex lg:px-6 lg:py-3 lg:text-lg" />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-md p-2 text-brand-gold lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#4a664b] px-5 pb-5 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.label);
                setOpen(false);
              }}
              className="py-3 text-lg font-semibold text-brand-gold"
            >
              {item.label}
            </a>
          ))}
          <GoldButton href="#contact" className="mt-2 w-full" />
        </nav>
      )}
    </header>
  );
};

export default Nav;
