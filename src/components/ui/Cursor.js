"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const enter = () => setHidden(false);
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea, select"
    );

    const hoverIn = () => setHovered(true);
    const hoverOut = () => setHovered(false);

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll(
        "a, button, [data-cursor-hover], input, textarea, select"
      );
      els.forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
        el.addEventListener("mouseenter", hoverIn);
        el.addEventListener("mouseleave", hoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicked ? 0.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        animate={{
          x: pos.x - (hovered ? 24 : 16),
          y: pos.y - (hovered ? 24 : 16),
          scale: clicked ? 0.8 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
      >
        <motion.div
          className="rounded-full border border-accent-blue/60"
          animate={{
            width: hovered ? 48 : 32,
            height: hovered ? 48 : 32,
            borderColor: hovered
              ? "rgba(155,109,255,0.8)"
              : "rgba(79,142,247,0.6)",
            backgroundColor: hovered
              ? "rgba(155,109,255,0.05)"
              : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
