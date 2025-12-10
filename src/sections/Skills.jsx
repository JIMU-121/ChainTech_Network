import React from "react";

export default function SkillsSection() {
  const skills = [
    {
      title: "UX Design",
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",

    },
    {
      title: "UI Design",
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",

    },
    {
      title: "UX Design",
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",

    },
    {
      title: "UX Design",
      desc: "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",

    },
  ];

  return (
    <section className="bg-black text-white px-10 py-16 min-h-screen">
      <div className="w-full max-w-[1531px] space-y-10 px-4">

        <h2 className="text-4xl font-extrabold mb-10">SKILLS</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="w-full h-[320px] border border-[#4d4d4d] rounded-[10px]
                         p-[40px] pr-[50px] pb-[60px] pl-[40px]
                         flex items-center gap-8"
            >
              {/* Image-based circle */}
              <div className="relative w-[120px] h-[120px]">
                <img
                  src="src\assets\Graph.png"
                  alt="skill circle"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[22px] font-bold mb-1">{skill.title}</h3>
                <p className="text-[14px] leading-relaxed opacity-80 max-w-[500px]">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
