import React from "react";
import { ThumbsUp } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Freddie Deckow",
    role: "Lead Marketing Administrator",
    image: "/image5.png",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Cameron Lehnar",
    role: "Founder, Zeeko Technologies",
    image: "/image5.png",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Gary Medhurst",
    role: "Property Sales Executive",
    image: "/image5.png",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#064F3E] py-20 px-6 w-full flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-12 flex flex-col items-center gap-[8px]">
        <p className="text-[#B5F6E7] text-[12px] font-['Orbitron'] font-bold leading-[100%] tracking-wide uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-white text-[32px] leading-[106%] font-bold text-center">
          See What Expert Says <br /> About Us
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="flex gap-6 flex-wrap justify-center max-w-[942px]">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            role={item.role}
            image={item.image}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
