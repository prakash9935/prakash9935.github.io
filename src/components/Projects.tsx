import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "OWASP crAPI (REST API Vulnerability Analysis)",
    description:
      "Identified security vulnerabilities in web APIs by mapping endpoints, analyzing traffic for data leaks, and testing authentication controls. Bypassed API authorization logic (BOLA, BFLA) and successfully exploited SSRF and Mass Assignment vulnerabilities in a lab environment.",
    technologies: [
      "OWASP crAPI",
      "REST API",
      "BOLA",
      "BFLA",
      "SSRF",
      "Mass Assignment",
      "Auth Testing",
    ],
    impact: "Demonstrated end-to-end API abuse paths and mitigation priorities",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "LLM Security Gateway",
    description:
      "Developed a centralized GenAI security gateway to securely process user prompts for LLMs (OpenAI, Anthropic, AWS Bedrock). Intercepts prompts before they reach providers, using llm-guard for input/output validation to prevent jailbreaks. Integrated LangFuse to observe content policy violations across model providers, enabling prompt-level debugging and monitoring.",
    technologies: [
      "llm-guard",
      "OpenAI",
      "Anthropic",
      "AWS Bedrock",
      "LangFuse",
      "Prompt Security",
    ],
    impact: "Reduced jailbreak risk and added cross-provider observability",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "ABAC and RBAC Cloud & Kubernetes Security",
    description:
      "Simulated cloud attacks in AWS targeting S3 misconfigurations and IAM privilege escalation paths. Configured and exploited Kubernetes pods/clusters locally to demonstrate hardening techniques for containerized workloads.",
    technologies: [
      "AWS",
      "S3",
      "IAM",
      "Kubernetes",
      "Containers",
      "RBAC",
      "ABAC",
    ],
    impact: "Documented misconfiguration findings and produced hardening guidance for cloud and k8s.",
    color: "from-amber-500 to-orange-600",
    showActions: false,
  },
  {
    title: "Regex DoS and Side-Channel Attacks",
    description:
      "Devised a RegEx Denial of Service vector to bypass an authentication form in a lab setup using algorithmic complexity analysis. Automated a Python-based side-channel attack on a sample social platform to infer hidden information.",
    technologies: [
      "Regex DoS",
      "Algorithmic Complexity",
      "Side-Channel",
      "Python",
      "AppSec",
    ],
    impact: "Showcased exploit feasibility and provided mitigations for input validation and timing leaks.",
    color: "from-emerald-500 to-teal-600",
    showActions: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide text-center">
            PROJECTS & IMPACT
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured Work
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth`}
                />

                <h4 className="text-xl font-bold mb-3 relative z-10">{project.title}</h4>
                <p className="text-muted-foreground mb-4 relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border relative z-10">
                  <div className="text-sm font-semibold text-primary mb-2">Impact</div>
                  <div className="text-sm text-muted-foreground">{project.impact}</div>
                </div>

                {project.showActions !== false && (
                  <div className="flex gap-3 mt-6 relative z-10">
                    <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
