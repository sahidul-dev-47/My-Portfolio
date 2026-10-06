export const personal = {
  name: "Shahidul Islam",
  role: "Full Stack MERN Developer",
  location: "Chandpur, Bangladesh",
  email: "sahidulx47@gmail.com",
  whatsapp: "https://wa.me/8801624698738",
  whatsappNumber: "+880 1624-698738",
  facebook: "https://www.facebook.com/share/17ihAyeDLQ/",
  github: "https://github.com/sahidul-dev-47",
  linkedin: "https://www.linkedin.com/in/sahidul-islam-/",
  website: "https://shahidul.dev",
  tagline: "Building high-performance full-stack web applications and production-ready digital products with Next.js, React, and Node.js.",
  about:
    "I am a dedicated Full Stack MERN Developer and solo product builder. I engineer production-ready web applications from scratch using Next.js, React, Node.js, Express, and MongoDB. With real-world platforms like EduraCore (eduracore.com) and Shahrasti Blood (shahrastiblood.com) live in production, I focus on clean architecture, intuitive UI, and reliable full-stack systems.",
  avatar: "/profile.jpg",
  availableForWork: true,
};

export const skills = {
  frontend: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Better Auth", "REST APIs"],
  tools: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Figma", "VS Code"],
};

export const projects = [
  {
    id: "eduracore",
    title: "EduraCore",
    tagline: "Interactive, science-backed English mastery platform serving real learners",
    description:
      "EduraCore is a production full-stack ed-tech platform built from the ground up to train active English fluency through phonetics labs, an 80% mastery-gated engine, situational dialogue drills, conversational AI, and QR-verified digital certificates.",
    featured: true,
    status: "Live & Deployed",
    badge: "Real World Platform",
    isCustomDomain: true,
    domain: "eduracore.com",
    year: "2026",
    role: "Lead Full Stack Developer & Solo Builder",
    image: "/projects/eduracore.png",
    color: "#0E7C7B",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Conversational AI",
      "Web Audio API",
      "QR Verification",
      "Vercel"
    ],
    liveUrl: "https://www.eduracore.com",
    githubUrl: "https://github.com/sahidul-dev-47",
    overview:
      "EduraCore addresses the fundamental flaw of traditional passive English learning in Bangladesh by transforming language acquisition into an active reflex trained like a muscle. Built completely from scratch as a solo developer.",
    problem:
      "Learners spend years memorizing English rules for exams, yet freeze during interviews and professional conversations due to lack of active speaking reflexes and real-world practice.",
    solution:
      "Engineered an 80% Mastery-Gated progression engine (no skipping without competence), interactive Phonetics and Word Stress Shifter labs, real-time conversational AI partner, 30+ situational drills, and tamper-proof QR-verified digital certificates.",
    outcome:
      "Live in production on a custom domain, providing free, structured education across 4 core pillars (Reading, Writing, Grammar, Spoken) with positive learner feedback.",
    features: [
      "80% Mastery-Gated progression engine ensuring true competence before advancing",
      "Live interactive English conversation practice rooms for collaborative speaking",
      "Real-time Conversational AI partner with instant grammatical feedback & model answers",
      "Interactive Phonetics and 'Word Stress Shifter' labs for syllable accents and connected speech",
      "30+ situational dialogue drills tailored for real-life conversational reflex",
      "Algorithmic spaced-repetition revision engine for long-term retention",
      "Tamper-proof QR-verified digital completion certificates",
      "2-Minute Diagnostic Placement Test with automated level assignment",
      "Dual curriculum tracks: General Track and Madrasah Track",
      "Fully responsive, mobile-first design with high-performance audio playback"
    ],
    challenges: [
      "Designing an 80% mastery assessment engine that evaluates speech reflexes without lagging",
      "Building seamless browser audio pronunciation playback with minimal latency",
      "Structuring dual-track curriculum schemas with distinct terminology and progress state"
    ],
    futureImprovements: [
      "Automated speech waveform pronunciation accuracy analysis",
      "Adaptive personalized learning paths based on learner error frequency",
      "Progressive Web App (PWA) offline lesson synchronization"
    ],
  },
  {
    id: "shahrastiblood",
    title: "Shahrasti Blood Donors",
    tagline: "Community-driven emergency blood donation and humanitarian directory",
    description:
      "A live voluntary healthcare platform connecting emergency blood seekers with verified voluntary donors and organizations across all 10 unions of Shahrasti, Chandpur, Bangladesh.",
    featured: true,
    status: "Live & Deployed",
    badge: "Community Impact",
    isCustomDomain: true,
    domain: "shahrastiblood.com",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects/shahrastiblood.jpg",
    color: "#DC2626",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel"
    ],
    liveUrl: "https://www.shahrastiblood.com",
    githubUrl: "https://github.com/sahidul-dev-47",
    overview:
      "In medical emergencies, finding eligible blood donors within rural and semi-urban upazilas is critical. Shahrasti Blood Donors replaces chaotic social media posts with a verified, structured platform.",
    problem:
      "Emergency patients faced critical delays finding matching blood donors across Shahrasti due to fragmented contact info and no real-time availability status.",
    solution:
      "Developed a dedicated portal enabling instant filtering by 8 blood groups and 10 local unions, direct emergency calling, volunteer donor self-registration, and verified humanitarian organization profiles.",
    outcome:
      "Successfully deployed and actively used in the Shahrasti community, dramatically reducing the time needed to locate emergency blood donors.",
    features: [
      "Instant blood donor search filterable by blood group and 10 unions",
      "Donor management system with availability status toggle and donation tracking",
      "Organization and volunteer directory with dedicated profile management",
      "Fast mobile-first emergency calling with one-tap contact access",
      "Bilingual interface (Bangla & English) with integrated dark mode toggle",
      "Admin verification workflow for donor and organization authenticity"
    ],
    challenges: [
      "Structuring localized geographic taxonomy across all 10 unions and wards",
      "Optimizing mobile UX for high-stress emergency blood seekers on low-bandwidth networks",
      "Implementing data privacy protection to safeguard volunteer donor contact information"
    ],
    futureImprovements: [
      "Automated SMS alerts to nearby donors when emergency requests are posted",
      "Geolocation radius-based donor discovery using interactive maps",
      "Blood donation camp scheduling and volunteer event management"
    ],
  },
  {
    id: "researchpilot",
    title: "ResearchPilot AI",
    tagline: "Full Stack Agentic AI research assistant for smarter workflows",
    description:
      "ResearchPilot AI is a full-stack Agentic AI application that helps users create, organize, and manage research projects while leveraging AI for report generation, conversational assistance, and research analytics in one platform.",
    featured: true,
    status: "Live",
    badge: "AI Powered",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects/researchpilot-home.png",
    color: "#4F46E5",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
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
      "Researchers and students often rely on multiple disconnected tools to manage projects, generate summaries, and interact with AI, making the research process fragmented and inefficient.",
    solution:
      "Built a modern full-stack Agentic AI platform where users securely manage research projects, generate AI-powered reports, interact with a conversational assistant, and track research analytics through a unified dashboard.",
    outcome:
      "Successfully delivered a production-ready application featuring secure authentication, AI-powered research generation, conversational AI, analytics dashboard, and a scalable backend architecture.",
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
      "Real-time collaborative research workspaces"
    ],
  },
  {
    id: "luminary",
    title: "Luminary",
    tagline: "Ebook sharing and marketplace platform connecting readers with independent writers",
    description:
      "Luminary is a full-stack ebook sharing platform where readers discover and purchase original ebooks, and writers publish their work directly to a global audience. Features role-based dashboards, secure Stripe payments, and real-time analytics.",
    featured: true,
    status: "Live",
    badge: "Marketplace",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects/luminary.png",
    color: "#F4C430",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "Better-Auth", "Google-Auth", "Framer Motion", "Vercel"],
    liveUrl: "https://luminary-client.vercel.app/",
    githubUrl: "https://github.com/sahidul-dev-47/luminary-client",
    overview:
      "Luminary reimagines how independent writers reach readers, removing traditional publisher bottlenecks. It offers a complete marketplace experience with role-based dashboards, secure payments, and rich analytics.",
    problem:
      "Independent writers lacked a streamlined way to publish and monetize their work directly, while readers needed a reliable platform to discover original ebooks outside traditional channels.",
    solution:
      "Built a full-stack MERN platform with three distinct roles — Reader, Writer, and Admin — each with a dedicated dashboard. Integrated Stripe for secure ebook purchases, JWT + Google OAuth for authentication, and Framer Motion for a polished UI.",
    outcome:
      "Delivered a complete marketplace with active purchase flows, role-based access control, and an admin analytics dashboard.",
    features: [
      "Role-based dashboards for Reader, Writer, and Admin",
      "Stripe-powered ebook purchases and writer verification payments",
      "JWT authentication with Google OAuth login",
      "Search, filter, sort, and pagination on the browse page",
      "Bookmarking system for saving ebooks",
      "Admin analytics with revenue and genre distribution charts",
      "Fully responsive, animated UI with Framer Motion"
    ],
    challenges: [
      "Designing secure, role-based route protection across three distinct user roles",
      "Structuring Stripe webhooks to reliably update purchase and payment statuses",
      "Building a responsive dashboard experience that stays consistent across mobile, tablet, and desktop"
    ],
    futureImprovements: [
      "Wishlist system with a dedicated wishlist page",
      "Automated email notifications on purchase and publishing",
      "AI-powered ebook recommendations"
    ],
  },
  {
    id: "sportverse",
    title: "SportVerse",
    tagline: "Modern sports facility booking and venue management platform",
    description:
      "SportVerse is a full-stack sports facility booking platform where venue owners list grounds, courts, and turfs, and athletes discover, book, and manage sessions with ease. Features owner-verified listings and time-slot booking.",
    featured: false,
    status: "Live",
    badge: "Booking Engine",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects/sportverse.png",
    color: "#22C55E",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Better-Auth", "Google-Auth", "JWT", "Framer Motion", "Vercel"],
    liveUrl: "https://sport-verse-client.vercel.app/",
    githubUrl: "https://github.com/sahidul-dev-47/SportVerse-client",
    overview:
      "SportVerse digitizes the manual booking process for sports grounds, offering a streamlined venue discovery, scheduling, and management experience.",
    problem:
      "Booking sports facilities was offline and inefficient — relying on phone calls with no clear view of real-time slot availability or venue verification.",
    solution:
      "Built a full-stack platform with an owner dashboard for listing venues through an animated multi-step form, backend ownership checks on every request, and a live time-slot booking engine.",
    outcome:
      "Delivered an intuitive booking flow with robust authentication, role separation, and clean slot scheduling.",
    features: [
      "Email/password and Google OAuth authentication via Better Auth with JWT",
      "4-step animated facility listing form across 12 sport categories",
      "Owner dashboard to edit and delete facilities with backend ownership checks",
      "Time-slot based booking system with complete booking history",
      "JWKS-based token verification on the Express backend",
      "Glassmorphism dark-themed, fully responsive UI with Framer Motion animations"
    ],
    challenges: [
      "Wiring Better Auth's JWT plugin correctly through toNextJsHandler",
      "Configuring CORS and credentials across client and server for cross-origin cookie auth",
      "Enforcing ownership verification on every mutating route by comparing verified JWT identity"
    ],
    futureImprovements: [
      "Online payment integration for automated booking confirmation",
      "Real-time slot availability with WebSockets",
      "Customer reviews and rating system for facilities"
    ],
  },
];

export const education = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khila Bazar School And College",
    location: "Chandpur, Bangladesh",
    year: "2022–2023",
    field: "Business Studies",
  },
];

export const experience = [
  {
    role: "Full Stack Developer & Solo Product Builder",
    company: "Production Web Applications",
    location: "Chandpur, Bangladesh",
    period: "2024 – Present",
    description:
      "Engineering and deploying real-world, full-stack web platforms serving active users. Leading end-to-end architecture from database design to modern UI and cloud deployments.",
    highlights: [
      "Built & launched EduraCore (eduracore.com) — a full-scale interactive English mastery platform featuring mastery-gated progression, phonetics labs, and conversational AI",
      "Engineered Shahrasti Blood (shahrastiblood.com) — a live community emergency blood donation directory connecting donors across 10 unions",
      "Architected ResearchPilot AI — an Agentic AI research workspace with OpenAPI LLM integration and analytics dashboards",
      "Built Luminary & SportVerse — production-style platforms with role-based access control, Stripe checkout, and JWT authentication"
    ],
  },
];
