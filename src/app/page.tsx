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
            <div className="hero-actions">
              <Link href="/implementations" className="cta-solid">Explore engineering work <span>↗</span></Link>
              <Link href="/resume" className="cta-ghost">View resume</Link>
            </div>
            <div className="hero-note"><span>{implementations.length} patterns</span><i /> <span>{playbooks.length} playbooks</span><i /> <span>{disciplines.length} disciplines</span></div>
          </div>
          <div className="hero-visual" data-reveal>
            <CapabilityOrbit />
            <div className="hero-visual-caption"><span>01</span><p>Interactive capability map</p><small>client → data → server → integration → release</small></div>
          </div>
        </div>
        <div className="hero-scroll-cue"><span>SCROLL</span><i /></div>
      </section>

      <TechMarquee />

      <section className="section-v7 container-shell luminous-panel" data-reveal>
        <div className="section-intro split-intro">
          <div><span className="section-number">01 / SELECTED WORK</span><h2>Not a gallery of apps.<br />A library of engineering decisions.</h2></div>
          <p>The public portfolio strips away client-specific business names and keeps the reusable engineering underneath: component patterns, server logic, integration boundaries, ALM recovery, security, and data architecture.</p>
        </div>
        <div className="work-bento">
          {featuredItems.map(({ item, number, eyebrow, label }, index) => (
            <SpotlightLink key={item.slug} href={`/implementations/${item.slug}`} className={`work-tile tile-${index + 1}`}>
              <div className="work-tile-top"><span>{number}</span><span>{item.category} · {item.level}</span></div>
              <div className="work-glyph" aria-hidden="true">{index === 0 ? "◫" : index === 1 ? "⌁" : index === 2 ? "◇" : "⌘"}</div>
              <div className="work-tile-body"><p>{eyebrow}</p><h3>{label}</h3><small>{item.summary}</small></div>
              <div className="work-tags">{item.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="work-arrow">↗</div>
            </SpotlightLink>
          ))}
        </div>
        <div className="section-link-row"><Link href="/implementations">Browse all {implementations.length} implementation patterns <span>→</span></Link></div>
      </section>

      <section className="metric-section" data-reveal><div className="container-shell"><MetricStrip implementations={implementations.length} disciplines={disciplines.length} playbooks={playbooks.length} /></div></section>

      <section className="section-v7 container-shell" data-reveal>
        <div className="section-intro split-intro">
          <div><span className="section-number">02 / SYSTEM MAP</span><h2>One platform.<br />Six deliberate execution layers.</h2></div>
          <p>Good Power Platform engineering is often a placement decision: what belongs on the form, what belongs in Dataverse, what must execute on the server, and what should be handled asynchronously or outside the platform.</p>
        </div>
        <div className="layer-stack">
          {layerMap.map(([number, title, stack, text]) => <div className="layer-row" key={number}><span>{number}</span><h3>{title}</h3><p className="layer-stack-name">{stack}</p><p className="layer-desc">{text}</p><i aria-hidden="true">↗</i></div>)}
        </div>
        <div className="section-link-row"><Link href="/architecture">Explore architecture patterns <span>→</span></Link></div>
      </section>

      <section className="playbook-band" data-reveal>
        <div className="container-shell">
          <div className="section-intro split-intro light-intro"><div><span className="section-number">03 / SOLUTION PLAYBOOKS</span><h2>See how the pieces connect.</h2></div><p>Playbooks connect individual patterns into realistic end-to-end solution shapes across UX, data, server logic, automation, integration, security, and delivery.</p></div>
          <div className="playbook-scroll">{playbooks.slice(0, 6).map((playbook, index) => <Link key={playbook.slug} href={`/playbooks#${playbook.slug}`} className="playbook-card-v7"><div className="playbook-card-number">{String(index + 1).padStart(2, "0")}</div><span>{playbook.eyebrow}</span><h3>{playbook.title}</h3><p>{playbook.summary}</p><div className="mini-flow">{playbook.layers.slice(0, 4).map((layer, layerIndex) => <span key={layer}>{layer}{layerIndex < Math.min(3, playbook.layers.length - 1) && <i>→</i>}</span>)}</div><small>{playbook.implementationSlugs.length} connected patterns ↗</small></Link>)}</div>
          <div className="section-link-row light-link"><Link href="/playbooks">View all solution playbooks <span>→</span></Link></div>
        </div>
      </section>

      <section className="section-v7 container-shell" data-reveal>
        <div className="section-intro split-intro"><div><span className="section-number">04 / EXPERIENCE</span><h2>Built around delivery,<br />not just demos.</h2></div><p>The experience timeline connects technical depth to professional delivery across Power Platform, Azure integration, analytics, data engineering, release validation, and production support.</p></div>
        <ExperienceRail />
      </section>

      <section className="section-v7 container-shell luminous-panel luminous-panel-mint" data-reveal>
        <div className="section-intro split-intro"><div><span className="section-number">05 / DISCIPLINES</span><h2>A broad toolkit.<br />A consistent engineering model.</h2></div><p>From low-code experience design to C# plugins, Azure integrations, analytics, and ALM, each discipline is presented as part of one connected platform.</p></div>
        <div className="discipline-cloud">{disciplines.map((discipline, index) => <Link href="/skills" key={discipline.category} className={index % 5 === 0 ? "discipline-pill wide" : "discipline-pill"}><span>{discipline.label}</span><small>{discipline.focus}</small></Link>)}</div>
      </section>

      <section className="closing-panel" data-reveal><div className="container-shell closing-panel-inner"><span>06 / NEXT</span><h2>Explore the system behind the screen.</h2><p>Browse reusable implementations, architecture decisions, production troubleshooting, and the resume that connects them to real delivery.</p><div><Link href="/implementations" className="cta-solid">Explore work <span>↗</span></Link><a href={profile.githubUrl} target="_blank" rel="noreferrer" className="cta-ghost">GitHub <span>↗</span></a><Link href="/contact" className="cta-ghost">Connect</Link></div></div></section>
    </>
  );
}
