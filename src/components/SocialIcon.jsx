export default function SocialIcon({ icon, href, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        border border-white/20 rounded p-2 sm:p-3
        hover:border-white/40 hover:bg-white/5
        transition-all duration-200
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12
        ${className}
      `}
    >
      <i className={`${icon} text-lg sm:text-xl`} />
    </a>
  );
}
