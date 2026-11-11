import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Code2, Cpu, Download, MapPin, Sparkles, User } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Spotlight, SpotlightCard } from "@/components/ui/primitives";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-flex h-[1.15em] min-w-[10ch] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 19 }}
          className="bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text whitespace-nowrap font-serif italic text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Bingkai foto profil modern bergaya 21st.dev dengan floating badges & halo glow */
function ProfilePortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[390px]">
      {/* Ambient halo behind frame */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-accent/25 via-emerald-500/15 to-cyan-400/25 opacity-80 blur-2xl" />

      {/* Decorative corner orbital rings */}
      <div className="pointer-events-none absolute -top-5 -right-5 h-24 w-24 rounded-full border border-accent/30" />
      <div className="pointer-events-none absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-cyan-400/25" />

      <SpotlightCard className="group relative overflow-hidden rounded-[2rem] border-white/15 bg-zinc-900/65 p-3 shadow-2xl">
        {/* Top light line */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Portrait container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-gradient-to-b from-zinc-900 via-[#08121e] to-zinc-950">
          {/* Subtle cyber grid inside portrait background */}
          <div className="bg-cyber-grid absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(163,230,53,0.22),rgba(34,211,238,0.1)_45%,transparent_75%)]" />

          {!imgError && profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              onError={() => setImgError(true)}
              className="relative z-10 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            /* Stylized avatar placeholder when public/profile.jpg hasn't been placed yet */
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="relative mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-accent/20 via-emerald-500/10 to-cyan-400/20 shadow-[0_0_40px_rgba(163,230,53,0.25)]">
                <User className="h-12 w-12 text-accent" />
                <span className="absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-zinc-950">
                  NA
                </span>
              </div>
              <p className="text-base font-semibold text-white">{profile.name}</p>
              <p className="mt-1 font-mono text-xs text-accent">Full-Stack · IoT · AI</p>
              <div className="mt-5 rounded-xl border border-dashed border-white/15 bg-black/40 px-3.5 py-2 font-mono text-[11px] leading-relaxed text-zinc-400">
                Taruh foto Anda di <span className="text-zinc-200">public/profile.jpg</span>
              </div>
            </div>
          )}

          {/* Bottom gradient vignette + name plate */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-zinc-950/95 via-zinc-950/55 to-transparent p-5 pt-14">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Portfolio Resmi</p>
                <h2 className="text-lg font-semibold tracking-tight text-white">{profile.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-44" fill="#a3e635" />
      <Spotlight className="top-10 right-0 md:right-20" fill="#22d3ee" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.h1
              {...fade(0.08)}
              className="text-4xl leading-[1.06] font-semibold tracking-tight text-white sm:text-6xl lg:text-[3.65rem]"
            >
              Halo, saya{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                {profile.shortName}
              </span>
              .
              <br />
              <RotatingRole />
            </motion.h1>

            <motion.p {...fade(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {profile.summary}
            </motion.p>

            <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-300 via-accent to-emerald-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_25px_rgba(163,230,53,0.3)] transition hover:brightness-110 active:scale-[0.98]"
              >
                Jelajahi Proyek
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/75 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-accent/50 hover:bg-zinc-800/80 active:scale-[0.98]"
              >
                <Download className="h-4 w-4 text-accent" /> Unduh CV
              </a>
            </motion.div>
          </div>

          {/* Right column: Portrait frame */}
          <motion.div {...fade(0.2)}>
            <ProfilePortrait />
          </motion.div>
        </div>

        <motion.dl {...fade(0.32)} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <SpotlightCard key={s.label} className="flex flex-col-reverse border-white/10 bg-zinc-900/50 p-4">
              <dt className="mt-1 text-xs leading-snug text-zinc-400">{s.label}</dt>
              <dd className="bg-gradient-to-r from-white via-lime-200 to-cyan-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
                {s.value}
              </dd>
            </SpotlightCard>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll ke bawah"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-zinc-400 transition hover:text-accent"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
