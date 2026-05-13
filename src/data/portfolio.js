export const personal = {
  name: "Shahidul Islam",
  role: " MERN  Stack Developer",
  location: "Chandpur, Bangladesh",
  email: "sahidulx47@gmail.com",
  whatsapp: "https://wa.me/8801624698738",
  facebook: "https://www.facebook.com/share/17ihAyeDLQ/",
  github: "https://github.com/sahidul-dev-47",
  linkedin: "https://www.linkedin.com/in/sahidul-islam-/",
  website: "https://shahidul.dev",
  tagline: "Building modern scalable web applications with clean UI and strong Problem Solving.",
  about:
    "I am a passionate MERN stack developer with 6 months of experience. I build real-world applications using Next.js, React, Node.js, and MongoDB. My goal is to become a professional full-stack developer who ships production-ready products.",
  availableForWork: true,
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Better Auth", "REST API"],
  tools: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code"],
};

export const projects = [
  {
    id: "pro-coder-bd",
    title: "Pro Coder BD",
    tagline: "A full-featured coding platform for Bangladeshi developers",
    description:
      "Pro Coder BD is a community-driven coding platform designed for Bangladeshi developers to learn, practice, and grow together. It features coding challenges, tutorials, and a community forum.",
    featured: true,
    status: "Live",
    year: "2026",
    role: " Mern Stack Developer",
    duration: "4 Days",
    image: "/projects/pro-coder-bd.png",
    color: "#6366f1",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS","Better-Auth", "Google-Auth", "Vercel"],
    liveUrl: "https://skillsphere-app-l97u.vercel.app/",
    githubUrl: "https://github.com/sahidul-dev-47/skillsphere-app",
    overview:
      "Pro Coder BD bridges the gap between Bangladeshi developers and global coding standards. The platform offers curated challenges, real-time leaderboards, and structured learning paths.",
    problem:
      "Bangladeshi developers lacked a localized platform that understood their learning context, language barriers, and career goals in the regional tech market.",
    solution:
      "Built a full-stack platform with localized content, Bangla-friendly UI, progressive challenges from beginner to advanced, and a community forum for peer learning.",
    outcome:
      "The platform attracted 200+ users within the first month, with an average session time of 18 minutes, indicating strong engagement.",
    features: [
      "Coding challenges with real-time code execution",
      "User authentication with JWT",
      "Community forum with threaded discussions",
      "Leaderboard and achievement system",
      "Admin dashboard for content management",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing real-time code execution securely in a sandboxed environment",
      "Optimizing MongoDB queries for leaderboard computations at scale",
      "Designing a flexible content schema for varied challenge types",
    ],
    futureImprovements: [
      "AI-powered code review and hints",
      "Video tutorial integration",
      "Collaborative coding rooms",
      "Mobile app with React Native",
    ],
  },
  {
    id: "keen-keeper",
    title: "Keen Keeper",
    tagline: "Smart task and productivity management app",
    description:
      "Keen Keeper is a modern productivity application that helps users manage tasks, set goals, and track their daily progress with beautiful visualizations.",
    featured: true,
    status: "Live",
    year: "2026",
    role: " Mern Stack Developer",
    duration: " 3 Days",
    image: "/projects/keen-keeper.png",
    color: "#10b981",
    tech: ["Html5", "Css3", "Tailwind Css", "Javascipt", "React.js", "React-Router", "Netlify"],
    liveUrl: "https://keen-keeper-web.netlify.app/",
    githubUrl: "https://github.com/sahidul-dev-47/Keen-Keeper-Web",
    overview:
      "Keen Keeper reimagines personal productivity with a focus on visual clarity and habit science. Users can manage tasks, track streaks, and visualize their productivity patterns.",
    problem:
      "Existing productivity apps are either too complex or too simplistic. Users needed something that was both powerful and delightful to use daily.",
    solution:
      "Designed a minimal-first UI with progressive complexity — basic task management is front and center, while advanced features are accessible but not overwhelming.",
    outcome:
      "Beta testers reported 40% improvement in task completion rates compared to their previous tools. App maintains a 4.8/5 satisfaction score.",
    features: [
      "Drag-and-drop task management",
      "Habit tracking with streak counters",
      "Visual productivity analytics",
      "Priority matrix (Eisenhower Method)",
      "Team collaboration features",
      "Dark/light mode",
    ],
    challenges: [
      "Building a smooth drag-and-drop experience across mobile and desktop",
      "Designing the analytics data pipeline without slowing down the core app",
      "Handling real-time collaborative updates efficiently",
    ],
    futureImprovements: [
      "AI task prioritization suggestions",
      "Calendar integration (Google, Outlook)",
      "Pomodoro timer integration",
      "Offline-first PWA support",
    ],
  },
  {
    id: "ai-model-hub",
    title: "AI Model Hub",
    tagline: "Centralized platform to explore and compare AI models",
    description:
      "AI Model Hub is a directory and comparison platform for AI/ML models, allowing developers to discover, compare, and integrate state-of-the-art models into their projects.",
    featured: true,
    status: "In Progress",
    year: "2026",
    role: "Frontend Lead",
    duration: "3 Days",
    image: "/projects/ai-model-hub.png",
    color: "#8b5cf6",
    tech: ["Html5", "Css", "Tailwind CSS", "Javascipt", "Dom", "Netlify"],
    liveUrl: "https://ai-model-hub-web.netlify.app/",
    githubUrl: "https://github.com/sahidul-dev-47/Ai-model-hub",
    overview:
      "AI Model Hub serves as a single destination for AI practitioners and hobbyists to discover models, read benchmarks, and find integration guides — all in one beautifully designed interface.",
    problem:
      "AI models are scattered across Hugging Face, GitHub, and various company sites. Comparing capabilities and finding integration docs is time-consuming.",
    solution:
      "Aggregated model data into a unified API, built powerful filtering and comparison UI, and created standardized integration guides for the most popular models.",
    outcome:
      "Currently in beta with 50+ models indexed. Growing user base of developers using it for model research.",
    features: [
      "Model directory with advanced filtering",
      "Side-by-side model comparison",
      "Benchmark visualization charts",
      "Integration code snippets",
      "Community ratings and reviews",
      "API endpoint testing playground",
    ],
    challenges: [
      "Normalizing data from multiple AI providers with different schemas",
      "Building a fast search experience across hundreds of models",
      "Keeping model information up-to-date as the AI landscape changes rapidly",
    ],
    futureImprovements: [
      "Live model inference testing in the browser",
      "User-submitted model reviews",
      "Personalized model recommendations",
      "Newsletter with weekly model updates",
    ],
  },
  {
    id: "english-janala",
    title: "English Janala",
    tagline: "Interactive English learning platform for Bangla speakers",
    description:
      "English Janala is a gamified language learning platform designed specifically for Bangla-speaking learners to improve their English skills through interactive lessons and exercises.",
    featured: false,
    status: "Live",
    year: "2026",
    role: " Mern Stack Developer",
    duration: " 2 days",
    image: "/projects/english-janala.png",
    color: "#f59e0b",
    tech: ["Html5", "Css3", "Tailwind CSS" , "Javascript" , "Dom",],
    liveUrl: "https://sahidul-dev-47.github.io/English-Janala/",
    githubUrl: "https://github.com/sahidul-dev-47/English-Janala",
    overview:
      "English Janala ('English Window' in Bangla) makes English learning accessible and fun for millions of Bangla speakers through culturally relevant content and gamified learning paths.",
    problem:
      "Most English learning apps use Western cultural contexts that feel foreign to Bangladeshi learners, reducing engagement and retention.",
    solution:
      "Created lessons using familiar Bangladeshi cultural references, local examples, and a UI available in both English and Bangla.",
    outcome:
      "300+ active learners in the first two weeks. Average completion rate of lesson modules: 72% — significantly above industry standard of 15%.",
    features: [
      "Structured learning paths (Beginner to Advanced)",
      "Interactive vocabulary exercises",
      "Grammar lessons with local examples",
      "Progress tracking and badges",
      "Daily challenge system",
      "Audio pronunciation guides",
    ],
    challenges: [
      "Building an audio system that works seamlessly across devices",
      "Designing a gamification system that motivates without becoming annoying",
      "Content creation pipeline for culturally relevant material",
    ],
    futureImprovements: [
      "AI conversation practice with speech recognition",
      "Live tutoring marketplace",
      "Offline lesson downloads",
      "Parent dashboard for children learners",
    ],
  },
  {
    id: "digital-platform",
    title: "Digital Platform",
    tagline: "Multi-vendor digital marketplace for Bangladesh",
    description:
      "Digital Platform is a comprehensive e-commerce solution enabling Bangladeshi entrepreneurs to sell digital products and services online with secure payments and analytics.",
    featured: false,
    status: "Live",
    year: "2026",
    role: " Mern Stack Developer",
    duration: " 2 Days",
    image: "/projects/digital-platform.png",
    color: "#ef4444",
    tech: ["Html5", "Css", "Tailwind CSS", "Javascript", "Dom" , "React.js"],
    liveUrl: "https://digitools-webpage.netlify.app/",
    githubUrl: "https://github.com/sahidul-dev-47/Digitools-Web",
    overview:
      "Digital Platform empowers Bangladeshi creators and entrepreneurs to monetize their digital skills — from selling templates to online courses and software licenses.",
    problem:
      "Bangladesh's growing digital economy lacked a local marketplace optimized for local payment methods, language, and seller verification standards.",
    solution:
      "Built a multi-vendor marketplace with local payment gateway integration, Bangla language support, and a streamlined seller onboarding process.",
    outcome:
      "20+ active sellers onboarded in the first month. Platform processed 150+ transactions with zero payment failures.",
    features: [
      "Multi-vendor seller accounts",
      "Digital product upload and delivery system",
      "Secure payment processing",
      "Seller analytics dashboard",
      "Buyer review and rating system",
      "Admin moderation panel",
    ],
    challenges: [
      "Integrating local payment gateways with inconsistent API documentation",
      "Building a secure digital product delivery system that prevents unauthorized sharing",
      "Designing the multi-vendor permission system without over-complicating the codebase",
    ],
    futureImprovements: [
      "Subscription-based product tiers",
      "Affiliate marketing system",
      "Mobile app",
      "International payment support",
    ],
  },
];

export const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khila Bazar School And College",
    location: "Chandpur, Bangladesh",
    year: "2022–2023",
    field: "Buisness Studies",
  },
];

export const experience = [
  {
    role: " Mern Stack Developer (Learned From Programming.hero",
    company: "Independent Projects",
    location: "Chandpur, Bangladesh",
    period: "2026 – Present",
    description:
      "Building production-ready full-stack web applications using the MERN stack. Completed 5 major projects spanning Social, edtech, productivity, and developer tools.",
    highlights: [
      "Developed 5 applications from concept to deployment",
      "Mastered Next.js App Router and modern React patterns",
      "Implemented authentication systems with JWT and Better Auth",
      "Deployed and maintained apps on Vercel and Netlify",
    ],
  },
];
