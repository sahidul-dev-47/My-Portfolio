import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export const metadata = {
  title: "Shahidul Islam — Full Stack MERN Developer | Solo Product Builder",
  description:
    "Full Stack MERN Developer building modern, scalable web applications with Next.js, React, Node.js, and MongoDB. Creator of EduraCore and Shahrasti Blood.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
