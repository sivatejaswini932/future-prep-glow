import { Brain, FileText, Zap, Mic, Building2, BarChart3, Route, Flame } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Mock Interviews", desc: "Practice with adaptive AI that mirrors real interviewer behavior and follow-up depth." },
  { icon: FileText, title: "Resume-Based Questions", desc: "Personalized questions generated from your CV, projects, and target roles." },
  { icon: Zap, title: "Real-Time AI Feedback", desc: "Instant critique on structure, content, clarity, and STAR framework usage." },
  { icon: Mic, title: "Voice & Confidence Analysis", desc: "Track pace, tone, filler words and confidence with audio intelligence." },
  { icon: Building2, title: "Company-Specific Simulation", desc: "Train for Google, Meta, Amazon and 200+ companies with tailored question banks." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Beautiful dashboards reveal your strengths, gaps, and growth trajectory." },
  { icon: Route, title: "Personalized Roadmap", desc: "AI-crafted learning path matched to your target role and current skill level." },
  { icon: Flame, title: "Stress Simulation Mode", desc: "Pressure scenarios, time-bound challenges and curveball questions to build resilience." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-medium text-gradient-pink mb-4">FEATURES</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Everything you need to <span className="text-gradient-pink">land the offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            An end-to-end interview operating system — engineered for serious candidates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-pink rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500" />
              <div className="relative glass rounded-2xl p-6 h-full hover:border-primary/40 transition duration-500 group-hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-pink/20 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-gradient-pink group-hover:border-transparent transition">
                  <f.icon className="w-5 h-5 text-primary-glow group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
