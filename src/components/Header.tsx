import Link from "next/link";
import { CommandPalette } from "@/components/CommandPalette";
import { profile } from "@/data/profile";

const links = [
  ["Experience", "/experience"],
  ["Work", "/implementations"],
  ["Playbooks", "/playbooks"],
  ["Architecture", "/architecture"],
  ["Resume", "/resume"],
];

const patternsUrl = "https://github.com/GaneshRacha/power-platform-patterns";

export function Header() {
  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="/" className="brand-lockup" aria-label="Ganesh Racha home">
          <span className="brand-mark">GR</span>
          <span className="brand-copy"><strong>Ganesh Racha</strong><small>Power Platform Engineer</small></span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <CommandPalette />
          <a href={patternsUrl} target="_blank" rel="noreferrer" className="header-github">Patterns ↗</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="header-github">GitHub ↗</a>
          <Link href="/contact" className="header-contact">Connect <span>↗</span></Link>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div className="mobile-nav-panel">
              {[...links, ["Skills", "/skills"], ["Troubleshooting", "/troubleshooting"], ["AI & Learning", "/ai-learning"], ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <a href={patternsUrl} target="_blank" rel="noreferrer">Pattern Library ↗</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
