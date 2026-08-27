import Link from "next/link";
import type { Implementation } from "@/data/implementations";

export function ImplementationCard({ item }: { item: Implementation }) {
  return (
    <Link href={`/implementations/${item.slug}`} className="glass card-hover block rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-white/6 px-3 py-1 text-xs text-slate-300">{item.category}</span>
        <span className="text-xs text-emerald-200">{item.level}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-md border border-white/8 px-2 py-1 text-xs text-slate-400">{tech}</span>
        ))}
      </div>
      <p className="mt-5 text-sm font-medium text-sky-300">View implementation →</p>
    </Link>
  );
}
