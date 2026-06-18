import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/about-portrait.jpg";
import { STATS } from "@/lib/site-data";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, mv, rounded, value]);

  return <span ref={ref}>{display}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-white/10">
            <img
              src={portrait}
              alt="Portrait of the editor at the color grading suite"
              loading="lazy"
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-accent bg-canvas/80 px-2 py-1 ring-1 ring-accent/30">
              ROLL_A / TAKE_07
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
            04 // About the editor
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-zinc-50 tracking-tight mb-8 text-balance">
            I cut films the way colorists grade them — one frame at a time, then again, until it
            breathes.
          </h2>
          <div className="space-y-5 text-zinc-400 leading-relaxed max-w-[60ch] text-pretty">
            <p>
              I'm a video editor and motion designer based remotely, working with brands, studios,
              and independent directors. Over the last eight years I've delivered everything from
              30-second TV spots to long-form documentaries — always handling editorial, motion,
              and color personally.
            </p>
            <p>
              My favourite work lives at the intersection of rhythm and restraint. If a cut needs
              to disappear, it disappears. If it needs to punch, it punches.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 ring-1 ring-white/5">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface p-5">
                <p className="text-3xl md:text-4xl font-medium text-zinc-50 tracking-tight">
                  <Counter value={s.value} />
                  <span className="text-accent">+</span>
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
