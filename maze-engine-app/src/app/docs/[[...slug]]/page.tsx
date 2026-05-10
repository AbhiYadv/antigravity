import React from "react";
import Link from "next/link";
import { allDocSlugs, docsNavigation } from "@/data/docs";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
  // We include an empty array for the root /docs page
  const paths: { slug: string[] }[] = [{ slug: [] }];
  
  for (const slugArray of allDocSlugs) {
    paths.push({ slug: slugArray });
  }
  return paths;
}

export default function DocPage({ params }: { params: { slug?: string[] } }) {
  const isRoot = !params.slug || params.slug.length === 0;

  if (isRoot) {
    return (
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">MazeLabs Documentation</h1>
        <p className="text-xl text-gray-400 mb-12">
          Welcome to the MazeLabs technical portal. Learn how to ingest telemetry, build deterministic EvidencePacks, and run private incident simulations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {docsNavigation.map((category, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl border border-border-color">
              <h2 className="text-xl font-bold text-white mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <Link href={`/docs/${item.slug.join("/")}`} className="text-accent-1 hover:underline text-sm font-medium flex items-center">
                      {item.title} <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Find the current item
  const currentSlugPath = params.slug!.join("/");
  let currentItem = null;
  let currentCategory = null;

  for (const cat of docsNavigation) {
    for (const item of cat.items) {
      if (item.slug.join("/") === currentSlugPath) {
        currentItem = item;
        currentCategory = cat;
        break;
      }
    }
  }

  if (!currentItem || !currentCategory) {
    notFound();
  }

  return (
    <div className="max-w-3xl prose prose-invert prose-blue">
      <div className="flex items-center text-sm font-mono text-gray-500 mb-8">
        <Link href={`/docs`} className="hover:text-accent-1">Docs</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>{currentCategory.title}</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-white">{currentItem.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{currentItem.title}</h1>
      
      <div className="bg-bg-alt/50 border border-border-color p-6 rounded-xl mb-8">
        <p className="text-gray-300 font-medium leading-relaxed">
          This section details the technical architecture and implementation specifics for the <strong className="text-white">{currentItem.title}</strong> module within the MazeLabs platform.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Overview</h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        MazeLabs prioritizes a deterministic, privacy-first approach to all operations. The {currentItem.title.toLowerCase()} pipeline ensures that no sensitive data is leaked and that simulations remain bounded by the validated EvidencePack.
      </p>

      {currentSlugPath.includes("schema") && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Data Schema Specification</h2>
          <div className="bg-black/80 border border-border-color p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
{`{
  "spec_version": "1.0",
  "resource_type": "${currentSlugPath.split("/").pop()}",
  "metadata": {
    "deterministic": true,
    "redaction_applied": true
  },
  "payload": {
    // Schema implementation details
  }
}`}
            </pre>
          </div>
        </>
      )}

      {currentSlugPath.includes("integrations") && (
        <>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Connection Details</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Configure the {currentItem.title} connector using our secure IAM roles or encrypted API tokens. Data is pulled via an isolated transport layer and immediately passed to the Canonical Normalizer.
          </p>
          <div className="bg-black/80 border border-border-color p-6 rounded-xl font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
{`curl -X POST https://api.mazelabs.com/v1/connectors/sync \\
  -H "Authorization: Bearer <TOKEN>" \\
  -d '{"target": "${currentSlugPath.split("/").pop()}"}'`}
            </pre>
          </div>
        </>
      )}

      <div className="mt-16 pt-8 border-t border-border-color flex justify-between">
        <p className="text-sm text-gray-500">Last updated: May 2026</p>
      </div>
    </div>
  );
}
