import { useState } from "react";
import {
  ArrowUpRight, Award, Brain, Briefcase, Check, Code2, Copy, Cpu, Database,
  ExternalLink, Globe, GraduationCap, Layers, Mail, Smartphone, Sparkles,
} from "lucide-react";
import {
  bpomModules, certificates, experiences, profile, projects, skills, techStack,
  type ProjectCategory,
} from "@/data/portfolio";
import { Marquee, Reveal, SectionHeading, SpotlightCard, Tag } from "@/components/ui/primitives";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const skillIcons = { cpu: Cpu, globe: Globe, brain: Brain, code: Code2, smartphone: Smartphone, database: Database };

function Container({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      {children}
    </section>
  );
}

export function About() {
  return (
    <Container id="about">
      <SectionHeading
        eyebrow="01 — Tentang & Keahlian"
        title={
          <>
            Hardware, software,{" "}
            <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text font-serif font-normal italic text-transparent">
              dan kecerdasan di antaranya.
            </span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_1.15fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = skillIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <SpotlightCard className="h-full border-white/10 bg-zinc-900/75 p-5 transition duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan-400/20 text-accent ring-1 ring-accent/30">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal className="mt-16">
        <Marquee>
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-zinc-900/85 px-4 py-2 font-mono text-sm whitespace-nowrap text-zinc-200 shadow-sm transition hover:border-accent/40 hover:text-accent"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </Container>
  );
}

export function Experience() {
  return (
    <Container id="experience">
      <SectionHeading
        eyebrow="02 — Pengalaman & Pendidikan"
        title="Perjalanan sejauh ini"
        desc="Pengalaman membangun sistem produksi di instansi pemerintah, industri utilitas daerah, dan bangku kuliah."
      />

      <ol className="relative ml-3 border-l border-white/15">
        {experiences.map((e, i) => {
          const Icon = e.type === "Pendidikan" ? GraduationCap : Briefcase;
          return (
            <Reveal key={e.company} delay={i * 0.1}>
              <li className="relative pb-12 pl-9 last:pb-0">
                <span className="absolute top-1 -left-[18px] flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-zinc-950 text-accent shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                  <Icon className="h-4 w-4" />
                </span>
                <SpotlightCard className="border-white/10 bg-zinc-900/75 p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold tracking-tight text-white">{e.role}</h3>
                    <span className="font-mono text-xs text-accent">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">
                    {e.company} · {e.location}
                    <span className="ml-2 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-accent/30">
                      {e.type}
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </SpotlightCard>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Container>
  );
}

const categories: ProjectCategory[] = [
  "Semua",
  "Full-Stack & Enterprise",
  "AI & Machine Learning",
  "IoT & Robotics",
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Semua");
  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Container id="projects">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="03 — Proyek Pilihan"
          title="Hal-hal yang pernah saya bangun"
          desc="Ekosistem aplikasi internal BBPOM Mataram, produk web AI & fintech yang aktif di produksi, hingga robotika dan perangkat telemetri IoT."
        />

        {/* Category filter pills */}
        <div className="mb-12 flex flex-wrap gap-1.5 self-start rounded-2xl border border-white/10 bg-zinc-900/85 p-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-medium transition",
                activeCategory === cat
                  ? "bg-accent text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.4)]"
                  : "text-zinc-400 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-6">
        {filtered.map((p, i) => {
          const isSuperApp = p.title.includes("BBPOM");
          const span = isSuperApp ? "md:col-span-6" : "md:col-span-3";

          return (
            <Reveal key={p.title} delay={i * 0.05} className={span}>
              <SpotlightCard className="group relative flex h-full flex-col justify-between overflow-hidden border-white/10 bg-zinc-900/80 p-6 transition duration-300 hover:-translate-y-1 sm:p-8">
                {/* Top atmospheric gradient banner */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-br opacity-60",
                    p.accentColor ?? "from-accent/20 via-cyan-500/10 to-transparent",
                  )}
                />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {p.badge && (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs",
                            p.demo
                              ? "bg-accent/15 text-accent ring-1 ring-accent/40"
                              : "bg-white/[0.06] text-zinc-200 ring-1 ring-white/15",
                          )}
                        >
                          {p.demo && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
                          {p.badge}
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400">
                        {p.category}
                      </span>
                    </div>

                    <div className="ml-auto flex items-center gap-1.5">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Repositori ${p.title}`}
                          className="rounded-full border border-white/15 bg-black/30 p-2 text-zinc-300 transition hover:border-white/35 hover:text-white"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-zinc-950 shadow-[0_0_20px_rgba(163,230,53,0.3)] transition hover:bg-lime-300"
                        >
                          Kunjungi Situs <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className={cn(
                      "mt-5 font-semibold tracking-tight text-white",
                      isSuperApp ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                    )}
                  >
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="mt-1 bg-gradient-to-r from-lime-200 to-cyan-200 bg-clip-text font-serif text-lg italic text-transparent">
                      {p.subtitle}
                    </p>
                  )}
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">{p.desc}</p>

                  {p.highlights && (
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-zinc-300">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 leading-relaxed">
                          <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Interactive BBPOM 9-module sub-grid */}
                  {isSuperApp && (
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                        <Layers className="h-3.5 w-3.5" /> Modul yang dikembangkan & diintegrasikan
                      </div>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {bpomModules.map((m) => (
                          <div
                            key={m.code}
                            className="rounded-xl border border-white/10 bg-black/35 p-3.5 transition hover:border-accent/40 hover:bg-black/55"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-accent">
                                {m.code}
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="mt-2 text-sm font-medium text-white">{m.name}</div>
                            <p className="mt-1 text-xs leading-relaxed text-zinc-400">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}

export function Certificates() {
  return (
    <Container id="certificates">
      <SectionHeading eyebrow="04 — Sertifikat & Pelatihan" title="Pelatihan & sertifikasi" />

      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((c, i) => {
          const CardTag = c.url ? "a" : "div";
          return (
            <Reveal key={c.title} delay={i * 0.06}>
              <SpotlightCard className="border-white/10 bg-zinc-900/75 p-6 transition hover:-translate-y-0.5">
                <CardTag
                  {...(c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan-400/20 text-accent ring-1 ring-accent/30">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-xs text-accent">{c.date}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{c.issuer}</p>
                  </div>
                  {c.url && <ArrowUpRight className="h-4 w-4 text-zinc-400" />}
                </CardTag>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    <Container id="contact">
      <Reveal>
        <SpotlightCard className="relative overflow-hidden border-white/15 bg-zinc-900/85 px-6 py-16 text-center shadow-[0_0_90px_-20px_rgba(163,230,53,0.2)] sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(163,230,53,0.18),rgba(34,211,238,0.08)_45%,transparent_70%)]" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">05 — Kontak</p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Punya ide, proyek, atau peluang kerja?{" "}
            <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text font-serif font-normal italic text-transparent">
              Mari berdiskusi.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-zinc-300">
            Terbuka untuk posisi Full-Stack / Backend / IoT Engineer maupun kolaborasi pembuatan sistem dari nol.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-300 via-accent to-emerald-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_rgba(163,230,53,0.35)] transition hover:brightness-110 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" /> Kirim Email
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/80 px-5 py-3 font-mono text-sm text-zinc-100 transition hover:border-accent/50 hover:bg-zinc-800 active:scale-[0.98]"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4 text-cyan-300" />}
              {copied ? "Email Tersalin!" : profile.email}
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </Container>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-center border-t border-white/10 px-6 py-9 text-center text-sm text-zinc-400">
      <p>© {new Date().getFullYear()} {profile.name} · Mataram, Nusa Tenggara Barat</p>
    </footer>
  );
}
