import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  ArrowLeft, Github, ExternalLink, Clock, User,
  Calendar, CheckCircle, AlertTriangle, Lightbulb, Zap
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

function Section({ icon: Icon, title, color, children }) {
  return (
    <div className="card p-6 sm:p-8 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
          <Icon size={18} />
        </div>
        <h2 className="font-semibold text-text-primary text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <AnimatedSection className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection className="mb-12 relative">
          <div
            className="absolute inset-0 rounded-3xl opacity-20"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.color}40, transparent 70%)` }}
          />
          <div className="relative z-10 card p-8 sm:p-12 overflow-hidden">
            {/* Background image */}
            {project.image && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Overlay: just enough to keep text readable, image still clearly visible */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 100%), radial-gradient(ellipse at 30% 20%, ${project.color}25, transparent 65%)`,
                  }}
                />
              </div>
            )}

            {/* Foreground content — explicit stacking layer above the image */}
            <div className="relative z-10">
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
            />

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
                {project.status}
              </span>
              {project.featured && (
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-accent-blue/30 text-accent-blue bg-accent-blue/10">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { icon: User, label: "Role", value: project.role },
                { icon: Clock, label: "Duration", value: project.duration },
                { icon: Calendar, label: "Year", value: project.year },
                { icon: Zap, label: "Status", value: project.status },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/[0.03] rounded-xl p-4 border border-border-subtle">
                  <div className="flex items-center gap-2 text-text-muted text-xs font-mono mb-1">
                    <Icon size={12} />
                    {label}
                  </div>
                  <div className="text-text-primary text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={16} />
                View Code
              </a>
            </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection className="mb-6">
          <div className="card p-6">
            <div className="section-label mb-4">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection className="mb-6">
          <Section icon={Zap} title="Project Overview" color="bg-accent-blue/20 text-accent-blue">
            <p className="text-text-secondary leading-relaxed">{project.overview}</p>
          </Section>
        </AnimatedSection>

        {/* Problem → Solution → Outcome */}
        <AnimatedSection className="mb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: AlertTriangle,
                label: "Problem",
                content: project.problem,
                color: "bg-red-500/10 text-red-400",
                border: "border-red-500/20",
              },
              {
                icon: Lightbulb,
                label: "Solution",
                content: project.solution,
                color: "bg-amber-500/10 text-amber-400",
                border: "border-amber-500/20",
              },
              {
                icon: CheckCircle,
                label: "Outcome",
                content: project.outcome,
                color: "bg-emerald-500/10 text-emerald-400",
                border: "border-emerald-500/20",
              },
            ].map(({ icon: Icon, label, content, color, border }) => (
              <div key={label} className={`card p-6 border ${border}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon size={16} />
                  </div>
                  <span className="font-semibold text-text-primary">{label}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection className="mb-6">
          <Section icon={CheckCircle} title="Key Features" color="bg-emerald-500/10 text-emerald-400">
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-accent-blue" />
                  </div>
                  <span className="text-text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>

        {/* Challenges */}
        <AnimatedSection className="mb-6">
          <Section icon={AlertTriangle} title="Challenges Faced" color="bg-amber-500/10 text-amber-400">
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-text-secondary text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>

        {/* Future Improvements */}
        <AnimatedSection className="mb-12">
          <Section icon={Lightbulb} title="Future Improvements" color="bg-accent-purple/10 text-accent-purple">
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.futureImprovements.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent-purple text-sm flex-shrink-0 mt-0.5">→</span>
                  <span className="text-text-secondary text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <AnimatedSection>
            <div className="section-label mb-6">Other Projects</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`}>
                  <div
                    className="card p-5 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                    />
                    <h3 className="font-display text-xl text-text-primary mb-1 group-hover:gradient-text transition-all">
                      {p.title}
                    </h3>
                    <p className="text-text-secondary text-sm">{p.tagline}</p>
                    <div className="flex items-center gap-2 mt-3 text-accent-blue text-sm font-semibold group-hover:gap-3 transition-all">
                      View Case Study <ArrowLeft size={14} className="rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
