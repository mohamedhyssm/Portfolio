"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleThemeToggle}
        className={`
          relative overflow-hidden transition-all duration-300 ease-in-out
          border border-border/50 hover:border-border
          group
          ${isAnimating ? "animate-pulse" : ""}
        `}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon container with enhanced animations */}
        <div className="relative z-10">
          {theme === "light" ? (
            <Moon
              className={`
                h-4 w-4 transition-all duration-500 ease-out
                text-foreground group-hover:text-primary
                group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]
                ${isAnimating ? "rotate-180 scale-0" : "rotate-0 scale-100"}
              `}
            />
          ) : (
            <Sun
              className={`
                h-4 w-4 transition-all duration-500 ease-out
                text-foreground group-hover:text-primary
                group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]
                group-hover:rotate-90
                ${isAnimating ? "rotate-180 scale-0" : "rotate-0 scale-100"}
              `}
            />
          )}
        </div>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-md opacity-0 group-active:opacity-30 bg-primary/20 animate-ping" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </Button>
    </div>
  );
}
