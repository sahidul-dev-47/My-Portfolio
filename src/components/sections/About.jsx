"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personal } from "@/data/portfolio";
import { Code2, Rocket, Heart } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "6mo", label: "Experience" },
  { value: "3", label: "Deployments Live" },
  { value: "100%", label: "Passion" },
];

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing readable, maintainable code is as important as making it work.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "From idea to deployment — I build and launch production-ready apps.",
  },
  {
    icon: Heart,
    title: "User First",
    desc: "Every design decision is made with the end user's experience in mind.",
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
          <div className="section-label mb-4">Who I Am</div>
          <h2 className="section-title">
            About <span className="gradient-text italic">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {personal.about}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                I started my coding journey with curiosity and zero prior
                experience. In just 6 months I went from writing my first line
                of JavaScript to deploying full-stack applications used by real
                people. Every day I push myself to learn something new — whether
                it&apos;s a new Next.js pattern, a better database schema, or a
                cleaner UI design.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Open to Work",
                  "Bangladesh 🇧🇩",
                  "MERN Stack",
                  "Problem Solver",
                ].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection
              delay={0.2}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="card p-4 text-center">
                  <div className="font-display text-3xl gradient-text mb-1">
                    {value}
                  </div>
                  <div className="text-text-muted text-xs font-mono">
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
                  className="card p-6 flex gap-5 group"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
                    <Icon size={22} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
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
              <div className="card p-5 font-mono text-sm">
                <div className="relative group p-[1.5px] rounded-3xl overflow-hidden bg-slate-800/50 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.4)]">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                    }}
                    className="absolute -inset-[150%] bg-gradient-conic from-cyan-500/40 via-emerald-500/40 to-amber-500/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />

                  <div className="relative flex flex-col gap-6 p-8 bg-[#030712]/95 backdrop-blur-2xl rounded-[22px] border border-slate-800/60 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] shadow-[0_0_10px_rgba(255,95,87,0.3)]" />
                          <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] shadow-[0_0_10px_rgba(254,188,46,0.3)]" />
                          <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] shadow-[0_0_10px_rgba(40,200,64,0.3)]" />
                        </div>
                        <span className="text-slate-500 font-mono text-[11px] tracking-wider ml-2 select-none">
                          shahidul.sh
                        </span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-5 font-mono text-sm leading-relaxed">
                      <div className="flex flex-col sm:flex-row sm:gap-4 group/line">
                        <span className="text-cyan-400 font-semibold opacity-90">
                          $ whoami
                        </span>
                        <span className="text-slate-200 tracking-tight transition-colors group-hover/line:text-white">
                          shahidul_islam
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:gap-4 group/line">
                        <span className="text-cyan-400 font-semibold opacity-90">
                          $ cat skills.txt
                        </span>
                        <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.2)]">
                          MERN | Next.js | Node.js | Express.js
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:gap-4 items-start sm:items-center group/line">
                        <span className="text-cyan-400 font-semibold opacity-90">
                          $ echo $STATUS
                        </span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-amber-400 italic">
                            available_for_hire=true
                          </span>
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="flex items-center justify-center bg-emerald-500/10 rounded-md p-1 border border-emerald-500/20"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-emerald-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                      <svg
                        className="w-32 h-32 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z" />
                      </svg>
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
