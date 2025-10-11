const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">ABOUT ME</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Protecting digital assets through offensive security expertise
          </h3>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Security Engineer with 3+ years of experience specializing in penetration testing, 
              vulnerability management, and secure software development. Currently pursuing my Master's 
              in Cybersecurity at Northeastern University, I bring real-world enterprise security 
              expertise from companies like Entegris and Deloitte.
            </p>
            <p>
              My approach combines offensive security techniques with a deep understanding of secure 
              development practices. I've architected vulnerability management programs across 12,000+ 
              assets, integrated security into CI/CD pipelines, and helped organizations achieve 
              compliance with ISO 27001, SOC 2, and PCI DSS standards.
            </p>
            <p>
              With certifications including OSCP, CRTO, and CEH, I stay at the forefront of security 
              research and techniques. My passion lies in finding vulnerabilities before attackers do 
              and building security into every layer of an organization's infrastructure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Security Assessments", value: "50+" },
              { label: "Assets Secured", value: "12K+" },
              { label: "Certifications", value: "4" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
