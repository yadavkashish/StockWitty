import React from "react";

const HowToBuyShares = () => {
  const steps = [
    {
      icon: "/image4.1.png", // Replace with actual phone icon path
      title: "1. Reach Out",
      description:
        "Connect with our Relationship Managers to get real-time quotes and the best available prices for unlisted shares.",
    },
    {
      icon: "/image4.2.png", // Replace with actual deal handshake icon path
      title: "2. Deal in Motion",
      description:
        "Once you're ready, make the payment to our bank account. Our team will immediately begin processing your order.",
    },
    {
      icon: "/image4.3.png", // Replace with actual shares transfer icon path
      title: "3. Shares Delivered",
      description:
        "After payment confirmation, we transfer the shares to your demat account—typically within 24 hours. Easy and secure.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold font-['Roboto'] text-[#000000] leading-[100%] mb-3">
          How to Buy Unlisted Shares
        </h2>
        <p className="text-sm text-[#9CA3AF] font-['Roboto']">
          Your 3-step path to smart investing in the unlisted space.
        </p>
      </div>

      {/* Steps */}
      <div className="flex justify-center flex-wrap gap-24 max-w-[1152px] px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-[300px] text-center flex flex-col items-center"
          >
            {/* Glow background */}
            <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-[#0ECBA0]/15 rounded-full blur-[50px] z-0" />

            {/* Icon */}
            <img
              src={step.icon}
              alt={`step-${index + 1}`}
              className="w-[32px] h-[32px] mb-4 z-10"
            />

            {/* Title */}
            <h3 className="text-sm font-semibold font-['Roboto'] text-[#000000] z-10">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-[#000000DE] font-['Roboto'] mt-1 z-10 w-full max-w-[270px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuyShares;
