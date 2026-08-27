const categoryFolder: Record<string, string> = {
  "ALM": "alm",
  "Architecture": "architecture",
  "Canvas Apps": "canvas-apps",
  "Custom API": "custom-api",
  "Data Engineering": "data-engineering",
  "Dataverse": "dataverse",
  "DevOps": "devops",
  "Integration": "integration",
  "JavaScript": "javascript",
  "Model-Driven Apps": "model-driven-apps",
  "PCF": "pcf",
  "Plugins": "plugins",
  "Power Automate": "power-automate",
  "Power BI": "power-bi",
  "Power Pages": "power-pages",
  "Production Engineering": "production-engineering",
  "Security": "security",
};

const patternsRepository = "https://github.com/GaneshRacha/power-platform-patterns";

export function getPatternSourceUrl(category: string, slug: string): string | null {
  const folder = categoryFolder[category];
  if (!folder) return null;
  return `${patternsRepository}/tree/main/${folder}/${slug}`;
}

export { patternsRepository };
