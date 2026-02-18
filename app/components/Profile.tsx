export default function Profile() {
  return (
    <section className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 sm:p-8">
      {/* Section Title */}
      <div className="mb-5">
        <h2 className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
          Profile : Title
        </h2>
        <div className="mt-2 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
      </div>

      <div className="flex flex-col sm:flex-row gap-7 items-start">
        {/* Photo */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <div className="p-0.5 rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 shadow-lg shadow-violet-500/30">
            <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500 text-sm font-medium">사진</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          {/* I AM */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              _I AM
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-14 shrink-0">이름 :</span>
                <span className="text-sm font-bold text-white">이프로</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs text-gray-500 w-14 shrink-0">포지션 :</span>
                <span className="text-sm font-semibold text-gray-200">
                  PM 서비스 기획 / FE Developer(jr)
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              _Contact
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-14 shrink-0">Email :</span>
                <a
                  href="mailto:leepro@naver.com"
                  className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                >
                  leepro@naver.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-14 shrink-0">Phone :</span>
                <span className="text-sm text-gray-300">+082 - 1234-5678</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Channel */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              _Channel
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-300 text-xs font-semibold hover:bg-pink-500/20 transition-colors"
              >
                <span>📸</span> SNS @leepro
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-xs font-semibold hover:bg-violet-500/20 transition-colors"
              >
                <span>💻</span> github.com/leepro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
