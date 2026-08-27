import Link from "next/link";
import { CapabilityOrbit } from "@/components/CapabilityOrbit";
import { TechMarquee } from "@/components/TechMarquee";
import { MetricStrip } from "@/components/MetricStrip";
import { SpotlightLink } from "@/components/SpotlightLink";
import { ExperienceRail } from "@/components/ExperienceRail";
import { disciplines } from "@/data/disciplines";
import { implementations } from "@/data/implementations";
import { playbooks } from "@/data/playbooks";
import { profile } from "@/data/profile";

const profilePhoto = "data:image/webp;base64,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";

const featured = [
  ["generic-record-selector-pcf", "01", "Component system", "Reusable PCF architecture"],
  ["secure-service-integration", "02", "Integration boundary", "Secure external service gateway"],
  ["configuration-driven-status-bpf", "03", "Platform architecture", "Configuration-driven process engine"],
  ["solution-import-troubleshooting", "04", "Release engineering", "Dataverse ALM recovery"],
];

const layerMap = [
  ["01", "Experience", "Canvas Apps · Model-Driven Apps · Power Pages", "Context-aware UX, validation, navigation and role-focused experiences."],
  ["02", "Extensibility", "JavaScript · TypeScript · PCF", "Reusable client behavior and custom controls when standard components are not enough."],
  ["03", "Data", "Dataverse · Configuration · History", "Normalized models, effective-dated rules, explicit relationships and traceable configuration."],
  ["04", "Server", "C# Plugins · Custom APIs", "Authoritative calculations, synchronization, transactions and reusable command boundaries."],
  ["05", "Automation", "Power Automate · Azure · REST", "Asynchronous orchestration, secure integrations, scheduled sync and resilient processing."],
  ["06", "Delivery", "Security · ALM · Git · DevOps", "Least privilege, dependency control, version traceability and production-ready releases."],
];

