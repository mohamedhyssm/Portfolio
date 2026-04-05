/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme/toggle-mode";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Variants
  const navVariants: Variants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const linksContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const linkItem: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileItem: Variants = {
    hidden: { x: -24, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background border-b border-white/6 shadow-md"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.span
            variants={logoVariants}
            className="text-xl md:text-2xl font-bold tracking-tight text-foreground select-none cursor-pointer"
          >
            <img src="/Logo.png" alt="logo" className="w-20 h-20" />
          </motion.span>
          <ModeToggle />
        </div>

        {/* Desktop Links */}
        <motion.ul
          variants={linksContainer}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8 list-none"
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={linkItem}>
              <motion.a
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-linear-to-r from-violet-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden"
          >
            <motion.ul
              variants={linksContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-6 py-4 border-t border-white/6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={mobileItem}>
                  <a
                    href={link.href}
                    className="block py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/4 rounded-lg transition-colors duration-150"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
