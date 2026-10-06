"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personal } from "@/data/portfolio";
import Link from "next/link";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Copy, Check, FileText, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Build mailto link so user's message is never lost!
    const subject = encodeURIComponent(form.subject || `Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  const contacts = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp (Fastest)",
      value: personal.whatsappNumber,
      href: personal.whatsapp,
      isExternal: true,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Mail,
      label: "Direct Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      isExternal: false,
      accent: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "github.com/sahidul-dev-47",
      href: personal.github,
      isExternal: true,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/sahidul-islam-",
      href: personal.linkedin,
      isExternal: true,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
      isExternal: false,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label mb-3">Let&apos;s Build Together</div>
          <h2 className="section-title">
            Get In <span className="gradient-text italic">Touch</span>
          </h2>
          <p className="text-text-secondary mt-2 max-w-lg mx-auto text-sm sm:text-base">
            Have a project idea, freelance opportunity, or full-time developer role? Reach out directly via WhatsApp or Email.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info & status */}
          <AnimatedSection direction="right" className="space-y-4">
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, accent }) => (
                <div
                  key={label}
                  className="card p-4 flex items-center justify-between gap-4 border border-border-subtle hover:border-border-glow transition-all"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${accent}`}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-text-muted text-xs font-mono">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-text-primary text-sm font-medium hover:text-accent-blue transition-colors truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-text-primary text-sm font-medium">{value}</span>
                      )}
                    </div>
                  </div>

                  {label === "Direct Email" && (
                    <button
                      onClick={copyEmail}
                      title="Copy email address"
                      className="p-2 rounded-lg glass text-text-muted hover:text-text-primary transition-all flex-shrink-0"
                    >
                      {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp Quick CTA Card */}
            <div className="card p-6 relative overflow-hidden border border-emerald-500/30 bg-emerald-950/20">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-mono text-xs text-emerald-400 mb-1">{"// fast_response"}</p>
                  <h4 className="text-text-primary font-bold text-base sm:text-lg">
                    Prefer direct messaging?
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1">
                    I typically reply within a few hours on WhatsApp for quick inquiries or project discussions.
                  </p>
                </div>
              </div>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md shadow-emerald-500/20"
              >
                <FaWhatsapp size={16} />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Direct Resume Link Card */}
            <div className="card p-5 relative overflow-hidden border border-border-subtle hover:border-accent-blue/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20 flex-shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <h5 className="text-text-primary font-semibold text-sm">Need my formal CV?</h5>
                  <p className="text-text-secondary text-xs">View or download my ATS-friendly developer resume.</p>
                </div>
              </div>
              <Link
                href="/resume"
                className="btn-secondary text-xs px-3.5 py-2 flex items-center justify-center gap-1.5 whitespace-nowrap text-accent-blue hover:text-white"
              >
                <span>View Resume</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="left">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-8 text-center h-full flex flex-col items-center justify-center gap-4 border border-border-subtle"
              >
                <CheckCircle size={48} className="text-emerald-400" />
                <h3 className="font-display text-2xl text-text-primary">Email Client Launched!</h3>
                <p className="text-text-secondary text-sm max-w-sm">
                  Your default email client opened with your message. You can also chat directly on WhatsApp for an immediate response.
                </p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2"
                  >
                    Open WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="btn-secondary text-xs px-4 py-2"
                  >
                    Send Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-4 border border-border-subtle">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Full-stack Web App / Freelance Role / Job Offer"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, timeline, or position details..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
