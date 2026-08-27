export type ExperienceItem = { period: string; role: string; company: string; location: string; technologies: string[]; focusAreas: string[]; bullets: string[] };

export const impactHighlights = [
  { value: "20+", label: "Dataverse tables configured across benefits and case-management solutions" },
  { value: "15–30", label: "Automated workflows supporting operational processing" },
  { value: "3", label: "Statewide platforms supported with Azure integration engineering" },
  { value: "40%", label: "Reported throughput improvement from secure Azure service integrations" },
];

export const experience: ExperienceItem[] = [
  { period: "Nov 2023 – Present", role: "Power Apps Developer", company: "Convexio Inc.", location: "North Carolina, United States", technologies: ["Power Apps", "Dataverse", "Power Automate", "Power Pages", "Azure Functions", "Logic Apps", "Key Vault", "Power BI", "Azure DevOps"], focusAreas: ["Enterprise Power Platform delivery", "Benefits & case management", "Secure integrations", "Production support"], bullets: ["Lead end-to-end Power Platform development across citizen and worker experiences.", "Own Dataverse data modeling and automation across 20+ tables and 15–30 workflows.", "Design Dataverse Web API, Azure Functions, and REST integrations and support defect triage, root-cause analysis, and release validation.", "Partner with state stakeholders, analysts, and QA to translate policy and business rules into technical designs and long-term documentation.", "Develop Power BI operational dashboards and Azure service integrations using Logic Apps, Key Vault, and Azure Functions."] },
  { period: "Jan 2023 – Sep 2023", role: "Power Apps Developer", company: "Tech Talent Connect", location: "Kansas City, Missouri, United States", technologies: ["Canvas Apps", "Model-Driven Apps", "Power Automate", "Dataverse", "SharePoint", "Power BI"], focusAreas: ["Request intake", "Case tracking", "Workflow automation", "Reporting"], bullets: ["Developed Canvas and Model-Driven Apps for request intake, case tracking, dashboards, forms, validation, and role-based access.", "Built Power Automate flows for approvals, Outlook notifications, SharePoint and Dataverse updates, and audit logging.", "Designed Dataverse and SharePoint structures for applications, users, tasks, and status history.", "Refined apps and flows from tester and stakeholder feedback and built Power BI reports for operational metrics."] },
  { period: "Jan 2020 – Dec 2021", role: "Assistant System Engineer", company: "Tata Consultancy Services", location: "Hyderabad, India", technologies: ["SQL", "Python", "Power Apps", "Dataverse", "Power Automate", "JavaScript", "TypeScript", "PCF", "Power BI"], focusAreas: ["Data processing", "Power Platform customization", "ALM", "Data quality"], bullets: ["Designed data-processing workflows across SAP, Salesforce, MySQL, SQL Server, Excel, and internal databases.", "Built SQL automation and Python validation/reconciliation utilities for high-volume data.", "Developed Power Apps/Dataverse applications and Power Automate workflows for internal process automation.", "Built custom JavaScript, TypeScript, and PCF functionality and managed Power Platform solutions across environments.", "Implemented structured logging and data-quality checkpoints and developed Power BI reports across enterprise sources."] },
];

export const education = [
  { period: "May 2023", degree: "Master of Science in Computer Science", school: "Kent State University", detail: "GPA: 3.85" },
  { period: "Jun 2026", degree: "Doctorate in Business Administration", school: "Belhaven University", detail: "Specialization: Business Intelligence" },
];

export const certifications = [
  "Microsoft Azure Fundamentals",
  "Microsoft Power Platform Fundamentals (PL-900)",
  "Microsoft Certified: Power Platform App Maker Associate",
  "Microsoft Applied Skills: Create and Manage Canvas Apps with Power Apps",
  "Google Data Analytics",
  "Snowflake Hands-on Essentials",
  "Python Web with Flask",
  "Azure Machine Learning Studio",
];
