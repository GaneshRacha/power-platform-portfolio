import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { disciplines } from "@/data/disciplines";
import { implementations } from "@/data/implementations";
import { profile } from "@/data/profile";

export default function SkillsPage() {
  return <section className="container-shell py-20"><SectionHeading eyebrow="Skills" title="A connected Power Platform engineering toolkit" body="Skills are grouped by engineering responsibility rather than presented as one long keyword list." />
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{disciplines.map((d) => { const count = implementations.filter((i) => i.category === d.category).length; return <article key={d.category} className="glass card-hover rounded-2xl p-6"><div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[.16em] text-sky-300">{d.focus}</span>{count > 0 && <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">{count} patterns</span>}</div><h2 className="mt-4 text-xl font-semibold text-white">{d.label}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{d.description}</p></article> })}</div>
    <div className="mt-12 glass rounded-3xl p-7"><h2 className="text-2xl font-semibold text-white">Core technology stack</h2><div className="mt-5 flex flex-wrap gap-2">{profile.focus.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div><div className="mt-7"><Link href="/implementations" className="primary-cta rounded-xl px-5 py-3 text-sm font-semibold">Explore implementation evidence →</Link></div></div>
  </section>;
}
