import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { ImplementationCard } from "@/components/ImplementationCard";
import { disciplineByCategory } from "@/data/disciplines";
import { implementations } from "@/data/implementations";
import { playbooks } from "@/data/playbooks";

const architectureByCategory: Record<string, string[]> = {
  JavaScript: ["Model-Driven form", "Form event", "Xrm API / Web API", "Dataverse"],
  PCF: ["Power App", "PCF lifecycle", "Component / service layer", "Dataverse"],
  Plugins: ["Dataverse event", "Plugin pipeline", "Business service", "Transactional update"],
  "Custom API": ["App / flow", "Custom API", "C# service", "Dataverse / external system"],
  "Power Automate": ["Trigger", "Guard / query", "Business branch", "Dataverse / notification"],
  Integration: ["Power Platform", "Trusted service boundary", "OAuth", "External API"],
  Dataverse: ["Transaction", "Configuration / relationship", "Validation", "History / reporting"],
  Security: ["User", "Security role", "Owner team", "Dataverse record"],
  Architecture: ["Requirement", "Configuration", "Execution layer", "Managed delivery"],
  ALM: ["Source", "Solution package", "Dependency validation", "Target environment"],
  "Production Engineering": ["Symptom", "Evidence", "Root cause", "Fix + regression validation"],
};

const sampleByCategory: Record<string, string> = {
  JavaScript: `const lookup = formContext.getAttribute("demo_program")?.getValue()?.[0];\nif (!lookup) return;\nconst id = lookup.id.replace(/[{}]/g, "");\nconst result = await Xrm.WebApi.retrieveMultipleRecords("demo_configuration", "?$select=demo_name&$filter=_demo_program_value eq " + id);`,
  PCF: `public init(context, notifyOutputChanged): void {\n  this.notifyOutputChanged = notifyOutputChanged;\n}\npublic updateView(context): void {\n  // Render from context + stable component state.\n}\npublic getOutputs() { return { value: this.value }; }`,
  Plugins: `public void Execute(IServiceProvider services) {\n  var context = (IPluginExecutionContext)services.GetService(typeof(IPluginExecutionContext));\n  if (context.InputParameters["Target"] is not Entity target) return;\n  // Delegate authoritative business logic to a service.\n}`,
  Integration: `using var request = new HttpRequestMessage(HttpMethod.Post, endpoint);\nrequest.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);\nusing var response = await httpClient.SendAsync(request);\nresponse.EnsureSuccessStatusCode();`,
  "Custom API": `var payload = context.InputParameters["RequestJson"] as string;\nif (string.IsNullOrWhiteSpace(payload))\n  throw new InvalidPluginExecutionException("Request payload is required.");\ncontext.OutputParameters["ResponseJson"] = service.Execute(payload);`,
  "Power Automate": `Has rows\nlength(outputs('List_rows')?['body/value']) > 0\n\nSafe ID\nfirst(outputs('List_rows')?['body/value'])?['demo_requestid']`,
};

export function generateStaticParams() { return implementations.map((item) => ({ slug: item.slug })); }

export default async function ImplementationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = implementations.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const discipline = disciplineByCategory[item.category];
  const architecture = architectureByCategory[item.category] ?? ["Requirement", "Power Platform component", "Dataverse", "Managed delivery"];
  const related = implementations.filter((entry) => entry.category === item.category && entry.slug !== item.slug).slice(0, 3);
  const matchingPlaybooks = playbooks.filter((playbook) => playbook.implementationSlugs.includes(item.slug));
  const code = sampleByCategory[item.category];

  return (
    <section className="container-shell py-16 sm:py-20">
      <Link href="/implementations" className="text-sm text-sky-300">← Implementation library</Link>
      <div className="mt-8 grid gap-8 xl:grid-cols-[1.25fr_.55fr] xl:items-end">
        <div><div className="flex gap-2"><span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs text-sky-200">{item.category}</span><span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">{item.level}</span></div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{item.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{item.summary}</p><div className="mt-6 flex flex-wrap gap-2">{item.technologies.map((tech) => <span key={tech} className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-400">{tech}</span>)}</div></div>
        <aside className="glass rounded-2xl p-5"><p className="text-xs uppercase tracking-[.18em] text-sky-300">Engineering discipline</p><p className="mt-3 text-lg font-semibold text-white">{discipline?.label ?? item.category}</p><p className="mt-2 text-sm leading-6 text-slate-400">{discipline?.description}</p></aside>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2"><article className="glass rounded-2xl p-6"><p className="text-xs uppercase tracking-[.2em] text-sky-300">Problem</p><h2 className="mt-3 text-xl font-semibold text-white">Engineering challenge</h2><p className="mt-4 leading-7 text-slate-400">{item.challenge}</p></article><article className="glass rounded-2xl p-6"><p className="text-xs uppercase tracking-[.2em] text-emerald-200">Implementation</p><h2 className="mt-3 text-xl font-semibold text-white">Implementation approach</h2><ol className="mt-4 space-y-3 text-sm leading-6 text-slate-400">{item.approach.map((point, i) => <li key={point} className="flex gap-3"><span className="text-emerald-300">{String(i + 1).padStart(2, "0")}</span><span>{point}</span></li>)}</ol></article></div>
      <div className="mt-5 glass rounded-3xl p-6 sm:p-8"><p className="text-xs uppercase tracking-[.18em] text-sky-300">Execution architecture</p><h2 className="mt-3 text-2xl font-semibold text-white">How the pattern moves through the platform</h2><div className="mt-7"><ArchitectureFlow steps={architecture} /></div></div>
      {code && <div className="mt-5 code-panel"><div className="code-panel-head"><span>Representative sanitized pattern</span><span>{item.category}</span></div><pre><code>{code}</code></pre></div>}
      <div className="mt-5 grid gap-5 lg:grid-cols-2"><article className="glass rounded-2xl p-6"><h2 className="text-xl font-semibold text-white">Key considerations</h2><div className="mt-4 flex flex-wrap gap-2">{item.considerations.map((point) => <span key={point} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-400">{point}</span>)}</div></article><article className="glass rounded-2xl p-6"><h2 className="text-xl font-semibold text-white">Design decisions</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">{item.designDecisions.map((point) => <li key={point} className="flex gap-3"><span className="text-sky-300">→</span><span>{point}</span></li>)}</ul></article></div>
      {matchingPlaybooks.length > 0 && <div className="mt-12"><h2 className="text-2xl font-semibold text-white">Used in solution playbooks</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{matchingPlaybooks.map((p) => <Link key={p.slug} href={`/playbooks#${p.slug}`} className="glass card-hover rounded-2xl p-5"><p className="text-xs uppercase tracking-[.16em] text-sky-300">{p.eyebrow}</p><h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{p.summary}</p></Link>)}</div></div>}
      {related.length > 0 && <div className="mt-12"><h2 className="text-2xl font-semibold text-white">Related {item.category} patterns</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{related.map((entry) => <ImplementationCard key={entry.slug} item={entry} />)}</div></div>}
    </section>
  );
}
