import { motion } from "framer-motion";
import { useRef, useState } from "react";
import showreelPoster from "@/assets/showreel-poster.jpg";

const REEL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function FeaturedShowreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="showreel" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface ring-1 ring-white/5 p-4 md:p-8 backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Project ID: 882-SHW
              </span>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                Status: {playing ? "Playing" : "Ready"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                2025 / Showreel
              </span>
              <div className="flex gap-1">
                <div className={`size-1.5 rounded-full ${playing ? "bg-accent" : "bg-zinc-800"}`} />
                <div className="size-1.5 rounded-full bg-zinc-800" />
                <div className="size-1.5 rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>

          <div className="relative aspect-video group bg-black overflow-hidden">
            <video
              ref={ref}
              className="w-full h-full object-cover"
              poster={showreelPoster}
              preload="metadata"
              playsInline
              onClick={toggle}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            >
              <source src={REEL} type="video/mp4" />
            </video>
            <button
              aria-label={playing ? "Pause showreel" : "Play showreel"}
              onClick={toggle}
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                playing ? "opacity-0 hover:opacity-100 bg-black/30" : "opacity-100 bg-black/40"
              }`}
            >
              <div className="size-20 md:size-24 rounded-full border border-accent flex items-center justify-center bg-canvas/70 backdrop-blur-sm transition-transform group-hover:scale-110">
                {playing ? (
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-6 bg-accent" />
                    <div className="w-1.5 h-6 bg-accent" />
                  </div>
                ) : (
                  <svg className="size-7 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
