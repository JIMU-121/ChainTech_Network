export default function AboutMeSection() {
  return (
    <section className="
      w-full 
      py-20 
      text-center 
      text-white 
      bg-gradient-to-r 
      from-[#F55A00] 
      via-[#E6246C] 
      to-[#F9A86C]
    ">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Kaleb Lechtenberg
        </h2>

        {/* Testimonial Text */}
        <p className="text-[16px] leading-relaxed opacity-90">
          "Working with this freelancer has been great. His attention to detail 
          is unparalleled and finished all work ahead of schedule. Will gladly 
          send more work and I do not hesitate to recommend him to you on your 
          project also."
        </p>

        {/* Shield Icon */}
        <i className="fa-solid fa-shield fa-2xl mt-10 opacity-90 color-[#ffffff]"></i>

      </div>
    </section>
  );
}
