import { Cpu, Waves, UserCog, Briefcase, MonitorPlay, LineChart } from "lucide-react";

const items = [
  { icon: Cpu, title: "Adaptive AI Interviews", desc: "Difficulty calibrates in real time to your responses." },
  { icon: Waves, title: "Real-Time Speech Analysis", desc: "Pace, clarity, filler word detection — instantly." },
  { icon: UserCog, title: "Personalized Learning", desc: "Every session adapts to your unique skill profile." },
  { icon: Briefcase, title: "Industry-Focused Prep", desc: "Tech, finance, consulting, product — deep coverage." },
  { icon: MonitorPlay, title: "Real Interview Simulation", desc: "Camera-on sessions that feel like the real thing." },
  { icon: LineChart, title: "Smart Performance Insights", desc: "Track measurable progress across every metric." },
];

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-medium text-gradient-pink mb-4">WHY CHOOSE US</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Built for candidates who <span className="text-gradient-pink">refuse to settle</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine cutting-edge AI with proven interview methodology to give you
              an unfair advantage in the most competitive markets.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="font-display text-4xl font-bold text-gradient-pink">120K+</p>
                <p className="text-xs text-muted-foreground mt-1">Active candidates</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gradient-pink">94%</p>
                <p className="text-xs text-muted-foreground mt-1">Offer rate increase</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div key={it.title} className="glass rounded-2xl p-6 hover:border-primary/40 transition group" style={{ marginTop: i % 2 ? "2rem" : 0 }}>
                <div className="w-10 h-10 rounded-lg bg-gradient-pink/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <it.icon className="w-5 h-5 text-primary-glow" />
                </div>
                <h3 className="font-display font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
