import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide text-center">
            EDUCATION
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Academic Background
          </h3>

          <motion.div
            className="glass rounded-3xl p-8 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <div className="text-lg font-semibold">Master of Science in Cybersecurity</div>
                <div className="text-primary font-medium">Northeastern University, Boston, MA</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Jan 2023 – Apr 2025 | GPA: 3.84/4.0
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">Teaching Assistant: CY3740 Systems Security</div>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Mentored 40+ students on challenges in Web Security, Binary Analysis, and Reverse Engineering.</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">B.Tech in Computer Science</div>
                <div className="text-primary font-medium">GITAM University, Visakhapatnam, India</div>
                <div className="text-sm text-muted-foreground mt-1">
                  May 2016 – Apr 2020 | GPA: 8.9/10
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;


