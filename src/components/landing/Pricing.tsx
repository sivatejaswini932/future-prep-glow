import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/forever",
    desc: "Get started with AI-powered prep",
    features: ["5 mock interviews / month", "Basic feedback", "Resume parser", "Community access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For serious candidates",
    features: ["Unlimited mock interviews", "Advanced AI feedback", "Voice & confidence analysis", "Company-specific prep", "Performance analytics", "Personalized roadmap"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Teams, universities & bootcamps",
    features: ["Everything in Pro", "Team dashboards", "Custom question banks", "Dedicated success manager", "SSO & advanced security", "API access"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-pink mb-4">PRICING</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Simple, <span className="text-gradient-pink">transparent pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className="relative">
              {p.highlighted && (
                <div className="absolute -inset-0.5 bg-gradient-pink rounded-3xl blur opacity-70 animate-glow" />
              )}
              <div className={`relative h-full rounded-3xl p-8 ${p.highlighted ? "glass-strong" : "glass"}`}>
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-pink text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`font-display text-5xl font-bold ${p.highlighted ? "text-gradient-pink" : ""}`}>{p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.period}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm mb-8 transition ${
                  p.highlighted
                    ? "bg-gradient-pink text-primary-foreground hover:opacity-90 glow-pink"
                    : "glass hover:bg-secondary"
                }`}>
                  {p.cta}
                </button>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <div className="w-4 h-4 rounded-full bg-gradient-pink/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary-glow" />
                      </div>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
