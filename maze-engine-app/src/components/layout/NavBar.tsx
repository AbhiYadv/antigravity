"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-border-color h-[80px]">
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        <a href="/index.html" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-white">
          <span className="logo-mark"></span>
          Mazeart <span className="font-normal text-gray-400">Technologies</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="/index.html#products" className="hover:text-white transition-colors">Products</a>
          <a href="/mazelabs-features.html" className="hover:text-white transition-colors">Overview</a>
          <Link href="/features" className="hover:text-white transition-colors">Platform Features</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <a href="/index.html#contact" className="px-6 py-2.5 rounded-lg bg-white text-background font-semibold hover:bg-accent-1 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
