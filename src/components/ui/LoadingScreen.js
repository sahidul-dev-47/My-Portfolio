"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return c + Math.floor(Math.random() * 12) + 3;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 text-center"
          >
            <div className="font-mono text-xs text-accent-blue tracking-[0.3em] uppercase mb-3">
              Portfolio
            </div>
            <div className="font-display text-4xl text-text-primary">
              Shahidul{" "}
              <span className="gradient-text italic">Islam</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent-blue to-accent-purple"
              style={{ width: `${Math.min(count, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.div
            className="mt-4 font-mono text-xs text-text-secondary"
          >
            {Math.min(count, 100)}%
          </motion.div>

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
