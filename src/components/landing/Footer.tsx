import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Dashboard", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About", "Careers", "Press", "Blog", "Contact"] },
    { title: "Resources", links: ["Docs", "Help Center", "Community", "Status", "API"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
  ];
  return (
    <footer id="contact" className="relative pt-24 pb-10 border-t border-border">
      {/* CTA banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-20">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-pink opacity-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/40 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient-pink">land the offer</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join 120,000+ candidates training smarter with AI. Start your first mock interview today.
            </p>
            <button className="bg-gradient-pink text-primary-foreground font-semibold px-8 py-4 rounded-2xl glow-pink hover:opacity-90 transition">
              Start Free →
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-pink rounded-lg p-1.5">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                AI Interview <span className="text-gradient-pink">Prep</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              The premium AI platform for interview mastery — built for candidates who play to win.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg glass hover:bg-gradient-pink hover:text-primary-foreground transition flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-display font-semibold text-sm mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 AI Interview Prep. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">hello@aiinterviewprep.com · San Francisco, CA</p>
        </div>
      </div>
    </footer>
  );
}
