import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Lightbulb,
  AlertCircle,
  Wrench,
  Rocket,
  Github,
  ExternalLink,
  FileText,
  Play,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { NeuralBackground } from "@/components/NeuralBackground";
import { ProjectCard } from "@/components/ProjectCard";
import StackedAccordion from "@/components/StackedAccordion";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Jood Khamjan` : "Project — Jood Khamjan";
    const desc = p?.description ?? "Project by Jood Khamjan";

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },

  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },

  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-3xl text-gradient">Project not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          ← Back home
        </Link>
      </div>
    </div>
  ),

  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),

  component: ProjectPage,
});

type CardKey = "idea" | "problem" | "build" | "impact";

const CARD_META: Record<
  CardKey,
  {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    section: string;
  }
> = {
  idea: { title: "The Idea", icon: Lightbulb, section: "idea-section" },
  problem: { title: "The Problem", icon: AlertCircle, section: "problem-section" },
  build: { title: "The Build", icon: Wrench, section: "build-section" },
  impact: { title: "The Impact", icon: Rocket, section: "impact-section" },
};

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-32 md:pt-40">
        <NeuralBackground />

        <div
          className={`pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`}
        />

        <div className="relative mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-gradient sm:text-7xl animate-fade-up">
            {project.title}
          </h1>

          <p
            className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((t: string) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECT IMAGE */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            className={`glass-card relative aspect-[16/8] overflow-hidden bg-gradient-to-br ${project.accent}`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles
                    className="h-16 w-16 text-white/80 animate-float"
                    strokeWidth={1.25}
                  />
                </div>
                <div className="absolute bottom-4 left-4 rounded-md bg-black/40 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
                  Visual placeholder
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* METRICS BAR */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-10">
          <div
            className={`grid gap-5 ${
              project.metrics.length === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : project.metrics.length === 3
                  ? "md:grid-cols-3"
                  : project.metrics.length === 2
                    ? "sm:grid-cols-2"
                    : "grid-cols-1"
            }`}
          >
      {project.metrics.map((metric) => (
        <div
          key={metric.label}
          className="glass-card flex min-h-[155px] items-center justify-center p-6 text-center"
        >
          <div>
            <div className="font-sans text-4xl font-bold tracking-tight text-primary">
              {metric.value}
            </div>

            <div className="mt-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {metric.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}


      {/* CONTENT SECTIONS FROM DATA */}
      {project.sections && project.sections.length > 0 && (
        <section className="relative mx-auto max-w-5xl px-4 py-20">
          <div className="space-y-12">
            {project.sections.map((section) => (
              <article key={section.title} className="glass-card p-7 md:p-10">
                <h2 className="font-display text-3xl font-semibold text-gradient">
                  {section.title}
                </h2>
                {section.body && (
  <div className="mt-5 space-y-4">
    {section.body.map((paragraph) => {
      const hasLabel = paragraph.includes(":");

      if (!hasLabel) {
        return (
          <p
            key={paragraph}
            className="text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {paragraph}
          </p>
        );
      }

      const [label, ...rest] = paragraph.split(":");
      const description = rest.join(":").trim();

      return (
        <p
          key={paragraph}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <span className="font-bold text-foreground">
            {label}:
          </span>{" "}
          {description}
        </p>
      );
    })}
  </div>
)}



                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="mt-6 w-full rounded-2xl border border-white/10 object-cover"
                  />
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* STACKED CLICK-ME CARDS */}
      {project.stackedCards && project.stackedCards.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-4 py-16">
          <StackedAccordion items={project.stackedCards} />
        </section>
      )}
      {/* PROJECT LINKS */}
{project.links && project.links.length > 0 && (
  <section className="relative mx-auto max-w-5xl px-4 py-12">
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
          EXPLORE MINDWATCH
        </p>

        <h2 className="mt-3 font-display text-2xl font-semibold text-gradient">
          Where Engineering Meets Research
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {project.links.map((link) => {
          const Icon =
            link.type === "github"
              ? Github
              : link.type === "paper"
                ? FileText
                : Play;

          return (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[210px] items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
            >
              <Icon
                size={18}
                className="text-primary transition-transform duration-300 group-hover:scale-110"
              />

              <span>{link.label}</span>

              <ExternalLink
                size={13}
                className="text-muted-foreground"
              />
            </a>
          );
        })}
      </div>
    </div>
  </section>
)}
      
      {/* RELATED */}
      <section className="relative mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-primary/80">More work</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-gradient sm:text-4xl">
          Keep exploring
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-16 pb-8 text-center text-xs text-muted-foreground">
          <Link to="/" className="text-primary hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}

function ExpandableCard({
  meta,
  body,
  index,
}: {
  meta: {
    title: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    section: string;
  };
  body: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = meta.icon;

  return (
    <div
      className="glass-card group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow-soft)] animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
            <Icon size={20} />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {meta.title}
          </h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {open ? "Hide" : "Reveal"}
        </span>
      </button>

      <div
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{body}</p>
          <a
            href={`#${meta.section}`}
            className="mt-4 inline-block text-xs font-medium text-primary hover:underline"
          >
            Scroll to section ↓
          </a>
        </div>
      </div>
    </div>
  );
}

function VisualSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  accent,
  reverse,
}: {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  accent: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div
        className={`grid items-center gap-10 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-gradient">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {body}
          </p>
        </div>

        <div
          className={`glass-card relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${accent} opacity-90`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center text-white/90">
            <Icon size={56} className="animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}

export type { Project };