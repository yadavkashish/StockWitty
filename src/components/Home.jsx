import React from "react";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-[5%]">
      <div className="max-w-[90rem] w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 z-10 text-center lg:text-left">
          <h1 className="font-['Orbitron'] text-[2.8125rem] md:text-[3.2rem] font-semibold text-black leading-[100%]">
            Invest Smart
          </h1>
          <p className="text-[#0D7739] font-['Roboto'] text-[1rem] md:text-[1.05rem] leading-[100%]">
            Cut through the financial fog with insights that make you think—and smile.
          </p>
          <p className="text-black font-['Roboto'] text-[0.95rem] md:text-[1rem] leading-[100%]">
            We break down IPOs, unlisted shares, market trends, and everything in between with a fresh, witty take. Our content is sharp, fun, and built for retail investors, market geeks, and anyone tired of bland financial chatter.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <button className="px-5 py-2 text-sm font-medium text-white rounded bg-gradient-to-r from-[#0C7031] to-[#11F1C4] shadow">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Map and Chart */}
        <div className="relative w-full lg:w-[59.2%] h-[70vh] lg:h-[79vh] z-0">
          {/* World Map */}
          <img
            src="/map.jpg"
            alt="World Map"
            className="w-full h-full object-cover rounded-[20px]"
          />

          {/* Transparent Chart Overlay */}
          <div
            className="absolute z-20 border border-[#0A876B85] bg-[#10E1B245] backdrop-blur-md overflow-hidden"
            style={{
              width: "45%",
              height: "70.1%",
              top: "12%",
              left: "52%",
              borderRadius: "1.25rem",
            }}
          >
            <img
              src="/lines.png"
              alt="Chart"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
