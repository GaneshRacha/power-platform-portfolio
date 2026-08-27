"use client";

import { useEffect, useRef, useState } from "react";

function Metric({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || frame) return;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 850);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .35 });
    observer.observe(node);
    return () => { observer.disconnect(); if (frame) cancelAnimationFrame(frame); };
  }, [value]);

  return <div ref={ref} className="metric-item"><strong>{display}</strong><span>{label}</span></div>;
}

export function MetricStrip({ implementations, disciplines, playbooks }: { implementations: number; disciplines: number; playbooks: number }) {
  return (
    <div className="metric-strip">
      <Metric value={implementations} label="Engineering patterns" />
      <Metric value={disciplines} label="Disciplines" />
      <Metric value={playbooks} label="Solution playbooks" />
      <div className="metric-item metric-text"><strong>ALM</strong><span>Delivery-minded engineering</span></div>
    </div>
  );
}
