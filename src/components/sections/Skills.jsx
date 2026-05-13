"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/portfolio";

const SKILL_ICONS = {
  HTML: "🌐", CSS: "🎨", JavaScript: "⚡", React: "⚛️", "Next.js": "▲",
  "Tailwind CSS": "💨", "Framer Motion": "🎭", "Node.js": "🟢",
  "Express.js": "🚂", MongoDB: "🍃", Mongoose: "🔗", JWT: "🔐",
  "Better Auth": "🛡️", "REST API": "📡", Git: "🌿", GitHub: "🐙",
  Vercel: "▲", Netlify: "🌊", Figma: "🎯", Postman: "📮", "VS Code": "💻",
};

const categories = [
  {
    key: "frontend",
    label: "Frontend",
    color: "from-accent-blue to-cyan-400",
    glow: "rgba(79,142,247,0.2)",
    desc: "Crafting pixel-perfect, responsive UIs",
  },
  {
    key: "backend",
    label: "Backend",
    color: "from-accent-purple to-pink-400",
    glow: "rgba(155,109,255,0.2)",
    desc: "Building scalable APIs & server logic",
  },
  {
    key: "tools",
    label: "Tools & DevOps",
    color: "from-emerald-400 to-accent-cyan",
    glow: "rgba(34,211,238,0.2)",
    desc: "Shipping & collaborating professionally",
  },
];

function SkillPill({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="group flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-border-subtle
                 hover:border-border-glow hover:shadow-glow transition-all duration-300 cursor-default"
    >
      <span className="text-base leading-none">{SKILL_ICONS[name] || "🔧"}</span>
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors font-medium">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label mb-4">What I Know</div>
          <h2 className="section-title">
            My <span className="gradient-text italic">Skills</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            A curated set of technologies I use to build modern full-stack web applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ key, label, color, glow, desc }, ci) => (
            <AnimatedSection key={key} delay={ci * 0.1}>
              <motion.div
                className="card p-6 h-full relative overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ "--glow": glow }}
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
                    {skills[key].map((skill, i) => (
                      <SkillPill key={skill} name={skill} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom strip — all skills combined */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="card p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-label">Full Stack Arsenal</span>
              <div className="flex-1 h-[1px] bg-border-subtle" />
              <span className="font-mono text-xs text-text-muted">
                {Object.values(skills).flat().length} technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="font-mono text-xs px-2 py-1 rounded-md bg-white/[0.04] text-text-secondary border border-border-subtle"
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
