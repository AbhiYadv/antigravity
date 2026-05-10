"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Database, Lock, FileText, Activity, Shield, 
  Network, Server, Cpu, Users, Target, ShieldCheck, 
  PlayCircle, Award, TerminalSquare, AlertTriangle, MessageSquare, ListChecks
} from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

// --- Utility Animation Wrapper ---
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// --- Components ---

// --- Components ---

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-block px-4 py-1 rounded-full border border-border-color bg-white/5 text-accent-1 text-sm font-semibold tracking-wider uppercase mb-6">
            MazeLabs Engine Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            From noisy operations data to <span className="text-gradient">replayable incident simulations.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            MazeLabs turns raw logs, tickets, RCAs, runbooks, and system behavior into compressed evidence, masked AI context, deterministic simulation state, actor-driven war rooms, and measurable readiness scores.
          </p>
        </Reveal>

        <motion.div 
          className="mt-16 overflow-x-auto py-8 hide-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-4 min-w-max mx-auto justify-center">
            {[
              { icon: FileText, label: "Raw Inputs", color: "text-gray-400" },
              { icon: Lock, label: "Vault", color: "text-gray-300" },
              { icon: Cpu, label: "Compressor", color: "text-accent-1" },
              { icon: Shield, label: "Masking", color: "text-accent-2" },
              { icon: Network, label: "EvidenceTree", color: "text-accent-3" },
              { icon: PlayCircle, label: "Simulation", color: "text-white" },
              { icon: Users, label: "War Room", color: "text-accent-1" },
              { icon: Award, label: "Scoring", color: "text-accent-2" },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl border border-border-color bg-bg-alt flex items-center justify-center shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <span className="text-xs font-mono text-gray-400">{step.label}</span>
                </motion.div>
                {idx < 7 && (
                  <motion.div variants={itemVariants} className="w-8 h-[2px] bg-border-color relative">
                    <div className="absolute top-0 left-0 h-full bg-accent-1 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IngestLayer() {
  return (
    <section className="py-24 bg-bg-alt/50 border-y border-border-color">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-accent-2 font-mono text-sm mb-4">STEP 1</div>
            <h2 className="text-3xl font-bold mb-6">Ingest real operational context.</h2>
            <p className="text-gray-400 mb-8">
              MazeLabs starts with the operational data teams already have: runbooks, SOPs, RCAs, incident tickets, CloudWatch logs, application logs, topology notes, alert payloads, and historical troubleshooting records.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Runbooks & SOPs', 'RCA Documents', 'CloudWatch Logs', 'App Error Traces', 'Incident Tickets', 'Alert Payloads'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-2"></div>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-card rounded-xl p-6 font-mono text-xs text-gray-400 relative overflow-hidden h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-alt/90 z-10"></div>
              <motion.div
                animate={{ y: [-200, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="space-y-3 opacity-50"
              >
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={i % 3 === 0 ? "text-red-400" : i % 5 === 0 ? "text-yellow-400" : ""}>
                    {i % 3 === 0 ? `ERROR payment-api timeout upstream=orders-db duration=${8200 + i * 10}ms` : 
                     i % 5 === 0 ? `WARN replica_lag seconds=${18 + i} cluster=orders-prod` :
                     `INFO request_id=${1000 + i} status=200 path=/health`}
                  </div>
                ))}
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 border border-dashed border-accent-2 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <Database className="w-12 h-12 text-accent-2" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function VaultLayer() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="w-[300px] h-[350px] border-2 border-border-color rounded-2xl bg-bg-alt flex flex-col overflow-hidden relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="bg-border-color px-4 py-2 flex items-center justify-between border-b border-border-color/50">
                  <span className="font-mono text-xs font-bold flex items-center gap-2"><Lock className="w-3 h-3 text-accent-3"/> SECURE VAULT</span>
                </div>
                <div className="flex-1 p-6 space-y-4 opacity-50 blur-[2px]">
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6"></div>
                  <div className="h-20 bg-white/5 rounded w-full mt-4"></div>
                </div>
              </div>
              <motion.div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[250px] glass-card rounded-xl border-accent-1/30 p-4 z-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 50, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-mono text-accent-1 mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4"/> EVIDENCE EXTRACT
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-accent-1/20 rounded w-full"></div>
                  <div className="h-2 bg-accent-1/20 rounded w-4/5"></div>
                  <div className="h-2 bg-accent-1/20 rounded w-full"></div>
                </div>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="order-1 md:order-2">
            <div className="text-gray-500 font-mono text-sm mb-4">STEP 2</div>
            <h2 className="text-3xl font-bold mb-6">Raw data stays in the vault.</h2>
            <p className="text-gray-400 mb-6">
              Raw operational documents and logs are stored inside a controlled MazeLabs vault. The vault keeps source material, metadata, provenance, and extracted evidence separate. 
            </p>
            <p className="text-gray-300 font-medium">
              The AI layer does not need unrestricted access to raw sensitive documents.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Tracks source provenance',
                'Separates raw data from AI-consumable evidence',
                'Keeps sensitive operational context controlled'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <ShieldCheck className="w-5 h-5 text-accent-3" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LogCompressor() {
  return (
    <section className="py-24 bg-bg-alt/30 border-y border-border-color">
      <div className="container mx-auto px-8 text-center mb-16">
        <Reveal>
          <div className="text-accent-1 font-mono text-sm mb-4">STEP 3</div>
          <h2 className="text-3xl font-bold mb-6">Compress telemetry into operational evidence.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Generic LLMs struggle with high-volume logs because they are repetitive, noisy, and full of sensitive identifiers. MazeLabs uses a Log Compressor to turn raw telemetry into structured incident signals.
          </p>
          <div className="inline-block mt-6 px-6 py-3 rounded-lg border border-accent-1/30 bg-accent-1/5 text-accent-1 font-medium">
            Raw logs are not the product. Compressed operational evidence is the product.
          </div>
        </Reveal>
      </div>
      
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="glass-card rounded-xl border-red-500/20 overflow-hidden flex flex-col h-[400px]">
              <div className="bg-red-500/10 px-4 py-3 border-b border-red-500/20 font-mono text-sm text-red-400 font-bold flex justify-between">
                <span>BEFORE</span>
                <span>10,000 lines</span>
              </div>
              <div className="p-4 font-mono text-xs text-gray-500 space-y-1 overflow-hidden flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-alt z-10"></div>
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={i % 2 === 0 ? "text-red-400/70" : ""}>
                    [ERROR] {10 + Math.floor(i/3)}:04:{String(i%60).padStart(2, '0')} db_conn timeout db-01a req_id={8821+i} ip=10.4.2.{i}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="glass-card rounded-xl border-accent-3/30 overflow-hidden flex flex-col h-[400px] shadow-[0_0_30px_rgba(0,255,135,0.1)]">
              <div className="bg-accent-3/10 px-4 py-3 border-b border-accent-3/20 font-mono text-sm text-accent-3 font-bold flex justify-between">
                <span>AFTER: EVIDENCE PACK</span>
                <span>8 signals</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center gap-4">
                <motion.div 
                  className="p-4 rounded-lg bg-bg-alt border border-border-color"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-xs text-gray-400 mb-1 font-mono">CLUSTER: TIMEOUT_SPIKE</div>
                  <div className="font-bold text-white mb-2">Database Connection Timeouts</div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="text-gray-400">Entity: <span className="text-accent-3">db-01a</span></div>
                    <div className="text-gray-400">Window: <span className="text-white">10:04:01 - 10:04:15</span></div>
                    <div className="text-gray-400">Events: <span className="text-red-400">14,000+</span></div>
                    <div className="text-gray-400">Confidence: <span className="text-accent-3">0.95</span></div>
                  </div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-bg-alt border border-border-color opacity-50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-xs text-gray-400 mb-1 font-mono">CLUSTER: CASCADING_IMPACT</div>
                  <div className="font-bold text-white">API 500 Responses</div>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MaskingLayer() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <Reveal>
          <div className="text-accent-2 font-mono text-sm mb-4">STEP 4</div>
          <h2 className="text-3xl font-bold mb-6">Mask sensitive context before AI reasoning.</h2>
          <p className="text-gray-400 mb-12">
            Before evidence is passed to AI agents or model providers, MazeLabs applies masking and redaction policies. The AI does not need the raw secret to understand that a timeout occurred.
          </p>
          
          <div className="text-left bg-bg-alt border border-border-color rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Shield className="w-32 h-32 text-accent-2" />
            </div>
            <div className="font-mono space-y-6 relative z-10">
              <div>
                <div className="text-xs text-gray-500 mb-2">RAW LOG (VAULT ONLY)</div>
                <div className="text-sm text-gray-300 break-all bg-black/50 p-4 rounded-lg border border-border-color/50">
                  customer_id=<span className="text-red-400">918273</span> user_email=<span className="text-red-400">alice@company.com</span> host=<span className="text-red-400">prod-db-17</span> ip=<span className="text-red-400">10.2.4.8</span> token=<span className="text-red-400">sk_live_xxx</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-accent-2"></div>
              </div>
              <div>
                <div className="text-xs text-accent-2 mb-2">MASKED EVIDENCE (AI VISIBLE)</div>
                <div className="text-sm text-accent-1 break-all bg-accent-2/10 p-4 rounded-lg border border-accent-2/30">
                  customer_id=[CUSTOMER_ID] user_email=[EMAIL] host=[HOST] ip=[PRIVATE_IP] token=[SECRET]
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EvidenceTreeBuilder() {
  const nodes = [
    { type: 'Incident', label: 'API Latency Spike', x: 50, y: 0, color: 'border-white text-white' },
    { type: 'Symptom', label: '5xx Increase', x: 20, y: 80, color: 'border-red-400 text-red-400' },
    { type: 'Signal', label: 'db_conn timeout', x: 80, y: 80, color: 'border-accent-1 text-accent-1' },
    { type: 'Hypothesis', label: 'DB Saturation', x: 50, y: 160, color: 'border-accent-2 text-accent-2' },
    { type: 'Action', label: 'Scale Pool / Failover', x: 50, y: 240, color: 'border-accent-3 text-accent-3' },
  ];

  return (
    <section className="py-24 bg-bg-alt/50 border-y border-border-color">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-accent-3 font-mono text-sm mb-4">STEP 5 & 6</div>
            <h2 className="text-3xl font-bold mb-6">Build an EvidenceTree from messy inputs.</h2>
            <p className="text-gray-400 mb-6">
              MazeLabs combines compressed telemetry, incident tickets, RCAs, and runbooks into an EvidenceTree. This graph organizes the incident into symptoms, signals, checks, hypotheses, and valid actions.
            </p>
            <p className="font-semibold text-white mb-6">
              This makes simulations replayable and auditable. Instead of relying on uncontrolled LLM memory, the runtime uses structured evidence packs and known state transitions.
            </p>
            <div className="p-4 bg-bg-alt rounded-lg border border-border-color inline-block">
              <span className="text-sm font-mono text-gray-400">1 Ticket &rarr; <span className="text-accent-1">20 Scenario Variants</span></span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="relative h-[350px] bg-black/40 border border-border-color rounded-xl p-8 flex items-center justify-center">
              {/* Simplified static representation of tree for layout */}
              <div className="flex flex-col items-center gap-6">
                <div className={`px-4 py-2 rounded-lg border-2 border-white text-white font-mono text-sm font-bold bg-bg-alt`}>
                  Incident: API Latency
                </div>
                <div className="w-px h-6 bg-border-color"></div>
                <div className="flex gap-12">
                  <div className={`px-4 py-2 rounded-lg border-2 border-red-400 text-red-400 font-mono text-xs bg-bg-alt`}>
                    Symptom: 5xx Spike
                  </div>
                  <div className={`px-4 py-2 rounded-lg border-2 border-accent-1 text-accent-1 font-mono text-xs bg-bg-alt`}>
                    Signal: Timeout
                  </div>
                </div>
                <div className="w-px h-6 bg-border-color"></div>
                <div className={`px-4 py-2 rounded-lg border-2 border-accent-2 text-accent-2 font-mono text-sm bg-bg-alt`}>
                  Hypothesis: DB Saturation
                </div>
                <div className="w-px h-6 bg-border-color"></div>
                <div className={`px-4 py-2 rounded-lg border-2 border-accent-3 text-accent-3 font-mono text-sm font-bold bg-bg-alt`}>
                  Action: Failover
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ActorEngine() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8 max-w-5xl">
        <Reveal className="text-center mb-16">
          <div className="text-accent-1 font-mono text-sm mb-4">STEP 7 & 8</div>
          <h2 className="text-3xl font-bold mb-6">Realistic actor behavior driven by state.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Simulations include actors like SREs, DBREs, and Stakeholders. They do not randomly hallucinate; their behavior is tightly bounded by scenario state, hidden evidence, and time pressure.
          </p>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="glass-card rounded-xl p-6 h-full border-t-4 border-t-accent-2">
              <h3 className="font-bold mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-accent-2"/> Adversarial Reviewer</h3>
              <p className="text-sm text-gray-400 mb-4">Challenges weak assumptions and unsafe actions during the incident.</p>
              <div className="bg-black/50 p-3 rounded text-sm text-gray-300 font-mono border border-border-color">
                "You are treating symptoms without validating the database signal. Check replica lag first."
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-card rounded-xl p-6 h-full border-t-4 border-t-accent-1">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-accent-1"/> Customer Stakeholder</h3>
              <p className="text-sm text-gray-400 mb-4">Brings business impact urgency when time elapsed exceeds thresholds.</p>
              <div className="bg-black/50 p-3 rounded text-sm text-gray-300 font-mono border border-border-color">
                "Customer checkouts are still failing. What is the recovery ETA? We need an update."
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WarRoomAndScoring() {
  return (
    <section className="py-24 bg-bg-alt/50 border-y border-border-color">
      <div className="container mx-auto px-8">
        <Reveal className="text-center mb-16">
          <div className="text-accent-3 font-mono text-sm mb-4">STEP 9, 10 & 11</div>
          <h2 className="text-3xl font-bold mb-6">P1 War Room, Scoring & Debrief.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The War Room is an operational decision surface, not just a chat screen. Every action is evaluated, scored, and mapped to a replayable timeline for post-incident learning.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="glass-card rounded-xl p-6 h-full">
              <TerminalSquare className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-bold mb-2">Agent-Driven P1 War Room</h3>
              <p className="text-sm text-gray-400">Presents evidence, transcript, stakeholder pressure, and action ledgers in one surface.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-card rounded-xl p-6 h-full border-accent-3/30 border">
              <ListChecks className="w-8 h-8 text-accent-3 mb-4" />
              <h3 className="text-lg font-bold mb-2">Readiness Scoring</h3>
              <ul className="text-sm text-gray-400 space-y-2 mt-4 font-mono">
                <li className="flex justify-between"><span>Investigation:</span> <span className="text-accent-3">+12</span></li>
                <li className="flex justify-between"><span>Ignored Signal:</span> <span className="text-red-400">-8</span></li>
                <li className="flex justify-between"><span>Unsafe Failover:</span> <span className="text-red-400">-15</span></li>
                <li className="flex justify-between"><span>Valid Recovery:</span> <span className="text-accent-3">+10</span></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="glass-card rounded-xl p-6 h-full">
              <Activity className="w-8 h-8 text-accent-1 mb-4" />
              <h3 className="text-lg font-bold mb-2">Debrief & Replay</h3>
              <p className="text-sm text-gray-400">Generates a structured debrief showing what evidence was missed, correct paths, and team capability gaps.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StickyPipeline() {
  const steps = [
    { title: "1. Ingest", desc: "Runbooks, RCAs, tickets, CloudWatch logs, application logs, topology notes" },
    { title: "2. Vault", desc: "Store raw operational context under customer control" },
    { title: "3. Compress", desc: "Deduplicate logs, cluster errors, extract entities, build timelines, rank signals" },
    { title: "4. Mask", desc: "Redact secrets, IPs, hostnames, customer IDs, emails, tokens, internal URLs" },
    { title: "5. Evidence", desc: "Build source-linked EvidenceTrees and bounded EvidencePacks" },
    { title: "6. Simulate", desc: "Create scenario phases, hidden evidence, valid checks, wrong paths, recovery criteria" },
    { title: "7. Actors", desc: "Drive incident commander, SRE, DBRE, support, customer, coach, and reviewer behavior from scenario state" },
    { title: "8. Bridge", desc: "Run P1/P0 incident drills with transcript, evidence, action ledger, stakeholder pressure, and timeline" },
    { title: "9. Score", desc: "Measure evidence use, decisions, communication, escalation, recovery, and validation" },
    { title: "10. Debrief", desc: "Replay missed signals, wrong assumptions, recovery quality, and follow-up labs" }
  ];

  return (
    <section className="relative bg-bg-alt/20">
      <div className="container mx-auto px-8 relative">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side: Sticky Intro */}
          <div className="py-24 md:sticky top-0 md:h-screen flex flex-col justify-center">
            <Reveal>
              <h2 className="text-4xl font-bold mb-6">Why this architecture matters.</h2>
              <p className="text-lg text-gray-400 max-w-xl mb-8">
                Most teams already have the knowledge needed to train better incident responders. Generic LLMs cannot safely reason over raw context. MazeLabs creates a controlled middle layer to compress, mask, and structure evidence before simulation.
              </p>
              <div className="p-6 bg-bg-alt border border-border-color rounded-xl font-mono text-sm text-accent-1 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                This end-to-end engine turns existing operational history into reusable readiness infrastructure.
              </div>
            </Reveal>
          </div>
          
          {/* Right Side: Scrollable Pipeline */}
          <div className="py-24 space-y-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-10 md:pl-16 py-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                transition={{ duration: 0.5 }}
              >
                {/* Vertical Line connecting steps */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[15px] top-[40px] bottom-[-40px] w-px bg-border-color"></div>
                )}
                
                {/* Step Node */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full border-2 border-accent-1 bg-background flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-accent-1"></div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-accent-1 transition-all duration-300 hover:bg-accent-1/5 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-t from-bg-alt/80 to-background border-t border-border-color">
      <div className="container mx-auto px-8 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Turn your incident history into a simulation engine.</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            MazeLabs converts the logs, tickets, runbooks, and RCAs you already have into private, evidence-driven war-room simulations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/index.html#contact" className="px-8 py-3 rounded-lg bg-white text-background font-bold hover:bg-accent-1 transition-colors">Request Early Access</a>
            <Link href="/features" className="px-8 py-3 rounded-lg bg-white/5 border border-border-color text-white font-bold hover:bg-white/10 transition-colors">Explore Features</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



export default function EnginePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-1/20 selection:text-white">
      <NavBar />
      <Hero />
      <IngestLayer />
      <VaultLayer />
      <LogCompressor />
      <MaskingLayer />
      <EvidenceTreeBuilder />
      <ActorEngine />
      <WarRoomAndScoring />
      <StickyPipeline />
      <CTA />
      <Footer />
    </main>
  );
}
