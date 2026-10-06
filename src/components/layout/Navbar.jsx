"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (pathname === "/" && window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname === "/") {
      const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      const sections = ["about", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const checkActive = (href) => {
    // If checking Projects or any sub-route like /projects/[id]
    if (href === "/projects") {
      return pathname.startsWith("/projects");
    }
    // If checking Resume
    if (href === "/resume") {
      return pathname === "/resume";
    }
    // If checking Contact page or home contact section
    if (href === "/contact" || href === "/#contact") {
      return pathname === "/contact" || (pathname === "/" && activeSection === "contact");
    }
    // Anchor links on home page
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      return pathname === "/" && activeSection === id;
    }
    // Home root
    if (href === "/") {
      return pathname === "/" && !activeSection;
    }
    return pathname === href;
  };

  const handleLinkClick = (e, href) => {
    setOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-2 left-0 right-0 z-[9990] transition-all duration-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-max px-4 sm:px-6">
          <div
            className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "glass shadow-card border border-border-subtle"
                : "bg-bg-primary/50 backdrop-blur-md border border-white/5"
            }`}
          >
            {/* Logo */}
            <Link href="/" prefetch={true} className="group flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white font-mono shadow-sm">
                SI
              </div>
              <span className="font-display text-lg text-text-primary hidden sm:block">
                Shahidul<span className="gradient-text">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links with High-Visibility Active Pill */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-2xl border border-white/5">
              {navLinks.map((link) => {
                const isActive = checkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-white bg-accent-blue/20 border border-accent-blue/50 shadow-[0_0_15px_rgba(79,142,247,0.35)]"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_6px_#4F8EF7] animate-pulse" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: WhatsApp & Hire Me */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://wa.me/8801624698738"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs px-3 py-2 border-emerald-500/30 text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contact"
                prefetch={true}
                className="btn-primary text-xs px-4 py-2 bg-gradient-to-r from-emerald-500 to-accent-blue"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl glass text-text-primary"
              aria-label="Toggle Navigation Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
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
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, i) => {
                const isActive = checkActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all my-1 ${
                        isActive
                          ? "text-white bg-accent-blue/20 border border-accent-blue/50 font-bold shadow-[0_0_15px_rgba(79,142,247,0.3)]"
                          : "text-text-primary hover:bg-white/5 font-medium border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_#4F8EF7]" />
                        )}
                        <span>{link.label}</span>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border-subtle flex flex-col gap-2">
                <a
                  href="https://wa.me/8801624698738"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-secondary text-xs py-2.5 justify-center text-emerald-400 border-emerald-500/30 flex items-center gap-2"
                >
                  <FaWhatsapp size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setOpen(false)}
                  className="btn-primary text-xs py-2.5 justify-center bg-gradient-to-r from-emerald-500 to-accent-blue"
                >
                  Hire Me
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}