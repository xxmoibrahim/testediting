import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PROJECTS, type Project } from "@/lib/site-data";
import { ProjectModal } from "./ProjectModal";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All Work");
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "All Work" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-16 gap-8"
        >
          <div>
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
              01 // Selected works
            </p>
            <h2 className="text-3xl md:text-5xl font-medium text-zinc-50 tracking-tight">
              Archive
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[11px] uppercase tracking-widest pb-1 border-b transition-colors ${
                  filter === c
                    ? "text-accent border-accent"
                    : "text-zinc-500 border-transparent hover:text-zinc-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 ring-1 ring-white/5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      onClick={onOpen}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
      className="bg-canvas p-5 md:p-6 flex flex-col gap-4 group text-left cursor-pointer hover:bg-surface/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <img
          src={project.thumb}
          alt={project.title}
          loading="lazy"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-accent bg-canvas/80 backdrop-blur-sm px-2 py-1 ring-1 ring-accent/30">
          [ {project.category} ]
        </div>
        <div className="absolute bottom-3 right-3 size-10 rounded-full bg-canvas/70 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="size-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l10-10M17 17V7H7" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-zinc-50 font-medium text-lg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 mt-1">{project.client}</p>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 shrink-0">{project.year}</span>
      </div>
    </motion.button>
  );
}
