"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const CONTACT_ITEMS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201225444992",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    bg: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/30",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MohamedHaithemMohamedAhemed",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    bg: "from-blue-600 to-blue-500",
    shadow: "shadow-blue-500/30",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-haytham-a04335210",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "from-sky-600 to-blue-600",
    shadow: "shadow-sky-500/30",
  },
];

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
      delay: (CONTACT_ITEMS.length - 1 - i) * 0.05,
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
          [...CONTACT_ITEMS].reverse().map((item, revIdx) => {
            return (
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
                className={`flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full bg-linear-to-r ${item.bg} text-white text-sm font-semibold shadow-xl ${item.shadow} backdrop-blur-sm select-none`}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                {item.label}
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* ── FAB button ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="cursor-pointer  relative w-14 h-14 rounded-full bg-linear-to-br from-violet-600 to-blue-600 text-white shadow-2xl shadow-violet-500/40 flex items-center justify-center focus:outline-none"
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
