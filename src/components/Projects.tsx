import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise Vulnerability Management System",
    description:
      "Architected and deployed comprehensive vulnerability management across 12,000+ assets using Tenable and Microsoft Sentinel. Integrated CISA KEV and MISP threat intelligence for prioritized remediation.",
    technologies: ["Tenable", "Microsoft Sentinel", "Python", "MISP"],
    impact: "40% faster patch deployment for critical vulnerabilities",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Secure CI/CD Pipeline Integration",
    description:
      "Implemented SAST/DAST security scanning within CI/CD pipeline using Snyk and Burp Suite Enterprise. Achieved significant reduction in production security findings through shift-left practices.",
    technologies: ["Snyk", "Burp Suite", "Jenkins", "GitHub Actions"],
    impact: "65% reduction in production security findings",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "API Security Framework",
    description:
      "Developed comprehensive API security framework with authentication validation, input sanitization, and rate limiting. Reduced security incidents significantly in production environments.",
    technologies: ["Python", "REST APIs", "OAuth", "Rate Limiting"],
    impact: "75% reduction in production security incidents",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Automated Security Testing Suite",
    description:
      "Engineered automated security testing framework using Python and REST APIs. Dramatically reduced manual assessment time while improving vulnerability scan coverage.",
    technologies: ["Python", "REST APIs", "Selenium", "OWASP ZAP"],
    impact: "60% reduction in manual testing time",
    color: "from-orange-500 to-red-500",
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
