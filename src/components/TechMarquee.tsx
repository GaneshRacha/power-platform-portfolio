const items = ["Power Apps", "Dataverse", "PCF", "TypeScript", "C# Plugins", "Custom APIs", "Power Automate", "Power Pages", "Azure Functions", "Power BI", "ALM", "Azure DevOps"];

export function TechMarquee() {
  const row = [...items, ...items];
  return (
    <div className="tech-marquee" aria-label="Technology stack">
      <div className="tech-marquee-track">
        {row.map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}
      </div>
    </div>
  );
}
