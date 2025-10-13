import SkillBadge from '../SkillBadge';
import { Code } from 'lucide-react';

export default function SkillBadgeExample() {
  return (
    <div className="p-8 bg-background">
      <SkillBadge icon={Code} name="React.js" />
    </div>
  );
}
