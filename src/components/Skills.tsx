import { Shield, Code, Cloud, Lock, Bug, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Shield,
    title: "Security Domains",
    skills: [
      "Web Penetration Testing",
      "Cloud Security",
      "Network Penetration Testing",
      "Threat Modeling",
      "Secure Code Review",
      "Active Directory",
      "Vulnerability Assessment",
      "OWASP Top 10",
    ],
  },
  {
    icon: Terminal,
    title: "Programming",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    icon: Bug,
    title: "Security Tools",
    skills: [
      "Burp Suite",
      "Metasploit",
      "Nessus/Tenable",
      "OWASP ZAP",
      "Snyk",
      "Semgrep",
      "Ghidra",
      "IDA Pro",
      "Qualys",
    ],
  },
  {
    icon: Cloud,
    title: "DevSecOps",
    skills: [
      "CI/CD Integration",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Terraform",
      "SAST/DAST",
    ],
  },
  {
    icon: Lock,
    title: "Frameworks",
    skills: [
      "ISO 27001",
      "PCI DSS",
      "NIST SP 800-53",
      "SOC 2",
      "MITRE ATT&CK",
      "HI-TRUST",
    ],
  },
  {
    icon: Code,
    title: "Specializations",
    skills: [
      "Binary Analysis",
      "Reverse Engineering",
      "Exploit Development",
      "API Security",
      "Incident Response",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">SKILLS</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Technical Expertise</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
