export const architecturePatterns = [
  { title: "Configuration-driven behavior", body: "Move business variants into Dataverse configuration where change cadence and governance make data more maintainable than code branching." },
  { title: "Explicit relationship modeling", body: "Use child or junction entities when relationships require metadata, history, display order, lifecycle, or reporting." },
  { title: "Server authority", body: "Use plugins and Custom APIs when correctness must hold across every Dataverse client, not just a single form." },
  { title: "Secure integration boundary", body: "Keep secrets, token acquisition, endpoint validation, and protected REST calls behind a trusted server-side boundary." },
  { title: "Effective-dated configuration", body: "Represent rules that change over time with explicit effective ranges and preserve the configuration used by historical transactions." },
  { title: "ALM as architecture", body: "Treat dependency order, component versions, environment configuration, and post-release validation as design concerns." },
  { title: "Shared core + focused extensions", body: "Keep common business concepts centralized while allowing specialized behavior to live in bounded extension layers." },
  { title: "Observability by design", body: "Add tracing, correlation, useful errors, and recovery paths before production incidents make them necessary." },
];

export const layerDecisions = [
  { need: "Contextual form behavior", layer: "JavaScript", why: "Fast user feedback tied to the current form context." },
  { need: "Reusable complex interaction", layer: "PCF", why: "A component boundary is clearer than repeatedly extending standard controls." },
  { need: "Authoritative validation or calculation", layer: "Plugin", why: "Server execution applies regardless of the calling client." },
  { need: "Reusable command", layer: "Custom API", why: "Provides a stable contract to apps, flows, and integrations." },
  { need: "Asynchronous orchestration", layer: "Power Automate", why: "Good fit for approvals, notifications, scheduled jobs, and non-transactional process coordination." },
  { need: "Protected external service", layer: "Server/Azure", why: "Credentials and endpoint controls should not be exposed to client code." },
];
