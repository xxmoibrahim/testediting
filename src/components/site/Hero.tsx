import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPoster from "@/assets/hero-poster.jpg";

const HERO_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-screen min-h-[640px] w-full flex flex-col justify-end pb-20 md:pb-24 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/60 via-transparent to-canvas/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-xs text-accent bg-accent/10 ring-1 ring-accent/30 px-2 py-1">
            TC 00:00:12:04
          </span>
          <div className="h-px w-12 bg-accent/40" />
          <span className="text-xs uppercase tracking-widest text-zinc-400">
            Available for projects — 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-zinc-50 mb-8 leading-[0.95] tracking-tight text-balance max-w-[20ch]"
        >
          Crafting Engaging Visual Stories Through Video Editing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.7 }}
          className="text-base md:text-lg text-zinc-400 max-w-xl mb-10 text-pretty"
        >
          Eight years in the suite — editing commercials, films, and motion design for brands that
          care about every frame.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="bg-accent text-canvas px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-50 transition-colors ring-1 ring-accent"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="ring-1 ring-white/20 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600"
      >
        <span>Scroll</span>
        <div className="h-px w-8 bg-zinc-700" />
      </motion.div>
    </section>
  );
}
