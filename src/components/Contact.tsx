import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide text-center">
            CONTACT
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Let's Work Together
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Whether you're looking to strengthen your security posture, need a penetration test,
            or want to discuss security opportunities, I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-6">Get in Touch</h4>

              <a
                href="mailto:geesala.s@northeastern.edu"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:shadow-soft transition-smooth group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">geesala.s@northeastern.edu</div>
                </div>
              </a>

              <a
                href="tel:+14086809897"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:shadow-soft transition-smooth group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+1 (408) 680-9897</div>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:shadow-soft transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:shadow-soft transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="rounded-xl min-h-32"
                />
              </div>
              <Button className="w-full rounded-xl h-12">Send Message</Button>
            </form>
          </div>

          {/* Education */}
          <div className="glass rounded-3xl p-8 shadow-soft">
            <h4 className="text-xl font-bold mb-6">Education</h4>
            <div className="space-y-6">
              <div>
                <div className="text-lg font-semibold">Master of Science in Cybersecurity</div>
                <div className="text-primary font-medium">Northeastern University, Boston, MA</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Jan 2023 – Apr 2025 | GPA: 3.84/4.0
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
