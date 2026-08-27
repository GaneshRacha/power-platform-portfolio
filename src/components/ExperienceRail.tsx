import Link from "next/link";
import { experience } from "@/data/resume";

export function ExperienceRail() {
  return (
    <div className="experience-rail">
      <div className="experience-line" aria-hidden="true" />
      {experience.map((item, index) => (
        <article className="experience-stop" key={`${item.company}-${item.period}`}>
          <span className="experience-dot" aria-hidden="true"><i /></span>
          <div className="experience-index">0{index + 1}</div>
          <p className="experience-period">{item.period}</p>
          <h3>{item.role}</h3>
          <p className="experience-company">{item.company}</p>
          <p className="experience-summary">{item.bullets[0]}</p>
          <div className="experience-tech">{item.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
        </article>
      ))}
      <Link href="/experience" className="experience-more">Full experience →</Link>
    </div>
  );
}
