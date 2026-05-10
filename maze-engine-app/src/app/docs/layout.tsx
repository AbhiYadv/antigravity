import { docsNavigation } from "@/data/docs";
import Link from "next/link";
import React from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 py-8 md:pr-8 md:border-r border-border-color overflow-y-auto hidden md:block">
        <Link href="/docs" className="text-xl font-bold mb-8 block hover:text-accent-1 transition-colors">
          Documentation
        </Link>
        <nav className="space-y-8">
          {docsNavigation.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link 
                      href={`/docs/${item.slug.join("/")}`} 
                      className="text-sm text-gray-400 hover:text-accent-1 transition-colors"
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
      <main className="flex-1 py-8 md:pl-12 min-w-0">
        {children}
      </main>
    </div>
  );
}
