import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  delay?: number;
}

export default function SkillBadge({ icon: Icon, name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <Badge 
        variant="outline" 
        className="px-4 py-2 text-sm backdrop-blur-sm border-chart-1/30 hover:border-chart-1/50 bg-card/50 hover-elevate"
        data-testid={`badge-skill-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Icon className="h-4 w-4 mr-2 text-chart-1" />
        {name}
      </Badge>
    </motion.div>
  );
}
