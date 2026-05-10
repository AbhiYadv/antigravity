import { docsNavigation } from "@/data/docs";
import Link from "next/link";
import React from "react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col pt-20">
      <NavBar />

      {/* Two-column body */}
      <div className="flex-1 container mx-auto px-4 md:px-8 flex flex-col md:flex-row">

        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 py-8 md:pr-8 md:border-r border-border-color overflow-y-auto hidden md:block sticky top-20 self-start max-h-[calc(100vh-80px)]">
          <Link href="/docs" className="text-xl font-bold mb-8 block hover:text-accent-1 transition-colors">
            Documentation
          </Link>
          <nav className="space-y-8">
            {docsNavigation.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-widest opacity-60">
                  {section.title}
                </h4>
                <ul className="space-y-1.5">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={`/docs/${item.slug.join("/")}`}
                        className="text-sm text-gray-400 hover:text-accent-1 transition-colors block py-0.5"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-10 md:pl-12 min-w-0">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
