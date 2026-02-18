import Profile from "./components/Profile";
import Introduce from "./components/Introduce";
import TechSkill from "./components/TechSkill";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center px-4 py-10">
      {/* Outer Card */}
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-5 sm:p-8 space-y-4">
        <Profile />
        <Introduce />
        <TechSkill />
      </div>
    </main>
  );
}
