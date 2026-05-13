/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#050508",
          secondary: "#0a0a12",
          card: "#0d0d1a",
          glass: "rgba(255,255,255,0.03)",
        },
        accent: {
          blue: "#4f8ef7",
          purple: "#9b6dff",
          cyan: "#22d3ee",
          glow: "rgba(79,142,247,0.15)",
        },
        text: {
          primary: "#f0f0ff",
          secondary: "#8888aa",
          muted: "#44445a",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          glow: "rgba(79,142,247,0.3)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        blob: "blob 8s infinite",
        shimmer: "shimmer 2s linear infinite",
        "cursor-blink": "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.9)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-blue": "radial-gradient(ellipse at center, rgba(79,142,247,0.15) 0%, transparent 70%)",
        "glow-purple": "radial-gradient(ellipse at center, rgba(155,109,255,0.12) 0%, transparent 70%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 30px rgba(79,142,247,0.2)",
        "glow-lg": "0 0 60px rgba(79,142,247,0.25)",
        "glow-purple": "0 0 30px rgba(155,109,255,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(79,142,247,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
