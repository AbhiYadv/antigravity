"use client";

import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { FeaturePagination } from "@/components/layout/FeaturePagination";
import { motion } from "framer-motion";
import {
  Lock, Shield, Eye, Key, Mail, Globe,
  CheckCircle, AlertTriangle, Database, FileText,
  Server, Fingerprint
} from "lucide-react";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
    {children}
  </motion.div>
);

const redactionCategories = [
  {
    icon: Key,
    title: "Secret Detection",
    desc: "Automatically identify API keys, database passwords, OAuth tokens, webhook secrets, and service account credentials embedded in logs and configuration data.",
    examples: ["AWS access keys", "Database passwords", "Webhook secrets", "Service account tokens"],
    color: "text-red-400"
  },
  {
    icon: Lock,
    title: "API Key & JWT Masking",
    desc: "Detect and mask bearer tokens, JWTs, API keys in headers and payloads. Preserve token structure metadata (issuer, expiry) while redacting the actual credential.",
    examples: ["Bearer tokens", "JWT payloads", "API key headers", "OAuth refresh tokens"],
    color: "text-orange-400"
  },
  {
    icon: Fingerprint,
    title: "PII Handling",
    desc: "Identify and redact personally identifiable information including email addresses, phone numbers, national IDs, and names across all evidence sources.",
    examples: ["Email addresses", "Phone numbers", "National IDs", "Full names"],
    color: "text-yellow-400"
  },
  {
    icon: Globe,
    title: "IP & Account Masking",
    desc: "Replace internal IP addresses, hostnames, account IDs, and customer identifiers with deterministic pseudonyms that preserve correlation without exposing real values.",
    examples: ["Internal IPs", "Hostnames", "AWS account IDs", "Customer identifiers"],
    color: "text-accent-1"
  }
];

const auditFeatures = [
  { label: "Redaction Metadata", desc: "Every redaction event is logged with the type detected, the masking rule applied, and the source location." },
  { label: "Source Provenance", desc: "Each piece of evidence maintains a verifiable chain back to the original source — log group, ticket ID, or document reference." },
  { label: "Audit Trail", desc: "Immutable audit logs track who accessed what data, when redaction rules were applied, and what model invocations occurred." },
  { label: "Compliance Reporting", desc: "Generate redaction compliance reports showing what categories of sensitive data were detected and masked across all evidence." }
];

export default function SecurityRedactionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-20">
      <NavBar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,100,100,0.04)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <Reveal>
            <div className="text-red-400 font-mono text-sm mb-4 font-bold tracking-widest uppercase">Security Layer</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Security &amp; Redaction
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
              Protect sensitive operational evidence before simulation and AI reasoning. Automatically detect and mask secrets, PII, infrastructure identifiers, and customer data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Redaction Pipeline */}
      <section className="py-24 bg-bg-alt/50 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-8">How Redaction Works</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The Redaction Engine runs as the mandatory first step before any AI model receives evidence. Raw operational data is scanned using pattern matching, entropy analysis, and context-aware classifiers. Detected sensitive values are replaced with deterministic pseudonyms that preserve analytical relationships.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-black/60 p-6 rounded-xl border border-border-color font-mono text-sm">
              <div className="text-red-400 mb-4 font-bold">Redaction Example</div>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-xs mb-1">BEFORE REDACTION</div>
                  <pre className="text-gray-400 overflow-x-auto">
{`Error connecting to db://admin:p@ssw0rd!@10.4.2.8:5432/payments
API call failed: Authorization: Bearer eyJhbGci...xQ2kz
Customer email: john.doe@acme.com (account: ACC-98712)`}
                  </pre>
                </div>
                <div className="border-t border-border-color pt-4">
                  <div className="text-accent-3 text-xs mb-1">AFTER REDACTION</div>
                  <pre className="text-gray-300 overflow-x-auto">
{`Error connecting to db://[REDACTED_CREDS]@[MASKED_IP]:5432/payments
API call failed: Authorization: Bearer [REDACTED_JWT]
Customer email: [REDACTED_EMAIL] (account: [MASKED_ACCOUNT_ID])`}
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Redaction Categories */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Detection Categories</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {redactionCategories.map((cat, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="glass-card p-6 rounded-xl border border-border-color h-full">
                  <cat.icon className={`w-8 h-8 ${cat.color} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex, eidx) => (
                      <span key={eidx} className="px-2 py-1 bg-bg-alt border border-border-color rounded text-xs text-gray-400 font-mono">{ex}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Provenance */}
      <section className="py-24 bg-bg-alt/30 border-y border-border-color">
        <div className="container mx-auto px-8 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Auditability &amp; Provenance</h2>
          </Reveal>
          <div className="space-y-4">
            {auditFeatures.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-card p-6 rounded-xl border border-border-color flex items-start gap-4">
                  <Shield className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">{feature.label}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturePagination currentSlug="security-redaction" />
      <Footer />
    </main>
  );
}
