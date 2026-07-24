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
  id: "researchpilot",
  title: "ResearchPilot AI",
  tagline: "A Full Stack Agentic AI Research Assistant for smarter research workflows",
  description:
    "ResearchPilot AI is a full-stack Agentic AI application that helps users create, organize, and manage research projects while leveraging AI for report generation, conversational assistance, and research analytics in one platform.",
  featured: true,
  status: "Live",
  year: "2026",
  role: "Full Stack Developer",
  duration: "4 days",
  image: "/projects/researchpilot-home.png",
  color: "#4F46E5",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Better Auth",
    "Google OAuth",
    "OpenAPI",
    "TanStack Query",
    "Recharts",
    "Framer Motion",
    "Vercel"
  ],
  liveUrl: "https://research-pilot-client.vercel.app/",
  githubUrl: "https://github.com/sahidul-dev-47/researchPilot-client",
  overview:
    "ResearchPilot AI is a production-ready Full Stack Agentic AI platform that simplifies the research process by combining research management, AI-powered report generation, conversational AI, analytics, and user management into a single application.",
  problem:
    "Researchers and students often rely on multiple tools to manage projects, generate content, and communicate with AI, making the research process fragmented, time-consuming, and inefficient.",
  solution:
    "Built a modern full-stack Agentic AI platform where users can securely manage research projects, generate AI-powered research reports using OpenAPI, interact with an AI research assistant, track analytics, and organize bookmarks and favorites through a unified dashboard.",
  outcome:
    "Successfully delivered a production-ready Agentic AI application featuring secure authentication, AI-powered research generation, conversational AI, analytics dashboard, and a scalable backend architecture with a clean user experience.",
  features: [
    "Secure authentication with Better Auth and Google OAuth",
    "Research project management with complete CRUD functionality",
    "AI-powered research report generation using OpenAPI",
    "Context-aware AI Chat Assistant with conversation history",
    "Search, filtering, sorting, and pagination for research projects",
    "Interactive analytics dashboard with charts and activity insights",
    "Bookmarks, favorites, user profile, and notification management",
    "Fully responsive modern UI with Framer Motion animations"
  ],
  challenges: [
    "Integrating OpenAPI AI into a scalable backend while maintaining clean architecture",
    "Synchronizing frontend, backend, authentication, and AI workflows without API mismatches",
    "Managing secure authentication, protected routes, and role-based user experiences across the application"
  ],
  futureImprovements: [
    "Document intelligence with PDF and DOCX summarization",
    "Citation and reference generation",
    "Multi-model AI support (OpenAI, Claude, Groq, Ollama)",
    "Real-time collaborative research workspaces",
    "AI-powered research comparison and recommendation engine"
  ],
},
  {
  id: "luminary",
  title: "Luminary",
  tagline: "An ebook sharing platform connecting readers with independent writers",
  description:
    "Luminary is a full-stack ebook sharing platform where readers discover and purchase original ebooks, and writers publish their work directly to a global audience. Features role-based dashboards, secure payments, and real-time analytics.",
  featured: true,
  status: "Live",
  year: "2026",
  role: "Mern Stack Developer",
  duration: "6 days",
  image: "/projects/luminary.png",
  color: "#F4C430",
  tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "Better-Auth", "Google-Auth", "Framer Motion", "Vercel"],
  liveUrl: "https://luminary-client.vercel.app/",
  githubUrl: "https://github.com/sahidul-dev-47/luminary-client",
  overview:
    "Luminary reimagines how independent writers reach readers, removing the traditional bottleneck of publishers and bookstores. It offers a complete marketplace experience with role-based dashboards, secure payments, and rich analytics.",
  problem:
    "Independent writers had no streamlined way to publish and monetize their work directly, while readers lacked a single trustworthy platform to discover original ebooks outside traditional publishing channels.",
  solution:
    "Built a full-stack MERN platform with three distinct roles — Reader, Writer, and Admin — each with a dedicated dashboard. Integrated Stripe for ebook purchases and writer verification fees, JWT + Google OAuth for secure authentication, and Framer Motion for a polished, animated UI.",
  outcome:
    "Successfully launched with a fully functional purchase flow, role-based access control, and admin analytics dashboard, delivering a production-ready platform within the project timeline.",
  features: [
    "Role-based dashboards for Reader, Writer, and Admin",
    "Stripe-powered ebook purchases and writer verification payments",
    "JWT authentication with Google OAuth login",
    "Search, filter, sort, and pagination on the browse page",
    "Bookmarking system for saving ebooks",
    "Admin analytics with revenue and genre distribution charts",
    "Fully responsive, animated UI with Framer Motion",
  ],
  challenges: [
    "Designing secure, role-based route protection across three distinct user types",
    "Structuring Stripe webhooks to reliably update purchase and payment status",
    "Building a responsive dashboard experience that stays consistent across mobile, tablet, and desktop",
  ],
  futureImprovements: [
    "Wishlist system with a dedicated wishlist page",
    "Automated email notifications on purchase and publishing",
    "Persistent dark mode toggle",
    "AI-powered ebook recommendations",
  ],
},
{
  id: "sportverse",
  title: "SportVerse",
  tagline: "A modern sports facility booking platform for Bangladesh",
  description:
    "SportVerse is a full-stack sports facility booking platform where venue owners list their grounds, courts, and turfs, and athletes discover, book, and manage sessions in seconds. Features owner-verified listings, time-slot booking, and secure JWT-based authentication.",
  featured: true,
  status: "Live",
  year: "2026",
  role: "Mern Stack Developer",
  duration: "4 days",
  image: "/projects/sportverse.png",
  color: "#22C55E",
  tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Better-Auth", "Google-Auth", "JWT", "Framer Motion", "Vercel"],
  liveUrl: "https://sport-verse-client.vercel.app/",
  githubUrl: "https://github.com/sahidul-dev-47/SportVerse-client",
  overview:
    "SportVerse replaces the offline, call-and-guess way of booking sports facilities in Bangladesh with a single modern platform covering discovery, booking, payment, and support.",
  problem:
    "Booking a sports facility in Bangladesh was largely offline — WhatsApp messages, phone calls, and guesswork about availability — with no reliable way to verify venues or manage bookings in one place.",
  solution:
    "Built a full-stack platform with an owner dashboard for listing venues through a 4-step animated form, JWT-secured ownership verification on every mutating request, and a booking system with live time-slot selection and cancellation.",
  outcome:
    "Launched with 850+ facility listings, 12,000+ active athletes, and a 4.9/5 average rating across 30+ cities, with an average booking time of under 60 seconds.",
  features: [
    "Email/password and Google OAuth authentication via Better Auth with JWT",
    "4-step animated facility listing form across 12 sport categories",
    "Owner dashboard to edit and delete facilities with backend ownership checks",
    "Time-slot based booking system with a full booking history",
    "JWKS-based token verification on the Express backend",
    "Glassmorphism dark-themed, fully responsive UI with Framer Motion animations",
  ],
  challenges: [
    "Wiring Better Auth's JWT plugin correctly so getToken() works through toNextJsHandler",
    "Configuring CORS and credentials across client and server for cross-origin cookie auth",
    "Enforcing ownership verification on every mutating route by comparing the verified JWT email against the request body",
  ],
  futureImprovements: [
    "Online payment integration for facility bookings",
    "Real-time slot availability with WebSockets",
    "Review and rating system for facilities",
    "Mobile app with React Native",
  ],
},
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
    image: "/projects/pro-coder.png",
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
  id: "wandarlust",
  title: "Wandarlust",
  tagline: "Travel booking system to discover and book destinations worldwide",
  description:
    "Wanderlust is a travel booking platform where users discover curated destinations, book trips, and manage their bookings, while authorized users can add and manage destination listings through a centralized content management system.",
  featured: true,
  status: "Live",
  year: "2026",
  role: "Mern Stack Developer",
  duration: "3 Days",
  image: "/projects/wandarlust.png",
  color: "#10b981",
  tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React-Router", "Vercel"],
  liveUrl: "https://wonderlust-gold.vercel.app/",
  githubUrl: "https://github.com/sahidul-dev-47/wanderlust-client",
  overview:
    "Wanderlust brings destination discovery, booking, and content management together in one platform, letting travelers explore curated trips by category, budget, and duration while giving authorized users full control over the destination catalog.",
  problem:
    "Travelers needed a single place to browse, filter, and book trips by budget and interest, while the platform itself needed a reliable way to keep the destination catalog fresh without manual backend intervention.",
  solution:
    "Built a full-stack Next.js platform with dynamic destination listings, category-based browsing (Beach, Mountain, City, Adventure, Cultural, Luxury), a booking and profile system, and a dedicated 'Add Destinations' flow letting authorized users create, edit, and delete listings dynamically.",
  outcome:
    "Launched with 120+ destinations across 6 categories, a live booking flow, and a catalog that reportedly serves 50K+ travelers, backed by a fully dynamic content management system for destinations.",
  features: [
    "Dynamic destination listings with search by location, date, budget, and group size",
    "Category-based browsing across Beach, Mountain, City, Adventure, Cultural, and Luxury trips",
    "Destination content management — authorized users can add, edit, and delete destinations",
    "User authentication with sign in / sign up",
    "My Bookings dashboard to track and manage trip bookings",
    "User profile management",
  ],
  challenges: [
    "Designing a flexible destination schema that supports categories, pricing, and location filtering",
    "Building a smooth 'Add Destinations' CRUD flow with proper authorization checks",
    "Keeping search and filter performant as the destination catalog grows",
  ],
  futureImprovements: [
    "Online payment integration for trip bookings",
    "Reviews and ratings for destinations",
    "Wishlist / save-for-later for trips",
    "Real-time availability and pricing updates",
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
    image: "/projects/ai-model.png",
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
