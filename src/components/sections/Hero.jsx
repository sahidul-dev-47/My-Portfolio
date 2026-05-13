"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = [
  " MERN Stack Developer",
  "Next.js Developer",
  "React Developer",
  "Junior Web Developer",
];

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-cursor-blink text-accent-blue">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/8 rounded-full blur-[120px] animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] animate-blob [animation-delay:5s]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,142,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-max px-4 sm:px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border-subtle text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-text-secondary font-mono text-xs tracking-wide">
                Available for work
              </span>
              <Sparkles size={12} className="text-accent-blue" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary mb-4 leading-none tracking-tight"
          >
            Shahidul{" "}
            <span className="font-display italic gradient-text">Islam</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-light text-text-secondary mb-6 min-h-[2.5rem]"
          >
            <TypeWriter words={ROLES} />
          </motion.div>

          {/* Location */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-2 text-text-muted font-mono text-sm mb-8"
          >
            <span>📍</span>
            <span>{personal.location}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <Link href="/projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} className="-rotate-90" />
          </Link>
          <Link href="/resume" className="btn-secondary">
            Download Resume
          </Link>

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-border-glow hover:shadow-glow transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs text-text-muted tracking-widest">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-accent-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
