import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { implementations } from "@/data/implementations";
import { playbooks } from "@/data/playbooks";

export default function PlaybooksPage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Solution playbooks" title="How the implementation patterns work together" body="Individual patterns are useful, but enterprise solutions are built by combining responsibilities across app experience, Dataverse, server-side logic, automation, integration, analytics, data quality, security, production support, and ALM. These playbooks show those combinations using generic scenarios." />

      <div className="mt-12 space-y-6">
        {playbooks.map((playbook, index) => {
          const items = playbook.implementationSlugs
            .map((slug) => implementations.find((item) => item.slug === slug))
            .filter((item): item is NonNullable<typeof item> => Boolean(item));

          return (
            <article key={playbook.slug} id={playbook.slug} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-8 xl:grid-cols-[.8fr_1.2fr]">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-sky-300">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{playbook.eyebrow}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{playbook.title}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{playbook.summary}</p>
                  <div className="mt-6 rounded-2xl border border-white/8 bg-black/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">Engineering problem</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{playbook.problem}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-white">Outcomes</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {playbook.outcomes.map((outcome) => <span key={outcome} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-xs text-slate-300">{outcome}</span>)}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">Execution layers</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-5">
                    {playbook.layers.map((layer, layerIndex) => (
                      <div key={layer} className="rounded-xl border border-white/8 bg-white/[.025] p-4">
                        <span className="text-xs text-slate-600">{String(layerIndex + 1).padStart(2, "0")}</span>
                        <p className="mt-2 text-sm font-medium text-white">{layer}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 text-sm font-semibold text-white">Patterns used in this playbook</p>
                  <div className="mt-3 space-y-2">
                    {items.map((item) => (
                      <Link key={item.slug} href={`/implementations/${item.slug}`} className="group flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[.02] px-4 py-3 transition hover:border-sky-300/25 hover:bg-white/[.04]">
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-sky-100">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-500">{item.category} · {item.level}</p>
                        </div>
                        <span className="text-sky-300">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
