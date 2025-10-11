import { Award } from "lucide-react";

const certifications = [
  {
    name: "Offensive Security Certified Professional",
    abbr: "OSCP",
    issuer: "Offensive Security",
    description: "Industry-leading hands-on penetration testing certification",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Certified Red Team Operator",
    abbr: "CRTO",
    issuer: "Zero-Point Security",
    description: "Advanced adversary simulation and red team operations",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "CompTIA PenTest+",
    abbr: "PT+",
    issuer: "CompTIA",
    description: "Comprehensive penetration testing and vulnerability assessment",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Certified Ethical Hacker",
    abbr: "CEH",
    issuer: "EC-Council",
    description: "Foundation in ethical hacking methodologies and tools",
    color: "from-green-500 to-teal-500",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">
            CERTIFICATIONS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">
            Professional Credentials
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group relative overflow-hidden"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${cert.color} opacity-80`}
                />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <Award className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-1">{cert.abbr}</div>
                    <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
