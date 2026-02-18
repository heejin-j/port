const skills = [
  { name: "JS",          color: "from-yellow-400 to-amber-400",   border: "border-yellow-500/40", bg: "bg-yellow-500/10",   text: "text-yellow-300" },
  { name: "TS",          color: "from-blue-400 to-sky-400",       border: "border-blue-500/40",   bg: "bg-blue-500/10",     text: "text-blue-300" },
  { name: "React",       color: "from-cyan-400 to-sky-300",       border: "border-cyan-500/40",   bg: "bg-cyan-500/10",     text: "text-cyan-300" },
  { name: "Tailwindcss", color: "from-teal-400 to-emerald-400",   border: "border-teal-500/40",   bg: "bg-teal-500/10",     text: "text-teal-300" },
  { name: "Next.js",     color: "from-gray-300 to-white",         border: "border-gray-400/40",   bg: "bg-gray-400/10",     text: "text-gray-200" },
  { name: "Premierepro", color: "from-violet-400 to-purple-400",  border: "border-violet-500/40", bg: "bg-violet-500/10",   text: "text-violet-300" },
  { name: "Figma",       color: "from-pink-400 to-rose-400",      border: "border-pink-500/40",   bg: "bg-pink-500/10",     text: "text-pink-300" },
];

export default function TechSkill() {
  return (
    <section className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 sm:p-8">
      {/* Section Title */}
      <div className="mb-4">
        <h2 className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Tech Skill
        </h2>
        <div className="mt-2 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
      </div>

      {/* Skill Badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${skill.border} ${skill.bg} ${skill.text} text-xs font-bold tracking-wide shadow-sm`}
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.color}`}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
