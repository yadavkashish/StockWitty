import React from "react";
import { Activity } from "lucide-react";

const NewArrivals = () => {
  const cards = [
    [
      { name: "Lenskart", logo: "/image3.1.png", active: true },
      { name: "Global Health Insure", logo: "/image3.3.png" },
      { name: "Global Health Insure", logo: "/image3.3.png" },
      { name: "Global Health Insure", logo: "/image3.3.png" },
    ],
    [
      { name: "TATA Shares", logo: "/image3.2.png" },
      { name: "ZAK ventures ATC.", logo: "/image3.1.png" },
      { name: "Global Health Insure", logo: "image3.2.png" },
      { name: "ZAK ventures ATC.", logo: "image3.3.png" },
    ],
    [
      { name: "Physicswallah", logo: "image3.2.png" },
      { name: "Global Health Insure", logo: "/image3.3.png" },
      { name: "Physicswallah", logo: "image3.2.png" },
      { name: "ZAK ventures ATC.", logo: "image3.1.png" },
    ],
  ];

  return (
    <div className="w-full min-h-[600px] bg-white px-4 sm:px-10 py-16 box-border overflow-hidden">
      {/* Header */}
      <div className="text-center">
       <span className="inline-block  text-[#0CA986] text-center px-3 py-1 rounded-md"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: 700,
        fontSize: '16.6px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
>
  NEW
</span>
        <h1 className="text-2xl sm:text-3xl font-bold mt-1">New Arrivals</h1>
        <p className="text-gray-400 text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
      </div>

      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-screen-xl mx-auto">
        {cards.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5">
            {column.map((item, index) => {
              const isActive = item.active;
              return (
                <div
                  key={index}
                  className={`flex items-center px-4 py-4 gap-4 border-l-[2px] rounded-l-md ${
                    isActive
                      ? "bg-[#DBFBF3] border-[#076550] shadow-[0px_4px_22.3px_0px_#00000040]"
                      : "bg-white border-[#D4D4D4]"
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div className="text-left">
                    <p className="text-black font-semibold text-base leading-tight">
                      {item.name}
                    </p>
                    <p className="text-black text-sm mt-1">₹ 909</p>
                    <div className="flex items-center text-[#16A218] text-xs mt-1 font-medium gap-1">
                      <Activity
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#16A218]"
                      />
                      <span>(+800) 40%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm hover:bg-green-600 transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
