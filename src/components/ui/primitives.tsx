import { motion } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Spotlight SVG — diadaptasi dari komponen "Spotlight" (Aceternity) di 21st.dev */
export function Spotlight({ className, fill = "white" }: { className?: string; fill?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute z-0 h-[169%] w-[138%] animate-spotlight opacity-0 lg:w-[84%]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spot-blur)">
        <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill={fill} fillOpacity="0.21" />
      </g>
      <defs>
        <filter id="spot-blur" x="0.86" y="0.84" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

/** Kartu dengan glow mengikuti kursor (pola "Glow Card" di 21st.dev) */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={cn(
        "spotlight-card rounded-2xl border border-white/10 bg-zinc-900/40 transition-colors duration-300 hover:border-white/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Animasi muncul saat di-scroll (tanpa filter blur agar ringan & mulus) */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Marquee tanpa henti (pola "Marquee" di 21st.dev) */
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div key={i} aria-hidden={i === 1} className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]">
          {children}
        </div>
      ))}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: ReactNode; desc?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-zinc-400">{desc}</p>}
    </Reveal>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-300">
      {children}
    </span>
  );
}

