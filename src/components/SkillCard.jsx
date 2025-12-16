export default function SkillCard({ title, description, icon }) {
  return (
    <div className="w-full border border-[#4d4d4d] rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[#6d6d6d] transition-all duration-300">

      <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] flex-shrink-0">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}
