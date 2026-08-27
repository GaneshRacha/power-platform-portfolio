export function CodePreview({ title, language, code, note }: { title: string; language: string; code: string; note?: string }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#050b14]">
      <div className="flex items-center justify-between gap-4 border-b border-white/8 bg-white/[.035] px-5 py-3">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          {note && <p className="mt-0.5 text-xs text-slate-500">{note}</p>}
        </div>
        <span className="rounded-md border border-white/10 bg-white/[.04] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.14em] text-emerald-200">{language}</span>
      </div>
      <pre className="code-scroll overflow-x-auto p-5 text-[12px] leading-6 text-slate-300"><code>{code}</code></pre>
    </article>
  );
}
