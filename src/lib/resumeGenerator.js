import { personal, skills, projects, education, experience } from "@/data/portfolio";

/**
 * AUTO RESUME GENERATOR
 * Takes portfolio data and produces a structured, ATS-friendly resume object.
 * Used by both the UI resume page and can be serialized to PDF.
 */

export function generateResume() {
  return {
    header: {
      name: personal.name,
      title: personal.role,
      location: personal.location,
      email: personal.email,
      github: personal.github,
      linkedin: personal.linkedin,
      website: personal.website,
    },
    summary: buildSummary(),
    skills: buildSkillsSection(),
    projects: buildProjectsSection(),
    experience: buildExperienceSection(),
    education: buildEducationSection(),
  };
}

function buildSummary() {
  const allTech = [...skills.frontend, ...skills.backend].slice(0, 8).join(", ");
  return `Passionate ${personal.role} with hands-on experience building production-ready full-stack web applications. Proficient in ${allTech}, and developer tooling. Built and deployed ${projects.length} real-world projects serving live users. Self-driven learner committed to writing clean, scalable code and delivering exceptional user experiences.`;
}

function buildSkillsSection() {
  return {
    frontend: skills.frontend,
    backend: skills.backend,
    tools: skills.tools,
  };
}

function buildProjectsSection() {
  return projects.map((p) => ({
    title: p.title,
    role: p.role,
    duration: p.duration,
    year: p.year,
    status: p.status,
    description: p.tagline,
    highlights: [
      p.outcome,
      ...p.features.slice(0, 2),
    ],
    tech: p.tech,
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl,
  }));
}

function buildExperienceSection() {
  return experience.map((e) => ({
    role: e.role,
    company: e.company,
    location: e.location,
    period: e.period,
    highlights: e.highlights,
  }));
}

function buildEducationSection() {
  return education.map((e) => ({
    degree: e.degree,
    institution: e.institution,
    location: e.location,
    year: e.year,
    field: e.field,
  }));
}
