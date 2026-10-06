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
      whatsappUrl: personal.whatsapp,
      whatsappNumber: personal.whatsappNumber,
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
  const allTech = [...skills.frontend.slice(0, 5), ...skills.backend.slice(0, 4)].join(", ");
  return `Results-driven ${personal.role} and product builder with hands-on experience designing, developing, and deploying live production web applications, including custom-domain platforms (EduraCore and Shahrasti Blood). Proficient in ${allTech}, modern state management, and scalable REST API architectures. Dedicated to clean code, optimal performance, and building user-centric solutions.`;
}

function buildSkillsSection() {
  return {
    frontend: skills.frontend,
    backend: skills.backend,
    tools: skills.tools,
  };
}

function buildProjectsSection() {
  return projects.slice(0, 3).map((p) => ({
    title: p.title,
    role: p.role,
    badge: p.badge || (p.isCustomDomain ? p.domain : "Full Stack"),
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
