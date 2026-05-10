"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  Users, Clock, GitBranch, Search, ArrowRight,
  CheckCircle, AlertTriangle, PlayCircle, BarChart3,
  Rewind, FastForward, MessageSquare, Target
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const replayFlow = [
  "Incident Timeline", "Operator Decisions", "Escalation",
  "Mitigation", "Validation", "Outcome Replay"
];

const sections = [
  {
    icon: Clock,
    title: "Timeline Reconstruction",
    desc: "Reconstruct the full incident timeline from ingested evidence — log events, alerts, ticket updates, deployment timestamps, and operator actions — in a unified, scrollable chronological view.",
    color: "text-accent-1"
  },
  {
    icon: GitBranch,
    title: "Evidence Graph",
    desc: "Visualize causal relationships between system events. Evidence nodes are linked by temporal and logical connections, showing how a config change triggered a cascade through dependent services.",
    color: "text-accent-2"
  },
  {
    icon: Search,
    title: "Investigation Branches",
    desc: "Replay the exact investigation branches operators chose during the simulation. See which evidence was inspected, which hypotheses were formed, and where wrong assumptions were made.",
    color: "text-accent-3"
  },
  {
    icon: ArrowRight,
    title: "Escalation Flow",
    desc: "Review escalation decisions: who was notified, when severity was raised, how stakeholder communication was handled, and whether escalation timing was appropriate for the incident severity.",
    color: "text-yellow-400"
  },
  {
    icon: Target,
    title: "Alternate Outcomes",
    desc: "Compare the operator's actual path against optimal resolution paths. See what would have happened with earlier detection, different mitigation strategies, or faster escalation.",
    color: "text-blue-400"
  },
  {
    icon: Rewind,
    title: "Replay Controls",
    desc: "Step forward and backward through the simulation timeline. Pause at any decision point, inspect available evidence at that moment, and understand the operator's context at each step.",
    color: "text-orange-400"
  },
  {
    icon: BarChart3,
    title: "Debrief Timeline",
    desc: "Generate a structured debrief timeline that highlights key decision moments, missed signals, communication gaps, and recovery quality for team review sessions.",
    color: "text-pink-400"
  }
];

export default function WarRoomReplayPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-1 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Simulation Surface</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              War Room Replay
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Replay real incidents as guided war-room simulations with full timeline reconstruction, evidence graphs, investigation branches, and debrief analysis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual Flow */}
      <section className="py-20 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold mb-12">War Room Replay Flow</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold max-w-5xl mx-auto">
              {replayFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-3 rounded-lg shadow-lg border ${idx === 0 || idx === replayFlow.length - 1 ? 'bg-accent-1/10 border-accent-1/40 text-accent-1' : 'bg-bg-alt border-border-color text-gray-300'}`}>
                    {step}
                  </div>
                  {idx < replayFlow.length - 1 && <span className="text-accent-1 opacity-50">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-5xl space-y-20">
          {sections.map((section, idx) => (
            <Reveal key={idx} delay={0.1}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-xl bg-bg-alt border border-border-color flex items-center justify-center shrink-0">
                  <section.icon className={`w-7 h-7 ${section.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{section.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Replay Interface Preview */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-8">Replay Interface</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              The War Room Replay surface provides a multi-panel interface that mirrors a real war room environment. Operators see the same evidence, pressure, and constraints they would face during a live P1 incident.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/60 rounded-xl border border-border-color overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-color bg-bg-alt/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-gray-500 font-mono">war-room-session://inc-2026-0510</span>
              </div>
              <div className="grid md:grid-cols-3 divide-x divide-border-color">
                <div className="p-4">
                  <div className="text-xs font-mono text-accent-1 mb-3 font-bold">TIMELINE</div>
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> 02:11 — Alert fired</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> 02:14 — Triage begun</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-1"></div> 02:18 — Evidence inspected</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-2"></div> 02:25 — Hypothesis formed</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-3"></div> 02:31 — Mitigation applied</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-mono text-accent-2 mb-3 font-bold">EVIDENCE</div>
                  <div className="space-y-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-accent-3" /> DB connection pool logs</div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-accent-3" /> Deployment manifest diff</div>
                    <div className="flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-yellow-400" /> Misleading network alert</div>
                    <div className="flex items-center gap-2"><Search className="w-3 h-3 text-gray-500" /> Hidden: config change log</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-mono text-yellow-400 mb-3 font-bold">ACTORS</div>
                  <div className="space-y-2 text-xs text-gray-400">
                    <div><span className="text-white">IC:</span> &quot;What&apos;s the blast radius?&quot;</div>
                    <div><span className="text-accent-1">SRE:</span> &quot;Checking DB metrics...&quot;</div>
                    <div><span className="text-orange-400">VP:</span> &quot;Customer is escalating.&quot;</div>
                    <div><span className="text-accent-3">DBA:</span> &quot;Pool exhausted at 02:09.&quot;</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturePagination currentSlug="war-room-replay" />
      <Footer />
    </main>
  );
}
