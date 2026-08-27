"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

export function SpotlightLink({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--card-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--card-y", `${event.clientY - rect.top}px`);
  };

  return <Link href={href} onMouseMove={move} className={`spotlight-card ${className}`}>{children}</Link>;
}
