import React from "react";
import indiaFlag from "../../assets/flags/india.png";
import usaFlag from "../../assets/flags/usflag.png";
import uaeFlag from "../../assets/flags/uae.png";
import ukFlag from "../../assets/flags/uk.png";
import worldMapBg from "../../assets/footermap.png"; 

const OFFICE_LOCATIONS = [
  {
    country: "USA",
    flag: usaFlag,
    phone: "+1 929-470-4267",
    address: "STE A, Dover, Kent County, 19001, United States",
    mapLink: "https://www.google.com/maps/search/?api=1&query=STE+A+Dover+Kent+County+19001"
  },
  {
    country: "UK",
    flag: ukFlag,
    phone: "+44 7404 022559",
    address: "Cardiff Bay Business Centre, Lewis Road, Ocean Park, Cardiff, UK",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Cardiff+Bay+Business+Centre+UK"
  },
  {
    country: "Dubai",
    flag: uaeFlag,
    phone: "+91-172-613-1700",
    address: "Business Bay Square - Dubai, United Arab Emirates",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Business+Bay+Square+Dubai"
  },
  {
    country: "India",
    flag: indiaFlag,
    phone: "+91-172-613-1700",
    address: "INNOV8, Tower A, Mantri Commercio, Bengaluru 560103",
    mapLink: "https://www.google.com/maps/search/?api=1&query=INNOV8+Bengaluru"
  },
  {
    country: "India",
    flag: indiaFlag,
    phone: "+91-172-613-1700",
    address: "Sec 74, Sahibzada Ajit Singh Nagar, Punjab 160055",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sector+74+Mohali"
  },
  {
    country: "India",
    flag: indiaFlag,
    phone: "+91-161-281-6517",
    address: "Science & Technology Entrepreneurs' Park, Gill Rd, Ludhiana",
    mapLink: "https://www.google.com/maps/search/?api=1&query=STEP+Ludhiana"
  }
];

const LocationSection = () => {
  return (
    <section className="relative w-full bg-[#040B18] py-24 overflow-hidden border-t border-gray-900">
      
      {/* IMPROVED BACKGROUND: Increased visibility and positioning */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(${worldMapBg})`,
          backgroundPosition: 'center 40%', // Adjusts the map vertically
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.25, // Adjust this between 0.1 and 0.4 based on image brightness
          filter: 'brightness(1.2) contrast(1.1)' // Makes the map lines sharper
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-white text-3xl font-bold mb-3 tracking-tight">Locations</h2>
          <p className="text-gray-400 text-[15px]">Our Global Technology Centres</p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {OFFICE_LOCATIONS.map((loc, index) => (
            <a
              key={index}
              href={loc.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-300 relative"
            >
              {/* Flag Container */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-800 mb-6 bg-[#081225] flex items-center justify-center shadow-lg">
                 <img 
                   src={loc.flag} 
                   alt={`${loc.country} flag`} 
                   className="w-full h-full object-cover" 
                 />
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold text-xl group-hover:text-[#00C2FF] transition-colors">
                  {loc.country}
                </h4>
                <p className="text-[#00C2FF] text-[15px] font-bold">
                  {loc.phone}
                </p>
                <p className="text-gray-300 text-[14px] leading-relaxed max-w-[280px]">
                  {loc.address}
                </p>
              </div>
            </a>
          ))}
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
  <p className="text-xs text-gray-500">
    Copyright © {new Date().getFullYear()} DigiMantra. All rights reserved.
  </p>

  <div className="flex gap-6">
    {["Privacy Policy", "Cookie Policy", "Terms of Use"].map((item) => (
      <a 
        key={item} 
        href="#" 
        className="text-xs text-gray-500 hover:text-white transition-colors"
      >
        {item}
      </a>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default LocationSection;