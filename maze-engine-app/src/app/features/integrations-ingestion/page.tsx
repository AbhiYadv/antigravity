"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  Network, Cloud, Database, FileText, AlertTriangle,
  CheckCircle, ArrowRight, Settings, Plug, Globe,
  Terminal, BookOpen, Ticket
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const architectureFlow = [
  "Connector", "Transport Layer", "Canonical Normalizer",
  "Schema Validator", "Evidence Pipeline"
];

const sources = [
  { icon: Cloud, name: "AWS CloudWatch", desc: "Logs, metrics, alarms, and CloudTrail events", category: "Monitoring" },
  { icon: Database, name: "Datadog", desc: "APM traces, logs, infrastructure metrics, and monitors", category: "Monitoring" },
  { icon: Globe, name: "New Relic", desc: "Application performance, distributed traces, and error analytics", category: "Monitoring" },
  { icon: AlertTriangle, name: "PagerDuty", desc: "Incident alerts, escalation policies, and on-call schedules", category: "Alerting" },
  { icon: Ticket, name: "Jira / Atlassian", desc: "Incident tickets, post-mortems, and change requests", category: "Ticketing" },
  { icon: Settings, name: "ServiceNow", desc: "ITSM incidents, change records, and CMDB topology", category: "Ticketing" },
  { icon: Terminal, name: "Application Logs", desc: "Structured and unstructured app logs via Fluentd, Logstash, or direct API", category: "Logs" },
  { icon: BookOpen, name: "Runbooks & SOPs", desc: "Operational procedures, troubleshooting guides, and escalation docs", category: "Docs" },
  { icon: FileText, name: "RCA Documents", desc: "Root cause analysis reports, post-incident reviews, and retrospectives", category: "Docs" },
  { icon: Plug, name: "Custom APIs", desc: "Any REST or webhook-based source via the MazeLabs connector SDK", category: "Custom" }
];

export default function IntegrationsIngestionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-1 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Data Layer</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Integrations &amp; Ingestion
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Connect operational systems and transform fragmented evidence into structured incident context. Ingest from monitoring, ticketing, alerting, logs, and documentation sources.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-20 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold mb-12">Ingestion Architecture</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold max-w-4xl mx-auto">
              {architectureFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-4 py-3 rounded-lg shadow-lg border ${idx === architectureFlow.length - 1 ? 'bg-accent-1/10 border-accent-1/40 text-accent-1' : 'bg-bg-alt border-border-color text-gray-300'}`}>
                    {step}
                  </div>
                  {idx < architectureFlow.length - 1 && <span className="text-accent-1 opacity-50">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Supported Sources */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Supported Sources</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              MazeLabs ingests from the tools your team already uses. Each connector normalizes vendor-specific formats into a canonical event schema before evidence compression.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="glass-card p-5 rounded-xl border border-border-color hover:border-accent-1/40 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <source.icon className="w-6 h-6 text-accent-1 shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-sm">{source.name}</h3>
                      <span className="text-xs text-gray-500 font-mono">{source.category}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{source.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Connector Details */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-8">Connector Configuration</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Each connector is configured using secure IAM roles or encrypted API tokens. Data is pulled via an isolated transport layer, normalized into the canonical schema, and immediately passed to the Evidence Compression Engine.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/60 p-6 rounded-xl border border-border-color font-mono text-sm">
              <div className="text-accent-1 mb-3 font-bold">Example: Connect CloudWatch</div>
              <pre className="text-gray-400 overflow-x-auto">
{`curl -X POST https://api.mazelabs.com/v1/connectors/sync \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "connector": "aws-cloudwatch",
    "config": {
      "region": "us-east-1",
      "log_groups": ["/ecs/payments", "/ecs/gateway"],
      "time_range": "last_4h",
      "iam_role_arn": "arn:aws:iam::role/MazeLabsIngestion"
    }
  }'`}
              </pre>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 bg-black/60 p-6 rounded-xl border border-border-color font-mono text-sm">
              <div className="text-accent-3 mb-3 font-bold">Canonical Event Output</div>
              <pre className="text-gray-400 overflow-x-auto">
{`{
  "source": "cloudwatch",
  "type": "log_event",
  "service": "payments-api",
  "severity": "error",
  "timestamp_unix": 1778385060,
  "payload": {
    "message": "Connection pool exhausted",
    "active_connections": 150,
    "max_pool_size": 100
  },
  "provenance": {
    "log_group": "/ecs/payments",
    "region": "us-east-1"
  }
}`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturePagination currentSlug="integrations-ingestion" />
      <Footer />
    </main>
  );
}
