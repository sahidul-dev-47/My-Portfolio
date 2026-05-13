"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-2 left-0 right-0 z-[9990] transition-all duration-500`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container-max px-4 sm:px-6">
          <div
            className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "glass shadow-card border border-border-subtle"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white font-mono">
                SI
              </div>
              <span className="font-display text-lg text-text-primary hidden sm:block">
                Shahidul<span className="gradient-text">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                    ${
                      pathname === link.href
                        ? "text-accent-blue bg-accent-blue/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-primary text-xs px-4 py-2 bg-gradient-to-r from-emerald-500 to-accent-blue"
            >
              💼 Hire Me
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl glass text-text-primary"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9989] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-bg-primary/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 border border-border-subtle shadow-card-hover"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-text-primary hover:bg-white/5 hover:text-accent-blue transition-all"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="font-mono text-xs text-text-muted">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 pt-4 border-t border-border-subtle">
                <a
                  href="mailto:sahidulx47@gmail.com"
                  className="btn-primary text-xs px-4 py-2 bg-gradient-to-r from-emerald-500 to-accent-blue"
                >
                  💼 Hire Me
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
