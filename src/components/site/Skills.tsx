import { motion } from "framer-motion";
import { SKILLS } from "@/lib/site-data";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
            02 // Technical stack
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-zinc-50 mb-6 tracking-tight">
            The tools behind every frame.
          </h2>
          <p className="text-zinc-400 max-w-[52ch] leading-relaxed text-pretty">
            From timeline assembly to final grade, the same hands stay on the project. Adobe Suite
            for editorial and motion, DaVinci Resolve for color, and a steady refusal to ship
            anything less than locked.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-zinc-50">{s.name}</span>
                <span className="text-accent font-mono">{s.value}%</span>
              </div>
              <div className="h-1 bg-zinc-800 w-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
