const projects = [
  {
    title: "쇼핑몰 웹앱",
    description:
      "React와 TypeScript로 개발한 풀스택 이커머스 플랫폼입니다. 장바구니, 결제, 상품 관리 기능을 구현했습니다.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    emoji: "🛍️",
    gradient: "from-pink-400 to-rose-500",
    github: "#",
    demo: "#",
  },
  {
    title: "날씨 대시보드",
    description:
      "OpenWeather API를 활용한 실시간 날씨 정보 대시보드입니다. 위치 기반으로 현재 날씨와 주간 예보를 제공합니다.",
    tags: ["Next.js", "Tailwind CSS", "API"],
    emoji: "🌤️",
    gradient: "from-sky-400 to-blue-500",
    github: "#",
    demo: "#",
  },
  {
    title: "할 일 관리 앱",
    description:
      "드래그 앤 드롭을 지원하는 칸반 보드 스타일의 할 일 관리 앱입니다. 로컬스토리지로 데이터를 영구 저장합니다.",
    tags: ["React", "TypeScript", "CSS Modules"],
    emoji: "📝",
    gradient: "from-violet-400 to-purple-500",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        <p className="text-gray-500 text-center mb-10">
          직접 개발한 주요 프로젝트들입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
