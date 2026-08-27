import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-grid">
        <div>
          <div className="footer-mark">GR</div>
          <h2>Build the platform.<br />Engineer the edges.</h2>
          <p>A portfolio of reusable Power Platform patterns, architecture decisions, and production engineering practices.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/implementations">Implementations</Link><Link href="/playbooks">Playbooks</Link><Link href="/architecture">Architecture</Link><Link href="/troubleshooting">Troubleshooting</Link></div>
          <div><span>Profile</span><Link href="/experience">Experience</Link><Link href="/skills">Skills</Link><Link href="/resume">Resume</Link><a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="container-shell footer-bottom"><p>© 2026 {profile.name}</p><p>Power Platform · Dataverse · Custom Engineering</p></div>
    </footer>
  );
}
