"use client";
import { motion } from "framer-motion";
import {
  Download, Printer, Mail, Github, Linkedin,
  Globe, MapPin, ExternalLink, CheckCircle, Phone
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

function ResumeDocument({ resume }) {
  const { header, summary, skills, projects, experience, education } = resume;

  return (
    <div
      id="resume-document"
      className="bg-white text-gray-900 w-full max-w-[860px] mx-auto rounded-2xl overflow-hidden
                 shadow-[0_0_80px_rgba(0,0,0,0.5)] print:shadow-none print:rounded-none print:max-w-none print:w-full"
    >
      {/* ── Header ── */}
      <div className="resume-header bg-gradient-to-br from-gray-950 to-gray-900 px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-6 md:pb-8 text-white
                      print:bg-white print:text-black print:px-0 print:pt-0 print:pb-3 print:border-b-2 print:border-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 text-white print:text-black print:text-2xl">
          {header.name}
        </h1>
        <p className="text-blue-400 print:text-gray-800 text-sm sm:text-base md:text-lg font-medium mb-3 print:mb-2">
          {header.title}
        </p>

        {/* Contact Bar - Fully responsive on mobile, standard separator line for ATS print */}
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-300 print:text-gray-800 print:gap-x-2">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-blue-400 print:hidden flex-shrink-0" />
            <span>{header.location}</span>
          </span>

          <span className="hidden print:inline text-gray-400">•</span>

          <a href={`mailto:${header.email}`} className="flex items-center gap-1.5 hover:text-white print:text-black break-all">
            <Mail size={13} className="text-blue-400 print:hidden flex-shrink-0" />
            <span>{header.email}</span>
          </a>

          {header.whatsapp && (
            <>
              <span className="hidden print:inline text-gray-400">•</span>
              <a href={`tel:${header.whatsapp}`} className="flex items-center gap-1.5 hover:text-white print:text-black">
                <Phone size={13} className="text-blue-400 print:hidden flex-shrink-0" />
                <span>{header.whatsapp}</span>
              </a>
            </>
          )}

          <span className="hidden print:inline text-gray-400">•</span>

          <a
            href={header.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white print:text-black"
          >
            <Github size={13} className="text-blue-400 print:hidden flex-shrink-0" />
            <span>github.com/sahidul-dev-47</span>
          </a>

          <span className="hidden print:inline text-gray-400">•</span>

          <a
            href={header.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white print:text-black"
          >
            <Linkedin size={13} className="text-blue-400 print:hidden flex-shrink-0" />
            <span>linkedin.com/in/sahidul-islam-</span>
          </a>

          <span className="hidden print:inline text-gray-400">•</span>

          <a
            href={header.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white print:text-black"
          >
            <Globe size={13} className="text-blue-400 print:hidden flex-shrink-0" />
            <span>{header.website?.replace("https://", "")}</span>
          </a>
        </div>
      </div>

      {/* ── Document Body ── */}
      <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 space-y-6 sm:space-y-7 print:px-0 print:py-2 print:space-y-2.5">

        {/* ── Professional Summary ── */}
        <Section title="Professional Summary">
          <p className="text-xs sm:text-sm text-gray-600 print:text-gray-800 print:text-[10.5px] leading-relaxed print:leading-snug">
            {summary}
          </p>
        </Section>

        {/* ── Technical Skills ── */}
        <Section title="Technical Skills">
          <div className="space-y-2 print:space-y-1">
            {[
              { label: "Frontend", items: skills.frontend },
              { label: "Backend", items: skills.backend },
              { label: "Tools & DevOps", items: skills.tools },
            ].map(({ label, items }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 text-xs sm:text-sm print:text-[10.5px]">
                <span className="w-full sm:w-28 font-semibold text-gray-900 print:w-28 flex-shrink-0">
                  {label}:
                </span>
                <span className="text-gray-600 print:text-gray-800">
                  {items.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Featured Projects ── */}
        {/*
            On-screen: Shows all 5 projects.
            Print/Download mode: Shows only top 3 projects (print:hidden on idx >= 3)
            for guaranteed 1-page ATS fit.
        */}
        <Section title="Featured Projects">
          <div className="space-y-4 print:space-y-2">
            {projects.map((p, idx) => (
              <div
                key={p.title}
                className={`border-l-2 border-blue-200 pl-3 sm:pl-4 print:border-l print:border-gray-400 print:pl-2.5 page-break-avoid ${
                  idx >= 3 ? "print:hidden" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base print:text-xs">
                      {p.title}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-1.5 print:text-[10px]">
                      — {p.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-500 print:text-[10px]">
                    <span className="font-medium text-blue-600 print:text-gray-800">{p.badge}</span>
                    <span>{p.year}</span>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline no-print font-medium"
                    >
                      <ExternalLink size={11} /> Live Demo
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline no-print font-medium"
                    >
                      <Github size={11} /> Code
                    </a>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 print:text-gray-800 print:text-[10px] mb-1.5">
                  {p.description}
                </p>

                <ul className="space-y-1 print:space-y-0.5">
                  {p.highlights.map((h, i) => (
                    <li
                      key={i}
                      className={`text-xs sm:text-sm text-gray-600 print:text-gray-800 print:text-[10px] flex items-start gap-1.5 ${
                        i >= 2 ? "print:hidden" : ""
                      }`}
                    >
                      <CheckCircle size={13} className="text-blue-500 flex-shrink-0 mt-0.5 print:hidden" />
                      <span className="hidden print:inline-block mr-1 text-black font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-2 print:mt-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100
                                 print:bg-transparent print:p-0 print:border-none print:text-gray-700 print:text-[9.5px]"
                    >
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
            <div key={e.role} className="border-l-2 border-blue-200 pl-3 sm:pl-4 print:border-l print:border-gray-400 print:pl-2.5 page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base print:text-xs">{e.role}</span>
                  <span className="text-gray-500 text-xs sm:text-sm ml-1.5 print:text-[10px]">@ {e.company}</span>
                </div>
                <div className="text-xs text-gray-500 print:text-[10px]">{e.period}</div>
              </div>
              <ul className="space-y-1 mt-1.5 print:mt-1 print:space-y-0.5">
                {e.highlights.map((h, i) => (
                  <li
                    key={i}
                    className={`text-xs sm:text-sm text-gray-600 print:text-gray-800 print:text-[10px] flex items-start gap-1.5 ${
                      i >= 3 ? "print:hidden" : ""
                    }`}
                  >
                    <CheckCircle size={13} className="text-blue-500 flex-shrink-0 mt-0.5 print:hidden" />
                    <span className="hidden print:inline-block mr-1 text-black font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 page-break-avoid">
              <div>
                <p className="font-semibold text-gray-900 text-xs sm:text-sm print:text-[10.5px]">{e.degree}</p>
                <p className="text-gray-600 text-xs sm:text-sm print:text-[10px]">{e.institution} — {e.location}</p>
                <p className="text-gray-500 text-xs print:text-[9.5px]">{e.field}</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 print:text-[10px] font-mono">{e.year}</span>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="page-break-avoid">
      <div className="flex items-center gap-2.5 mb-2.5 print:mb-1">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 print:text-black print:text-[10.5px]">
          {title}
        </h2>
        <div className="flex-1 h-[1.5px] bg-blue-100 print:bg-black" />
      </div>
      {children}
    </div>
  );
}

export default function ResumeClient({ resume }) {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-3 sm:px-6">
      {/* Controls (hidden on print) */}
      <div className="no-print max-w-[860px] mx-auto mb-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="section-label mb-1.5">Auto-Generated</div>
              <h1 className="section-title text-2xl sm:text-3xl">
                My <span className="gradient-text italic">Resume</span>
              </h1>
              <p className="text-text-secondary text-xs sm:text-sm mt-1">
                ATS-friendly • Single-Page Print/PDF • Auto-generated from portfolio data
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
              <motion.button
                onClick={handlePrint}
                className="btn-secondary text-xs sm:text-sm flex-1 sm:flex-initial justify-center"
                whileTap={{ scale: 0.96 }}
              >
                <Printer size={15} />
                Print
              </motion.button>
              <motion.button
                onClick={handlePrint}
                className="btn-primary text-xs sm:text-sm flex-1 sm:flex-initial justify-center"
                whileTap={{ scale: 0.96 }}
              >
                <Download size={15} />
                Download PDF
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* ATS tip badge */}
        <AnimatedSection delay={0.1} className="mt-4">
          <div className="flex items-start sm:items-center gap-2.5 px-4 py-3 rounded-xl bg-accent-blue/5 border border-accent-blue/20 text-xs sm:text-sm">
            <CheckCircle size={16} className="text-accent-blue flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-text-secondary">
              <strong className="text-text-primary">1-Page ATS Certified:</strong> Displays all 5 projects on screen, and automatically formats the top 3 projects into a clean single-page layout when downloaded/printed as PDF.
            </span>
          </div>
        </AnimatedSection>
      </div>

      {/* Resume Document */}
      <div className="transition-all duration-300">
        <ResumeDocument resume={resume} />
      </div>
    </div>
  );
}
