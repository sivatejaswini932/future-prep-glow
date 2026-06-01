import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden">
      {/* Animated glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full animate-glow" />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
          <span className="text-xs text-muted-foreground">Powered by Next-Gen AI Models</span>
          <div className="w-px h-3 bg-border" />
          <span className="text-xs text-gradient-pink font-semibold">v2.0 Live</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Master Interviews with
          <br />
          <span className="text-gradient-pink">AI-Powered</span> Preparation
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          AI mock interviews, resume analysis, communication tracking, and personalized
          career guidance — all in one elegant platform built for tomorrow's professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-pink rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition" />
            <span className="relative bg-gradient-pink text-primary-foreground font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2">
              Start Interview <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </span>
          </button>
          <button className="glass-strong rounded-2xl px-8 py-4 font-semibold flex items-center gap-2 hover:bg-secondary transition w-full sm:w-auto justify-center">
            <Play className="w-4 h-4 text-primary-glow" /> Explore Features
          </button>
        </div>

        {/* Floating UI preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="absolute -inset-4 bg-gradient-pink opacity-30 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-3xl p-2 glow-pink">
            <div className="bg-background/60 rounded-2xl p-8 grid md:grid-cols-3 gap-4">
              {[
                { label: "Interview Score", value: "94", sub: "+12% this week" },
                { label: "Confidence", value: "88%", sub: "Strong delivery" },
                { label: "Mock Sessions", value: "127", sub: "Across 8 roles" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-5 text-left hover:scale-[1.02] transition">
                  <p className="text-xs text-muted-foreground mb-2">{s.label}</p>
                  <p className="font-display text-4xl font-bold text-gradient-pink">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating chips */}
          <div className="hidden md:block absolute -top-6 -left-6 glass-strong rounded-2xl px-4 py-3 animate-float">
            <p className="text-xs text-muted-foreground">Live Feedback</p>
            <p className="text-sm font-semibold text-gradient-pink">+ Tone improved</p>
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-6 glass-strong rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
            <p className="text-xs text-muted-foreground">AI Coach</p>
            <p className="text-sm font-semibold">Ready ✦</p>
          </div>
        </div>
      </div>
    </section>
  );
}
