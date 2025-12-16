import SkillCard from "../components/SkillCard";
import { skills } from "../data/content";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
