import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import portrait from "@/assets/asukrg_portrait.jpg.asset.json";
import labBg from "@/assets/lab-lineart.jpg";
import pixelArt from "@/assets/pixel_art_venkateswara.jpg.asset.json";
import ganeshaPandal from "@/assets/ganesha_pandal_night.jpg.asset.json";
import building from "@/assets/building_blue_sky.jpg.asset.json";
import fireworks from "@/assets/fireworks_night.jpg.asset.json";
import lizard from "@/assets/garden_lizard.jpg.asset.json";
import templeElephant from "@/assets/temple_elephant_gateway.jpg.asset.json";

/* ---------- Editable content ---------- */
const EMAIL = "udayaddepalli236@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/addepalli-sri-udaya-kaleswara-rao-guptha-079412230/";
const GITHUB = "https://github.com/ludosuday-sys/ASUKRG_Physics";
const CV_URL = "/cv.pdf";

const NAV = [
  ["about", "About"],
  ["education", "Education"],
  ["research", "Research"],
  ["projects", "Projects"],
  ["publications", "Publications"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["certifications", "Certificates"],
  ["contact", "Contact"],
  ["more", "More"],
] as const;

const INTERESTS = [
  "Computational Physics",
  "Computational Materials Science",
  "Computational Astrophysics",
  "Density Functional Theory",
  "Two-Dimensional Materials",
  "Ion-Related Material Studies",
  "First-Principles Calculations",
];

const EDUCATION = [
  {
    degree: "PhD in Physics",
    place: "SRM University-AP",
    years: "2026 — Present",
    detail: "Computational Physics & Materials Science. Ion-related studies in 2D materials using DFT and VASP.",
  },
  {
    degree: "M.Sc. in Physics",
    place: "Manipal Academy of Higher Education",
    years: "2022 — 2024",
    detail: "Computational Astrophysics. Project: Dust Modelling Around the Coalsack Cloud.",
  },
  {
    degree: "B.Sc. in Physics",
    place: "GITAM University, Visakhapatnam",
    years: "2019 — 2022",
    detail: "Specialization in Physics.",
  },
];

const RESEARCH = [
  ["Computational Materials Science", "Computational approaches to studying material properties."],
  ["Two-Dimensional Materials", "2D materials, their structures, and ion-related studies."],
  ["Density Functional Theory", "First-principles methods for electronic and structural properties."],
  ["Computational Astrophysics", "Previous research experience in astrophysical dust modelling."],
];

const PROJECTS = [
  {
    title: "Computational Studies of 2D Materials",
    place: "SRM University-AP",
    years: "2026 — Present",
    domain: "Computational Materials Science",
    meta: ["Method · DFT", "Software · VASP", "Focus · Ion-related studies"],
  },
  {
    title: "Dust Modelling Around the Coalsack Cloud",
    place: "Manipal Academy of Higher Education",
    years: "2022 — 2024",
    domain: "Computational Astrophysics",
    meta: ["Computational study of dust modelling around the Coalsack Cloud"],
  },
];

const PUBLICATIONS = [
  { org: "Astronomical Society of India (ASI)", year: "2024", kind: "Research poster", note: "Computational Astrophysics" },
  { org: "RAM Conference", year: "2024", kind: "Research poster", note: "Poster details to be added" },
];

const EXPERIENCE = [
  { role: "Project Assistant", place: "GITAM University", years: "2025 — Jan 2026", detail: "Academic and research-related project assistance." },
  { role: "Physics Teacher", place: "Chirala", years: "2024 — 2025", detail: "Physics teaching and academic support." },
];

const SKILLS: [string, string[]][] = [
  ["Research expertise", ["Computational Physics", "Computational Materials Science", "Computational Astrophysics"]],
  ["Scientific methods", ["Density Functional Theory", "2D Materials Modelling", "First-principles calculations"]],
  ["Software & tools", ["VASP", "Python", "MATLAB", "Origin", "Linux", "LaTeX"]],
  ["Professional", ["Scientific Writing", "Research Paper Preparation", "Teaching", "Problem-solving", "Data Analysis"]],
];

const CERTIFICATES = ["Coursera certifications", "Scientific workshops", "Technical training", "Academic participation"];

/* ---------- Page ---------- */
export function Shell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const active = pathname.replace("/", "");

  return (
    <div>
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <AtomIcon className="h-10 w-10 shrink-0" />
            <span className="min-w-0">
              <span className="block whitespace-nowrap text-base font-semibold tracking-[0.3em]">ASUKRG</span>
              <span className="eyebrow block text-[0.62rem] text-muted-foreground">PhD Scholar</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex">
            {NAV.map(([id, label]) => (
              <Link
                key={id}
                to={`/${id}` as "/"}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  active === id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button onClick={() => setMenu((m) => !m)} className="rounded-full border px-4 py-2 text-sm xl:hidden" aria-label="Menu">
              {menu ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="grid gap-1 border-t px-5 py-3 xl:hidden">
            {NAV.map(([id, label]) => (
              <Link key={id} to={`/${id}` as "/"} onClick={() => setMenu(false)} className="py-2 text-base">
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {children}









      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-10 md:flex-row md:items-center md:px-10">
          <div>
            <p className="font-semibold">A S Udaya K R Guptha | PhD Scholar in Physics</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Exploring Computational Physics, Materials Science, and the Scientific World.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">© {new Date().getFullYear()}</p>
          </div>
          <Socials />
        </div>
      </footer>
    </div>
  );
}

/* ---------- Pieces ---------- */
function Section({ id, label, title, children }: { id: string; label: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow text-muted-foreground">{label}</p>
        <h2 className="mb-12 mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Timeline({ items }: { items: { top: string; title: string; sub: string; body: string }[] }) {
  return (
    <ol className="relative ml-2 border-l">
      {items.map((it) => (
        <li key={it.title} className="relative pb-12 pl-8 last:pb-0">
          <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-background" />
          <p className="text-sm text-muted-foreground">{it.top}</p>
          <h3 className="mt-1 text-2xl font-semibold">{it.title}</h3>
          <p className="font-serif text-xl italic text-muted-foreground">{it.sub}</p>
          <p className="mt-2 max-w-2xl">{it.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Socials({ className = "" }: { className?: string }) {
  const cls = "rounded-full border px-4 py-2 text-sm transition-colors hover:bg-secondary";
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a className={cls} href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className={cls} href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
      <a className={cls} href={`mailto:${EMAIL}`}>Email</a>
    </div>
  );
}

function AtomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <g className="orbit" style={{ transformOrigin: "24px 24px" }}>
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
        <circle cx="44" cy="24" r="2" fill="currentColor" />
      </g>
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

function Lattice() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const r = 26;
  const w = Math.sqrt(3) * r;
  const atoms: { x: number; y: number; k: number }[] = [];
  const bonds: [number, number, number, number][] = [];
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      const cx = col * w + (row % 2) * (w / 2) + 30;
      const cy = row * r * 1.5 + 30;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
      });
      pts.forEach((p, i) => {
        const q = pts[(i + 1) % 6]!;
        bonds.push([p.x, p.y, q.x, q.y]);
        if (!atoms.some((a) => Math.abs(a.x - p.x) < 1 && Math.abs(a.y - p.y) < 1)) atoms.push({ ...p, k: atoms.length });
      });
    }
  }
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const b = ref.current!.getBoundingClientRect();
        setTilt({ x: ((e.clientY - b.top) / b.height - 0.5) * -18, y: ((e.clientX - b.left) / b.width - 0.5) * 18 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative overflow-hidden rounded-3xl border bg-card p-4 [perspective:900px]"
    >
      <p className="eyebrow absolute left-6 top-5 text-muted-foreground">2D hexagonal lattice · move to explore</p>
      <svg
        viewBox="0 0 330 300"
        className="mt-8 w-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
          {bonds.map(([a, b, c, d], i) => (
            <line key={i} x1={a} y1={b} x2={c} y2={d} />
          ))}
        </g>
        {atoms.map((a) => (
          <circle
            key={a.k}
            cx={a.x}
            cy={a.y}
            r={a.k % 11 === 0 ? 5 : 3.2}
            className={a.k % 11 === 0 ? "fill-glow" : "fill-foreground"}
            style={{ animation: `vibrate ${1.6 + (a.k % 5) * 0.3}s ease-in-out infinite`, transformBox: "fill-box" }}
          />
        ))}
      </svg>
      <p className="px-2 pb-2 text-sm text-muted-foreground">Highlighted sites illustrate ion positions — schematic only.</p>
    </div>
  );
}

function ContactForm() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `From: ${f.get("name")} <${f.get("email")}>\n\n${f.get("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full rounded-xl border bg-card px-4 py-3 outline-none focus:border-foreground";
  return (
    <form onSubmit={submit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Name" className={input} />
        <input required type="email" name="email" placeholder="Email" className={input} />
      </div>
      <input required name="subject" placeholder="Subject" className={input} />
      <textarea required name="message" rows={5} placeholder="Message" className={input} />
      <button className="justify-self-start rounded-2xl bg-primary px-6 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5">
        Send message ↗
      </button>
    </form>
  );
}

const ART = [
  {
    src: pixelArt.url,
    title: "Lord Venkateswara, square by square",
    caption:
      "Hand-coloured pixel art on graph paper — every square a single choice of colour, the same way a crystal is built one unit cell at a time.",
  },
];

const PHOTOS = [
  {
    src: ganeshaPandal.url,
    title: "Ganesha in the glow",
    caption: "A pandal lit up on a festival night — gold, marigold and neon cutting through the dark street.",
  },
  {
    src: building.url,
    title: "Repeating units",
    caption: "Rows of windows rising into a clear blue sky. Periodic structures aren't only found in crystals.",
  },
  {
    src: fireworks.url,
    title: "Bursts of light",
    caption: "Fireworks blooming over a night sky — chemistry and thermodynamics, put on show for a few seconds.",
  },
  {
    src: lizard.url,
    title: "Hidden in plain green",
    caption: "A garden lizard resting on a bush, almost perfectly camouflaged among the leaves.",
  },
  {
    src: templeElephant.url,
    title: "Through the temple gate",
    caption: "A temple elephant framed by a dark doorway, with the bright gopuram glowing behind.",
  },
];

function dayIndex(n: number) {
  return Math.floor(Date.now() / 86400000) % n;
}

function DailyCard({ label, items }: { label: string; items: { src: string; title: string; caption: string }[] }) {
  const [i, setI] = useState(0);
  useEffect(() => setI(dayIndex(items.length)), [items.length]);
  const item = items[i]!;
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border bg-card">
      <div className="aspect-[4/5] bg-muted">
        <img src={item.src} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="eyebrow text-muted-foreground">{label}</p>
        <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
        <p className="mt-3 font-serif text-xl leading-snug text-muted-foreground">{item.caption}</p>
        {items.length > 1 && (
          <button
            onClick={() => setI((v) => (v + 1) % items.length)}
            className="mt-6 self-start rounded-full border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            Next picture →
          </button>
        )}
      </div>
    </article>
  );
}

export function HeroSection() {
  return (
        <section className="relative overflow-hidden">
          <img src={labBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pt-10 md:grid-cols-[1.1fr_1fr] md:px-10">
            <div className="relative order-2 md:order-1">
              <img
                src={portrait.url}
                alt="A S Udaya K R Guptha in a lab coat holding a molecular model"
                width={930}
                height={754}
                className="relative w-full mix-blend-multiply [mask-image:linear-gradient(to_right,black_85%,transparent)]"
              />
            </div>
            <div className="reveal order-1 pb-16 md:order-2 md:pb-28">
              <p className="eyebrow text-foreground/80">A S UDAYA K R GUPTHA · PHD RESEARCHER</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
                Computing materials.
                <br />
                <span className="font-serif font-normal italic text-muted-foreground">Understanding matter.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed md:text-xl">
                I am a PhD scholar in Physics at SRM University-AP, working on computational approaches to understand
                materials and their properties.
              </p>
              <p className="mt-6 text-muted-foreground">
                Department of Physics
                <br />
                SRM University-AP, India
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#research" className="inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-primary-foreground transition-transform hover:-translate-y-0.5">
                  Explore my research <span aria-hidden>↗</span>
                </a>
                <a href={CV_URL} download className="inline-flex items-center gap-3 rounded-2xl border bg-card px-6 py-4 transition-colors hover:bg-secondary">
                  Download CV <span aria-hidden>↓</span>
                </a>
              </div>
              <Socials className="mt-8" />
            </div>
          </div>
          <div className="eyebrow pointer-events-none absolute right-10 top-1/4 hidden space-y-4 border-l pl-6 text-[0.65rem] text-muted-foreground xl:block">
            <p>Simulate</p><p>Analyze</p><p>Discover</p>
          </div>
        </section>
  );
}

export function AboutSection() {
  return (
        <Section id="about" label="About" title={<>A physicist who <em className="font-serif font-normal">computes</em>.</>}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                I am a Physics researcher pursuing my PhD at SRM University-AP. My journey began with a Bachelor's in
                Physics from GITAM University, followed by a Master's from Manipal Academy of Higher Education.
              </p>
              <p>
                During my Master's, I explored Computational Astrophysics through dust modelling around the Coalsack
                Cloud — which grew my interest in computational approaches to complex physical systems.
              </p>
              <p>
                Today my research focuses on Computational Materials Science, particularly ion-related studies in
                two-dimensional materials using DFT and VASP.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {INTERESTS.map((t) => (
                <span key={t} className="cursor-default rounded-full border bg-card px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>
  );
}

export function EducationSection() {
  return (
        <Section id="education" label="Education" title={<>The path <em className="font-serif font-normal">so far</em>.</>}>
          <Timeline items={EDUCATION.map((e) => ({ top: e.years, title: e.degree, sub: e.place, body: e.detail }))} />
        </Section>
  );
}

export function ResearchSection() {
  return (
        <Section id="research" label="Research interests" title={<>Where my <em className="font-serif font-normal">questions</em> live.</>}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH.map(([t, d], i) => (
                <article key={t} className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="font-serif text-3xl italic text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <Lattice />
          </div>
        </Section>
  );
}

export function ProjectsSection() {
  return (
        <Section id="projects" label="Projects" title={<>Work <em className="font-serif font-normal">in progress</em>.</>}>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.title} className="rounded-2xl border bg-card p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="eyebrow text-muted-foreground">{p.domain}</span>
                  <span className="text-sm text-muted-foreground">{p.years}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 text-muted-foreground">{p.place}</p>
                <ul className="mt-6 space-y-2 border-t pt-5 text-sm">
                  {p.meta.map((m) => (
                    <li key={m}>— {m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
  );
}

export function PublicationsSection() {
  return (
        <Section id="publications" label="Publications & conferences" title={<>Shared <em className="font-serif font-normal">with peers</em>.</>}>
          <div className="grid gap-6 md:grid-cols-2">
            {PUBLICATIONS.map((p) => (
              <article key={p.org} className="flex gap-6 rounded-2xl border bg-card p-8">
                <span className="font-serif text-5xl italic leading-none">{p.year}</span>
                <div>
                  <h3 className="text-lg font-semibold">{p.org}</h3>
                  <p className="mt-1 text-muted-foreground">{p.kind}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
  );
}

export function ExperienceSection() {
  return (
        <Section id="experience" label="Experience" title={<>Teaching & <em className="font-serif font-normal">assisting</em>.</>}>
          <Timeline items={EXPERIENCE.map((e) => ({ top: e.years, title: e.role, sub: e.place, body: e.detail }))} />
        </Section>
  );
}

export function SkillsSection() {
  return (
        <Section id="skills" label="Skills" title={<>The <em className="font-serif font-normal">toolkit</em>.</>}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border bg-card p-6">
                <h3 className="eyebrow text-muted-foreground">{cat}</h3>
                <ul className="mt-5 space-y-2">
                  {items.map((s) => (
                    <li key={s} className="font-medium">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
  );
}

export function CertificationsSection() {
  return (
        <Section id="certifications" label="Certifications & workshops" title={<>Always <em className="font-serif font-normal">learning</em>.</>}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATES.map((c) => (
              <div key={c} className="flex aspect-[4/3] flex-col justify-between rounded-2xl border border-dashed bg-card p-6">
                <AtomIcon className="h-8 w-8 opacity-60" />
                <div>
                  <h3 className="font-semibold">{c}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Certificates coming soon</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center">
            <div>
              <p className="eyebrow opacity-70">Resume</p>
              <h3 className="mt-3 font-serif text-4xl italic">The full academic record.</h3>
            </div>
            <a href={CV_URL} download className="rounded-2xl bg-background px-6 py-4 font-medium text-foreground transition-transform hover:-translate-y-0.5">
              Download my CV (PDF) ↓
            </a>
          </div>
        </Section>
  );
}

export function ContactSection() {
  return (
        <Section id="contact" label="Contact" title={<>Let's <em className="font-serif font-normal">talk physics</em>.</>}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-lg">
              <a href={`mailto:${EMAIL}`} className="block break-all underline decoration-border underline-offset-4 hover:decoration-foreground">{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="block hover:underline">LinkedIn ↗</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="block hover:underline">GitHub ↗</a>
              <p className="text-muted-foreground">Google Scholar — to be added</p>
              <p className="text-muted-foreground">ORCID — to be added</p>
            </div>
            <ContactForm />
          </div>
        </Section>
  );
}

export function MoreSection() {
  return (
        <Section id="more" label="More" title={<>Something <em className="font-serif font-normal">for today</em>.</>}>
          <div className="grid gap-6 md:grid-cols-2">
            <DailyCard label="Art of the day" items={ART} />
            <DailyCard label="Picture of the day" items={PHOTOS} />
          </div>
        </Section>
  );
}
