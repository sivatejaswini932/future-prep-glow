import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-pink blur-md opacity-60 group-hover:opacity-100 transition" />
              <div className="relative bg-gradient-pink rounded-lg p-1.5">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              AI Interview <span className="text-gradient-pink">Prep</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-pink hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium px-4 py-2 text-foreground/80 hover:text-foreground transition">
              Login
            </button>
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-pink rounded-xl blur opacity-60 group-hover:opacity-100 transition" />
              <span className="relative bg-gradient-pink text-primary-foreground text-sm font-semibold px-5 py-2 rounded-xl block">
                Register
              </span>
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-5 space-y-3 animate-fade-up">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border">
              <button className="flex-1 py-2 rounded-lg glass text-sm">Login</button>
              <button className="flex-1 py-2 rounded-lg bg-gradient-pink text-primary-foreground text-sm font-semibold">Register</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
