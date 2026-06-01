import { TrendingUp, Mic2, Target, Award } from "lucide-react";

export function Dashboard() {
  const bars = [40, 65, 50, 80, 72, 90, 85, 95];
  return (
    <section id="dashboard" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gradient-pink mb-4">DASHBOARD</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Your performance, <span className="text-gradient-pink">visualized</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-pink opacity-20 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-3xl p-6 md:p-10">
            <div className="grid lg:grid-cols-3 gap-5">
              {/* Main chart */}
              <div className="lg:col-span-2 glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Interview Score Trend</p>
                    <p className="font-display text-3xl font-bold text-gradient-pink">94.2</p>
                  </div>
                  <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1 text-xs text-primary-glow">
                    <TrendingUp className="w-3 h-3" /> +18%
                  </div>
                </div>
                <div className="flex items-end gap-3 h-44">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 relative group">
                      <div
                        className="bg-gradient-to-t from-primary to-primary-glow rounded-t-lg transition-all hover:opacity-100 opacity-80"
                        style={{ height: `${h}%`, boxShadow: "0 0 20px oklch(0.72 0.24 350 / 0.4)" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-3">
                  {["W1","W2","W3","W4","W5","W6","W7","W8"].map(w => <span key={w}>{w}</span>)}
                </div>
              </div>

              {/* Side cards */}
              <div className="space-y-5">
                {[
                  { icon: Mic2, label: "Communication", value: "92%", bar: 92 },
                  { icon: Target, label: "Confidence", value: "88%", bar: 88 },
                  { icon: Award, label: "Accuracy", value: "95%", bar: 95 },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-primary-glow" />
                        <p className="text-sm">{s.label}</p>
                      </div>
                      <p className="font-display font-bold text-gradient-pink">{s.value}</p>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-pink rounded-full" style={{ width: `${s.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="mt-5 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-display font-semibold">AI Recommendations</p>
                <span className="text-xs text-muted-foreground">Updated just now</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Tighten STAR responses — aim for 90s",
                  "Strengthen system design fundamentals",
                  "Practice behavioral conflict scenarios",
                ].map((r, i) => (
                  <div key={i} className="glass rounded-xl p-4 text-sm border-l-2 border-primary">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
