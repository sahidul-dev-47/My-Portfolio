import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personal.github, label: "GitHub" },
    { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary/50">
      <div className="container-max px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl text-text-primary">
              Shahidul<span className="gradient-text">.</span>
            </Link>
            <p className="text-text-secondary text-sm mt-1 font-body">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-text-secondary">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/resume", label: "Resume" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-border-glow transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="font-mono text-xs text-text-muted">
            © {year} Shahidul Islam. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Ambient glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
