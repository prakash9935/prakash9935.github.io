import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">ABOUT ME</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Protecting digital assets through offensive security expertise
            </h3>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p> I’m a Security Engineer with over three years of experience in application security, security operations, and penetration testing. I earned my Master’s in Cybersecurity from Northeastern University and have worked on enterprise security projects at Entegris and Deloitte. </p> 
            <p> I take a hands-on approach, combining offensive testing with secure development practices. I’ve helped build vulnerability management programs, integrated security into CI/CD pipelines, and supported organizations in meeting compliance standards like ISO 27001, SOC 2, and PCI DSS. </p> 
            <p> Certified in OSCP, CRTO, and CEH, I focus on improving security posture across applications and infrastructure. </p>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Security Assessments", value: "50+" },
              { label: "Assets Secured", value: "12K+" },
              { label: "Certifications", value: "4" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
