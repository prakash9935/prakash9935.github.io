import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  // Added previously static items into the scroller
  { Icon: Code2, label: "React", color: "text-cyan-400" },
  { Icon: Code2, label: "TypeScript", color: "text-blue-600" },
  { Icon: Server, label: "Node.js", color: "text-green-600" },
  { Icon: GitBranch, label: "Jenkins", color: "text-red-500" },
  { Icon: Cloud, label: "Terraform", color: "text-purple-600" },
  { Icon: Shield, label: "Metasploit", color: "text-rose-500" },
  { Icon: Bug, label: "OWASP ZAP", color: "text-amber-500" },
  { Icon: Lock, label: "Snyk", color: "text-fuchsia-500" },
  { Icon: Shield, label: "Nessus", color: "text-emerald-500" },
  { Icon: Cpu, label: "Ghidra", color: "text-lime-600" },
  { Icon: Cpu, label: "IDA Pro", color: "text-slate-600" },
  { Icon: Network, label: "Wireshark", color: "text-sky-600" },
];

const SkillsCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [-2000, 0],
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
          Tools & Technologies
        </h3>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          The security and engineering stack I use in practice
        </p>
      </div>

      {/* Animated Carousel */}
      <div className="relative h-[400px] md:h-[500px]" ref={containerRef}>
        {/* Centerpiece removed per design request */}

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
              x: [0, -2000],
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

      {/* Static grid removed; items integrated into scroller */}
    </section>
  );
};

export default SkillsCarousel;
