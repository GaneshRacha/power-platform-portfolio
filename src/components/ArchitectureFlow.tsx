export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-stretch gap-2">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="flex items-center gap-2">
            <div className="architecture-node min-w-[150px] rounded-2xl border border-white/10 bg-white/[.035] px-4 py-4">
              <span className="text-[10px] font-semibold tracking-[.18em] text-sky-300">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-medium leading-5 text-white">{step}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex w-8 items-center justify-center text-lg text-slate-600" aria-hidden="true">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
