import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How accurate is the AI feedback?", a: "Our AI is trained on thousands of real interview transcripts and benchmarked against senior hiring managers. Feedback accuracy averages 94% agreement with human reviewers." },
  { q: "Can I practice for specific companies?", a: "Yes — we support tailored question banks for 200+ companies including FAANG, top consulting, and finance firms, updated continuously by our research team." },
  { q: "Is my data private?", a: "Absolutely. All interview recordings are encrypted end-to-end and never used for training. You can delete your data at any time." },
  { q: "Do you support non-English interviews?", a: "Pro and Enterprise plans support 12 languages including Spanish, Mandarin, Hindi, French, and German with native-level voice analysis." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no hidden fees. Cancel your subscription in one click from your dashboard." },
  { q: "Do you offer student discounts?", a: "We offer 50% off Pro plans for verified students and free Enterprise pilots for university career centers." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gradient-pink mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Questions, <span className="text-gradient-pink">answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium pr-4">{f.q}</span>
                <Plus className={`w-5 h-5 text-primary-glow shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
