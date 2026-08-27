"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const routes = [
  ["Home", "/", "Overview and selected engineering work"], ["Experience", "/experience", "Professional delivery timeline"],
  ["Skills", "/skills", "Technical capability map"], ["Implementations", "/implementations", "Reusable engineering patterns"],
  ["Solution Playbooks", "/playbooks", "End-to-end architecture scenarios"], ["Architecture", "/architecture", "Design patterns and system boundaries"],
  ["Troubleshooting", "/troubleshooting", "ALM and production problem solving"], ["AI & Learning", "/ai-learning", "Power Platform + AI roadmap"],
  ["Resume", "/resume", "Interactive resume"], ["Contact", "/contact", "Connect"],
];

export function CommandPalette() {
  const [open,setOpen]=useState(false); const [query,setQuery]=useState(""); const router=useRouter();
  useEffect(()=>{const h=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setOpen(v=>!v)} if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h)},[]);
  const filtered=useMemo(()=>{const q=query.trim().toLowerCase();return !q?routes:routes.filter(([n,,d])=>`${n} ${d}`.toLowerCase().includes(q))},[query]);
  const go=(href:string)=>{setOpen(false);setQuery("");router.push(href)};
  return <><button type="button" onClick={()=>setOpen(true)} className="command-trigger"><span>Jump to</span><kbd>⌘K</kbd></button>{open&&<div className="command-backdrop" onMouseDown={()=>setOpen(false)}><div className="command-panel" onMouseDown={e=>e.stopPropagation()}><div className="command-search-row"><span>⌕</span><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search pages…"/><kbd>ESC</kbd></div><div className="command-results">{filtered.map(([n,h,d])=><button key={h} type="button" onClick={()=>go(h)} className="command-result"><span><strong>{n}</strong><small>{d}</small></span><span>↗</span></button>)}</div></div></div>}</>;
}
