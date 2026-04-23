import React, { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import worldMapImg from "../../assets/mapimg.png"; 

// Import your flag images here
import indiaFlag from "../../assets/flags/india.png";
import usaFlag from "../../assets/flags/usflag.png";
import uaeFlag from "../../assets/flags/uae.png";
import ukFlag from "../../assets/flags/uk.png";

const LOCATIONS = [
  {
    id: "india",
    name: "India",
    flagImg: indiaFlag, // Real image path
    address: "Plot No. CP-11, Phase 8, Industrial Area, Sector 72, Mohali, Punjab 160071",
    email: "info@digimantra.com",
    phone: "+91 172 4661100",
    coords: { x: 75, y: 58 }
  },
  {
    id: "usa",
    name: "USA",
    flagImg: usaFlag,
    address: "STE A, Dover, Kent County, 19001, United States",
    email: "digimantra@usa.com",
    phone: "666666666",
    coords: { x: 22, y: 42 }
  },
  {
    id: "uae",
    name: "UAE",
    flagImg: uaeFlag,
    address: "Dubai Internet City, Building 16, Dubai, UAE",
    email: "uae@digimantra.com",
    phone: "+971 4 0000000",
    coords: { x: 58, y: 52 }
  },
  {
    id: "uk",
    name: "UK",
    flagImg: ukFlag,
    address: "71-75 Shelton Street, London, WC2H 9JQ, UK",
    email: "uk@digimantra.com",
    phone: "+44 20 0000 0000",
    coords: { x: 48, y: 32 }
  },
];

const GlobalPartnerSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[1]); 

  return (
    <section
      id="partners"
      ref={ref}
      className={`py-24 bg-[#030812] transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="section-container max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-white text-[32px] lg:text-[40px] font-semibold leading-tight">
            Our <span className="text-[#00C2FF]">Global Partner</span> Network
          </h2>
          <p className="text-gray-400 text-[15px] mt-4 max-w-2xl">
            Collaborating with leading organizations to deliver intelligent technology and digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-12">
            {/* Flags Selector - Real Images */}
            <div className="flex items-center gap-5">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  className={`group relative w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                    activeLoc.id === loc.id 
                      ? "border-[#00C2FF] scale-110 shadow-[0_0_15px_rgba(0,194,255,0.4)]" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={loc.flagImg} 
                      alt={loc.name} 
                      className="w-full h-full object-cover" // Full cover logic
                    />
                  </div>
                  
                  {activeLoc.id === loc.id && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                       <ChevronDown className="text-[#00C2FF] w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Address Details */}
            <div className="space-y-8 pt-4">
              <div className="space-y-2">
                 <p className="text-[#00C2FF] font-bold tracking-[0.2em] text-sm uppercase">Location</p>
                 <h3 className="text-white text-3xl font-bold">{activeLoc.name}</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-[#00C2FF] shrink-0 mt-1" />
                  <p className="text-[15px] leading-relaxed max-w-[300px]">{activeLoc.address}</p>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="w-6 h-6 text-[#00C2FF] shrink-0" />
                  <a href={`mailto:${activeLoc.email}`} className="text-[15px] hover:text-[#00C2FF] transition-colors">{activeLoc.email}</a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone className="w-6 h-6 text-[#00C2FF] shrink-0" />
                  <span className="text-[15px]">{activeLoc.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map with interactive pin */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#050C1A]/30  p-2">
              <img 
                src={worldMapImg} 
                alt="World Map" 
                className="w-full h-auto opacity-80"
              />
              
              {/* Active Pin - Matches image_e0dea3.png */}
              <div 
                className="absolute transition-all duration-700 ease-in-out"
                style={{ left: `${activeLoc.coords.x}%`, top: `${activeLoc.coords.y}%` }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  {/* Tooltip Popup */}
                  <div className="mb-4 whitespace-nowrap bg-[#0F172A]/90 backdrop-blur-md border border-[#00C2FF]/30 px-4 py-3 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-white text-[11px] font-medium leading-tight text-center">
                      {activeLoc.address.split(',').slice(0, 2).join(',')} <br/>
                      {activeLoc.address.split(',').slice(2).join(',')}
                    </p>
                    {/* Tip under box */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#00C2FF]/30" />
                  </div>

                
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerSection;