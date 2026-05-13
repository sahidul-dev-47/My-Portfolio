import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Shahidul Islam — MERN Stack Developer",
  description:
    " MERN Stack  Developer from Chandpur, Bangladesh building modern scalable web applications with Next.js, React, Node.js, and MongoDB.",
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
