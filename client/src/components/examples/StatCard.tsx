import StatCard from '../StatCard';
import { GraduationCap } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="p-8 bg-background">
      <StatCard icon={GraduationCap} value="8.3/10" label="CGPA" />
    </div>
  );
}
