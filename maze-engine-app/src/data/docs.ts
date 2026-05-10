export type DocCategory = {
  title: string;
  items: { title: string; slug: string[] }[];
};

export const docsNavigation: DocCategory[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Platform Overview", slug: ["getting-started", "platform-overview"] },
      { title: "Quickstart", slug: ["getting-started", "quickstart"] }
    ]
  },
  {
    title: "Architecture",
    items: [
      { title: "System Architecture", slug: ["architecture"] },
      { title: "Data Flow", slug: ["architecture", "data-flow"] },
      { title: "Deployment Models", slug: ["architecture", "deployment-models"] }
    ]
  },
  {
    title: "Engines",
    items: [
      { title: "Evidence Compression", slug: ["engines", "evidence-compression"] },
      { title: "Simulation Runtime", slug: ["engines", "simulation-runtime"] },
      { title: "Scoring Engine", slug: ["engines", "scoring"] },
      { title: "War Room Replay", slug: ["engines", "replay"] },
      { title: "Redaction Engine", slug: ["engines", "redaction"] }
    ]
  },
  {
    title: "Schemas",
    items: [
      { title: "EvidencePack Object", slug: ["schema", "evidence-pack"] },
      { title: "Canonical Event", slug: ["schema", "canonical-event"] },
      { title: "Scenario Definition", slug: ["schema", "scenario"] },
      { title: "Scoring Output", slug: ["schema", "scoring"] }
    ]
  },
  {
    title: "Integrations",
    items: [
      { title: "AWS CloudWatch", slug: ["integrations", "cloudwatch"] },
      { title: "Jira / Atlassian", slug: ["integrations", "jira"] },
      { title: "ServiceNow", slug: ["integrations", "servicenow"] },
      { title: "Datadog", slug: ["integrations", "datadog"] },
      { title: "Custom API", slug: ["integrations", "custom-api"] }
    ]
  },
  {
    title: "Security & Privacy",
    items: [
      { title: "Privacy Policy", slug: ["security", "privacy"] },
      { title: "Redaction Rules", slug: ["security", "redaction"] },
      { title: "Data Retention", slug: ["security", "data-retention"] },
      { title: "Audit Logging", slug: ["security", "audit-logging"] }
    ]
  }
];

// Flatten for static generation
export const allDocSlugs = docsNavigation.flatMap(cat => cat.items.map(item => item.slug));
