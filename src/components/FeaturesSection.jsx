import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/image 1.png", // stack of money icon
      title: "Unlisted, But Not Unseen.",
      description: "We bring shadow markets into the spotlight.",
    },
    {
      icon: "/image 2.png", // chart arrow icon
      title: "Trends, Traps, and Truth Bombs.",
      description: "No-fluff commentary to keep you two steps ahead.",
    },
    {
      icon: "/image 3.png", // data chart icon
      title: "Beyond Numbers. Into Narratives.",
      description: "Because data without context is just noise.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-[274px] h-[113px] flex flex-col items-center text-center"
          >
            {/* Radial background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#0ECBA0]/15 rounded-full blur-[40px] z-0" />

            {/* Icon */}
            <img
              src={feature.icon}
              alt="icon"
              className="w-[32px] h-[32px] z-10 mb-2"
            />

            {/* Title */}
            <h3 className="text-sm font-semibold text-black z-10">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-[#4B5563] z-10 mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
