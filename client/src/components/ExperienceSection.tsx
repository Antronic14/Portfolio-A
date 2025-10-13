import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <TimelineItem
            title="Web Developer Intern"
            company="VaultofCodes"
            achievements={[
              { text: "Developed and deployed responsive web applications using MERN stack technologies, improving user experience by 25%" },
              { text: "Engineered RESTful APIs and implemented secure authentication systems, enhancing application security and performance" },
              { text: "Collaborated in team development environment, contributing to real-world projects and optimizing code efficiency" },
              { text: "Debugged and maintained existing codebases, reducing bug reports by 30% through systematic testing approaches" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
