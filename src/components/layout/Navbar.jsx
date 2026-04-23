import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useScrollHeader } from "../../hooks/useScrollHeader";
import { scrollToSection } from "../../utils/helpers";

const NAV_LINKS = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "Industries", href: "#industries" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isScrolled, isHidden } = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A1623]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-[#0A1623]/90 backdrop-blur-sm border-b border-white/[0.06]"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex items-center justify-between h-[60px] px-10 max-w-[1440px] mx-auto">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <span
            className="text-white text-[18px] font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            DigiMantra
          </span>
        </a>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[13.5px] font-normal text-white/70 hover:text-white transition-colors duration-150"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          {/* SEARCH */}
          <button className="text-white/60 hover:text-white transition flex items-center justify-center">
            <Search size={16} strokeWidth={1.4} />
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-4 py-[6px] rounded-full border border-white/15 text-white text-[10px] font-medium tracking-[0.16em] uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            TALK TO AN EXPERT
          </button>
        </div>

        {/* MOBILE */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1623] border-t border-white/[0.06] px-6 py-5 space-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                scrollToSection(link.href);
                setMobileOpen(false);
              }}
              className="block w-full text-left px-3 py-3 text-[14px] text-white/70 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-4 border-t border-white/[0.06]">
            <button
              onClick={() => {
                scrollToSection("#contact");
                setMobileOpen(false);
              }}
              className="w-full px-5 py-3 rounded-full border border-white/20 text-white text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-white/10"
            >
              TALK TO AN EXPERT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
