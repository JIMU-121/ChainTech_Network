export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  onClick,
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-[#9C6BFF] hover:bg-[#8555e6] text-white",
    secondary: "bg-[#292929] hover:bg-[#3a3a3a] text-white",
    outline: "bg-transparent border border-white/10 hover:border-white/30 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        px-6 py-3 rounded-lg
        text-sm font-medium
        transition-all duration-200
        flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && <i className={icon} />}
      {children}
      {icon && iconPosition === "right" && <i className={icon} />}
    </button>
  );
}
