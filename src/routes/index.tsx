import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { NeuralBackground } from "@/components/NeuralBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
     { title: "Jood Khamjan — AI Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Jood Khamjan, Artificial Intelligence Engineer building intelligent systems across vision, language, and data.",
    },
    { property: "og:title", content: "Jood Khamjan — AI Engineer" },
    {
      property: "og:description",
      content:
        "I build intelligent systems that turn data, vision, and language into real-world AI solutions.",
    },
  ],
    links: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    },
    ],
  }),
  component: Index,
});

const CV_URL = "/cv.pdf";
const GITHUB_URL = "https://github.com/imrealjo37";
const LINKEDIN_URL = "www.linkedin.com/in/jood-khamjan-bb91aa31a";
const EMAIL = "mailto:hello@example.com";

function Index() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4">
        <NeuralBackground />

        {/* Floating glow orbs */}
        <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div
          className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for AI engineering work
          </div>

          <h1
            className="font-display text-5xl font-bold tracking-tight leading-[1.15] pb-3 text-gradient sm:text-7xl md:text-8xl animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Jood Khamjan
          </h1>

          <p
            className="mt-4 text-lg font-medium text-primary/90 sm:text-xl animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Artificial Intelligence Engineer
          </p>

          <p
            className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            I build intelligent systems that turn data, vision, and language into real-world AI solutions.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              <Sparkles size={16} /> View Projects
            </a>
            <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.08]"
            >
            <FileText size={16} /> View CV
            </a>
          </div>

          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="animate-float" size={22} />
          </a>
        </div>
      </section>

        {/* PROJECTS */}
  <section id="projects" className="relative mx-auto max-w-[1500px] px-2 py-24">
    <div className="mb-12">
      <div className="text-xs uppercase tracking-[0.25em] text-primary/80">
        Selected work · 2023 — 2025
      </div>

      <h2 className="mt-4 max-w-2xl font-display text-5xl tracking-tight text-foreground md:text-6xl">
        Six projects, each a small{" "}
        <em className="font-display font-thin italic text-[#AEB4E8]">
          built with care.
          
        </em>
      </h2>
    </div>

  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            More projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {more.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section
  id="about"
  className="relative border-t border-white/5 py-32 md:py-40"
>
  <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-5">
    <div className="md:col-span-2">
      <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        About
      </p>

      <h2 className="text-5xl font-medium leading-tight md:text-7xl">
        Building intelligence with{" "}
        <span
          className="italic font-normal text-gradient"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          purpose
        </span>
      </h2>
    </div>

    <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-3">
      <p>
        I&apos;m Jood, an Artificial Intelligence graduate from the University
        of Jeddah, interested in building AI systems that are genuinely useful,
        intuitive, and human-centered.
      </p>

      <p>
        My work spans machine learning, computer vision, natural language
        processing, and generative AI — from healthcare prediction systems and
        satellite image analysis to Arabic conversational assistants.
      </p>

      <p>
        I care about Arabic-first technologies, thoughtful interfaces, and
        transforming complex data into practical solutions for real-world
        problems.
      </p>
    </div>
  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="relative border-t border-white/5 py-32 md:py-40"
>
  <div className="mx-auto max-w-4xl px-6 text-center">
    <div className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      Open to Opportunities
    </div>

    <h2 className="mb-10 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
      Let&apos;s build something
      <br />
      <span className="italic text-gradient-lavender">
        meaningful together.
      </span>
    </h2>

    <a
      href="mailto:khamjanjood.ai@gmail.com"
      className="inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-primary)] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-soft)] transition-all duration-300 hover:-translate-y-1"
    >
      Let&apos;s Connect
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</section>


      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Jood Khamjan. All work shown with care.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-smooth">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-smooth">GitHub</a>
            <a href="#" className="hover:text-foreground transition-smooth">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center md:text-left">
      <p className="text-xs uppercase tracking-[0.25em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-gradient sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-muted-foreground md:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function ContactButton({
  href,
  icon,
  label,
  primary,
  download,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      download={download}
      className={
        primary
          ? "inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
          : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.08]"
      }
    >
      {icon} {label}
    </a>
  );
}
