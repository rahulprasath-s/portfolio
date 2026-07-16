import Image from "next/image";
import Link from "next/link";

const projectCards = [
  {
    title: "Careflow Intelligence",
    image: "/project-careflow-intelligence.jpg",
    tag: "Local RAG",
  },
  {
    title: "Archisight",
    image: "/archi-sight.jpg",
    tag: "3D Visualization",
  },
  {
    title: "AI Daily Brief",
    image: "/project-ai-daily-brief.jpg",
    tag: "Automation",
  },
];

export default function WebsitePromoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 pb-8">
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-cyan-300/40 hover:text-white"
        >
          Back to portfolio
        </Link>
        <a
          href="https://jitter.video/template/website-promo/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-100"
        >
          Jitter reference
        </a>
      </div>

      <section className="relative mx-auto aspect-video max-h-[calc(100vh-7rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.28),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.24),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="promo-shimmer absolute inset-y-0 left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="absolute left-8 top-8 z-20 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
          Website promo · 16:9
        </div>

        <div className="absolute left-8 top-24 z-20 max-w-md">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
            Rahulprasath Selvaraj
          </p>
          <h1 className="text-5xl font-black leading-[0.94] tracking-tight sm:text-6xl">
            AI systems, automation, and useful product builds.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/65">
            A motion-ready preview page with layered screen movement, reveal timing, and portfolio project frames.
          </p>
        </div>

        <div className="promo-float-a absolute -left-10 bottom-12 z-10 h-44 w-72 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 h-2 w-20 rounded-full bg-cyan-300/60" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded-full bg-white/20" />
            <div className="h-4 w-5/6 rounded-full bg-white/15" />
            <div className="h-4 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-2xl bg-cyan-300/20" />
            <div className="h-14 rounded-2xl bg-blue-400/20" />
            <div className="h-14 rounded-2xl bg-teal-300/20" />
          </div>
        </div>

        <div className="promo-float-b absolute right-4 top-16 z-10 h-48 w-80 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-white/30" />
            <div className="h-8 w-20 rounded-full bg-white text-slate-950" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-500/20" />
            <div className="h-24 rounded-2xl bg-gradient-to-br from-amber-300/25 to-teal-400/20" />
          </div>
        </div>

        <div className="absolute bottom-[-10%] right-[8%] z-20 h-[76%] w-[56%] rotate-[-2deg] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/10 px-5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
            <span className="ml-4 h-4 w-44 rounded-full bg-white/15" />
          </div>
          <div className="promo-scroll">
            <div className="min-h-[420px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8">
              <div className="mb-8 h-6 w-40 rounded-full bg-cyan-300/30" />
              <div className="max-w-lg space-y-3">
                <div className="h-12 rounded-full bg-white/90" />
                <div className="h-12 w-4/5 rounded-full bg-white/80" />
                <div className="h-4 w-2/3 rounded-full bg-white/25" />
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {projectCards.map((project) => (
                  <div key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                    <div className="relative h-24">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">{project.tag}</p>
                      <h2 className="mt-1 text-sm font-black">{project.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-[420px] bg-white p-8 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-blue-700">Experience</p>
              <h2 className="mt-3 text-4xl font-black">Working Student - AI & Automation Engineer</h2>
              <p className="mt-3 max-w-xl text-slate-600">Soccerkinetics · Part-time · Ingolstadt, Bavaria, Germany</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {["AI Automation", "LLM Workflows", "Process Design"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-4 h-8 w-8 rounded-full bg-blue-600" />
                    <p className="font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-[420px] bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-950 p-8">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-white/70">Portfolio Snapshot</p>
              <h2 className="mt-3 max-w-xl text-5xl font-black leading-tight">Practical AI products with clean execution.</h2>
              <div className="mt-10 flex gap-3">
                <span className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950">RAG</span>
                <span className="rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white">Automation</span>
                <span className="rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white">3D</span>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-reveal absolute bottom-10 left-10 z-30 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Now featuring</p>
          <p className="mt-2 text-2xl font-black">Soccerkinetics Experience</p>
        </div>
      </section>
    </main>
  );
}
