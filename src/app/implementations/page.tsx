import { ImplementationExplorer } from "@/components/ImplementationExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { disciplineByCategory } from "@/data/disciplines";
import { implementations } from "@/data/implementations";

const categoryCounts = Array.from(new Set(implementations.map((item) => item.category))).map((category) => ({
  category,
  count: implementations.filter((item) => item.category === category).length,
}));

export default function ImplementationsPage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Implementation library" title={`${implementations.length} generic Power Platform engineering patterns`} body="Reusable implementation stories across Canvas Apps, Model-Driven Apps, Power Pages, JavaScript, PCF, Dataverse, plugins, Custom APIs, Power Automate, Azure integrations, Power BI, data engineering, production support, security, architecture, ALM, and DevOps. Every page focuses on the engineering problem, approach, edge cases, and design decisions." />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryCounts.map(({ category, count }) => {
          const discipline = disciplineByCategory[category];
          return (
            <div key={category} className="rounded-2xl border border-white/8 bg-white/[.025] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{discipline?.label ?? category}</p>
                <span className="rounded-full bg-sky-300/10 px-2.5 py-1 text-xs text-sky-200">{count}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{discipline?.focus ?? "Engineering pattern"}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12"><ImplementationExplorer /></div>

      <div className="mt-14 rounded-2xl border border-white/8 bg-white/[.02] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">Solution playbooks</p>
          <h2 className="mt-2 text-xl font-semibold text-white">See how these patterns connect in end-to-end scenarios.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Move from isolated implementation details to complete Power Platform architecture flows.</p>
        </div>
        <a href="/playbooks" className="secondary-cta mt-5 inline-block shrink-0 rounded-xl px-5 py-3 text-sm font-semibold sm:mt-0">Explore playbooks →</a>
      </div>
    </section>
  );
}
