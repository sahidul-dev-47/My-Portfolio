"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}) {
  const ref = useRef(null);
  // Using positive margin (100px) so elements trigger smoothly before or right as they enter viewport
  const inView = useInView(ref, { once, margin: "100px 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 14 : direction === "down" ? -14 : 0,
      x: direction === "left" ? 14 : direction === "right" ? -14 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.28,
        delay: Math.min(delay, 0.08),
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
