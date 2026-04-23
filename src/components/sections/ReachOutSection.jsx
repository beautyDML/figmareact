import React from "react";
import { Briefcase, MessageCircle, Users, ArrowRight } from "lucide-react";
import { CONTACT_CARDS } from "../../constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import mapBg from "../../assets/mapbackground.png";

const ICON_MAP = {
  briefcase: Briefcase,
  "message-circle": MessageCircle,
  users: Users,
};

const ReachOutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 bg-[#030812] transition-all duration-1000 ease-out overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* --- HIGH VISIBILITY BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={mapBg}
          alt="World Map"
          // Removed full grayscale to keep some depth, increased opacity to 60%
          className="w-full h-full object-cover lg:object-contain opacity-60 mix-blend-screen brightness-125 contrast-110" 
        />
        
        {/* Subtle Vignette: Only darkens the very edges to ensure the map is clear in the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030812] via-transparent to-[#030812] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030812] via-transparent to-[#030812] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-[32px] lg:text-[45px] font-bold leading-[1.1] max-w-4xl mx-auto">
            Reach the DigiMantra Team for{" "}
            <span className="text-[#00C2FF]">
              Business Discussions, Collaboration, and Career Opportunities.
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {CONTACT_CARDS.map((card, i) => {
            const Icon = ICON_MAP[card.icon];
            const isFirst = i === 0;

            return (
              <div
                key={card.id}
                className={`group relative rounded-[32px] p-10 transition-all duration-500 backdrop-blur-sm ${
                  isFirst 
                  ? "bg-[#00C2FF]/10 border border-[#00C2FF]/30 shadow-[0_20px_50px_rgba(0,194,255,0.15)]" 
                  : "bg-[#0A1221]/60 border border-white/10 hover:border-[#00C2FF]/40"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#081225] border border-white/10 flex items-center justify-center mb-8">
                  <Icon size={24} className="text-[#00C2FF]" />
                </div>

                <h3 className="text-white text-2xl font-bold mb-4">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-[16px] mb-8 leading-relaxed">
                  {card.description}
                </p>

                <a
                  href={`mailto:${card.email}`}
                  className="inline-flex items-center gap-2 text-[#00C2FF] text-[15px] font-bold hover:text-white transition-all"
                >
                  {card.email}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;