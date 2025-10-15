import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Entegris",
    role: "Security Engineer",
    location: "Billerica, MA, USA",
    period: "Jan 2024 – Dec 2024",
    achievements: [
      "Monitored organizational infrastructure using Secureworks and TrendMicro, drafting SOPs and Root Cause Analysis ",
      "Implemented vulnerability management program using Tenable and Microsoft Sentinel, improving patch deployment ",
      "Architected SAST/DAST integration in CI/CD pipeline with Snyk and Burp Suite to shift security left",
      "Automated security workflows using Microsoft Graph API and JIRA to streamline operations",
    ],
  },
  {
    company: "Deloitte",
    role: "Security Engineer (USI Advisory)",
    location: "Hyderabad, India",
    period: "May 2020 – Dec 2022",
    achievements: [
      "Built and led application security programs covering threat modeling, risk assessments, and secure development practices.",
      "Integrated tools like SonarQube, Snyk, and Checkmarx into the SDLC to improve code security and quality.",
      "Performed penetration testing and secure code reviews for web applications and APIs using Burp Suite and Veracode.",
      "Deployed WAF protection and managed vulnerabilities with Qualys to strengthen overall application defenses.",
      "Created Python scripts to automate exploit chains for web applications.",
      "Trained developers on OWASP Top 10, secure authentication, and input validation best practices.",

    ],
  },
  {
    company: "Sonata Software",
    role: "Security Analyst Intern",
    location: "Hyderabad, India",
    period: "Jan 2019 – Jun 2019",
    achievements: [
      "Created Python tools that automate security testing using REST APIs.",
"Explored web fuzzing and exploit techniques to find vulnerabilities and suggest fixes"
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
