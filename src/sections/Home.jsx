import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SocialIcon from "../components/SocialIcon";
import StatCard from "../components/StatCard";
import { personalInfo, socialLinks, stats } from "../data/content";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="bg-black text-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="flex flex-col space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight">
              PRODUCT
              <br />
              DESIGNER
            </h1>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start opacity-80">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} href={social.href} />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                variant="secondary"
                icon="fa-solid fa-circle-arrow-down"
                className="w-full sm:w-auto"
              >
                Download Curriculum Vitae
              </Button>
            </div>
          </div>

          <div className="rounded overflow-hidden flex justify-center items-center order-1 lg:order-2">
            <img
              src={personalInfo.heroImage}
              alt="Designer workspace"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 items-center border border-[#646464] rounded-lg p-6 sm:p-8 lg:p-12">
            {stats.map((stat, index) => (
              <>
                <StatCard key={index} value={stat.value} label={stat.label} />
                {index < stats.length - 1 && (
                  <div className="hidden sm:flex justify-center">
                    <img src="src/assets/Dawn.svg" className="w-6 h-6 lg:w-8 lg:h-8" alt="divider" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
