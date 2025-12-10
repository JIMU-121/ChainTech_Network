import React from "react";
export default function Home() {
  const [open, setOpen] = React.useState(false);
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
    <>
      <nav
        className="w-full flex justify-between items-center pt-[50px] pr-[100px] pb-[30px] pl-[100px] opacity-100"
        style={{ height: "120px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="src\assets\group-1.png"
            alt="logo"
            className="h-[30px] w-auto object-contain"
          />
          <span className="text-[24px] font-bold">Web</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-white text-sm font-light">
          <li className="cursor-pointer ">Home</li>
          {/* Portfolio Dropdown */}
        <li
          className="cursor-pointer relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex items-center space-x-1">
            <span>Portfolio</span>
            <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          {/* Dropdown Box */}
          {open && (
            <div className="absolute top-6 left-0 bg-[#9F63FF] py-3 px-4 rounded-xl border border-white/40 w-[240px] shadow-xl space-y-3">

              {/* Tiny arrow pointer */}
              <div className="absolute -top-2 left-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#9F63FF]"></div>

              {/* Dropdown Items */}
              <DropdownItem />
              <DropdownItem />
            </div>
          )}
        </li>
          <li className="cursor-pointer ">Skills</li>
          <li className="cursor-pointer ">About Me</li>
        </ul>

        {/* Button */}
        <button className="bg-[#9C6BFF] text-white text-xs px-4 py-2 rounded-lg hover:opacity-80 transition">
          Contact Me
        </button>
      </nav>
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-3">
        <div className="max-w-9xl w-full  grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center  space-y-5">
            <h1 className="text-9xl font-extrabold leading-tight">
              PRODUCT
              <br />
              DESIGNER
            </h1>

            <h2 className="text-7xl font-bold mt-3 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              CRISTIAN MUN0Z
            </h2>
            {/* Social Icons */}
            <div className="flex gap-6 text-3xl justify-center text-white text-color-#bfb8b8 mt-6 opacity-80 space-x-4 items-center border-white w-ful p-4">
              <i className="fa-brands fa-instagram border-white border-1 rounded p-1 w-37.14"></i>
              <i className="fa-brands fa-figma border-white border-1 rounded p-1  w-37.14"></i>
              <i className="fa-brands fa-linkedin border-white border-1 rounded p-1  w-37.14"></i>

              <i className="fa-brands fa-twitter border-white border-1 rounded p-1  w-37.14"></i>
              <i className="fa-brands fa-telegram border-white border-1 rounded p-1  w-37.14"></i>
              <i className="fa-brands fa-medium border-white border-1 rounded p-1  w-37.14"></i>
            </div>

            <div className="flex  gap-8  mt-10 mx-10 color-#bfb8b8 border-1">
              <button className="text-white flex items-center w-[875px] h-[52px] gap-[8px] pt-[16px] pr-[24px] pb-[16px] pl-[32px] bg-[#292929] justify-center ">
                Download Curriculum Vitae{" "}
                <i class="fa-light fa-circle-arrow-down"></i>
              </button>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="rounded overflow-hidden justify-center flex items-center">
            <img
              src="src\assets\home.png"
              alt="Designer workspace"
              className="w-100% h-653px object-cover"
            />
          </div>
        </div>
      </div>

      {/* BOX */}
        <div class="min-h-screen bg-black text-white flex items-center justify-center ">
          <div class="max-w-7xl w-full flex items-center justify-around space-x-8 border-1 border- [#646464] rounded-lg p-8">
            <div class="text-[#C7FFB0]">
              <h2 class="text-[70px] font-bold leading-none">90%</h2>
              <p class="text-[20px] leading-tight">
                Job Success <br /> Score on Upwork
              </p>
            </div>

            <img src="src\assets\Dawn.svg" class="w-[30px] h-[30px]" />

            <div class="text-[#C7FFB0]">
              <h2 class="text-[70px] font-bold leading-none">&gt;25.000</h2>
              <p class="text-[20px] leading-tight">
                Duplicates on Figma <br /> Community
              </p>
            </div>

            <img src="src\assets\Dawn.svg" class="w-[30px] h-[30px]" />

            <div class="text-[#C7FFB0]">
              <h2 class="text-[70px] font-bold leading-none">&gt;2K</h2>
              <p class="text-[20px] leading-tight">
                In Finished <br /> Works
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
