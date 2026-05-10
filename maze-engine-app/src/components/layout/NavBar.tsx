"use client";

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-border-color h-[80px]">
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-white">
          <span className="logo-mark"></span>
          Mazeart <span className="font-normal text-gray-400">Technologies</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/products" className="hover:text-white transition-colors">Product</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <a href="/#technology" className="hover:text-white transition-colors">Architecture</a>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <a href="/#security" className="hover:text-white transition-colors">Security</a>
          <a href="/#contact" className="px-6 py-2.5 rounded-lg bg-white text-background font-semibold hover:bg-accent-1 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
