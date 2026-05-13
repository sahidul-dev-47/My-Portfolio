"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Download, Printer, Mail, Github, Linkedin,
  Globe, MapPin, ExternalLink, CheckCircle
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

function ResumeDocument({ resume }) {
  const { header, summary, skills, projects, experience, education } = resume;

  return (
    <div
      id="resume-document"
      className="bg-white text-gray-900 max-w-[860px] mx-auto rounded-2xl overflow-hidden
                 shadow-[0_0_80px_rgba(0,0,0,0.5)] print:shadow-none print:rounded-none print:max-w-none"
    >
      {/* ── Header ── */}
      <div className="bg-gradient-to-br from-gray-950 to-gray-900 px-10 pt-10 pb-8 text-white print:bg-gray-950">
        <h1 className="text-4xl font-bold tracking-tight mb-1">{header.name}</h1>
        <p className="text-blue-400 text-lg font-medium mb-4">{header.title}</p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-gray-300 text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-blue-400" />
            {header.location}
          </span>
          <a href={`mailto:${header.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail size={13} className="text-blue-400" />
            {header.email}
          </a>
          <a href={header.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
            <Github size={13} className="text-blue-400" />
            GitHub
          </a>
          <a href={header.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
            <Linkedin size={13} className="text-blue-400" />
            LinkedIn
          </a>
          <a href={header.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
            <Globe size={13} className="text-blue-400" />
            {header.website?.replace("https://", "")}
          </a>
        </div>
      </div>

      <div className="px-10 py-8 space-y-8">

        {/* ── Summary ── */}
        <Section title="Professional Summary">
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </Section>

        {/* ── Skills ── */}
        <Section title="Technical Skills">
          <div className="space-y-2.5">
            {[
              { label: "Frontend", items: skills.frontend },
              { label: "Backend", items: skills.backend },
              { label: "Tools & DevOps", items: skills.tools },
            ].map(({ label, items }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="w-28 font-semibold text-gray-800 flex-shrink-0">{label}:</span>
                <span className="text-gray-600">{items.join(" • ")}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects">
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.title} className="border-l-2 border-blue-200 pl-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="font-semibold text-gray-900">{p.title}</span>
                    <span className="text-gray-500 text-sm ml-2">— {p.role}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{p.duration}</span>
                    <span>{p.year}</span>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-blue-600 hover:underline no-print">
                      <ExternalLink size={11} /> Live
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-blue-600 hover:underline no-print">
                      <Github size={11} /> Code
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{p.description}</p>
                <ul className="space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Experience ── */}
        <Section title="Experience">
          {experience.map((e) => (
            <div key={e.role} className="border-l-2 border-blue-200 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <span className="font-semibold text-gray-900">{e.role}</span>
                  <span className="text-gray-500 text-sm ml-2">@ {e.company}</span>
                </div>
                <div className="text-xs text-gray-500">{e.period}</div>
              </div>
              <ul className="space-y-1 mt-2">
                {e.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <CheckCircle size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-gray-900">{e.degree}</p>
                <p className="text-gray-600 text-sm">{e.institution} — {e.location}</p>
                <p className="text-gray-500 text-sm">{e.field}</p>
              </div>
              <span className="text-sm text-gray-500">{e.year}</span>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">{title}</h2>
        <div className="flex-1 h-[1.5px] bg-blue-100" />
      </div>
      {children}
    </div>
  );
}

export default function ResumeClient({ resume }) {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      {/* Controls (hidden on print) */}
      <div className="no-print max-w-[860px] mx-auto mb-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="section-label mb-2">Auto-Generated</div>
              <h1 className="section-title text-3xl">
                My <span className="gradient-text italic">Resume</span>
              </h1>
              <p className="text-text-secondary text-sm mt-1">
                ATS-friendly • Print-ready • Auto-generated from portfolio data
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={handlePrint}
                className="btn-secondary text-sm"
                whileTap={{ scale: 0.96 }}
              >
                <Printer size={16} />
                Print / PDF
              </motion.button>
              <motion.button
                onClick={handlePrint}
                className="btn-primary text-sm"
                whileTap={{ scale: 0.96 }}
              >
                <Download size={16} />
                Download
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* ATS tip */}
        <AnimatedSection delay={0.1} className="mt-4">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent-blue/5 border border-accent-blue/20 text-sm">
            <CheckCircle size={16} className="text-accent-blue flex-shrink-0" />
            <span className="text-text-secondary">
              This resume is <strong className="text-text-primary">ATS-optimized</strong> — clean layout, no tables, keyword-rich content, and standard section headings.
            </span>
          </div>
        </AnimatedSection>
      </div>

      {/* Resume document */}
      <AnimatedSection delay={0.15}>
        <ResumeDocument resume={resume} />
      </AnimatedSection>
    </div>
  );
}
