"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  FileText, BarChart3, Clock, Target, Users,
  CheckCircle, AlertTriangle, TrendingUp, MessageSquare,
  Search, ArrowRight, Award, GitBranch, Rewind
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const debriefSections = [
  {
    icon: FileText,
    title: "Session Summary",
    desc: "Automated narrative summary of the simulation session covering incident type, duration, resolution path, and key decision points."
  },
  {
    icon: Rewind,
    title: "Timeline Replay",
    desc: "Step-by-step chronological replay of the entire simulation showing operator actions, evidence inspections, and state transitions."
  },
  {
    icon: AlertTriangle,
    title: "Mistakes Analysis",
    desc: "Identify wrong paths taken, premature escalations, missed evidence, and incorrect hypotheses with explanations of why they were wrong."
  },
  {
    icon: Search,
    title: "Missed Evidence",
    desc: "Highlight evidence that was available but not inspected, and signals that were present but overlooked during investigation."
  },
  {
    icon: ArrowRight,
    title: "Escalation Review",
    desc: "Evaluate escalation timing, severity accuracy, stakeholder communication quality, and whether the right people were notified at the right time."
  },
  {
    icon: Users,
    title: "Team Readiness Gaps",
    desc: "Identify patterns across team members — common weak areas, role-specific skill gaps, and areas where the team consistently underperforms."
  },
  {
    icon: Target,
    title: "Recommendations",
    desc: "Auto-generated recommendations for follow-up drills, training focus areas, process improvements, and runbook updates based on simulation results."
  },
  {
    icon: BarChart3,
    title: "Leadership Reporting",
    desc: "Executive-ready reports showing team readiness trends, simulation frequency, skill development progress, and organizational risk areas."
  }
];

export default function DebriefCapabilityReportsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,255,135,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-3 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Learning Engine</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Debrief &amp; Capability Reports
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Turn every simulation into measurable organizational learning. Generate structured debriefs, identify readiness gaps, and provide leadership with actionable capability reports.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Debrief Sections */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Debrief Components</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Every completed simulation produces a comprehensive debrief that covers the full lifecycle of the incident response — from initial detection through resolution and retrospective.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {debriefSections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-card p-6 rounded-xl border border-border-color h-full flex items-start gap-4 hover:border-accent-3/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent-3/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-5 h-5 text-accent-3" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{section.title}</h3>
                    <p className="text-sm text-gray-400">{section.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Debrief Report */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Sample Debrief Report</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/60 rounded-xl border border-border-color overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-color bg-bg-alt/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-gray-500 font-mono">debrief://inc-2026-0510-db-timeout</span>
              </div>
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">INCIDENT SIMULATION</div>
                    <div className="text-white font-bold text-lg">Database Connection Pool Exhaustion</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-mono mb-1">READINESS SCORE</div>
                    <div className="text-3xl font-bold text-accent-3">78<span className="text-sm text-gray-500">/100</span></div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Detection Time", value: "3m 12s", status: "good" },
                    { label: "Resolution Time", value: "22m 45s", status: "ok" },
                    { label: "Evidence Used", value: "8/12", status: "good" },
                    { label: "Wrong Paths", value: "2", status: "warn" }
                  ].map((metric, idx) => (
                    <div key={idx} className="bg-bg-alt/50 p-3 rounded-lg text-center">
                      <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                      <div className={`font-bold font-mono ${metric.status === 'good' ? 'text-accent-3' : metric.status === 'warn' ? 'text-yellow-400' : 'text-white'}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Key Findings */}
                <div>
                  <div className="text-xs text-gray-500 font-mono mb-3">KEY FINDINGS</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-accent-3">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Correctly identified connection pool exhaustion as root cause</span>
                    </div>
                    <div className="flex items-start gap-2 text-accent-3">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Appropriate escalation timing to database team</span>
                    </div>
                    <div className="flex items-start gap-2 text-yellow-400">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Initially blamed network — 4 minutes spent on wrong path</span>
                    </div>
                    <div className="flex items-start gap-2 text-red-400">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Missed deployment manifest change that caused config drift</span>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="border-t border-border-color pt-4">
                  <div className="text-xs text-gray-500 font-mono mb-2">RECOMMENDED FOLLOW-UP</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent-1/10 border border-accent-1/20 rounded text-xs text-accent-1 font-mono">Red Herring Recovery Drill</span>
                    <span className="px-3 py-1 bg-accent-2/10 border border-accent-2/20 rounded text-xs text-accent-2 font-mono">Config Drift Detection Lab</span>
                    <span className="px-3 py-1 bg-accent-3/10 border border-accent-3/20 rounded text-xs text-accent-3 font-mono">Evidence Inspection Practice</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership Reporting */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Leadership Reporting</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              MazeLabs generates executive-ready capability reports that help engineering leaders understand team readiness across incident types, track improvement over time, and identify organizational risk areas.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, label: "Readiness Trends", desc: "Week-over-week and month-over-month readiness score trends across teams and incident categories." },
                { icon: Users, label: "Team Comparisons", desc: "Compare readiness across SRE, DevOps, DBA, and support teams to identify organizational gaps." },
                { icon: Award, label: "Certification Tracking", desc: "Track which team members have completed required simulation scenarios and readiness thresholds." },
                { icon: GitBranch, label: "Risk Heatmaps", desc: "Visualize which incident types and operational areas have the lowest team readiness scores." }
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl border border-border-color">
                  <item.icon className="w-6 h-6 text-accent-3 mb-3" />
                  <h3 className="text-white font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturePagination currentSlug="debrief-capability-reports" />
      <Footer />
    </main>
  );
}
