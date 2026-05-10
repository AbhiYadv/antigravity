"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PlayCircle, Cpu, Users, Shield, Target, GitBranch,
  CheckCircle, Layers, Workflow, Search, MessageSquare,
  ArrowRight, Zap, BarChart3
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const flowSteps = [
  "EvidencePack", "Scenario Compiler", "Simulation State Machine",
  "Actor Runtime", "Decision Engine", "Session Tracker",
  "Scoring Hooks", "Debrief Generator"
];

const states = [
  { name: "Triage", desc: "Initial alert assessment and incident classification" },
  { name: "Investigation", desc: "Evidence collection, log correlation, and pattern identification" },
  { name: "Hypothesis", desc: "Formulate root-cause theories based on available evidence" },
  { name: "Action", desc: "Execute mitigation steps, apply fixes, and coordinate response" },
  { name: "Validation", desc: "Verify that mitigation resolved the issue without regressions" },
  { name: "Escalation", desc: "Route to specialists, notify stakeholders, and escalate severity" },
  { name: "Recovery", desc: "Restore full service, confirm stability, and document resolution" },
  { name: "Retrospective", desc: "Review decisions, missed signals, and process improvements" }
];

const actors = [
  { role: "SRE", desc: "Drives investigation, runs checks, correlates system signals", color: "text-accent-1" },
  { role: "DBA", desc: "Investigates database health, queries, replication, and storage", color: "text-accent-2" },
  { role: "DevOps", desc: "Checks deployments, config changes, CI/CD pipeline state", color: "text-accent-3" },
  { role: "Incident Commander", desc: "Coordinates response, manages timeline, and tracks decisions", color: "text-yellow-400" },
  { role: "Support Engineer", desc: "Manages customer communication and impact reporting", color: "text-blue-400" },
  { role: "Stakeholder", desc: "Applies pressure, requests ETAs, and demands status updates", color: "text-orange-400" }
];

export default function OperationalSimulationRuntimePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(138,43,226,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-2 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Core Runtime</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Operational Simulation Runtime
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Compile real incidents into interactive P1/P0 simulations with deterministic state, evidence gating, and branching operational decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-8">What It Is</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              The Operational Simulation Runtime is the execution layer of MazeLabs. It takes a compressed, redacted EvidencePack produced by the Evidence Compression Engine and compiles it into a fully interactive incident simulation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unlike generic scenario builders or quiz-based training tools, the Runtime drives deterministic state transitions based on operator decisions, evidence inspection, and escalation behavior. Every simulation is bounded by real incident data — not scripted dialogues or hallucinated scenarios.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Runtime Architecture Flow */}
      <section className="py-24">
        <div className="container mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-16">Runtime Architecture Flow</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold max-w-5xl mx-auto">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-3 rounded-lg shadow-lg border ${idx === 0 || idx === flowSteps.length - 1 ? 'bg-accent-2/10 border-accent-2/40 text-accent-2' : 'bg-bg-alt border-border-color text-gray-300'}`}>
                    {step}
                  </div>
                  {idx < flowSteps.length - 1 && <span className="text-accent-2 opacity-50">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scenario Compiler */}
      <section className="py-24 bg-bg-alt/30 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-2/20 flex items-center justify-center"><Cpu className="w-5 h-5 text-accent-2" /></div>
              <h2 className="text-3xl font-bold">Scenario Compiler</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              The Scenario Compiler transforms a validated EvidencePack into a structured simulation scenario definition. It extracts causal chains, identifies decision points, plants hidden evidence, maps valid investigation checks, defines wrong paths, and establishes recovery criteria.
            </p>
            <div className="bg-black/50 p-6 rounded-xl border border-border-color font-mono text-sm">
              <div className="text-accent-2 mb-3 font-bold">Scenario Definition Output</div>
              <pre className="text-gray-400 overflow-x-auto">
{`{
  "scenario_id": "inc-2026-0510-db-timeout",
  "phases": ["triage", "investigation", "hypothesis", "action", "validation"],
  "evidence_gates": 12,
  "hidden_evidence_count": 4,
  "wrong_paths": ["blame_network", "restart_app_server"],
  "recovery_criteria": {
    "primary": "identify_connection_pool_exhaustion",
    "validation": "confirm_pool_resize_and_monitor"
  }
}`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Simulation State Machine */}
      <section className="py-24 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Simulation State Machine</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              The simulation progresses through deterministic operational states. Each state has entry conditions, available actions, evidence requirements, and transition rules. There are no random outcomes — every result is derived from operator behavior.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {states.map((state, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-border-color hover:border-accent-2/50 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent-2/20 flex items-center justify-center text-accent-2 font-mono text-xs font-bold">{idx + 1}</div>
                    <h3 className="text-white font-bold">{state.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{state.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Actor Runtime */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Actor Runtime</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Each simulation runs multiple AI-driven actors that behave according to their role, the scenario state, and available evidence. Actors generate realistic pressure, provide relevant context, and respond to operator decisions — not from scripts, but from bounded scenario logic.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actors.map((actor, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-card p-6 rounded-xl border border-border-color h-full">
                  <Users className={`w-6 h-6 ${actor.color} mb-3`} />
                  <h3 className="text-white font-bold mb-2">{actor.role}</h3>
                  <p className="text-sm text-gray-400">{actor.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Inspection */}
      <section className="py-24 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Evidence Inspection</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              During a simulation, operators interact with evidence panels to inspect real operational data — logs, timelines, alerts, tickets, and topology. Evidence is revealed progressively as the investigation deepens, just like a real P1 incident.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Log Viewer", "Incident Timeline", "Alert Panel", "Ticket History", "Topology Map", "Metric Graphs"].map((panel, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-border-color flex items-center gap-3">
                  <Search className="w-5 h-5 text-accent-1 shrink-0" />
                  <span className="text-gray-300 font-medium">{panel}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Branching */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Decision Branching</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The simulation engine supports full decision branching. Different operator choices lead to different outcomes. Choosing to restart a service before checking logs produces a different simulation path than correlating metrics first. Wrong paths are tracked, scored, and reviewed in the debrief.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/50 p-8 rounded-xl border border-border-color">
              <div className="text-accent-2 font-mono text-sm font-bold mb-6">Decision Tree Example</div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <GitBranch className="w-4 h-4 text-accent-2" />
                  <span>Alert received → <span className="text-white">Check metrics first</span> or <span className="text-red-400">Restart immediately</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 pl-8">
                  <ArrowRight className="w-4 h-4 text-accent-3" />
                  <span>Check metrics → <span className="text-white">Correlate DB latency spike</span> → Correct path ✓</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 pl-8">
                  <ArrowRight className="w-4 h-4 text-red-400" />
                  <span>Restart immediately → <span className="text-red-400">Issue recurs in 5 min</span> → Wrong path tracked</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Debrief Integration */}
      <section className="py-24 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Debrief Integration</h2>
            <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Every simulation session produces a structured debrief. Missed signals, wrong assumptions, evidence usage, escalation timing, and recovery quality are all captured and replayed for organizational learning.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Session Replay", "Missed Signals", "Decision Timeline", "Evidence Usage Map", "Scoring Breakdown", "Recommended Drills"].map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-accent-2/10 border border-accent-2/20 rounded-full text-sm text-accent-2 font-medium">{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturePagination currentSlug="operational-simulation-runtime" />
      <Footer />
    </main>
  );
}
