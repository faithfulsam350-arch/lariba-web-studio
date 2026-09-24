import type { ReactNode } from "react";

interface GoldButtonProps {
  children?: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center rounded-2xl bg-brand-gold px-6 py-3 text-base font-semibold text-brand-green transition-colors hover:bg-brand-gold-dark sm:text-lg";

const GoldButton = ({ children = "Get Started", href, className = "", type = "button" }: GoldButtonProps) => {
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`.trim()}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`${base} ${className}`.trim()}>
      {children}
    </button>
  );
};

export default GoldButton;
