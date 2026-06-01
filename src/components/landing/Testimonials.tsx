import { Star } from "lucide-react";

const testimonials = [
  { name: "Aarav Sharma", role: "SDE @ Google", text: "The AI mock interviews were uncannily realistic. I walked into my Google loop already feeling like I'd done it before.", initials: "AS" },
  { name: "Priya Mehta", role: "PM @ Stripe", text: "The communication analysis caught filler words I never noticed. My delivery transformed in 3 weeks.", initials: "PM" },
  { name: "Daniel Kim", role: "ML Eng @ Anthropic", text: "Company-specific prep is unreal. The system design questions matched the actual format I got asked.", initials: "DK" },
  { name: "Sofia Rossi", role: "Consultant @ McKinsey", text: "I doubled my case interview accuracy. The structured feedback is better than any human coach I've worked with.", initials: "SR" },
  { name: "Marcus Chen", role: "Designer @ Linear", text: "The portfolio review and behavioral prep gave me language I'd never have found alone. Worth every cent.", initials: "MC" },
  { name: "Zara Ahmed", role: "Data Sci @ Spotify", text: "Stress simulation mode prepared me for the absolute worst — so the real interview felt easy.", initials: "ZA" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-pink mb-4">TESTIMONIALS</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Loved by candidates at <span className="text-gradient-pink">top companies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/40 transition duration-500">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-pink flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
