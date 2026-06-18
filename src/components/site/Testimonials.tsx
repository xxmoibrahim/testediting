import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-3">
            03 // Words from the room
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-zinc-50 tracking-tight max-w-2xl">
            Trusted by directors, brands, and editors-in-chief.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 ring-1 ring-white/5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-canvas/60 backdrop-blur p-8 flex flex-col gap-6"
            >
              <div className="flex gap-1 text-accent" aria-label={`${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg key={idx} className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-200 leading-relaxed text-pretty flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-white/5 pt-4">
                <p className="text-zinc-50 font-medium text-sm">{t.name}</p>
                <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-widest">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
