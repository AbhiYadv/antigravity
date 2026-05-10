"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  Award, BarChart3, Clock, Search, Target,
  CheckCircle, TrendingUp, MessageSquare, ArrowUpRight,
  AlertTriangle, Zap, Users, GitBranch, ShieldCheck
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const scoringDimensions = [
  { icon: Clock, name: "Time to Detect", desc: "How quickly the operator identified the alert and began triage", weight: "15%" },
  { icon: Search, name: "Investigation Quality", desc: "Depth and breadth of evidence inspection before forming hypotheses", weight: "15%" },
  { icon: CheckCircle, name: "Evidence Usage", desc: "Percentage of available evidence inspected and correctly interpreted", weight: "12%" },
  { icon: Target, name: "Hypothesis Quality", desc: "Accuracy and reasoning behind root-cause theories formed during investigation", weight: "12%" },
  { icon: ArrowUpRight, name: "Escalation Timing", desc: "Whether escalation happened at the right moment with appropriate severity", weight: "10%" },
  { icon: Zap, name: "Mitigation Correctness", desc: "Whether the chosen mitigation addressed the actual root cause", weight: "12%" },
  { icon: GitBranch, name: "False-Path Recovery", desc: "Ability to recognize and recover from wrong investigation paths", weight: "8%" },
  { icon: MessageSquare, name: "Communication Behavior", desc: "Clarity, frequency, and accuracy of stakeholder and team updates", weight: "8%" },
  { icon: ShieldCheck, name: "Retrospective Quality", desc: "Depth of post-incident reflection and identification of process improvements", weight: "8%" }
];

const outputs = [
  { label: "Individual Readiness Score", desc: "Per-operator score across all dimensions with historical trend" },
  { label: "Team Readiness Score", desc: "Aggregate team score weighted by role coverage and collaboration" },
  { label: "Skill Gap Analysis", desc: "Identify specific operational skills that need targeted practice" },
  { label: "Drill Recommendations", desc: "Auto-suggested follow-up simulations based on weakness areas" },
  { label: "Trend History", desc: "Track readiness improvement over weeks and months of simulation practice" }
];

export default function ReadinessScoringEnginePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,255,135,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-3 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Measurement Engine</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Readiness Scoring Engine
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Measure real operational judgment — not quiz recall. Score evidence usage, decision quality, escalation timing, communication behavior, and recovery execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scoring Dimensions */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Scoring Dimensions</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Every simulation session is scored across 9 operational dimensions. Each dimension is weighted based on its impact on real incident outcomes.
            </p>
          </Reveal>
          <div className="space-y-4">
            {scoringDimensions.map((dim, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-border-color flex items-start gap-5 hover:border-accent-3/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-bg-alt flex items-center justify-center shrink-0">
                    <dim.icon className="w-5 h-5 text-accent-3" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-bold">{dim.name}</h3>
                      <span className="text-xs font-mono text-accent-3 bg-accent-3/10 px-2 py-0.5 rounded">{dim.weight}</span>
                    </div>
                    <p className="text-sm text-gray-400">{dim.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard Visual */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Sample Readiness Scorecard</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/60 rounded-xl border border-border-color overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-color bg-bg-alt/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-gray-500 font-mono">readiness-scorecard://session-2026-0510</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 font-mono">OPERATOR</div>
                    <div className="text-white font-bold">SRE Team Lead</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-mono">OVERALL SCORE</div>
                    <div className="text-4xl font-bold text-accent-3">78<span className="text-lg text-gray-500">/100</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Time to Detect", score: 85, color: "bg-accent-3" },
                    { label: "Investigation Quality", score: 72, color: "bg-accent-1" },
                    { label: "Evidence Usage", score: 90, color: "bg-accent-3" },
                    { label: "Hypothesis Quality", score: 65, color: "bg-yellow-400" },
                    { label: "Escalation Timing", score: 80, color: "bg-accent-1" },
                    { label: "Mitigation Correctness", score: 88, color: "bg-accent-3" },
                    { label: "False-Path Recovery", score: 55, color: "bg-red-400" },
                    { label: "Communication", score: 70, color: "bg-yellow-400" },
                    { label: "Retrospective Quality", score: 82, color: "bg-accent-1" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-xs text-gray-400 w-44 shrink-0 font-mono">{item.label}</span>
                      <div className="flex-1 bg-bg-alt rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                      </div>
                      <span className="text-xs font-mono text-gray-400 w-8 text-right">{item.score}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border-color grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">WEAK AREA</div>
                    <div className="text-sm text-red-400 font-bold">False-Path Recovery</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">STRONG AREA</div>
                    <div className="text-sm text-accent-3 font-bold">Evidence Usage</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">RECOMMENDED DRILL</div>
                    <div className="text-sm text-accent-1 font-bold">Red Herring Recovery</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outputs */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Scoring Outputs</h2>
          </Reveal>
          <div className="space-y-4">
            {outputs.map((output, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-card p-6 rounded-xl border border-border-color flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-accent-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">{output.label}</h3>
                    <p className="text-sm text-gray-400">{output.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturePagination currentSlug="readiness-scoring-engine" />
      <Footer />
    </main>
  );
}
