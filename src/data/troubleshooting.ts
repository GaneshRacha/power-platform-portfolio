export const troubleshootingTopics = [
  { group: "Dataverse solution imports", items: ["Missing root components and dependencies", "Primary key/name metadata mismatches", "Lookup, Picklist, and String type conflicts", "Duplicate relationships", "Invalid form XML or FetchXML", "Ownership-type and schema drift"] },
  { group: "PCF deployment", items: ["Manifest property mismatch", "Form metadata referencing a newer control contract", "Bound outputs not updating", "Parent form not becoming dirty", "Save lifecycle not firing", "React re-render input loss"] },
  { group: "Power Automate", items: ["Null or empty recordId", "Unsafe first() on empty arrays", "Retry and duplicate processing", "Run After/error-scope design", "Dataverse query assumptions"] },
  { group: "Plugins & Custom APIs", items: ["Wrong pipeline stage", "Depth/recursion issues", "Missing Target/Image values", "Over-retrieval", "Tracing and user-safe exceptions", "Contract validation"] },
  { group: "Integration", items: ["OAuth/token acquisition", "Endpoint and HTTPS validation", "Timeouts and retries", "Environment-specific configuration", "Correlation and observability"] },
  { group: "Git / release engineering", items: ["Branch and permission problems", "Source vs solution version drift", "Dependency sequence", "Managed/unmanaged layers", "Post-release validation"] },
];

export const diagnosticWorkflow = [
  ["01", "Reproduce", "Capture the exact user action, environment, data state, and error."],
  ["02", "Classify", "Locate the failing layer: client, Dataverse metadata, plugin, flow, integration, or deployment."],
  ["03", "Collect evidence", "Use tracing, run history, metadata comparison, network results, or import logs before changing code."],
  ["04", "Find the smallest mismatch", "Separate root cause from secondary symptoms and identify the minimum safe correction."],
  ["05", "Validate", "Test the happy path, failure path, regression scope, and target-environment behavior."],
  ["06", "Prevent recurrence", "Improve validation, tracing, deployment checks, or documentation so the same failure is easier to detect next time."],
];