export default function Home() {
  const featuredItems = featured.flatMap(([slug, number, eyebrow, label]) => {
    const item = implementations.find((entry) => entry.slug === slug);
    return item ? [{ item, number, eyebrow, label }] : [];
  });

  return (
    <>
      <section className="hero-v7">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container-shell hero-v7-inner">
          <div className="hero-copy" data-reveal>
            <div className="hero-kicker"><span className="live-dot" /> Microsoft Power Platform · Solution Engineering</div>
            <h1>Engineering the <em>parts</em> of Power Platform that forms alone can’t solve.</h1>
            <p>{profile.tagline}</p>
            <div className="hero-actions"><Link href="/implementations" className="cta-solid">Explore engineering work <span>↗</span></Link><Link href="/resume" className="cta-ghost">View resume</Link></div>
            <div className="hero-note"><span>{implementations.length} patterns</span><i /><span>{playbooks.length} playbooks</span><i /><span>{disciplines.length} disciplines</span></div>
          </div>
          <div className="hero-visual" data-reveal>
            <CapabilityOrbit />
            <div className="hero-profile-card"><img src={profilePhoto} alt="Ganesh Racha" /><div className="hero-profile-overlay"><span>GANESH RACHA</span><small>Power Platform Developer</small></div></div>
            <div className="hero-visual-caption"><span>01</span><p>Engineering capability map</p><small>client → data → server → integration → release</small></div>
          </div>
        </div>
        <div className="hero-scroll-cue"><span>SCROLL</span><i /></div>
      </section>

      <TechMarquee />

      <section className="section-v7 container-shell luminous-panel" data-reveal>
        <div className="section-intro split-intro"><div><span className="section-number">01 / SELECTED WORK</span><h2>Not a gallery of apps.<br />A library of engineering decisions.</h2></div><p>The public portfolio strips away client-specific business names and keeps the reusable engineering underneath: component patterns, server logic, integration boundaries, ALM recovery, security, and data architecture.</p></div>
        <div className="work-bento">{featuredItems.map(({ item, number, eyebrow, label }, index) => <SpotlightLink key={item.slug} href={`/implementations/${item.slug}`} className={`work-tile tile-${index + 1}`}><div className="work-tile-top"><span>{number}</span><span>{item.category} · {item.level}</span></div><div className="work-glyph" aria-hidden="true">{index === 0 ? "◫" : index === 1 ? "⌁" : index === 2 ? "◇" : "⌘"}</div><div className="work-tile-body"><p>{eyebrow}</p><h3>{label}</h3><small>{item.summary}</small></div><div className="work-tags">{item.technologies.slice(0,4).map((tech)=><span key={tech}>{tech}</span>)}</div><div className="work-arrow">↗</div></SpotlightLink>)}</div>
        <div className="section-link-row"><Link href="/implementations">Browse all {implementations.length} implementation patterns <span>→</span></Link></div>
      </section>

      <section className="metric-section" data-reveal><div className="container-shell"><MetricStrip implementations={implementations.length} disciplines={disciplines.length} playbooks={playbooks.length} /></div></section>

      <section className="section-v7 container-shell" data-reveal><div className="section-intro split-intro"><div><span className="section-number">02 / SYSTEM MAP</span><h2>One platform.<br />Six deliberate execution layers.</h2></div><p>Good Power Platform engineering is often a placement decision: what belongs on the form, what belongs in Dataverse, what must execute on the server, and what should be handled asynchronously or outside the platform.</p></div><div className="layer-stack">{layerMap.map(([number,title,stack,text])=><div className="layer-row" key={number}><span>{number}</span><h3>{title}</h3><p className="layer-stack-name">{stack}</p><p className="layer-desc">{text}</p><i aria-hidden="true">↗</i></div>)}</div><div className="section-link-row"><Link href="/architecture">Explore architecture patterns <span>→</span></Link></div></section>

      <section className="playbook-band" data-reveal><div className="container-shell"><div className="section-intro split-intro light-intro"><div><span className="section-number">03 / SOLUTION PLAYBOOKS</span><h2>See how the pieces connect.</h2></div><p>Individual patterns show one technical decision. Playbooks connect them into realistic end-to-end solution shapes across UX, data, server logic, automation, integration, security, and delivery.</p></div><div className="playbook-scroll">{playbooks.slice(0,6).map((playbook,index)=><Link key={playbook.slug} href={`/playbooks#${playbook.slug}`} className="playbook-card-v7"><div className="playbook-card-number">{String(index+1).padStart(2,"0")}</div><span>{playbook.eyebrow}</span><h3>{playbook.title}</h3><p>{playbook.summary}</p><div className="mini-flow">{playbook.layers.slice(0,4).map((layer,layerIndex)=><span key={layer}>{layer}{layerIndex < Math.min(3,playbook.layers.length-1) && <i>→</i>}</span>)}</div><small>{playbook.implementationSlugs.length} connected patterns ↗</small></Link>)}</div><div className="section-link-row light-link"><Link href="/playbooks">View all solution playbooks <span>→</span></Link></div></div></section>

      <section className="section-v7 container-shell" data-reveal><div className="section-intro split-intro"><div><span className="section-number">04 / EXPERIENCE</span><h2>Built around delivery,<br />not just demos.</h2></div><p>The implementation library is intentionally generic. The experience timeline connects that technical depth to professional delivery across Power Platform, Azure integration, analytics, data engineering, release validation, and production support.</p></div><ExperienceRail /></section>

      <section className="section-v7 container-shell luminous-panel luminous-panel-mint" data-reveal><div className="section-intro split-intro"><div><span className="section-number">05 / DISCIPLINES</span><h2>A broad toolkit.<br />A consistent engineering model.</h2></div><p>From low-code experience design to C# plugins, Azure integrations, analytics, and ALM, each discipline is presented as part of one connected platform rather than a standalone badge.</p></div><div className="discipline-cloud">{disciplines.map((discipline,index)=><Link href="/skills" key={discipline.category} className={index%5===0?"discipline-pill wide":"discipline-pill"}><span>{discipline.label}</span><small>{discipline.focus}</small></Link>)}</div></section>

      <section className="closing-panel" data-reveal><div className="container-shell closing-panel-inner"><span>06 / NEXT</span><h2>Explore the system behind the screen.</h2><p>Browse reusable implementations, architecture decisions, production troubleshooting, and the resume that connects them to real delivery.</p><div><Link href="/implementations" className="cta-solid">Explore work <span>↗</span></Link><a href="https://github.com/GaneshRacha/power-platform-patterns" target="_blank" rel="noreferrer" className="cta-ghost">Pattern library <span>↗</span></a><Link href="/contact" className="cta-ghost">Connect</Link></div></div></section>
    </>
  );
}
