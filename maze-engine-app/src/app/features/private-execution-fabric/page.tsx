"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  Shield, Cloud, Server, Lock, Eye, Key,
  CheckCircle, Database, Globe, Settings, HardDrive
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const deploymentModels = [
  {
    name: "Cloud SaaS",
    status: "Available",
    desc: "Fully managed MazeLabs deployment. Customer data is encrypted at rest and in transit. Strict tenant isolation with no cross-tenant data access.",
    features: ["SOC 2 compliance path", "Tenant-isolated storage", "99.9% uptime SLA", "Automatic updates"],
    color: "border-accent-1/50",
    badge: "bg-accent-1/10 text-accent-1"
  },
  {
    name: "Private VPC",
    status: "Available",
    desc: "MazeLabs deployed within the customer's AWS, GCP, or Azure VPC. No data leaves the customer's network boundary. Customer manages encryption keys.",
    features: ["Customer-managed KMS", "VPC-native deployment", "Private endpoints only", "Customer-controlled networking"],
    color: "border-accent-2/50",
    badge: "bg-accent-2/10 text-accent-2"
  },
  {
    name: "Local Execution",
    status: "Available",
    desc: "Run MazeLabs entirely on-premises. Docker-based deployment with local model execution. Zero external network calls for simulation and scoring.",
    features: ["Docker / K8s deployment", "Local model execution", "Zero external calls", "Full data sovereignty"],
    color: "border-accent-3/50",
    badge: "bg-accent-3/10 text-accent-3"
  },
  {
    name: "Air-Gapped",
    status: "Planned",
    desc: "Fully disconnected deployment for regulated environments. Complete offline operation with manual update packages and local model inference.",
    features: ["No internet required", "Manual update packages", "Offline model inference", "ITAR / FedRAMP path"],
    color: "border-gray-500/50",
    badge: "bg-gray-500/10 text-gray-400"
  }
];

const privacyControls = [
  { icon: Database, label: "Customer-Owned Data", desc: "All operational evidence, simulation state, and scoring data is owned and controlled exclusively by the customer." },
  { icon: Lock, label: "Encryption at Rest & Transit", desc: "AES-256 encryption for stored data. TLS 1.3 for all data in transit. Customer-managed encryption keys in VPC and local deployments." },
  { icon: Eye, label: "Audit Trails", desc: "Every data access, model invocation, simulation event, and administrative action is logged with immutable audit trails." },
  { icon: Settings, label: "Model Routing Boundaries", desc: "Customers define which AI models can be used, which data can be sent to external APIs, and which operations must remain local." },
  { icon: Shield, label: "Redaction-First Pipeline", desc: "All evidence passes through the Redaction Engine before any AI reasoning. Secrets, PII, and internal infrastructure details are masked by default." }
];

export default function PrivateExecutionFabricPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(138,43,226,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-accent-2 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Infrastructure</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Private Execution Fabric
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Deploy MazeLabs within customer-controlled environments. From managed SaaS to private VPC to fully local execution — your data never leaves your boundary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deployment Comparison Table */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Deployment Models</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {deploymentModels.map((model, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className={`glass-card p-6 rounded-xl border ${model.color} h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${model.badge}`}>{model.status}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6 flex-1">{model.desc}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-accent-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Deployment Comparison</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-color">
                    <th className="text-left py-4 px-4 text-gray-400 font-mono text-xs uppercase">Capability</th>
                    <th className="text-center py-4 px-4 text-accent-1 font-mono text-xs uppercase">Cloud SaaS</th>
                    <th className="text-center py-4 px-4 text-accent-2 font-mono text-xs uppercase">Private VPC</th>
                    <th className="text-center py-4 px-4 text-accent-3 font-mono text-xs uppercase">Local</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-mono text-xs uppercase">Air-Gapped</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Data leaves customer network", "Yes (encrypted)", "No", "No", "No"],
                    ["Customer-managed encryption", "Optional", "Yes", "Yes", "Yes"],
                    ["External AI model calls", "Configurable", "Configurable", "Local only", "None"],
                    ["Automatic updates", "Yes", "Yes", "Manual", "Manual"],
                    ["Audit logging", "✓", "✓", "✓", "✓"],
                    ["Redaction engine", "✓", "✓", "✓", "✓"],
                    ["Offline operation", "No", "No", "Yes", "Yes"],
                    ["Compliance path", "SOC 2", "SOC 2, HIPAA", "SOC 2, HIPAA", "ITAR, FedRAMP"]
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border-color/50 hover:bg-bg-alt/30 transition-colors">
                      <td className="py-3 px-4 text-white font-medium">{row[0]}</td>
                      <td className="py-3 px-4 text-center text-gray-400">{row[1]}</td>
                      <td className="py-3 px-4 text-center text-gray-400">{row[2]}</td>
                      <td className="py-3 px-4 text-center text-gray-400">{row[3]}</td>
                      <td className="py-3 px-4 text-center text-gray-400">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Privacy Controls */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Privacy Controls</h2>
          </Reveal>
          <div className="space-y-6">
            {privacyControls.map((control, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-card p-6 rounded-xl border border-border-color flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-accent-2/10 flex items-center justify-center shrink-0">
                    <control.icon className="w-5 h-5 text-accent-2" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{control.label}</h3>
                    <p className="text-sm text-gray-400">{control.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturePagination currentSlug="private-execution-fabric" />
      <Footer />
    </main>
  );
}
