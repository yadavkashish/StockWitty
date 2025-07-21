import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full flex justify-center bg-white shadow-sm">
      <nav className="w-full max-w-[94rem] h-[5.2rem] px-[2.5%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Invest Smart Logo"
            className="w-[7.875rem] h-[2.82rem] object-contain"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-[2rem] items-center text-[#1E1E1E] font-medium text-[0.94rem]">
          <li><a href="#" className="hover:text-[#00d585] transition">All Unlisted Shares</a></li>
          <li><a href="#" className="hover:text-[#00d585] transition">DRHP-Filed</a></li>
          <li><a href="#" className="hover:text-[#00d585] transition">Screener</a></li>
          <li><a href="#" className="hover:text-[#00d585] transition">Media Coverage</a></li>
          <li><a href="#" className="hover:text-[#00d585] transition">Contact Us</a></li>
        </ul>

        {/* Right: Search + Sign In */}
        <div className="flex items-center gap-[1.5rem]">
          {/* Search Box */}
          <div className="relative w-[12rem] sm:w-[14rem] md:w-[18rem] h-[2.75rem]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-[1.25rem] pr-[2.5rem] py-[0.625rem] rounded-[0.625rem] border border-[#D4D4D4] text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d585]"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[0.625rem] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Sign In Button */}
          <button className="bg-gradient-to-r from-[#006838] to-[#00d585] text-white text-sm font-medium px-[1.7rem] py-[0.52rem] rounded-[0.325rem] shadow-md">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
