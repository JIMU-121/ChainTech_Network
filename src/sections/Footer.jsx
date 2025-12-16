import { personalInfo, navigation } from "../data/content";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <img
            src={personalInfo.logo}
            alt="logo"
            className="h-[24px] sm:h-[30px] w-auto object-contain"
          />
          <span className="text-lg sm:text-[24px] font-bold">Web</span>
        </div>

        <nav className="w-full sm:w-auto">
          <ul className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm opacity-80 flex-wrap">
            {navigation.map((item, index) => (
              <li key={index} className="hover:opacity-100 transition">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
