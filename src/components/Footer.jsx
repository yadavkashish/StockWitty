import React from "react";
import { SendHorizonal, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Newsletter Section */}
      <div className="bg-[#DDF7FB] py-10 px-4">
        <div className="max-w-screen-lg mx-auto flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Newsletter Label */}
            <p className="text-[#0A142F] text-[1.17rem] font-medium text-center font-sans">
              Newsletter
            </p>

            {/* Email Input with Send Button */}
            <div className="flex items-center bg-white rounded-full px-6 py-2 shadow-md w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow text-sm text-black placeholder:text-gray-500 bg-transparent outline-none border-none"
              />
              <button className="w-8 h-8 bg-[#005C45] hover:bg-green-800 rounded-full flex items-center justify-center">
                <SendHorizonal className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#EEF6FF] py-10 px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="StockWitty"
            className="w-[126px] h-[45px] object-contain"
            style={{ mixBlendMode: "darken" }}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[0.813rem] text-[#0A1E2C] font-normal mb-4">
          <a href="#">Home</a>
          <a href="#">Experience</a>
          <a href="#">News</a>
          <a href="#">About us</a>
          <a href="#">Jobs</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <Facebook className="w-4 h-4 cursor-pointer text-black stroke-[1.5]" />
          <Twitter className="w-4 h-4 cursor-pointer text-black stroke-[1.5]" />
          <Youtube className="w-4 h-4 cursor-pointer text-black stroke-[1.5]" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">© Copyright 2019 - Lift Media</p>
      </div>
    </footer>
  );
}
