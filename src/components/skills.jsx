import React from "react";

const skills = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", logo: "/css-icon.svg" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Power BI", logo: "/power-bi-icon.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/node.js/339933" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-4"
              />
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};