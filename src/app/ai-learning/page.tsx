import { SectionHeading } from "@/components/SectionHeading";

const roadmap = [
  ["01", "Copilot Studio", "Agents, topics, actions, Dataverse grounding, authentication, orchestration, and governance"],
  ["02", "Azure AI Foundry", "Model access, evaluation, prompt/application workflows, monitoring, and responsible AI concepts"],
  ["03", "Azure OpenAI", "Secure enterprise model integration, structured outputs, tool use, application boundaries, and cost awareness"],
  ["04", "Azure AI Search", "Indexing, retrieval, vector and hybrid search, grounding, and enterprise RAG foundations"],
  ["05", "RAG & Knowledge Architecture", "Chunking, metadata, retrieval quality, citation patterns, authorization boundaries, and evaluation"],
  ["06", "Power Platform + AI", "Agent actions, Power Automate orchestration, Dataverse context, human approval, and governed enterprise use cases"],
  ["07", "AI Governance", "Data boundaries, prompt injection awareness, secrets, permissions, auditing, evaluation, and responsible rollout"],
];

const graduationCriteria = [
  "A defined generic use case and architecture",
  "A working implementation or validated prototype",
  "Security and data-boundary considerations",
  "Test/evaluation scenarios",
  "Documented limitations and design decisions",
];

export default function AILearningPage() {
  return (
    <section className="container-shell py-20">
      <SectionHeading eyebrow="AI & learning" title="Building the bridge from Power Platform to enterprise AI" body="This section is intentionally labeled as a learning roadmap. Topics move into the implementation portfolio only after they are built or validated." />
      <div className="mt-10 space-y-4">
        {roadmap.map(([number, title, text]) => (
          <article key={number} className="glass grid gap-4 rounded-2xl p-6 sm:grid-cols-[64px_1fr]">
            <div className="text-2xl font-semibold text-emerald-200">{number}</div>
            <div><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-2 leading-7 text-slate-400">{text}</p></div>
          </article>
        ))}
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[.05] p-6">
          <p className="font-medium text-emerald-100">Portfolio rule</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Learning topics are never presented as completed project experience. As each AI implementation is built, it can graduate into the main implementation library with architecture, validation, and lessons learned.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="font-medium text-white">Graduation criteria</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">{graduationCriteria.map((item) => <li key={item} className="flex gap-3"><span className="text-sky-300">→</span><span>{item}</span></li>)}</ul>
        </div>
      </div>
    </section>
  );
}
