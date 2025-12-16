import { useState } from "react";
import Button from "./Button";
import { navigation, personalInfo } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const DropdownItem = () => (
    <div className="flex items-center space-x-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg">
      <div className="w-8 h-8 bg-white rounded" />
      <div className="flex flex-col">
        <span className="font-medium">Project Title</span>
        <span className="text-xs text-white/70">Focus on Insights</span>
      </div>
    </div>
  );

  return (
    <nav className="w-full px-6 sm:px-12 lg:px-[100px] py-6 lg:py-8 flex justify-between items-center">

      <div className="flex items-center gap-3">
        <img
          src={personalInfo.logo}
          alt="logo"
          className="h-[24px] sm:h-[30px] w-auto object-contain"
        />
        <span className="text-lg sm:text-[24px] font-bold">Web</span>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white text-2xl z-50"
      >
        <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`} />
      </button>

      <ul className={`
        ${isOpen ? "flex" : "hidden"} lg:flex
        flex-col lg:flex-row
        items-center gap-6
        absolute lg:relative
        top-20 lg:top-0
        left-0 lg:left-auto
        w-full lg:w-auto
        bg-black lg:bg-transparent
        p-6 lg:p-0
        border-t lg:border-0 border-white/10
        text-white text-sm font-light
        z-40
      `}>
        {navigation.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer relative w-full lg:w-auto text-center lg:text-left"
            onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
            onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
          >
            {item.hasDropdown ? (
              <>
                <div className="flex items-center justify-center lg:justify-start space-x-1">
                  <span>{item.label}</span>
                  <span className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </div>

                {dropdownOpen && (
                  <div className="hidden lg:block absolute top-6 left-0 bg-[#9F63FF] py-3 px-4 rounded-xl border border-white/40 w-[240px] shadow-xl space-y-3">
                    <div className="absolute -top-2 left-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#9F63FF]" />
                    <DropdownItem />
                    <DropdownItem />
                  </div>
                )}
              </>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Button variant="primary" className="text-xs">
          Contact Me
        </Button>
      </div>
    </nav>
  );
}
