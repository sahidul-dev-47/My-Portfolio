"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { ShieldCheck, Network, Cpu } from "lucide-react";

const ICON_MAP = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Framer Motion": { icon: SiFramer, color: "#EA4C89" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#E2E8F0" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongodb, color: "#880000" },
  "JWT Auth": { icon: SiJsonwebtokens, color: "#D63AFF" },
  "Better Auth": { icon: ShieldCheck, color: "#10B981" },
  "REST APIs": { icon: Network, color: "#38BDF8" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#F0F6FC" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "VS Code": { icon: TbBrandVscode, color: "#007ACC" },
};

const categories = [
  {
    key: "frontend",
    label: "Frontend Engineering",
    color: "from-accent-blue to-cyan-400",
    glow: "rgba(79,142,247,0.2)",
    desc: "Responsive, dynamic, and accessible user interfaces",
  },
  {
    key: "backend",
    label: "Backend & Systems",
    color: "from-accent-purple to-pink-400",
    glow: "rgba(155,109,255,0.2)",
    desc: "Robust REST APIs, secure auth & schema modeling",
  },
  {
    key: "tools",
    label: "DevOps & Tooling",
    color: "from-emerald-400 to-accent-cyan",
    glow: "rgba(34,211,238,0.2)",
    desc: "Version control, modern CI/CD & cloud deployments",
  },
];

function SkillPill({ name, index }) {
  const item = ICON_MAP[name];
  const Icon = item?.icon || Cpu;
  const iconColor = item?.color || "#4F8EF7";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl glass border border-border-subtle
                 hover:border-border-glow hover:shadow-glow transition-all duration-300 cursor-default"
    >
      <Icon size={17} style={{ color: iconColor }} className="flex-shrink-0 transition-transform group-hover:scale-110" />
      <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors font-medium">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label mb-3">Technical Stack</div>
          <h2 className="section-title">
            My <span className="gradient-text italic">Skills</span>
          </h2>
          <p className="text-text-secondary mt-2 max-w-lg mx-auto text-sm sm:text-base">
            Modern, production-proven technologies I use daily to engineer scalable full-stack applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ key, label, color, glow, desc }, ci) => (
            <AnimatedSection key={key} delay={ci * 0.1}>
              <motion.div
                className="card p-6 h-full relative overflow-hidden group border border-border-subtle hover:border-border-glow transition-all"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color}`} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${glow}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <h3 className={`font-semibold text-lg mb-1 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {label}
                  </h3>
                  <p className="text-text-muted text-xs font-mono mb-5">{desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {skills[key]?.map((skill, i) => (
                      <SkillPill key={skill} name={skill} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom banner: Engineering values */}
        <AnimatedSection delay={0.3} className="mt-10">
          <div className="card p-6 border border-border-subtle relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-accent-blue uppercase tracking-widest mb-1">
                Engineering Standard
              </p>
              <h4 className="text-text-primary font-medium text-sm sm:text-base">
                Clean component structure • RESTful API design • Role-based access control • Zero layout shifts
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Production Tested
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
