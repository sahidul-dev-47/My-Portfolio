# Shahidul Islam — Portfolio & Resume System

A complete, production-ready developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🎨 Dark premium glassmorphism UI
- 🖱️ Animated custom cursor
- 📊 Scroll progress indicator
- ⏳ Loading screen
- 🏠 Home page with Hero, About, Skills, Projects, Contact
- 📁 `/projects` — All projects listing
- 📄 `/projects/[id]` — Case study detail pages
- 📋 `/resume` — Auto-generated ATS-friendly resume with print/PDF
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Framer Motion animations throughout
- 🔍 SEO + OpenGraph metadata

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── layout.js          # Root layout (fonts, metadata, wrappers)
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles + Tailwind
│   ├── not-found.js       # 404 page
│   ├── projects/
│   │   ├── page.js        # All projects listing
│   │   └── [id]/
│   │       └── page.js    # Dynamic case study page
│   └── resume/
│       └── page.js        # Resume page
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── FeaturedProjects.js
│   │   └── Contact.js
│   ├── resume/
│   │   └── ResumeClient.js
│   └── ui/
│       ├── AnimatedSection.js
│       ├── Cursor.js
│       ├── LoadingScreen.js
│       └── ScrollProgress.js
├── data/
│   └── portfolio.js       # ⭐ Single source of truth — edit here
└── lib/
    └── resumeGenerator.js # Auto resume generation logic
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## 📝 Customize Your Data

**All your personal info, projects, and skills live in one file:**

```
src/data/portfolio.js
```

Edit the `personal`, `skills`, `projects`, `education`, and `experience` objects. The resume is **auto-generated** from this data — no manual updates needed.

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Option 3 — Drag & Drop
1. Run `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the `.next` folder

---

## 🖨️ Resume PDF

1. Visit `/resume`
2. Click **Print / PDF** or **Download**
3. In print dialog: **Save as PDF**
4. Disable headers/footers for cleanest output

---

## 🎨 Customization

| File | What to change |
|------|---------------|
| `src/data/portfolio.js` | All your personal data |
| `tailwind.config.js` | Colors, fonts, animations |
| `src/app/globals.css` | Global CSS variables |
| `src/components/sections/` | Section layouts |

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** v3
- **Framer Motion** v11
- **Lucide React** (icons)
- **Google Fonts** — DM Serif Display, Sora, Space Mono

---

Built with ❤️ by Shahidul Islam
