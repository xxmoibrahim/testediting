import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-canvas flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent mb-8">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ●
            </motion.span>
            <span>REC — V_KINETIC</span>
          </div>
          <div className="w-64 h-px bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-accent"
            />
          </div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Loading reel
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
