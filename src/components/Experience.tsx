import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Northeastern University",
    role: "Security Research Assistant – Adversarial Security Testing",
    location: "Boston, MA",
    period: "Jul 2025 – Present",
    achievements: [
      "Researched exploitation techniques for modern application architectures, developing proof-of-concept exploits for business logic flaws, authentication bypasses, and behavioral vulnerabilities",
      "Built reusable adversarial testing tools and attack libraries in Python for identifying complex vulnerability patterns including SSRF, deserialization attacks, and authorization bypass",
    ],
  },
  {
    company: "Entegris",
    role: "Security Engineer Co-op – Offensive Security & Red Teaming",
    location: "Billerica, MA, USA",
    period: "Jan 2024 – Sep 2024",
    achievements: [
      "Executed red-teaming exercises against 25+ web applications and APIs, identifying 50+ critical vulnerabilities including BOLA, BFLA, privilege escalation, and business logic flaws",
      "Conducted threat modeling using STRIDE methodology and developed 5 custom Python tools for automated vulnerability detection, achieving 95% remediation rate",
      "Performed AWS cloud security assessments evaluating Lambda functions, API Gateway, S3, and IAM configurations for misconfigurations and privilege escalation paths",
    ],
  },
  {
    company: "Deloitte",
    role: "Security Consultant ",
    location: "Hyderabad, India",
    period: "Nov 2020 – Dec 2022",
    achievements: [
      "Delivered 40+ adversarial security assessments following OWASP methodologies, identifying critical vulnerabilities in authentication, authorization, and business logic",
      "Performed comprehensive API security testing on REST, GraphQL, and SOAP APIs, exploiting vulnerabilities including broken authentication and excessive data exposure",
      "Conducted secure architecture reviews and threat modeling sessions, analyzing service workflows and trust boundaries to identify systemic security weaknesses",
      "Executed source code security reviews using automated tools (Fortify, Checkmarx, SonarQube) and built automated testing frameworks for continuous security assessment",
    ],
  },
  {
    company: "Sonata Software",
    role: "Security Testing Intern",
    location: "Hyderabad, India",
    period: "Jan 2019 – Jun 2019",
    achievements: [
      "Conducted offensive security testing identifying OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, and broken authentication using Burp Suite",
      "Assisted in API security assessments performing authentication testing, authorization bypass attempts, and business logic flaw identification for RESTful services",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">EXPERIENCE</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Work History</h3>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-smooth"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-lg text-primary font-semibold mb-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
