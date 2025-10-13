import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  text: string;
  icon?: LucideIcon;
}

interface TimelineItemProps {
  title: string;
  company: string;
  duration?: string;
  achievements: Achievement[];
  delay?: number;
}

export default function TimelineItem({ title, company, duration, achievements, delay = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-chart-1/30 last:pb-0"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-chart-1" />
      
      <Card className="p-6 backdrop-blur-md bg-card/30 border-chart-1/20 hover-elevate" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-chart-1 font-medium">{company}</p>
            {duration && (
              <Badge variant="outline" className="border-chart-2/50 text-chart-2">
                {duration}
              </Badge>
            )}
          </div>
        </div>
        
        <ul className="space-y-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon || CheckCircle2;
            return (
              <li key={index} className="flex gap-3 text-muted-foreground" data-testid={`text-achievement-${index}`}>
                <Icon className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <span>{achievement.text}</span>
              </li>
            );
          })}
        </ul>
      </Card>
    </motion.div>
  );
}
