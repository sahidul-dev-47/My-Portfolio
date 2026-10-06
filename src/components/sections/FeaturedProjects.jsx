"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Github, ExternalLink, Globe, Sparkles } from "lucide-react";

function ProjectCard({ project, index, isTopFeatured }) {
  return (
    <AnimatedSection delay={index * 0.1} className={isTopFeatured ? "lg:col-span-2" : ""}>
      <motion.div
        className="card group relative overflow-hidden flex flex-col h-full border border-border-subtle hover:border-border-glow transition-all duration-500"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top color bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.color}18, transparent 65%)`,
          }}
        />

        {/* Project Image Preview */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-slate-900/60 border-b border-border-subtle">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-black/30 pointer-events-none" />

            {/* Badges on image */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <div className="flex flex-wrap items-center gap-2">
                {project.badge && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    <Sparkles size={11} />
                    {project.badge}
                  </span>
                )}
                {project.isCustomDomain && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent-blue/20 backdrop-blur-md text-cyan-300 border border-cyan-400/40">
                    <Globe size={11} />
                    {project.domain}
                  </span>
                )}
              </div>

              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-text-muted border border-white/10">
                {project.year}
              </span>
            </div>
          </div>
        )}

        {/* Content body */}
        <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1">
          {/* Title and quick actions */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="text-xs font-mono text-accent-blue mb-1 font-medium">
                {project.role}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-text-primary group-hover:gradient-text transition-all">
                {project.title}
              </h3>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-glow transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-border-glow transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="tag text-xs">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="tag text-xs font-mono">+{project.tech.length - 5}</span>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-cyan-300 hover:gap-3 transition-all duration-200"
            >
              Detailed Case Study
              <ArrowUpRight size={16} />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </a>
            )}
          </div>
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
            <div className="section-label mb-3">Live Production Work</div>
            <h2 className="section-title">
              Featured <span className="gradient-text italic">Projects</span>
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Real-world web platforms, custom domain ed-tech ecosystems, and full-stack applications built to solve actual problems.
            </p>
          </div>
          <Link
            href="/projects"
            className="btn-secondary self-start sm:self-auto whitespace-nowrap"
          >
            Explore All Projects ({projects.length})
            <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isTopFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
