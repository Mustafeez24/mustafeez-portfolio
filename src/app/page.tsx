"use client";

import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSend,
  FiSun,
  FiX,
} from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import {
  goals,
  learningItems,
  navItems,
  projects,
  skillGroups,
  stats,
} from "@/data/portfolio";
import { Badge } from "@/components/Badge";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { TypingText } from "@/components/TypingText";

const email = "krmdmustafeez@gmail.com";
const github = "https://github.com/Mustafeez24";
const linkedin = "https://www.linkedin.com/in/mohammed-mustafeez-b6b77b328/";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setProgress((scrollTop / height) * 100);
      setShowTop(scrollTop > 600);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-blue-500 transition-[width]"
        style={{ width: `${progress}%` }}
      />

      <Navbar
        isLight={isLight}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((value) => !value)}
        onTheme={() => setIsLight((value) => !value)}
      />

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8 lg:px-12"
      >
        <FloatingBackground />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
              Hello, I&apos;m
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.04] text-[var(--text-strong)] sm:text-6xl lg:text-7xl">
              Mohammed Mustafeez K R
            </h1>
            <div className="mt-5 text-xl font-medium text-blue-400 sm:text-2xl">
              <TypingText
                items={[
                  "Aspiring Software Engineer",
                  "Java Developer",
                  "Backend Development Learner",
                ]}
              />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Passionate about building software, solving problems, learning
              backend systems, and continuously improving my development skills
              through projects and hands-on experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="btn-primary" href="#projects">
                <FiCode />
                View Projects
              </a>
              <a className="btn-secondary" href="/resume.pdf" download>
                <FiDownload />
                Download Resume
              </a>
              <a className="btn-secondary" href="#contact">
                <FiMail />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="hero-panel">
              <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-[var(--muted)]">student-dev.ts</span>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm leading-7">
                <p>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-[var(--text-strong)]">focus</span> = [
                </p>
                <p className="pl-5 text-[var(--muted)]">
                  &quot;Java&quot;, &quot;DSA&quot;, &quot;Backend APIs&quot;,
                </p>
                <p className="pl-5 text-[var(--muted)]">
                  &quot;Databases&quot;, &quot;Real Projects&quot;
                </p>
                <p>];</p>
                <p>
                  <span className="text-blue-400">status</span>:{" "}
                  <span className="text-emerald-400">
                    preparing for internships
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:flex"
        >
          Scroll
          <span className="h-10 w-px overflow-hidden bg-[var(--line)]">
            <motion.span
              className="block h-4 w-px bg-blue-400"
              animate={{ y: [0, 40] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </span>
        </motion.a>
      </section>

      <section id="about" className="section">
        <SectionHeader
          eyebrow="About Me"
          title="Learning with intent, building with care."
          description="A focused BCA student growing toward software engineering through fundamentals, projects, and steady practice."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            "I am a Bachelor of Computer Applications student at HKBK Degree College with a strong interest in Software Engineering and Backend Development.",
            "My current focus is on Java, Data Structures and Algorithms, databases, APIs, and building real-world applications.",
            "I enjoy solving problems, learning new technologies, and creating projects that help me grow as a developer.",
            "I am actively preparing for Software Engineering Internship opportunities and continuously improving my technical skills.",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <article className="surface-card h-full p-6">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-500/10 text-blue-400">
                  {index === 0 ? <FiBookOpen /> : <FiCode />}
                </span>
                <p className="leading-7 text-[var(--muted)]">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <SectionHeader
          eyebrow="Skills"
          title="Practical tools I am building with."
          description="Java is my strongest focus, supported by web, backend, database, and core software engineering concepts."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} delay={index * 0.05} />
          ))}
        </div>
      </section>

      <section id="learning" className="section">
        <SectionHeader
          eyebrow="Currently Learning"
          title="A clear path toward backend engineering."
          description="These are the areas I am practicing consistently while preparing for internships and entry-level roles."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="surface-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-[var(--text-strong)]">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-400">
                    {item.progress}%
                  </span>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--soft)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full rounded-full bg-blue-500"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeader
          eyebrow="Projects"
          title="Building proof through focused projects."
          description="A realistic project roadmap with completed work, active builds, and planned backend practice."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation."
          description="BCA coursework and self-led practice are shaping the fundamentals behind my software engineering path."
        />
        <Reveal>
          <div className="timeline">
            <div className="timeline-dot" />
            <div className="surface-card p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">HKBK Degree College</p>
                </div>
                <Badge>2024 - 2027</Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Programming", "Software Development", "Databases", "Web Technologies"].map(
                  (area) => (
                    <span key={area} className="pill">
                      {area}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="github" className="section">
        <SectionHeader
          eyebrow="GitHub"
          title="A development profile that can grow with me."
          description="The data in this section is intentionally easy to update as repositories and activity grow."
        />
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <article className="surface-card p-7">
              <FiGithub className="text-3xl text-blue-400" />
              <h3 className="mt-5 text-2xl font-semibold text-[var(--text-strong)]">
                Mustafeez24
              </h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                Project work, learning experiments, and backend practice will
                continue to live here as my portfolio grows.
              </p>
              <a className="mt-6 inline-flex items-center gap-2 text-blue-400" href={github}>
                View GitHub Profile <FiExternalLink />
              </a>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="surface-card p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-md bg-[var(--soft)] p-4">
                    <p className="text-2xl font-semibold text-[var(--text-strong)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-[var(--line)] p-4">
                <p className="mb-4 text-sm font-medium text-[var(--text-strong)]">
                  Contribution Graph Placeholder
                </p>
                <div className="grid grid-cols-12 gap-2">
                  {Array.from({ length: 72 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-3 rounded-sm ${
                        index % 7 === 0
                          ? "bg-blue-500"
                          : index % 5 === 0
                            ? "bg-blue-500/55"
                            : "bg-[var(--soft)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-[var(--text-strong)]">
                  Recent Repositories
                </p>
                {["portfolio-website", "ai-career-copilot", "chat-application"].map(
                  (repo) => (
                    <div
                      key={repo}
                      className="flex items-center justify-between border-t border-[var(--line)] py-3 text-sm"
                    >
                      <span className="text-[var(--muted)]">{repo}</span>
                      <span className="text-blue-400">Update ready</span>
                    </div>
                  ),
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="goals" className="section">
        <SectionHeader
          eyebrow="Career Goals"
          title="A grounded direction for the next stage."
          description="Clear goals that match where I am now and where I am working to go."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {goals.map((goal, index) => (
            <Reveal key={goal} delay={index * 0.05}>
              <article className="surface-card h-full p-5">
                <FiBriefcase className="text-2xl text-blue-400" />
                <p className="mt-5 font-medium leading-7 text-[var(--text-strong)]">
                  {goal}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section pb-16">
        <SectionHeader
          eyebrow="Contact"
          title="Open to internship conversations."
          description="For opportunities, collaboration, or project feedback, this is the best place to reach me."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <article className="surface-card p-7">
              <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
                Contact Methods
              </h3>
              <div className="mt-6 space-y-4">
                <ContactLink icon={<FiMail />} href={`mailto:${email}`} label={email} />
                <ContactLink icon={<FiGithub />} href={github} label="GitHub Profile" />
                <ContactLink icon={<FiLinkedin />} href={linkedin} label="LinkedIn Profile" />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-[var(--text-strong)]">
              Mohammed Mustafeez K R
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Aspiring Software Engineer
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Designed and Developed with ❤️ | {currentYear}
            </p>
          </div>
          <div className="flex gap-3">
            <a className="icon-button" href={github} aria-label="GitHub">
              <FiGithub />
            </a>
            <a className="icon-button" href={linkedin} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </footer>

      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 16 }}
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-md bg-blue-500 text-white shadow-lg shadow-blue-500/20"
      >
        <FiArrowUp />
      </motion.button>
    </main>
  );
}

function Navbar({
  isLight,
  menuOpen,
  onMenu,
  onTheme,
}: {
  isLight: boolean;
  menuOpen: boolean;
  onMenu: () => void;
  onTheme: () => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--line)] bg-[var(--nav)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-0">
        <a href="#home" className="font-semibold text-[var(--text-strong)]">
          Mustafeez<span className="text-blue-400">.</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="icon-button" type="button" onClick={onTheme} aria-label="Toggle theme">
            {isLight ? <FiMoon /> : <FiSun />}
          </button>
          <button className="icon-button lg:hidden" type="button" onClick={onMenu} aria-label="Menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onMenu}
                className="rounded-md px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--soft)] hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.span
        className="absolute left-[8%] top-[24%] h-28 w-28 rounded-md border border-blue-400/20"
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute bottom-[20%] right-[12%] h-36 w-36 rounded-md border border-[var(--line)]"
        animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ContactLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <motion.a
      whileHover={{ x: 4 }}
      href={href}
      className="flex items-center gap-4 rounded-md border border-[var(--line)] p-4 text-[var(--muted)] transition hover:border-blue-500/40 hover:text-blue-400"
    >
      <span className="text-xl">{icon}</span>
      <span className="break-all">{label}</span>
    </motion.a>
  );
}
