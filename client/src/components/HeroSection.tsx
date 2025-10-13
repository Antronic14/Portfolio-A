import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const taglines = [
  "Full-Stack Developer",
  "AI Enthusiast", 
  "Tech Learner",
  "Problem Solver",
  "Fast Learner"
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-chart-2/10" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-chart-1 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-chart-2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Hi, I'm Antronic
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground">
            MERN Stack Developer & AI Student
          </h2>

          <div className="h-16 md:h-20 mb-12">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent font-medium"
            >
              {taglines[currentTagline]}
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              data-testid="button-view-work"
              className="bg-chart-1 hover:bg-chart-1/90 text-background font-semibold"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('/attached_assets/ANTRONIC-A_1760270283060.pdf', '_blank')}
              data-testid="button-download-resume"
              className="backdrop-blur-sm border-chart-1 text-chart-1 hover:bg-chart-1/10"
            >
              
              View Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com/Antronic14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              data-testid="link-github"
              className="p-3 rounded-lg bg-card hover-elevate active-elevate-2"
            >
              <Github className="h-6 w-6 text-foreground" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/antronic-a-2bb74b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              data-testid="link-linkedin"
              className="p-3 rounded-lg bg-card hover-elevate active-elevate-2"
            >
              <Linkedin className="h-6 w-6 text-foreground" />
            </motion.a>
            <motion.a
              href="mailto:antronic.a.2023.aids@ritchennai.edu.in"
              whileHover={{ scale: 1.1, y: -2 }}
              data-testid="link-email"
              className="p-3 rounded-lg bg-card hover-elevate active-elevate-2"
            >
              <Mail className="h-6 w-6 text-foreground" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}
