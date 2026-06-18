import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#showreel", label: "Showreel" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-canvas/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-4">
          <span className="font-mono text-accent text-xs tracking-tighter">REC [●]</span>
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-zinc-50">
            V_KINETIC
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ring-1 ring-accent text-accent py-1.5 px-3 flex items-center gap-2 text-xs uppercase tracking-widest hover:bg-accent hover:text-canvas transition-colors"
          >
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            Contact
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1 p-2"
        >
          <span className={`h-px w-5 bg-zinc-50 transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`h-px w-5 bg-zinc-50 transition-transform ${open ? "-rotate-45 -translate-y-[2px]" : ""}`} />
        </button>
      </div>

      <div className="w-full h-px bg-white/5">
        <motion.div className="h-full bg-accent origin-left" style={{ scaleX: scrollYProgress }} />
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-canvas">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-zinc-300 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-accent"
            >
              Contact →
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
