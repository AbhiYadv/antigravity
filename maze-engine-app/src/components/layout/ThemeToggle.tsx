"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.body.classList.add("light-mode");
      setIsLight(true);
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-[44px] h-[24px] rounded-full border border-border-color bg-bg-alt transition-colors duration-300 flex items-center cursor-pointer shrink-0 hover:border-accent-1/50"
      style={isLight ? { backgroundColor: "var(--accent-1)", borderColor: "var(--accent-1)" } : {}}
    >
      <span
        className="absolute w-[16px] h-[16px] rounded-full transition-all duration-300 flex items-center justify-center"
        style={{
          left: isLight ? "24px" : "3px",
          backgroundColor: isLight ? "#fff" : "rgba(255,255,255,0.5)",
        }}
      >
        {isLight ? (
          <Sun className="w-[10px] h-[10px] text-amber-500" />
        ) : (
          <Moon className="w-[10px] h-[10px] text-gray-800" />
        )}
      </span>
    </button>
  );
}
