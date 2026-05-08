"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 320,
      damping: 20,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    scale: 0.5,
    y: 20,
    transition: {
      delay: (SOCIAL_LINKS.length - 1 - i) * 0.05,
      duration: 0.15,
    },
  }),
};

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Contact bubbles ── */}
      <AnimatePresence>
        {open &&
          [...SOCIAL_LINKS].reverse().map((item, revIdx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={revIdx}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.06, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full bg-linear-to-r ${item.accent} text-white text-sm font-semibold shadow-xl ${item.shadow} backdrop-blur-sm select-none`}
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d={item.icon} />
                </svg>
              </span>
              {item.label}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* ── FAB button ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="cursor-pointer relative w-14 h-14 rounded-full bg-linear-to-br from-violet-600 to-blue-600 text-white shadow-2xl shadow-violet-500/40 flex items-center justify-center focus:outline-none"
      >
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-violet-500/40 animate-ping" />
        )}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10"
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
