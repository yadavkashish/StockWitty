import React from "react";

const data = [
  { name: "Alpha Corp", priceRange: "₹ 100‑120", ipoPrice: "₹ 110", cmp: "₹ 200", gainLoss: "+81.82%", isGain: true },
  { name: "Beta Ltd", priceRange: "₹ 150‑180", ipoPrice: "₹ 160", cmp: "₹ 120", gainLoss: "-25.00%", isGain: false },
  { name: "Gamma Inc", priceRange: "₹ 200‑220", ipoPrice: "₹ 210", cmp: "₹ 315", gainLoss: "+50.00%", isGain: true },
  { name: "Delta Tech", priceRange: "₹ 80‑100", ipoPrice: "₹ 95", cmp: "₹ 95", gainLoss: "0.00%", isGain: true },
  { name: "Epsilon Co", priceRange: "₹ 130‑150", ipoPrice: "₹ 140", cmp: "₹ 98", gainLoss: "-30.00%", isGain: false },
  { name: "Zeta Enterprises", priceRange: "₹ 110‑130", ipoPrice: "₹ 120", cmp: "₹ 240", gainLoss: "+100.00%", isGain: true },
  { name: "Eta Holdings", priceRange: "₹ 90‑110", ipoPrice: "₹ 100", cmp: "₹ 150", gainLoss: "+50.00%", isGain: true },
  { name: "Theta Services", priceRange: "₹ 70‑90", ipoPrice: "₹ 80", cmp: "₹ 77", gainLoss: "-3.75%", isGain: false },
  { name: "Iota Solutions", priceRange: "₹ 120‑140", ipoPrice: "₹ 130", cmp: "₹ 143", gainLoss: "+10.00%", isGain: true },
  { name: "Kappa Trading", priceRange: "₹ 140‑160", ipoPrice: "₹ 150", cmp: "₹ 135", gainLoss: "-10.00%", isGain: false },
  { name: "Lambda Group", priceRange: "₹ 160‑180", ipoPrice: "₹ 170", cmp: "₹ 255", gainLoss: "+50.00%", isGain: true },
  { name: "Mu Ventures", priceRange: "₹ 180‑200", ipoPrice: "₹ 190", cmp: "₹ 180", gainLoss: "-5.26%", isGain: false },
];

const PastIPOPerformance = () => {
  return (
    <div className="w-full bg-[#F2F2F2] flex flex-col items-center px-4 sm:px-8 lg:px-24 py-20">
      {/* Section Heading */}
      <div className="text-center mb-10 max-w-xl">
        <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold leading-[100%] font-['Roboto'] text-black">
          Past IPO Performance
        </h2>
        <p className="text-sm text-[#362F2F99] mt-2 font-['Roboto'] leading-[100%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
      </div>

      {/* Table Card */}
      <div className="w-full max-w-6xl bg-white rounded-[2rem] p-6 sm:p-10 shadow-md overflow-x-auto">
        <table className="w-full border-collapse font-['Roboto'] min-w-[640px]">
          <thead>
            <tr className="text-left">
              {["Name", "Unlisted Share Price", "IPO Price", "CMP", "Gain or Loss"].map((heading, idx) => (
                <th
                  key={idx}
                  className="px-4 sm:px-6 py-4 text-[#000000DE] font-bold text-sm leading-6 tracking-wide"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t border-[#E5E5E5]">
                {/* Name */}
                <td className="px-4 sm:px-6 py-4 flex items-center gap-2">
                  <img src="/images/company.png" alt="logo" className="w-5 h-5 rounded-full" />
                  <span className="text-[#000000DE] font-bold text-sm leading-6 tracking-wide">
                    {row.name}
                  </span>
                </td>

                {/* Prices */}
                <td className="px-4 sm:px-6 py-4 text-[#000000DE] font-medium text-sm">{row.priceRange}</td>
                <td className="px-4 sm:px-6 py-4 text-[#000000DE] font-medium text-sm">{row.ipoPrice}</td>
                <td className="px-4 sm:px-6 py-4 text-[#000000DE] font-medium text-sm">{row.cmp}</td>

                {/* Gain or Loss */}
                <td className="px-4 sm:px-6 py-4">
  <div
    className={`w-[3.875rem] h-6 rounded-full flex items-center justify-center text-xs font-medium ${
      row.isGain ? "bg-[#DBFFE3] text-[#16A218]" : "bg-[#FF3B3030] text-[#F2574D]"
    }`}
  >
    {row.gainLoss}
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-8 text-sm text-gray-500 font-medium">
          <span>Rows per page: 10</span>
          <div className="ml-6 flex gap-3 items-center">
            <span className="text-black font-medium">1 of {Math.ceil(data.length / 10)}</span>
            <button className="text-lg px-2">&lt;</button>
            <button className="text-lg px-2">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastIPOPerformance;
