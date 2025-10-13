import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ icon: Icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 backdrop-blur-md bg-card/30 border-chart-1/20 hover-elevate" data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="text-4xl font-bold text-chart-1">{value}</div>
          <Icon className="h-6 w-6 text-chart-2" />
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </Card>
    </motion.div>
  );
}
