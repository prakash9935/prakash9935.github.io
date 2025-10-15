import { Award, ExternalLink, Star } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Offensive Security Certified Professional",
    abbr: "OSCP",
    issuer: "Offensive Security",
    description: "Industry-leading hands-on penetration testing certification",
    color: "from-red-500 to-orange-500",
    verifyUrl: "https://credentials.offsec.com/63fbff35-07ea-403b-8980-e8255df4bd81",
    credentialId: "OS-101-56847",
  },
  {
    name: "CompTIA PenTest+",
    abbr: "PT+",
    issuer: "CompTIA",
    description: "Comprehensive penetration testing and vulnerability assessment",
    color: "from-blue-500 to-cyan-500",
    verifyUrl: "https://www.credly.com/badges/09095c7e-9404-42e7-8a82-046dcfbf8811/public_url",
    credentialId: "VTVJFZFNLMQ41ETW",
  },
];

const EnhancedCertifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide text-center">
            CERTIFICATIONS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional Credentials
          </h3>

          {/* HackTheBox Featured Banner */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-10 mb-12 shadow-soft-lg relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold mb-2">HackTheBox Profile</h4>
                  <p className="text-muted-foreground">
                    Active security researcher and CTF player. Check out my achievements, writeups, and ranking.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="rounded-full flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-soft-lg flex-shrink-0"
                asChild
              >
                <a
                  href="https://app.hackthebox.com/profile/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View HTB Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid gap-8">
            {certifications.map((cert, index) => (
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
                  className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${cert.color} opacity-80`}
                />

                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-7 h-7 text-primary" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-1">{cert.abbr}</div>
                    <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="font-mono">ID: {cert.credentialId}</span>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-smooth"
                    >
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCertifications;
