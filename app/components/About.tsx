export default function About() {
  return (
    <section id="about" className="py-14 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-2xl shadow-indigo-200">
              <span className="text-7xl">👩‍💻</span>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              안녕하세요! 홍길동입니다.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              저는 사용자 중심의 웹 서비스를 개발하는 프론트엔드 개발자입니다.
              새로운 기술을 배우고 적용하는 것을 즐기며, 코드의 품질과 사용자
              경험 모두를 중요하게 생각합니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              React와 Next.js를 주로 사용하며, 디자인 감각을 살려 직관적이고
              아름다운 UI를 구현하는 것이 목표입니다. 팀원들과의 원활한 소통과
              협업을 통해 더 나은 결과물을 만들어가고 있습니다.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-indigo-500">📍</span>
                서울, 대한민국
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-indigo-500">🎓</span>
                컴퓨터공학과 졸업
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-indigo-500">💼</span>
                3년 경력
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
