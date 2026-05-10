"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { TerminalSquare, Shield, Lock, Search, MessageSquare, Zap, Cpu, Layout } from "lucide-react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function MazeCopilotPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* HERO */}
        <section className="pt-40 pb-24 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="container mx-auto px-8 max-w-5xl relative z-10">
            <Reveal>
              <div className="text-accent-1 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Desktop AI Workspace</div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Maze <span className="text-gradient">Copilot</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                A specialized desktop workspace for live technical sessions. Designed for focused execution, real-time context, and privacy-first collaboration.
              </p>
            </Reveal>

            {/* MOCK WINDOW */}
            <Reveal delay={0.2}>
              <div className="relative max-w-4xl mx-auto mt-12 p-1 rounded-2xl bg-gradient-to-br from-accent-1/20 to-transparent border border-white/10 shadow-2xl">
                <div className="bg-black rounded-xl overflow-hidden aspect-video flex flex-col">
                  <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 ml-4">maze-copilot --session live-debugging</div>
                  </div>
                  <div className="flex-1 p-8 flex items-center justify-center font-mono text-gray-600">
                    <div className="text-left space-y-2">
                      <div className="text-accent-1 opacity-50">$ initializing_technical_context...</div>
                      <div className="text-gray-400 animate-pulse">_ capturing_active_workspace_state</div>
                      <div className="text-gray-500 text-xs mt-4">Waiting for session trigger...</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 relative">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-6 h-6 text-accent-1" />,
                  title: "Desktop-first Workspace",
                  desc: "A dedicated application for technical work, not just another browser tab. Keeps your context organized."
                },
                {
                  icon: <Search className="w-6 h-6 text-accent-1" />,
                  title: "Real-time Context",
                  desc: "Automatically gathers relevant project state, logs, and technical history for the current session."
                },
                {
                  icon: <MessageSquare className="w-6 h-6 text-accent-1" />,
                  title: "Session History",
                  desc: "Every technical discussion is preserved as structured, searchable knowledge for the whole team."
                },
                {
                  icon: <Lock className="w-6 h-6 text-accent-1" />,
                  title: "Privacy Gating",
                  desc: "Built-in redaction and privacy controls ensure sensitive data never leaves your environment."
                },
                {
                  icon: <Zap className="w-6 h-6 text-accent-1" />,
                  title: "Focused Execution",
                  desc: "Designed for live debugging, architecture reviews, and support calls. Not generic chat."
                },
                {
                  icon: <Cpu className="w-6 h-6 text-accent-1" />,
                  title: "Local Intelligence",
                  desc: "Integrates with your local environment to provide accurate, grounded assistance."
                }
              ].map((f, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass-card p-8 rounded-xl border border-border-color hover:border-accent-1/50 transition-colors h-full">
                    <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg">{f.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-24 bg-white/5 border-y border-border-color">
          <div className="container mx-auto px-8 max-w-4xl">
            <Reveal>
              <h2 className="text-3xl font-bold mb-12 text-center">Built for Live Technical Work</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-accent-1 font-bold">Engineering Sessions</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Pair programming & code reviews</li>
                    <li>• Complex debugging & root-cause analysis</li>
                    <li>• Architecture & system design planning</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-accent-1 font-bold">Team Collaboration</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Technical interviews & onboarding</li>
                    <li>• Customer support & escalation calls</li>
                    <li>• Post-incident retrospectives</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
