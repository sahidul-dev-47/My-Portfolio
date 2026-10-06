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
      className="bg-white text-slate-900 w-full max-w-[800px] mx-auto rounded-xl p-6 sm:p-9
                 shadow-2xl border border-slate-200/80 print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:w-full print:bg-white print:text-slate-900"
    >
      {/* ── Executive Header ── */}
      <div className="border-b-2 border-slate-900 pb-3 mb-3.5 print:pb-2.5 print:mb-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            {header.name}
          </h1>
          <span className="text-xs sm:text-sm font-bold text-blue-700 font-mono">
            {header.title}
          </span>
        </div>

        {/* Contact Information Bar: Highly visible, clickable, 100% ATS parseable */}
        <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs text-slate-700">
          <span className="inline-flex items-center gap-1 font-medium">
            <MapPin size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <span>{header.location}</span>
          </span>

          <span className="text-slate-400">•</span>

          <span className="inline-flex items-center gap-1">
            <Mail size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <a
              href={`mailto:${header.email}`}
              className="font-semibold text-blue-700 hover:underline underline-offset-2"
            >
              {header.email}
            </a>
          </span>

          <span className="text-slate-400">•</span>

          <span className="inline-flex items-center gap-1">
            <Phone size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <a
              href={header.whatsappUrl || "https://wa.me/8801624698738"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 hover:text-blue-700 hover:underline underline-offset-2"
            >
              {header.whatsappNumber || header.whatsapp}
            </a>
          </span>

          <span className="text-slate-400">•</span>

          <span className="inline-flex items-center gap-1">
            <Linkedin size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <a
              href={header.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline underline-offset-2"
            >
              linkedin.com/in/sahidul-islam-
            </a>
          </span>

          <span className="text-slate-400">•</span>

          <span className="inline-flex items-center gap-1">
            <Github size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <a
              href={header.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 hover:text-blue-700 hover:underline underline-offset-2"
            >
              github.com/sahidul-dev-47
            </a>
          </span>

          <span className="text-slate-400">•</span>

          <span className="inline-flex items-center gap-1">
            <Globe size={12} className="text-blue-600 print:hidden flex-shrink-0" />
            <a
              href={header.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline underline-offset-2"
            >
              shahidul.dev
            </a>
          </span>
        </div>
      </div>

      {/* ── Document Body ── */}
      <div className="space-y-3.5 print:space-y-3 text-[12.5px] leading-relaxed text-slate-700">

        {/* ── Professional Summary ── */}
        <section className="page-break-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 pb-0.5 border-b border-slate-300 mb-1">
            Professional Summary
          </h2>
          <p className="text-slate-700 leading-snug">
            {summary}
          </p>
        </section>

        {/* ── Technical Skills ── */}
        <section className="page-break-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 pb-0.5 border-b border-slate-300 mb-1">
            Technical Skills
          </h2>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="w-28 font-bold text-slate-900 flex-shrink-0">
                Frontend:
              </span>
              <span className="text-slate-700">
                {skills.frontend.join(" • ")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="w-28 font-bold text-slate-900 flex-shrink-0">
                Backend:
              </span>
              <span className="text-slate-700">
                {skills.backend.join(" • ")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="w-28 font-bold text-slate-900 flex-shrink-0">
                Tools & DevOps:
              </span>
              <span className="text-slate-700">
                {skills.tools.join(" • ")}
              </span>
            </div>
          </div>
        </section>

        {/* ── Key Projects (Top 3 Only) ── */}
        <section className="page-break-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 pb-0.5 border-b border-slate-300 mb-1.5">
            Key Featured Projects
          </h2>
          <div className="space-y-2.5">
            {projects.slice(0, 3).map((p) => {
              const displayUrl = p.liveUrl.replace("https://", "").replace(/\/$/, "");
              const displayGithub = p.githubUrl.replace("https://github.com/", "");

              return (
                <div key={p.title} className="page-break-avoid">
                  {/* Title + Role + Live/Code Links */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                    <div className="flex items-baseline flex-wrap gap-x-1.5">
                      <span className="font-bold text-slate-950 text-[13.5px]">
                        {p.title}
                      </span>
                      <span className="text-slate-500 text-[11px] italic">
                        — {p.role}
                      </span>
                    </div>

                    <div className="flex items-center flex-wrap gap-x-2 text-[11px] font-mono">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-700 hover:underline"
                      >
                        Live: {displayUrl}
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-600 hover:underline"
                      >
                        Code: {displayGithub}
                      </a>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-slate-700 text-[11.5px] mb-0.5 leading-snug">
                    {p.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-0.5 text-[11.5px] text-slate-700 pl-1 leading-snug">
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-900 font-bold leading-tight select-none">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="text-[10.5px] text-slate-600 mt-0.5">
                    <span className="font-semibold text-slate-800">Stack: </span>
                    <span>{p.tech.join(", ")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="page-break-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 pb-0.5 border-b border-slate-300 mb-1">
            Professional Experience
          </h2>
          {experience.map((e) => (
            <div key={e.role} className="page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-0.5">
                <div>
                  <span className="font-bold text-slate-950 text-[13px]">{e.role}</span>
                  <span className="text-slate-600 text-[11.5px] ml-1.5 italic">
                    @ {e.company}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">{e.period}</div>
              </div>
              <ul className="space-y-0.5 text-[11.5px] text-slate-700 pl-1 mt-0.5 leading-snug">
                {e.highlights.slice(0, 2).map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-900 font-bold leading-tight select-none">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Education ── */}
        <section className="page-break-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-950 pb-0.5 border-b border-slate-300 mb-1">
            Education
          </h2>
          {education.map((e) => (
            <div key={e.degree} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[12px] page-break-avoid">
              <div>
                <span className="font-bold text-slate-950">{e.degree}</span>
                <span className="text-slate-600 ml-1.5">— {e.institution}, {e.location} ({e.field})</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">{e.year}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default function ResumeClient({ resume }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper min-h-screen pt-24 sm:pt-28 pb-20 px-3 sm:px-6 bg-[#050508] print:bg-white print:p-0 print:m-0 print:min-h-0">
      {/* Controls Bar (hidden during print/PDF generation) */}
      <div className="no-print max-w-[800px] mx-auto mb-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="section-label mb-1.5">Professional Document</div>
              <h1 className="section-title text-2xl sm:text-3xl">
                My <span className="gradient-text italic">Resume</span>
              </h1>
              <p className="text-text-secondary text-xs sm:text-sm mt-1">
                ATS Certified • 1-Page Layout • Pure White Print & Download
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
              <motion.button
                onClick={handlePrint}
                className="btn-secondary text-xs sm:text-sm flex-1 sm:flex-initial justify-center"
                whileTap={{ scale: 0.96 }}
              >
                <Printer size={15} />
                Print / Save PDF
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

        {/* ATS Quality Notice */}
        <AnimatedSection delay={0.1} className="mt-4">
          <div className="flex items-start sm:items-center gap-2.5 px-4 py-3 rounded-xl bg-accent-blue/5 border border-accent-blue/20 text-xs sm:text-sm">
            <CheckCircle size={16} className="text-accent-blue flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-text-secondary">
              <strong className="text-text-primary">Single-Page ATS Certified:</strong> Pure white layout, verified contact details (<span className="text-blue-400">contact@shahidulislam.me</span>), and clickable account links. <span className="text-emerald-400 font-medium">Tip:</span> প্রিন্ট ডায়ালগে Destination হিসেবে <strong className="text-white">&quot;Save as PDF&quot;</strong> সিলেক্ট করুন যাতে সব লিংক ১০০% ক্লিকেবল থাকে।
            </span>
          </div>
        </AnimatedSection>
      </div>

      {/* Clean ATS Resume Document */}
      <div className="print:m-0 print:p-0">
        <ResumeDocument resume={resume} />
      </div>
    </div>
  );
}
