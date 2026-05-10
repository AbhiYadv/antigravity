"use client";

import React from "react";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { featuresData } from "@/data/features";
import { 
  Cpu, PlayCircle, Users, Award, Shield, 
  Network, Lock, FileText 
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8 text-accent-1" />,
  PlayCircle: <PlayCircle className="w-8 h-8 text-accent-1" />,
  Users: <Users className="w-8 h-8 text-accent-1" />,
  Award: <Award className="w-8 h-8 text-accent-1" />,
  Shield: <Shield className="w-8 h-8 text-accent-1" />,
  Network: <Network className="w-8 h-8 text-accent-1" />,
  Lock: <Lock className="w-8 h-8 text-accent-1" />,
  FileText: <FileText className="w-8 h-8 text-accent-1" />
};

export default function FeaturesIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-1/20 selection:text-white pt-20">
      <NavBar />
      
      {/* Hero */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Operational readiness, built from your <span className="text-gradient">real incidents.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            MazeLabs is a privacy-first operational simulation and incident readiness platform. It turns runbooks, RCAs, incident tickets, CloudWatch logs, and alerts into private, replayable P1/P0 incident simulations and evidence-driven war-room drills.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/features/${feature.slug}`} className="block h-full">
                  <div className="glass-card p-8 rounded-xl border border-border-color hover:border-accent-1 transition-all hover:-translate-y-1 h-full flex flex-col group">
                    <div className="w-16 h-16 rounded-lg bg-bg-alt flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {iconMap[feature.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-400 flex-1 mb-6 leading-relaxed">
                      {feature.summary}
                    </p>
                    <div className="text-accent-1 font-mono text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Learn more <span>&rarr;</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
