import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Education Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 backdrop-blur-md bg-card/30 border-chart-1/20 h-full hover-elevate" data-testid="card-education-btech">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-chart-1/20">
                  <GraduationCap className="h-8 w-8 text-chart-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">B.Tech in Artificial Intelligence and Data Science</h3>
                  <p className="text-chart-1 font-medium">Rajalakshmi Institute of Technology, Chennai</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Duration:</span> 2023 – 2027 
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">CGPA:</span> <span className="text-chart-1 font-bold">8.3/10</span>
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 backdrop-blur-md bg-card/30 border-chart-1/20 h-full hover-elevate" data-testid="card-education-school">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-chart-2/20">
                  <School className="h-8 w-8 text-chart-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Higher Secondary Education</h3>
                  <p className="text-chart-2 font-medium">Shri Ramana Vikas Higher Secondary School</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">SSLC:</span> PASS
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">HSC:</span> <span className="text-chart-2 font-bold">92.6%</span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
