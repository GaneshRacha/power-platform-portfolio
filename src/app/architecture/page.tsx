import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { SectionHeading } from "@/components/SectionHeading";
import { architecturePatterns, layerDecisions } from "@/data/architecture";

const referenceFlow = [
  "User experience",
  "Dataverse data & configuration",
  "Plugins / Custom APIs",
  "Power Automate",
  "Azure / external services",
  "Managed delivery",
];

const integrationFlow = [
  "Power App / Flow",
  "Dataverse Custom API",
  "C# service boundary",
  "OAuth / Key Vault",
  "Allowlisted REST API",
];

const almFlow = [
  "Source control",
  "Solution / component version",
  "Dependency validation",
  "Managed import",
  "Post-release smoke test",
];

export default function ArchitecturePage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Architecture" title="Patterns behind maintainable Power Platform solutions" body="The portfolio emphasizes design choices that make applications easier to change, secure, integrate, troubleshoot, and deploy—not only individual form customizations." />

      <div className="mt-10 glass rounded-3xl p-7 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-200">Reference architecture</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">A layered Power Platform solution</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">Each layer has a different responsibility. The goal is not to use every technology in every solution, but to place a requirement in the simplest layer that can enforce it correctly.</p>
        <div className="mt-7"><ArchitectureFlow steps={referenceFlow} /></div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <article className="glass rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky-300">Secure integration</p>
          <h2 className="mt-3 text-xl font-semibold text-white">External service boundary</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">Sensitive authentication and outbound service calls stay behind a trusted server boundary instead of browser or portal code.</p>
          <div className="mt-6"><ArchitectureFlow steps={integrationFlow} /></div>
        </article>
        <article className="glass rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">Release architecture</p>
          <h2 className="mt-3 text-xl font-semibold text-white">Source-to-environment lifecycle</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">Version alignment, dependencies, target-environment configuration, and post-import verification are treated as part of the solution design.</p>
          <div className="mt-6"><ArchitectureFlow steps={almFlow} /></div>
        </article>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {architecturePatterns.map((item, index) => (
          <article key={item.title} className="glass card-hover rounded-2xl p-6">
            <span className="text-xs font-semibold text-sky-300">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-7 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-200">Decision framework</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Choosing the right execution layer</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/8">
          {layerDecisions.map((item, index) => (
            <div key={item.need} className={`grid gap-3 bg-[#0b1526] p-5 md:grid-cols-[1.1fr_.7fr_2fr] ${index ? "border-t border-white/8" : ""}`}>
              <div><p className="text-xs text-slate-500">Need</p><p className="mt-1 font-medium text-white">{item.need}</p></div>
              <div><p className="text-xs text-slate-500">Best-fit layer</p><p className="mt-1 font-medium text-sky-200">{item.layer}</p></div>
              <div><p className="text-xs text-slate-500">Why</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.why}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
