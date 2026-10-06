"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personal } from "@/data/portfolio";
import { Code2, Rocket, Heart, CheckCircle2, Globe, Cpu } from "lucide-react";

const stats = [
  { value: "2", label: "Custom Domain Apps" },
  { value: "6+", label: "Full-Stack Apps" },
  { value: "100%", label: "Production Focused" },
  { value: "Next.js 14", label: "Core Architecture" },
];

const traits = [
  {
    icon: Code2,
    title: "Clean Full-Stack Architecture",
    desc: "Writing modular, scalable code with Next.js App Router, Express, and well-indexed MongoDB schemas.",
  },
  {
    icon: Rocket,
    title: "Real-World Problem Solver",
    desc: "Built EduraCore to fix language learning methodology and Shahrasti Blood for emergency healthcare.",
  },
  {
    icon: Heart,
    title: "High-Standard UX & Polish",
    desc: "Obsessed with fast load speeds, intuitive interaction design, and reliable mobile responsiveness.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-bg-secondary/30 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="section-label mb-3">Who I Am</div>
          <h2 className="section-title">
            About <span className="gradient-text italic">Me</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-lg mx-auto">
            A solo developer dedicated to turning ambitious ideas into production-ready software.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="text-text-primary text-lg sm:text-xl font-medium leading-relaxed mb-5">
                I am a full-stack developer who believes the best way to demonstrate engineering capability is by building and launching real products that serve people.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Rather than stopping at tutorial projects, I focus on solving actual community and educational challenges. I architected and shipped <span className="text-cyan-400 font-semibold">EduraCore</span> (a science-backed English mastery platform with phonetics labs and conversational AI) and <span className="text-red-400 font-semibold">Shahrasti Blood</span> (a voluntary blood donation directory connecting donors across 10 unions).
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                My workflow spans frontend design in Next.js & Tailwind CSS, robust backend logic in Node.js & Express, database modeling in MongoDB, and seamless cloud deployments on Vercel.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Full Stack MERN",
                  "Next.js App Router",
                  "Real-World Platforms",
                  "Open for Remote Roles",
                  "Freelance Friendly",
                ].map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection
              delay={0.2}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="card p-4 text-center border border-border-subtle hover:border-border-glow transition-all">
                  <div className="font-display text-2xl sm:text-3xl gradient-text mb-1 font-bold">
                    {value}
                  </div>
                  <div className="text-text-muted text-xs font-mono leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* Right — traits */}
          <div className="space-y-4">
            {traits.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection
                key={title}
                delay={0.1 + i * 0.1}
                direction="left"
              >
                <motion.div
                  className="card p-5 sm:p-6 flex gap-4 group border border-border-subtle hover:border-border-glow transition-all"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all border border-accent-blue/20">
                    <Icon size={22} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1 text-base">
                      {title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}

            {/* Terminal card */}
            <AnimatedSection delay={0.4} direction="left">
              <div className="card p-2 sm:p-3 font-mono text-sm border border-border-subtle">
                <div className="relative group p-[1px] rounded-2xl overflow-hidden bg-slate-900">
                  <div className="relative flex flex-col gap-4 p-6 bg-[#040814]/95 backdrop-blur-2xl rounded-[20px] border border-slate-800/80 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                        <span className="text-slate-500 font-mono text-xs ml-2 select-none">
                          shahidul@developer-terminal:~
                        </span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-3 font-mono text-xs sm:text-sm leading-relaxed">
                      <div className="flex flex-col sm:flex-row sm:gap-3">
                        <span className="text-cyan-400 font-semibold">$ whoami</span>
                        <span className="text-slate-200">shahidul_islam // Full Stack Engineer</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:gap-3">
                        <span className="text-cyan-400 font-semibold">$ cat products_live.json</span>
                        <span className="text-emerald-400">
                          [&quot;eduracore.com&quot;, &quot;shahrastiblood.com&quot;, &quot;researchpilot-ai&quot;]
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:gap-3 items-start sm:items-center">
                        <span className="text-cyan-400 font-semibold">$ echo $AVAILABILITY</span>
                        <div className="flex items-center gap-2 text-amber-400">
                          <span>open_for_hire=true</span>
                          <CheckCircle2 size={14} className="text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
