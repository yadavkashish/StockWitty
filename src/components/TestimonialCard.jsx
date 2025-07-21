import React from "react";
import { ThumbsUp } from "lucide-react";

const Card = ({ name, role, image, testimonial }) => {
  return (
    <div className="w-[90%] max-w-[18.625rem] h-auto bg-white rounded-[0.75rem] shadow-[1.25rem_1.5rem_3rem_0px_#00000040] overflow-hidden flex flex-col items-center text-center relative font-['Roboto']">
      
      {/* Curved black top section with SVG */}
      <div className="w-full h-[8.75rem] relative z-0">
        <svg
          viewBox="0 0 298 140"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H298V110C298 110 223 140 149 140C75 140 0 110 0 110V0Z"
            fill="black"
          />
        </svg>

        {/* Label + Stars with ThumbsUp Icon */}
        <div className="absolute top-[1.5rem] left-1/2 -translate-x-1/2 text-white z-10 flex flex-col items-center">
          <div className="flex items-center gap-[0.375rem]">
            <div className="w-[1.17rem] h-[1.17rem] bg-white rounded-full flex items-center justify-center">
              <ThumbsUp className="w-[0.75rem] h-[0.75rem] text-black" />
            </div>
            <p className="text-[0.75rem] font-semibold text-white">Testimonial</p>
          </div>
          <div className="flex gap-[0.125rem] mt-[0.375rem]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-white text-[0.875rem]">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-[11.25rem] h-[11.25rem] rounded-full overflow-hidden border-[0.375rem] border-white absolute top-[5.25rem] z-10 shadow-[0_1.08rem_2.25rem_0_#4747B933]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Spacer for image overlap */}
      <div className="mt-[7.8125rem]" />

      {/* Name & Role */}
      <div className="px-4 mt-[1rem]">
        <h3 className="text-[0.875rem] font-bold text-black leading-[1.25rem]">
          {name}
        </h3>
        <p className="text-[0.75rem] text-[#6B7280] leading-[1.125rem]">
          {role}
        </p>
      </div>

      {/* Testimonial Text */}
      <div className="mt-4 px-5 w-[86%] h-auto min-h-[6rem]">
        <p className="text-[1rem] text-[#000000DE] font-normal italic leading-[1.5rem] text-center">
          “{testimonial}”
        </p>
      </div>
    </div>
  );
};

export default Card;
