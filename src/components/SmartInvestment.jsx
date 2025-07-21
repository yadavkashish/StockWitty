import React from "react";
import {
  Filter,
  Star,
  Sparkles,
  Triangle,
  Building2,
} from "lucide-react";

const featureData = [
  {
    name: "Income and expenses tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Filter,
    highlight: true,
  },
  {
    name: "Smart goal planner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Star,
  },
  {
    name: "Automated savings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Sparkles,
  },
  {
    name: "Investment analysis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Triangle,
  },
  {
    name: "Financial dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Building2,
  },
];

const stockData = [
  { name: "SBI", icon: "/image2.1.png", change: 40 },
  { name: "GreenFund", icon: "/image2.2.png", change: -2 },
  { name: "GrowTree", icon: "/image2.3.png", change: 40 },
  { name: "EcoBank", icon: "/image2.4.png", change: 40 },
  { name: "SBI Lite", icon: "/image2.1.png", change: -2 },
  { name: "EcoTrust", icon: "/image2.4.png", change: 40 },
  { name: "SBI Mini", icon: "/image2.1.png", change: -2 },
];

const SmartInvestment = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-white font-['Roboto']">
      <div className="flex flex-col lg:flex-row justify-between gap-10 w-full">
        {/* Left Column */}
        <div className="flex-1 max-w-[960px]">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-[8vw] sm:text-[36px] lg:text-[45px] font-semibold text-black leading-tight">
              Smart Investment Online
            </h1>
            <p className="text-[#00000099] text-[4vw] sm:text-[16.6px] mt-2">
              Investing Isn’t Easy. Reading About It Should Be
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {featureData.map((feature, index) => {
  const Icon = feature.icon;
  return (
    <div
      key={index}
      className={`rounded-[6px] px-3 py-4 border-l-2 ${
        feature.highlight
          ? "bg-[#DBFBF3] border-[#076550] shadow-[0px_4px_22.3px_0px_#00000040]"
          : "bg-white border-[#D4D4D4]"
      }`}
    >
      <div className="flex items-start gap-3 mb-2">
        <Icon className="w-5 h-5 text-[#076550]" />
        <h3 className="text-base font-semibold text-black leading-tight">
          {feature.name}
        </h3>
      </div>
      <p className="text-sm text-black leading-snug">
        {feature.description}
      </p>
    </div>
  );
})}


            {/* Load More Button */}
            <div className="col-span-full flex justify-end mt-4">
              <button className="rounded-[5.19px] px-6 py-2 text-white text-sm font-medium bg-gradient-to-r from-[#0C7031] to-[#11F1C4]">
                Load More
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Stock Panel */}
        <div className="w-full lg:w-[403px] h-[420px] mt-2">
          <div className="h-full bg-[#f4f4f4] rounded-[16px] p-4 flex flex-col gap-3 overflow-hidden">
            {stockData.slice(0, 6).map((stock, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] px-3 py-2 flex justify-between items-center h-[46px]"
              >
                <div className="flex items-center gap-3">
                  <img src={stock.icon} alt={stock.name} className="w-9 h-9" />
                  <div className="leading-tight">
                    
                    <p className="text-[12px] text-gray-500 leading-[14px]">
                      Today <br /> 600+
                    </p>
                  </div>
                </div>
                <div className="text-right pr-2">
                  {stock.change >= 0 ? (
                    <p className="text-green-500 text-sm font-semibold">
                      ▲ {stock.change}%
                    </p>
                  ) : (
                    <p className="text-red-500 text-sm font-semibold">
                      ▼ {Math.abs(stock.change)}%
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInvestment;
