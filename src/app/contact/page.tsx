import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const conversationAreas = [
  ["Power Platform Engineering", "Dataverse, Model-Driven Apps, JavaScript/TypeScript, PCF, plugins, and Custom APIs"],
  ["Architecture & Integration", "Configuration-driven design, data modeling, REST/OAuth boundaries, Power Automate, and Azure"],
  ["ALM & Troubleshooting", "Managed solutions, dependency sequencing, schema drift, component versions, Git, and release diagnostics"],
];

export default function ContactPage() {
  const contacts = [
    ["GitHub", profile.githubUrl, "Source code and technical documentation"],
    ["LinkedIn", profile.linkedinUrl, "Professional profile and experience"],
    ["Email", profile.email ? `mailto:${profile.email}` : "", "Direct professional contact"],
  ].filter(([, href]) => Boolean(href));

  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="Contact" title="Connect around Power Platform engineering" body="This portfolio is centered on reusable Microsoft Power Platform implementation patterns, architecture decisions, integration boundaries, and enterprise delivery." />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {conversationAreas.map(([title, text]) => (
          <article key={title} className="glass rounded-2xl p-6">
            <h2 className="font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
          </article>
        ))}
      </div>

      {contacts.length > 0 ? (
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contacts.map(([label, href, text]) => (
            <a key={label} href={href} className="glass card-hover rounded-2xl p-6" target={label === "Email" ? undefined : "_blank"} rel="noreferrer">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 font-medium text-white">{text} →</p>
            </a>
          ))}
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/implementations" className="primary-cta rounded-xl px-5 py-3 text-sm font-semibold transition">Explore implementation library</Link>
        <Link href="/resume" className="secondary-cta rounded-xl px-5 py-3 text-sm font-semibold transition">View resume</Link>
      </div>
    </section>
  );
}
