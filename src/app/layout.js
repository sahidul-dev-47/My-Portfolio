import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

export const metadata = {
  title: {
    default: "Shahidul Islam — Full Stack MERN Developer",
    template: "%s | Shahidul Islam",
  },
  description:
    "Full Stack MERN Developer from Bangladesh building modern, scalable web applications with clean UI and strong backend systems.",
  keywords: ["MERN Developer", "Full Stack", "Next.js", "React", "Bangladesh", "Shahidul Islam"],
  authors: [{ name: "Shahidul Islam" }],
  creator: "Shahidul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahidul.dev",
    title: "Shahidul Islam — Full Stack MERN Developer",
    description:
      "Building modern scalable web applications with clean UI and strong backend systems.",
    siteName: "Shahidul Islam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahidul Islam — Full Stack MERN Developer",
    description: "Building modern scalable web applications with clean UI and strong backend systems.",
    creator: "@shahidul",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased overflow-x-hidden">
        <LoadingScreen />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
