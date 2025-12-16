import { testimonial } from "../data/content";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16 lg:py-20 text-center text-white bg-gradient-to-r from-[#F55A00] via-[#E6246C] to-[#F9A86C]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          {testimonial.author}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 mb-8">
          {testimonial.text}
        </p>

        <i className="fa-solid fa-shield text-4xl sm:text-5xl opacity-90"></i>
      </div>
    </section>
  );
}
