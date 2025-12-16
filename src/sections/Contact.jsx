import { contactMessage } from "../data/content";

export default function ContactSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#A87FF3] rounded-2xl p-6 sm:p-8 lg:p-12 overflow-hidden min-h-[200px] sm:min-h-[250px] flex items-center">

          <img
            className="hidden lg:block absolute bottom-4 left-4 w-[100px] h-[80px] opacity-60"
            alt="Pattern"
            src={contactMessage.leftPattern}
          />

          <img
            className="hidden lg:block absolute top-4 right-4 w-[100px] h-[80px] rotate-180 opacity-60"
            alt="Pattern"
            src={contactMessage.rightPattern}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full">
            <img
              className="w-32 sm:w-40 lg:w-48 h-auto object-contain flex-shrink-0"
              alt="Contact illustration"
              src={contactMessage.image}
            />

            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {contactMessage.title}
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                {contactMessage.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
