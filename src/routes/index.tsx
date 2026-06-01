import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Dashboard } from "@/components/landing/Dashboard";
import { WhyUs } from "@/components/landing/WhyUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Interview Prep — Master Interviews with AI-Powered Preparation" },
      { name: "description", content: "AI mock interviews, resume analysis, voice & confidence tracking, and personalized career guidance. The premium platform for interview mastery." },
      { property: "og:title", content: "AI Interview Prep — Master Interviews with AI" },
      { property: "og:description", content: "AI mock interviews, resume analysis, and personalized career guidance for serious candidates." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
