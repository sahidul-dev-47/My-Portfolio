import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Shahidul Islam — Full Stack MERN Developer | Solo Product Builder",
    template: "%s | Shahidul Islam",
  },
  description:
    "Full Stack MERN Developer from Bangladesh building modern, scalable web applications with Next.js, React, Node.js, and MongoDB. Creator of EduraCore and Shahrasti Blood.",
  keywords: ["MERN Developer", "Full Stack", "Next.js", "React", "Bangladesh", "Shahidul Islam", "EduraCore"],
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
      <body suppressHydrationWarning={true} className="font-body bg-bg-primary text-text-primary antialiased overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
