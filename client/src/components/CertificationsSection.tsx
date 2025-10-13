import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Code, Linkedin, Briefcase } from "lucide-react";

const certifications = [
  {
    title: "Creating Websites Using HTML",
    provider: "MindLuster",
    icon: Code,
    color: "chart-1",
    link: "https://www.mindluster.com/student/certificate/9f1f6ee6"
  },
  {
    title: "CSS Full Course",
    provider: "MindLuster",
    icon: Code,
    color: "chart-2",
    link: "https://www.mindluster.com/student/certificate/1a556ca6"
  },
  {
    title: "Web Development Internship Certificate",
    provider: "VaultofCodes",
    icon: Briefcase,
    color: "chart-1",
    link: "#"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-md bg-card/30 border-chart-1/20 h-full hover-elevate cursor-pointer" data-testid={`card-certification-${index}`} onClick={() => window.open(cert.link, '_blank')}>
                <div className={`p-4 rounded-lg bg-${cert.color}/20 w-fit mb-4`}>
                  <cert.icon className={`h-8 w-8 text-${cert.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                {cert.provider && (
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
