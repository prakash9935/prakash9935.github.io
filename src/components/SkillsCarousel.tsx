import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import carIllustration from "@/assets/car-illustration.png";
import {
  Code2,
  Database,
  Shield,
  Cloud,
  Lock,
  Terminal,
  Bug,
  Cpu,
  Network,
  Server,
  Container,
  GitBranch,
} from "lucide-react";

const techIcons = [
  { Icon: Code2, label: "Python", color: "text-blue-500" },
  { Icon: Terminal, label: "JavaScript", color: "text-yellow-500" },
  { Icon: Shield, label: "Security", color: "text-red-500" },
  { Icon: Cloud, label: "AWS", color: "text-orange-500" },
  { Icon: Database, label: "SQL", color: "text-cyan-500" },
  { Icon: Lock, label: "Cryptography", color: "text-purple-500" },
  { Icon: Bug, label: "Burp Suite", color: "text-pink-500" },
  { Icon: Cpu, label: "Binary Analysis", color: "text-green-500" },
  { Icon: Network, label: "Networking", color: "text-indigo-500" },
  { Icon: Server, label: "Docker", color: "text-blue-400" },
  { Icon: Container, label: "Kubernetes", color: "text-blue-600" },
  { Icon: GitBranch, label: "Git", color: "text-orange-400" },
];

const SkillsCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide text-center">
          SKILLS & EXPERTISE
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Innovation Highway
        </h3>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Powered by cutting-edge technologies and security expertise
        </p>
      </div>

      {/* Animated Carousel */}
      <div className="relative h-[400px] md:h-[500px]" ref={containerRef}>
        {/* Car Centerpiece */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.img
            src={carIllustration}
            alt="Innovation Vehicle"
            className="w-[400px] md:w-[600px] h-auto opacity-20 dark:opacity-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Top Track - Icons flowing right to left */}
        <div className="absolute top-[25%] left-0 right-0 overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={controls}
            style={{ width: "fit-content" }}
          >
            {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <motion.div
                  key={`top-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[100px]"
                  whileHover={{ scale: 1.2, y: -10 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div
                    className={`glass rounded-2xl p-6 shadow-soft transition-smooth ${
                      hoveredIndex === index ? "glow-effect" : ""
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <span className="text-xs font-medium text-center whitespace-nowrap">
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Track - Icons flowing left to right */}
        <div className="absolute bottom-[25%] left-0 right-0 overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [-2000, 0],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <motion.div
                  key={`bottom-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[100px]"
                  whileHover={{ scale: 1.2, y: 10 }}
                  onHoverStart={() => setHoveredIndex(index + 100)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div
                    className={`glass rounded-2xl p-6 shadow-soft transition-smooth ${
                      hoveredIndex === index + 100 ? "glow-effect" : ""
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <span className="text-xs font-medium text-center whitespace-nowrap">
                    {tech.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Gradient Overlays for smooth fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      </div>

      {/* Additional Skills Grid Below */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Jenkins",
            "Terraform",
            "Metasploit",
            "OWASP ZAP",
            "Snyk",
            "Nessus",
            "Ghidra",
            "IDA Pro",
            "Wireshark",
          ].map((skill) => (
            <div
              key={skill}
              className="glass rounded-xl px-4 py-3 text-center text-sm font-medium hover:shadow-soft transition-smooth"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
