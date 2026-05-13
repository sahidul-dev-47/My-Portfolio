"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [mounted,setMounted]= useState(false);
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);
      spring.set(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [spring]);
  if(!mounted) return null; 

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
        style={{ scaleX: spring, transformOrigin: "0%" }}
      />
    </div>
  );
}
