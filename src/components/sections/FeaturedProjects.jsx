"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const STATUS_COLORS = {
  Live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Archived: "text-text-muted bg-white/5 border-border-subtle",
};

function ProjectCard({ project, index, featured }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className={`card group relative overflow-hidden ${
          featured ? "lg:col-span-2" : ""
        }`}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Color accent top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, ${project.color}15, transparent 60%)`,
          }}
        />

        <div className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                    STATUS_COLORS[project.status] || STATUS_COLORS.Archived
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-text-muted text-xs font-mono">{project.year}</span>
              </div>
              <h3 className="font-display text-2xl text-text-primary group-hover:gradient-text transition-all">
                {project.title}
              </h3>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="tag text-xs">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="tag text-xs">+{project.tech.length - 5}</span>
            )}
          </div>

          {/* Case study link */}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:gap-3 transition-all duration-200"
          >
            View Case Study
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-bg-secondary/20 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-4">What I've Built</div>
            <h2 className="section-title">
              Featured <span className="gradient-text italic">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="btn-secondary self-start sm:self-auto whitespace-nowrap"
          >
            All Projects
            <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
