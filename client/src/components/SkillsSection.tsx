import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Zap, Heart } from "lucide-react";
import SkillBadge from "./SkillBadge";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "React Hooks","Responsive Design"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Mongoose ODM"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Database Design", "Data Modeling"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Version Control"]
  },
  {
    title: "Development Practices",
    icon: Zap,
    skills: ["Agile", "Scrum", "API Integration", "Testing", "MERN Stack"]
  },
  {
    title: "Soft Skills",
    icon: Heart,
    skills: ["Problem Solving", "Time Management", "Fast Learner", "Adaptability", "Team Collaboration"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl backdrop-blur-md bg-card/30 border border-chart-1/20"
              data-testid={`card-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-6 w-6 text-chart-1" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skill}
                    icon={category.icon}
                    name={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
