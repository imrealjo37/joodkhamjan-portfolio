import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative block animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="glass-card relative overflow-hidden p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[var(--shadow-glow)]">
        {/* Visual */}
          <div className={`relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${project.accent} opacity-90`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.25} />
                </div>
              </>
            )}

            <div className="absolute bottom-3 left-3 rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
              {project.category}
            </div>

            <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[oklch(0.10_0.015_280)]">
                View Project <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}