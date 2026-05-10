"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Database, Cpu, Lock, TerminalSquare, Search, Layout } from "lucide-react";

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home" className="pt-40 pb-24 relative overflow-hidden">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
          <div className="container mx-auto px-8 relative z-10 max-w-5xl text-center">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Privacy-first AI products for <span className="text-gradient">technical teams</span> and enterprise operations.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Mazeart Technologies builds secure AI software that helps teams work with operational knowledge, live technical context, and simulation-based learning without giving up control of their data.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#products" className="px-8 py-3.5 rounded-lg bg-accent-1 text-white font-bold hover:opacity-90 transition-opacity">
                Explore Products
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-lg bg-white/5 border border-border-color text-white font-bold hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </Reveal>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-8 max-w-4xl">
            <Reveal>
              <div className="inline-block px-3 py-1 mb-6 rounded-full border border-border-color bg-white/5 text-xs font-bold uppercase tracking-widest text-accent-1">
                Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Building AI systems for real operational work.</h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-6 text-lg text-gray-400">
              <p className="text-xl text-gray-300 font-medium">
                Mazeart Technologies is an applied AI product company focused on building secure, practical, and privacy-first software for modern technical teams.
              </p>
              <p>
                Our products help organizations use AI in high-context workflows such as engineering operations, technical sessions, incident training, documentation intelligence, and team readiness.
              </p>
              <p>
                We believe enterprise AI should be controlled, auditable, and aligned with the customer's own knowledge. Our systems are designed around privacy, deterministic workflows, evidence-backed outputs, and customer-owned intelligence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 relative">
          <div className="container mx-auto px-8 max-w-6xl">
            <Reveal>
              <div className="inline-block px-3 py-1 mb-6 rounded-full border border-border-color bg-white/5 text-xs font-bold uppercase tracking-widest text-accent-2">
                Core Products
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Designed for high-context technical workflows and operational readiness.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Product 1: Maze Copilot */}
              <Reveal delay={0.1}>
                <Link href="/products/maze-copilot" className="block h-full glass-card p-10 rounded-2xl border border-border-color hover:border-accent-1/50 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-accent-1">Maze Copilot</span> — Desktop AI Workspace
                  </h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">For Live Technical Sessions</p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Maze Copilot is a desktop AI workspace designed for live technical workflows such as debugging sessions, interviews, meetings, architecture discussions, support calls, and engineering collaboration. It brings real-time context, AI assistance, session history, and workflow support into one focused command surface.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-gray-300">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-1 shrink-0"></div> Desktop-first AI workspace</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-1 shrink-0"></div> Designed for live technical sessions</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-1 shrink-0"></div> Privacy-first session handling</li>
                  </ul>
                  <div className="text-accent-1 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Maze Copilot <span>→</span>
                  </div>
                </Link>
              </Reveal>

              {/* Product 2: MazeLabs */}
              <Reveal delay={0.2}>
                <Link href="/products/maze-engine" className="block h-full glass-card p-10 rounded-2xl border border-border-color hover:border-accent-2/50 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-accent-2">MazeLabs</span> — Simulation Platform
                  </h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Operational Simulation & Readiness</p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    MazeLabs is a simulation-based training and operational readiness platform for engineering, SRE, DevOps, database, platform, and support teams. It converts internal documentation into interactive incident simulations, evidence-backed decision flows, war-room training surfaces, and post-session debriefs.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-gray-300">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-2 shrink-0"></div> Converts static documentation into interactive simulations</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-2 shrink-0"></div> Uses deterministic evidence structures and replayable state</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-2 shrink-0"></div> Designed for private enterprise environments</li>
                  </ul>
                  <div className="text-accent-2 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore MazeLabs Engine <span>→</span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SECTION */}
        <section id="technology" className="py-24 relative">
          <div className="container mx-auto px-8 max-w-6xl">
            <Reveal>
              <div className="inline-block px-3 py-1 mb-6 rounded-full border border-border-color bg-white/5 text-xs font-bold uppercase tracking-widest text-accent-3">
                Architecture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Principles</h2>
              <p className="text-xl text-gray-400 mb-16 max-w-3xl">
                Mazeart Technologies builds AI products using a structured architecture based on three principles.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Reveal delay={0.1} className="glass-card p-8 rounded-xl border border-border-color">
                <Search className="w-10 h-10 text-accent-1 mb-6" />
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Systems should understand the active work state, available evidence, user actions, transcript, and workflow history. Context must be grounded, visible, and controlled.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="glass-card p-8 rounded-xl border border-border-color">
                <Database className="w-10 h-10 text-accent-2 mb-6" />
                <h3 className="text-xl font-bold mb-4">Memory</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Organizations should be able to preserve learning, decisions, scenarios, and operational knowledge over time without leaking sensitive information.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="glass-card p-8 rounded-xl border border-border-color">
                <TerminalSquare className="w-10 h-10 text-accent-3 mb-6" />
                <h3 className="text-xl font-bold mb-4">Harness</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI should operate inside a controlled execution harness with validation, replayability, deterministic outputs where required, observability, and clear boundaries.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* INNOVATION & SECURITY SECTION */}
        <section id="security" className="py-24 relative bg-black/40 border-y border-border-color section-divider">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              <Reveal>
                <div className="inline-block px-3 py-1 mb-6 rounded-full border border-border-color bg-white/5 text-xs font-bold uppercase tracking-widest text-accent-1">
                  Vision
                </div>
                <h2 className="text-3xl font-bold mb-6">What Makes Our Work Innovative</h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>Mazeart Technologies is not building generic chatbot software. Our products focus on converting high-context technical work into structured, auditable, and actionable AI workflows.</p>
                  <p><strong className="text-white">MazeLabs</strong> introduces a deterministic operational simulation model where internal knowledge can be transformed into EvidenceTrees, simulation states, decision branches, action ledgers, and debrief outputs. This allows technical teams to train on realistic scenarios while preserving privacy, provenance, and reproducibility.</p>
                  <p><strong className="text-white">Maze Copilot</strong> focuses on live technical execution by bringing session context, role-specific assistance, and workflow support into a desktop workspace designed for real-time technical work.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="inline-block px-3 py-1 mb-6 rounded-full border border-border-color bg-white/5 text-xs font-bold uppercase tracking-widest text-accent-3">
                  Trust
                </div>
                <h2 className="text-3xl font-bold mb-6">Privacy-first by design.</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Mazeart Technologies designs products with strong privacy and control principles. Our goal is to help customers use AI without losing ownership of their operational knowledge.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Customer-owned intelligence",
                    "Privacy-first architecture",
                    "Controlled data flow",
                    "Secure handling of context",
                    "No unnecessary exposure of docs",
                    "Designed for private deployment",
                    "Evidence-based outputs",
                    "Separation of knowledge & execution"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-3/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent-3"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 relative">
          <div className="container mx-auto px-8 max-w-2xl text-center">
            <Reveal>
              <h2 className="text-4xl font-bold mb-4">Contact Mazeart Technologies</h2>
              <p className="text-xl text-gray-400 mb-12">
                For product inquiries, partnerships, early access, or enterprise discussions.
              </p>
            </Reveal>
            
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const company = formData.get("company")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`Website Inquiry from ${name}${company ? ' — ' + company : ''}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`
    );

    setStatus("sending");
    window.location.href = `mailto:support@mazeart.co.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="glass-card p-8 md:p-10 rounded-2xl border border-border-color text-left">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-black/40 border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
            <input type="email" id="email" name="email" required className="w-full bg-black/40 border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Company</label>
          <input type="text" id="company" name="company" className="w-full bg-black/40 border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full bg-black/40 border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-1 transition-colors resize-y"></textarea>
        </div>
        <button 
          type="submit" 
          disabled={status !== "idle"}
          className="w-full bg-white text-background font-bold py-4 rounded-lg hover:bg-accent-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "idle" ? "Send Message" : status === "sending" ? "Opening email client..." : "Sent Successfully"}
        </button>
        {status === "success" && (
          <div className="text-accent-3 text-sm font-medium text-center bg-accent-3/10 py-3 rounded-lg border border-accent-3/20">
            Message prepared. Check your email client to send.
          </div>
        )}
      </form>
    </div>
  );
}
