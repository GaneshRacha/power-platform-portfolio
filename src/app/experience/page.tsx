import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, impactHighlights } from "@/data/resume";

const capabilityLinks = [
  ["Application engineering", "/implementations", "Canvas Apps, Model-Driven Apps, Power Pages, JavaScript, and PCF."],
  ["Data & server logic", "/architecture", "Dataverse modeling, plugins, Custom APIs, configuration, and history."],
  ["Automation & integration", "/playbooks", "Power Automate, REST, Azure Functions, Logic Apps, and secure service boundaries."],
  ["Delivery & reliability", "/troubleshooting", "ALM, release validation, defect triage, RCA, and production support."],
];

export default function ExperiencePage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Experience" title="Enterprise delivery across apps, data, automation, integration, and operations" body="My experience spans end-to-end Power Platform delivery, custom engineering, Azure integration, analytics, data reliability, production support, and ALM." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{impactHighlights.map((item) => <article key={item.label} className="glass rounded-2xl p-5"><p className="text-3xl font-semibold text-white">{item.value}</p><p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p></article>)}</div>
      <div className="mt-14"><p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">Professional timeline</p><div className="relative mt-6 space-y-6 before:absolute before:bottom-4 before:left-[9px] before:top-4 before:w-px before:bg-white/10 sm:before:left-[11px]">{experience.map((item) => <article key={`${item.company}-${item.period}`} className="relative pl-9 sm:pl-11"><div className="absolute left-0 top-8 h-5 w-5 rounded-full border-4 border-[#07101f] bg-sky-300 sm:h-6 sm:w-6" /><div className="glass rounded-3xl p-6 sm:p-8"><div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-emerald-200">{item.period}</p><h2 className="mt-3 text-2xl font-semibold text-white">{item.role}</h2><p className="mt-1 text-sm text-slate-400">{item.company} · {item.location}</p></div><div className="flex max-w-xl flex-wrap gap-2">{item.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-xs text-slate-300">{tech}</span>)}</div></div><div className="mt-6 grid gap-6 lg:grid-cols-[.7fr_1.5fr]"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-sky-300">Focus areas</p><div className="mt-3 space-y-2">{item.focusAreas.map((focus) => <div key={focus} className="rounded-xl border border-white/8 bg-white/[.025] px-4 py-3 text-sm text-slate-300">{focus}</div>)}</div></div><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-sky-300">Selected responsibilities & impact</p><ul className="mt-3 space-y-3 text-sm leading-7 text-slate-400">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="text-emerald-300">◆</span><span>{bullet}</span></li>)}</ul></div></div></div></article>)}</div></div>
      <div className="mt-16"><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-200">Experience → evidence</p><h2 className="mt-3 text-2xl font-semibold text-white">Explore the engineering behind the resume</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{capabilityLinks.map(([title, href, body]) => <Link key={title} href={href} className="glass card-hover rounded-2xl p-6"><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p><p className="mt-4 text-sm font-medium text-sky-300">Explore evidence →</p></Link>)}</div></div>
      <div className="mt-12 flex flex-wrap gap-3"><Link href="/resume" className="primary-cta rounded-xl px-5 py-3 text-sm font-semibold">View resume →</Link><Link href="/implementations" className="secondary-cta rounded-xl px-5 py-3 text-sm font-semibold">Browse implementation library</Link></div>
    </section>
  );
}
