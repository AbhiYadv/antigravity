import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border-color bg-background text-center text-sm text-gray-500">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="logo-mark w-6 h-6 border-radius-sm"></span>
            Mazeart Technologies
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-accent-1 transition-colors">Home</Link>
            <Link href="/products/maze-engine" className="hover:text-accent-1 transition-colors">Product</Link>
            <Link href="/features" className="hover:text-accent-1 transition-colors">Features</Link>
            <Link href="/architecture" className="hover:text-accent-1 transition-colors">Architecture</Link>
            <a href="/#contact" className="hover:text-accent-1 transition-colors">Contact</a>
          </div>
        </div>
        <p>MazeLabs — Privacy-first operational simulation and incident readiness for technical teams.</p>
        <p className="mt-2 text-xs opacity-50">&copy; 2026 Mazeart Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
