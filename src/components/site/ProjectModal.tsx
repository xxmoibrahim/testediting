import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/site-data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-canvas/90 backdrop-blur-md flex items-start md:items-center justify-center overflow-y-auto py-10 px-4 md:px-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-surface ring-1 ring-white/10 overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-9 ring-1 ring-white/15 bg-canvas/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-accent hover:ring-accent transition-colors"
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video bg-black">
              <video
                key={project.id}
                src={project.video}
                poster={project.thumb}
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="w-full h-full"
              />
            </div>

            <div className="p-6 md:p-10 space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">
                    [ {project.category} ] — {project.year}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-medium text-zinc-50 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Client — {project.client}</p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-pretty max-w-3xl">
                {project.description}
              </p>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 ring-1 ring-white/10 text-zinc-300 bg-canvas/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.before && project.after && (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                    Before / After
                  </p>
                  <BeforeAfter before={project.before} after={project.after} />
                </div>
              )}

              <div className="grid grid-cols-3 border-t border-white/5 pt-6">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-medium text-zinc-50 tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-video bg-black overflow-hidden select-none">
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-accent pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-9 rounded-full bg-accent text-canvas flex items-center justify-center">
          <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
      <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-zinc-200 bg-canvas/70 px-2 py-1">
        Before
      </div>
      <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest text-accent bg-canvas/70 px-2 py-1">
        After
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}
