import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm md:text-base font-medium text-primary mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SECURITY ENGINEER
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Surya Prakash
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Geesala
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Securing digital infrastructure through penetration testing, vulnerability management, and secure development practices. OSCP & CEH certified.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button size="lg" className="rounded-full text-base px-8" asChild>
              <a href="#experience">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8" asChild>
              <a href="mailto:geesala.s@northeastern.edu">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator (subtle pulse instead of bounce) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
