export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 ">
      <div className="max-w-[1530px] mx-auto px-15 mt-0 mb-0 flex items-center justify-between">
        
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <img
            src="src\assets\group-1.png"
            alt="logo"
            className="h-[30px] w-auto object-contain"
          />
          <span className="text-[24px] font-bold">Web</span>
        </div>

        {/* Right Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-[14px] opacity-80">
            <li className="hover:opacity-100 transition">Home</li>
            <li className="hover:opacity-100 transition">Portfolio</li>
            <li className="hover:opacity-100 transition">Skills</li>
            <li className="hover:opacity-100 transition">About Me</li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}
