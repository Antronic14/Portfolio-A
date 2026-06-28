import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Target,
  Zap,
  CheckCircle,
  Shield,
  BarChart,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Target,
    text: "Intelligent seat allocation algorithms with round-robin distribution",
  },
  {
    icon: Zap,
    text: "80% reduction in manual arrangement time",
  },
  {
    icon: CheckCircle,
    text: "100% classroom utilization efficiency",
  },
  {
    icon: Shield,
    text: "Secure admin and student portals with authentication",
  },
  {
    icon: BarChart,
    text: "CSV data processing and real-time search functionality",
  },
  {
    icon: Rocket,
    text: "60% faster load times with optimized database queries",
  },
];

const techStack = [
  "Python Flask",
  "JavaScript ES6+",
  "HTML5",
  "CSS3",
  "MongoDB",
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 bg-card/20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            className="overflow-hidden backdrop-blur-md bg-card/30 border-chart-1/20 hover-elevate"
            data-testid="card-project-exam-seating"
          >
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center p-8">
                <img
                  src="/attached_assets/Screenshot.jpeg"
                  alt="Project Screenshot"
                  className="w-full aspect-video rounded-lg border border-chart-1/30"
                />
              </div>

              <div className="lg:col-span-3 p-8">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  data-testid="text-project-title"
                >
                  Exam Seating Arrangement Web Application
                </h3>

                <p
                  className="text-muted-foreground mb-6"
                  data-testid="text-project-description"
                >
                  Engineered a full-stack web application using Python Flask,
                  JavaScript ES6+, HTML5, and CSS3 to automate exam seating
                  arrangements for 500+ students across 4 departments.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-start"
                      data-testid={`text-feature-${index}`}
                    >
                      <feature.icon className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-chart-2/50 text-chart-2 bg-chart-2/10"
                      data-testid={`badge-tech-${tech
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="default"
                    onClick={() =>
                      window.open(
                        "https://github.com/Antronic14/Exam-Seating-Arrangement-Application",
                        "_blank"
                      )
                    }
                    data-testid="button-github-project"
                    className="bg-chart-1 hover:bg-chart-1/90 text-background"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card
            className="p-12 text-center backdrop-blur-md bg-card/20 border-chart-1/20 hover-elevate"
            data-testid="card-more-projects"
          >
            <p className="text-xl text-muted-foreground">
              More Projects Coming Soon...
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}