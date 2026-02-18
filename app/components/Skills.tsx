const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          Tech <span className="text-indigo-500">Skills</span>
        </h2>
        <p className="text-gray-500 text-center mb-10">
          현재 사용하고 있거나 경험해 본 기술 스택입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-gray-800">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
