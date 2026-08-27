"use client";

import { useMemo, useState } from "react";
import { categories, implementations } from "@/data/implementations";
import { ImplementationCard } from "./ImplementationCard";

const levels = ["All levels", "Core", "Advanced"];

export function ImplementationExplorer() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All levels");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return implementations.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const levelMatch = level === "All levels" || item.level === level;
      const text = [item.title, item.summary, item.category, item.challenge, ...item.technologies, ...item.approach, ...item.considerations, ...item.designDecisions].join(" ").toLowerCase();
      return categoryMatch && levelMatch && (!q || text.includes(q));
    });
  }, [category, level, query]);

  const reset = () => { setCategory("All"); setLevel("All levels"); setQuery(""); };

  return (
    <div>
      <div className="glass mb-8 rounded-2xl p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search PCF, plugins, flows, Azure, ALM..." className="w-full rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-300/40" />
          {(query || category !== "All" || level !== "All levels") && <button onClick={reset} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 hover:text-white">Reset filters</button>}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3 py-1.5 text-xs transition ${category === item ? "bg-sky-300 text-slate-950" : "border border-white/10 text-slate-300 hover:border-white/20"}`}>{item}</button>)}</div>
        <div className="mt-3 flex flex-wrap gap-2 border-t border-white/8 pt-3">{levels.map((item) => <button key={item} onClick={() => setLevel(item)} className={`rounded-full px-3 py-1.5 text-xs transition ${level === item ? "bg-emerald-200 text-slate-950" : "border border-white/10 text-slate-300 hover:border-white/20"}`}>{item}</button>)}</div>
      </div>
      <p className="mb-4 text-sm text-slate-500">Showing {filtered.length} implementation{filtered.length === 1 ? "" : "s"}</p>
      {filtered.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <ImplementationCard key={item.slug} item={item} />)}</div> : <div className="rounded-2xl border border-white/8 bg-white/[.02] p-8 text-center"><h3 className="font-semibold text-white">No matching patterns</h3><button onClick={reset} className="mt-4 text-sm font-medium text-sky-300">Reset filters →</button></div>}
    </div>
  );
}
