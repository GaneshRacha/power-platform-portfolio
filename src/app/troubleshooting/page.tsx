import { SectionHeading } from "@/components/SectionHeading";
import { diagnosticWorkflow, troubleshootingTopics } from "@/data/troubleshooting";

export default function TroubleshootingPage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Troubleshooting" title="Production problems are part of the engineering story" body="A curated set of failure modes and diagnostic patterns across Power Platform development and deployment. The emphasis is on root-cause classification, safe correction, and preventing recurrence." />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {troubleshootingTopics.map((topic) => (
          <article key={topic.group} className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white">{topic.group}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">{topic.items.map((item) => <li key={item} className="flex gap-3"><span className="text-sky-300">→</span><span>{item}</span></li>)}</ul>
          </article>
        ))}
      </div>

      <div className="mt-12 border-y border-white/8 py-12">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-200">Diagnostic workflow</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">A repeatable path from symptom to prevention</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {diagnosticWorkflow.map(([number, title, text]) => (
            <article key={number} className="rounded-2xl border border-white/8 bg-white/[.02] p-5">
              <span className="text-sm font-semibold text-sky-300">{number}</span>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 glass rounded-2xl p-7">
        <h2 className="text-xl font-semibold text-white">Troubleshooting principle</h2>
        <p className="mt-3 max-w-4xl leading-7 text-slate-400">An import error, runtime exception, or broken control is evidence about the system. Start by understanding the component and environment metadata, then correct the smallest underlying mismatch. Avoid forcing a deployment or adding client-side workarounds before the root cause is understood.</p>
      </div>
    </section>
  );
}
