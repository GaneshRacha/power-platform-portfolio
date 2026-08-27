import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { implementations } from "@/data/implementations";
import { profile } from "@/data/profile";

const principles = [
  ["Use low-code deliberately", "Use native platform capabilities where they improve maintainability and delivery speed."],
  ["Move authority server-side", "Use plugins and Custom APIs for transactional or authoritative business rules."],
  ["Prefer configuration over branching", "Represent changing business behavior as data when that makes the platform easier to evolve."],
  ["Treat ALM as architecture", "Versioning, dependencies, environment configuration, and release validation are part of solution design."],
  ["Design for support", "Tracing, error handling, diagnostics, and recovery paths matter as much as the happy path."],
  ["Keep public examples generic", "Show technical depth without exposing organization-specific schemas, data, or proprietary source."],
];

export default function AboutPage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="About" title="Power Platform engineering with an enterprise mindset" body="I focus on maintainable Microsoft Power Platform solutions across Canvas Apps, Model-Driven Apps, Power Pages, Dataverse, reusable client components, server-side business logic, secure Azure integrations, analytics, production support, and disciplined ALM." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="glass rounded-2xl p-6 lg:col-span-2"><h2 className="text-xl font-semibold text-white">How I approach solutions</h2><div className="mt-5 space-y-4 leading-7 text-slate-400"><p>I use low-code capabilities where they provide maintainability and speed, and custom code where reusable UX, authoritative validation, transactional processing, or secure integration requires it.</p><p>I prefer generic engineering patterns over application-specific scripts: configuration-driven behavior, PCF components, centralized Web API helpers, explicit data relationships, clear client/server boundaries, and solution-aware deployment practices.</p></div><div className="mt-6 flex flex-wrap gap-3"><Link href="/implementations" className="primary-cta rounded-xl px-4 py-2.5 text-sm font-semibold">Explore {implementations.length} patterns</Link><Link href="/architecture" className="secondary-cta rounded-xl px-4 py-2.5 text-sm font-semibold">Architecture</Link><Link href="/experience" className="secondary-cta rounded-xl px-4 py-2.5 text-sm font-semibold">Experience</Link></div></div>
        <div className="glass rounded-2xl p-6"><h2 className="text-xl font-semibold text-white">Certifications</h2><div className="mt-5 space-y-3">{profile.certifications.map((cert) => <div key={cert} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">{cert}</div>)}</div></div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{principles.map(([title, text]) => <article key={title} className="glass rounded-2xl p-6"><h2 className="font-semibold text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></article>)}</div>
      <div className="mt-5 glass rounded-2xl p-6"><h2 className="text-xl font-semibold text-white">Core toolkit</h2><div className="mt-5 flex flex-wrap gap-2">{profile.focus.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div></div>
    </section>
  );
}
