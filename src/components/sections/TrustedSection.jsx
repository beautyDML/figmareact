import React from "react";

const LOGOS = [
  { id: 1, name: "ISO 27001", src: "src/assets/logocompany/ISO27001.png" },
  { id: 2, name: "AppFutura", src: "src/assets/logocompany/CII.png" },
  { id: 7, name: "Clutch", src: "src/assets/logocompany/TopDevelopers.jpeg" },
];

const TrustedSection = () => {
  return (
    <section className="w-full bg-[#030812] py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT TEXT - Bold and clear like the image */}
        <div className="shrink-0">
          <h3 className="text-white text-[32px] md:text-[38px] font-bold leading-[1.1] tracking-tight">
            Trusted & <br />
            Recognized By
          </h3>
        </div>

        {/* RIGHT LOGO STRIP */}
        <div className="relative flex-1 overflow-hidden">
          
          {/* Edge Fades for a professional look */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#030812] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#030812] to-transparent z-10" />

          {/* Scrolling Track - Using larger height and full color */}
          <div className="flex w-max animate-marquee">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-8 md:px-12 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  /* h-14 to h-16 makes them bigger. 
                     Removed grayscale and opacity-50.
                  */
                  className="h-20 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedSection;