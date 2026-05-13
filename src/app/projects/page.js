import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Projects",
  description: "Full portfolio of web development projects by Shahidul Islam — MERN stack applications.",
};

const STATUS_COLORS = {
  Live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Archived: "text-text-muted bg-white/5 border-border-subtle",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="section-label mb-4">Portfolio</div>
          <h1 className="section-title mb-4">
            All <span className="gradient-text italic">Projects</span>
          </h1>
          <p className="text-text-secondary max-w-xl">
            Every project is a real-world application built with production-grade code, deployed and accessible online.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <div className="card group relative overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                {/* Color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 40% 0%, ${project.color}12, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                          STATUS_COLORS[project.status] || ""
                        }`}
                      >
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-accent-blue/30 text-accent-blue bg-accent-blue/10">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-text-muted text-xs font-mono">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-2xl text-text-primary mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.tagline}
                  </p>

                  {/* Role / Duration */}
                  <div className="flex items-center gap-4 text-xs font-mono text-text-muted mb-4">
                    <span>🧑‍💻 {project.role}</span>
                    <span>⏱ {project.duration}</span>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag text-xs">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 btn-primary text-xs px-4 py-2 justify-center"
                    >
                      Case Study
                      <ArrowUpRight size={14} />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3 py-2"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-3 py-2"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
