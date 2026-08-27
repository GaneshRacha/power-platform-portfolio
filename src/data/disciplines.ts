export type Discipline = { category: string; label: string; description: string; focus: string };

export const disciplines: Discipline[] = [
  { category: "Model-Driven Apps", label: "Model-Driven Apps", description: "Context-aware forms, navigation, commands, lookups, and feedback built around Dataverse business data.", focus: "Experience layer" },
  { category: "Canvas Apps", label: "Canvas Apps", description: "Guided intake, Power Fx validation, Dataverse persistence, and role-aware low-code experiences.", focus: "Low-code app engineering" },
  { category: "Power Pages", label: "Power Pages", description: "External intake and portal-to-worker processing on shared Dataverse models.", focus: "External experiences" },
  { category: "JavaScript", label: "JavaScript / TypeScript", description: "Reusable form behavior, Web API access, validation, lookup filtering, and client orchestration.", focus: "Client engineering" },
  { category: "PCF", label: "PCF", description: "Reusable custom controls for experiences standard Power Platform controls cannot express cleanly.", focus: "Component engineering" },
  { category: "Dataverse", label: "Dataverse", description: "Normalized models, configuration records, history, relationships, and business metadata.", focus: "Data & configuration" },
  { category: "Plugins", label: "C# Plugins", description: "Authoritative validation, calculations, synchronization, transactions, ownership, and lifecycle rules.", focus: "Server engineering" },
  { category: "Custom API", label: "Custom APIs", description: "Stable server-side business commands for forms, flows, and integrations.", focus: "Service boundary" },
  { category: "Power Automate", label: "Power Automate", description: "Approvals, notifications, orchestration, scheduled sync, HTTP integration, and resilient processing.", focus: "Automation" },
  { category: "Integration", label: "Integration / Azure", description: "REST, OAuth, Key Vault, Logic Apps, Azure Functions, and secure service-to-service patterns.", focus: "External systems" },
  { category: "Power BI", label: "Power BI", description: "Operational dashboards, semantic models, KPI reporting, and cross-source analytics.", focus: "Analytics" },
  { category: "Data Engineering", label: "Data Engineering", description: "SQL/Python validation, transformation, reconciliation, and data-quality checkpoints.", focus: "Data reliability" },
  { category: "Security", label: "Security", description: "Team ownership, least privilege, record segregation, and privilege-aligned navigation.", focus: "Access architecture" },
  { category: "Architecture", label: "Architecture", description: "Configuration-driven design, process mapping, code registries, and deliberate client/server boundaries.", focus: "Solution design" },
  { category: "ALM", label: "ALM", description: "Managed solutions, dependencies, environment configuration, version compatibility, and schema-drift diagnosis.", focus: "Release engineering" },
  { category: "DevOps", label: "Git / DevOps", description: "Source-controlled components, branching, version alignment, and release traceability.", focus: "Engineering workflow" },
  { category: "Production Engineering", label: "Production Engineering", description: "Defect triage, root-cause analysis, logging, release validation, and support runbooks.", focus: "Operational reliability" },
];

export const disciplineByCategory = Object.fromEntries(disciplines.map((item) => [item.category, item])) as Record<string, Discipline>;
