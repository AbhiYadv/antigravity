"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import { 
  Database, Network, Shield, Cpu, Clock, Search, Link2, 
  CheckCircle, FileOutput, Server, FileText, AlertTriangle
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function EvidenceCompressionEnginePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />
      
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,255,135,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-3 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Flagship Engine</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Evidence Compression Engine
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Turn noisy logs, tickets, alerts, RCAs, and runbooks into compact, redacted, replayable EvidencePacks for simulation and safe AI reasoning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A. Problem */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">The Problem: Raw Data is Too Noisy for Reasoning</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Token Explosion", desc: "Dumping millions of log lines into an LLM context window causes hallucinations and massive costs." },
              { icon: AlertTriangle, title: "Repeated Stack Traces", desc: "400 instances of the exact same connection timeout drown out the root cause signal." },
              { icon: Shield, title: "Unsafe Secrets", desc: "Raw data contains live API keys, customer PII, and internal infrastructure topology." },
              { icon: Clock, title: "Conflicting Timestamps", desc: "UTC, local time, and mixed format events make incident correlation impossible." },
              { icon: Network, title: "Fragmented Systems", desc: "Tickets in Jira, logs in Datadog, and runbooks in Notion cannot be reasoned over natively." },
              { icon: FileText, title: "Weak Provenance", desc: "AI chatbot answers provide no trail back to the source log or original SOP." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass-card p-6 rounded-xl border border-border-color h-full">
                  <item.icon className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* B. Technical Workflow Visual */}
      <section className="py-24">
        <div className="container mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-16">The Evidence Pipeline</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold max-w-5xl mx-auto">
              {['Raw Sources', 'Connector Layer', 'Canonical Normalization', 'Redaction', 'Deduplication', 'Semantic Clustering', 'Timeline Correlation', 'Evidence Scoring', 'EvidencePack Builder', 'Simulation Runtime'].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-3 bg-bg-alt border border-border-color rounded-lg shadow-lg text-gray-300">
                    {step}
                  </div>
                  {idx < arr.length - 1 && <span className="text-accent-3 opacity-50">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* C. Stage Details */}
      <section className="py-24 bg-bg-alt/30 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-4xl space-y-32">
          
          {/* Stage 1 & 2 */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-3/20 flex items-center justify-center text-accent-3 font-mono font-bold">1</div>
              <h3 className="text-2xl font-bold">Multi-source Ingestion & Canonical Normalization</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Vendor-native formats (CloudWatch, Datadog, ServiceNow, raw JSON) are converted into a common canonical event schema before any reasoning takes place.
            </p>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-black/50 p-4 rounded-lg border border-border-color">
                <div className="text-red-400 mb-2">RAW LOG (Vendor Specific)</div>
                <pre className="text-gray-500 overflow-x-auto">
{`{
  "timestamp": "2026-05-10T02:11:00Z",
  "message": "DB timeout after 30s",
  "req_id": "8x991a"
}`}
                </pre>
              </div>
              <div className="bg-accent-3/5 p-4 rounded-lg border border-accent-3/30">
                <div className="text-accent-3 mb-2">CANONICAL EVENT</div>
                <pre className="text-gray-300 overflow-x-auto">
{`{
  "source": "cloudwatch",
  "type": "log_event",
  "service": "payments-db",
  "severity": "critical",
  "timestamp": 1778385060,
  "payload": { "timeout": 30 }
}`}
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Stage 3 */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-3/20 flex items-center justify-center text-accent-3 font-mono font-bold">3</div>
              <h3 className="text-2xl font-bold">Redaction Engine</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Secrets and PII are masked before AI reasoning. We detect API keys, JWTs, passwords, emails, internal IPs, account IDs, and DB connection strings.
            </p>
            <div className="bg-bg-alt p-6 rounded-lg border border-border-color font-mono text-sm">
              <span className="text-gray-500">Connecting to db://</span><span className="text-red-400 line-through">admin:superSecret99@10.4.2.8</span><br/>
              <span className="text-accent-3">&rarr; Connecting to db://[REDACTED_CREDS]@[MASKED_IP]</span>
            </div>
          </Reveal>

          {/* Stage 4 & 5 */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-3/20 flex items-center justify-center text-accent-3 font-mono font-bold">4</div>
              <h3 className="text-2xl font-bold">Deduplication & Semantic Clustering</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              482 repeated "connection refused" lines are collapsed into a single semantic cluster indicating the pattern, count, and active window. "DB timeout", "SQL timeout", and "connection timeout" are grouped under <span className="text-accent-3 font-mono">DATABASE_TIMEOUT</span>.
            </p>
          </Reveal>

          {/* Stage 8 & 9 */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-3/20 flex items-center justify-center text-accent-3 font-mono font-bold">9</div>
              <h3 className="text-2xl font-bold">EvidencePack Output</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              After normalizing timelines, correlating cross-system events, and scoring causal relevance, the engine produces an immutable EvidencePack.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent-3" /> Compressed incident timeline</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent-3" /> Causal graph of failures</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent-3" /> Redaction metadata map</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent-3" /> Verified source provenance</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-accent-3" /> Simulation-ready deterministic context</li>
            </ul>
          </Reveal>

        </div>
      </section>

      {/* D. Why it matters */}
      <section className="py-24 border-t border-border-color">
        <div className="container mx-auto px-8 text-center max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Why Evidence Compression Matters</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="glass-card p-8 rounded-xl border border-red-500/20 text-left">
                <div className="text-red-400 font-mono text-sm font-bold mb-4">BEFORE MAZELABS</div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5"/> 500MB of noisy raw logs</li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5"/> Fragmented tickets and chats</li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5"/> Live secrets exposed to AI models</li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5"/> Unpredictable AI hallucinations</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-card p-8 rounded-xl border border-accent-3/50 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="w-24 h-24 text-accent-3"/></div>
                <div className="text-accent-3 font-mono text-sm font-bold mb-4">AFTER MAZELABS</div>
                <ul className="space-y-4 text-gray-300 relative z-10">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-3 shrink-0 mt-0.5"/> 8MB compressed EvidencePack</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-3 shrink-0 mt-0.5"/> Fully redacted and sanitized</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-3 shrink-0 mt-0.5"/> Bounded context for AI reasoning</li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-3 shrink-0 mt-0.5"/> Deterministic simulation replay</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* E. Enterprise Trust */}
      <section className="py-24 bg-bg-alt/50 border-t border-border-color">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Technical Trust</h2>
            <p className="text-gray-400 mb-12">
              MazeLabs does not engage in uncontrolled AI scraping. The Evidence Compression Engine guarantees that the exact same operational inputs will consistently produce the exact same deterministic EvidencePack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-black/50 border border-border-color rounded-full text-sm text-gray-300">Deterministic Output</span>
              <span className="px-4 py-2 bg-black/50 border border-border-color rounded-full text-sm text-gray-300">Strict Audit Trails</span>
              <span className="px-4 py-2 bg-black/50 border border-border-color rounded-full text-sm text-gray-300">Source Provenance</span>
              <span className="px-4 py-2 bg-black/50 border border-border-color rounded-full text-sm text-gray-300">Redaction-First Policy</span>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturePagination currentSlug="evidence-compression-engine" />
      <Footer />
    </main>
  );
}
