import { motion } from "framer-motion";
import { GraduationCap, Cpu, Bug, TrendingUp } from "lucide-react";
import StatCard from "./StatCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <Avatar className="h-40 w-40 mb-8 border-4 border-chart-1/30" data-testid="img-avatar">
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-chart-1 to-chart-2 text-background">
                AA
              </AvatarFallback>
            </Avatar>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-center lg:text-left" data-testid="text-about-description">
              Passionate MERN Stack Developer and B.Tech student in Artificial Intelligence and Data Science with expertise in full-stack web development. Proficient in JavaScript ES6+, React.js with Hooks, Node.js, Express.js, MongoDB, and RESTful API development. Experienced in building responsive web applications, implementing secure authentication systems, state management with Redux, and developing scalable web solutions. Skilled in Git workflow, version control, and API integration with proven ability to optimize performance and deliver efficient applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              icon={GraduationCap} 
              value="8.3/10" 
              label="CGPA" 
              delay={0.1}
            />
            <StatCard 
              icon={Cpu} 
              value="15+" 
              label="Technologies" 
              delay={0.2}
            />
            <StatCard 
              icon={Bug} 
              value="30%" 
              label="Bug Reduction" 
              delay={0.3}
            />
            <StatCard 
              icon={TrendingUp} 
              value="25%" 
              label="UX Improvement" 
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
