export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-4">
          안녕하세요 👋
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          저는{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            홍길동
          </span>
          입니다
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-4">
          Frontend Developer · UI/UX Enthusiast
        </p>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          사용자 경험을 중심으로 아름답고 직관적인 웹 서비스를 만드는 것을
          좋아합니다. React와 Next.js를 주로 사용합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            연락하기
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
