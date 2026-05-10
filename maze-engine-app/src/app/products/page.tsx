"use client";

import React from "react";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { TerminalSquare, Cpu, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Maze Copilot",
      subtitle: "Desktop AI Workspace",
      description: "A focused desktop workspace for live technical sessions, debugging, and engineering collaboration.",
      link: "/products/maze-copilot",
      icon: <TerminalSquare className="w-10 h-10 text-accent-1" />,
      color: "border-accent-1/20 hover:border-accent-1",
      glow: "bg-accent-1/5"
    },
    {
      title: "MazeLabs Engine",
      subtitle: "Operational Simulation Platform",
      description: "Convert documentation and incident logs into interactive, deterministic training simulations.",
      link: "/products/maze-engine",
      icon: <Cpu className="w-10 h-10 text-accent-2" />,
      color: "border-accent-2/20 hover:border-accent-2",
      glow: "bg-accent-2/5"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-40 pb-24">
        <div className="container mx-auto px-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Applied AI products designed for high-context technical workflows and enterprise operational readiness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={product.link} className={`block glass-card p-12 rounded-3xl border transition-all h-full flex flex-col group relative overflow-hidden ${product.color}`}>
                  <div className={`absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 ${product.glow}`}></div>
                  <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">{product.subtitle}</p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-white group-hover:gap-3 transition-all">
                    Explore Product <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
