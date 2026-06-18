const FOOTER_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#showreel", label: "Showreel" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-canvas border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-accent text-xs tracking-tighter">REC [●]</span>
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-zinc-50">
              V_KINETIC
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} V_KINETIC Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-zinc-600">4K_RES_EXPORT</span>
            <span className="text-[10px] font-mono text-zinc-600">FRAME_RATE: 23.976</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
