import React from "react";
import {
  Tractor,
  Plane,
  Sprout,
  FlaskConical,
  Landmark,
  Wine,
} from "lucide-react";

const sectors = [
  { icon: <Tractor size={40} />, title: "Agriculture", count: "03" },
  { icon: <Plane size={40} />, title: "Air Transport Service", count: "03" },
  { icon: <Sprout size={40} />, title: "Plantation", count: "10" },
  { icon: <FlaskConical size={40} />, title: "Argo Chemical", count: "05" },
  { icon: <Landmark size={40} />, title: "Airport", count: "06" },
  { icon: <Wine size={40} />, title: "Alcoholic Beverages", count: "01" },
];

export default function ZerodhaSectors() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0E2A27] to-[#14423F] text-white px-4 sm:px-8 lg:px-24 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-xs sm:text-sm tracking-wide text-[#98A8A6] mb-1 uppercase">
          Top
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-2">
          Hot Sectors You Can’t Trade
          <br className="hidden sm:block" /> on Zerodha (Yet)
        </h1>
        <p className="text-xs sm:text-sm text-[#98A8A6]">
          Before the IPO Buzz: Sectors Worth Noticing
        </p>
      </div>

      {/* Sector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-screen-xl mx-auto">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[71px] h-[71px] rounded-full bg-[#B5F6E71F] shadow-[0px_0px_39.58px_0px_#0ECBA0] flex items-center justify-center mb-2 text-[#2ED3B7]">
              {sector.icon}
            </div>
            <p className="text-sm text-white mb-1 whitespace-nowrap">
              {sector.title}
            </p>
            <span className="text-[#2ED3B7] text-lg font-bold">
              {sector.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
