"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { personal } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const contacts = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: "GitHub", value: "github.com/shahidul", href: personal.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shahidul", href: personal.linkedin },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-max relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="section-label mb-4">Get In Touch</div>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text italic">Connect</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            I&apos;m actively looking for my first professional role. Whether you have a job opportunity, project collaboration, or just want to say hi — my inbox is always open.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <AnimatedSection direction="right">
            <div className="space-y-4 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="card p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs font-mono mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary text-sm hover:text-accent-blue transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-text-primary text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple" />
              <p className="font-mono text-xs text-accent-blue mb-2">// current_status</p>
              <p className="text-text-primary font-semibold mb-1">
                🟢 Open to Full-time & Freelance
              </p>
              <p className="text-text-secondary text-sm">
                Available immediately. Let&apos;s build something great together.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="left">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-8 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <CheckCircle size={48} className="text-emerald-400" />
                <h3 className="font-display text-2xl text-text-primary">Message Sent!</h3>
                <p className="text-text-secondary">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-secondary mt-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-4">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Shahidul Islam" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
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
