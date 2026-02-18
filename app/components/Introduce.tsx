export default function Introduce() {
  return (
    <section className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 sm:p-8">
      {/* Section Title */}
      <div className="mb-4">
        <h2 className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Introduce
        </h2>
        <div className="mt-2 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
      </div>

      {/* Content Box */}
      <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 px-5 py-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          안녕하세요! PM과 프론트엔드 개발을 함께 공부하고 있는 이프로입니다.
          사용자 중심의 서비스를 기획하고 직접 구현하는 것에 큰 보람을 느낍니다.
          새로운 기술을 빠르게 습득하고 팀과 함께 성장하는 개발자를 목표로 하고 있습니다. 잘 부탁드립니다! 😊
        </p>
      </div>
    </section>
  );
}
