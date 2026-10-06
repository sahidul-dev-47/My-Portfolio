import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { FileText, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Shahidul Islam for full-stack MERN opportunities, freelance web development, or project collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-max px-4 sm:px-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-accent-blue/30 text-accent-blue hover:text-white hover:bg-accent-blue/20 text-xs sm:text-sm font-semibold transition-all group"
          >
            <FileText size={15} />
            <span>Looking for my experience? View Resume</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Contact />
    </div>
  );
}
