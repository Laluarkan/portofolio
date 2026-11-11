import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "projects", label: "Proyek" },
  { id: "certificates", label: "Sertifikat" },
  { id: "contact", label: "Kontak" },
];

/** Navbar melayang dengan indikator aktif (pola "Tubelight Navbar" di 21st.dev) */
export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-zinc-950/70 p-1.5 shadow-lg shadow-black/40 backdrop-blur-xl [scrollbar-width:none]">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              active === id ? "text-white" : "text-zinc-400 hover:text-zinc-100",
            )}
          >
            {active === id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              >
                <span className="absolute -top-1.5 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_2px] shadow-accent/60" />
              </motion.span>
            )}
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

