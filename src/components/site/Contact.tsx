import { motion } from "framer-motion";
import { useState } from "react";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "WhatsApp", href: "https://wa.me/10000000000" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20"
        >
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-6">
              05 // Ready for playback
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium text-zinc-50 tracking-tighter mb-10 text-balance">
              Let's create something timeless.
            </h2>
            <a
              href="mailto:hello@vkinetic.studio"
              className="block text-2xl md:text-4xl font-light text-zinc-300 hover:text-accent transition-colors underline decoration-white/10 underline-offset-8 mb-10 break-all"
            >
              hello@vkinetic.studio
            </a>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-widest">
                <span className="text-zinc-500 font-mono">Social</span>
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-50 hover:text-accent transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
                <span className="text-zinc-500 font-mono">Location</span>
                <span className="text-zinc-300">Remote / Worldwide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="bg-surface ring-1 ring-white/5 p-6 md:p-8 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  NEW_BRIEF.txt
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  ● REC
                </span>
              </div>
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
              <Field label="Project" name="project" placeholder="Brand, scope, deadline" />
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Brief
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the story…"
                  className="w-full bg-transparent border-b border-white/15 pb-3 outline-none focus:border-accent transition-colors text-zinc-100 placeholder:text-zinc-700 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-canvas py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-50 transition-colors"
              >
                {sent ? "Transmitted ✓" : "Send brief"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/10000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-12 rounded-full bg-accent text-canvas flex items-center justify-center shadow-lg shadow-accent/30 hover:scale-110 transition-transform ring-1 ring-accent"
      >
        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/15 pb-3 outline-none focus:border-accent transition-colors text-zinc-100 placeholder:text-zinc-700"
      />
    </div>
  );
}
