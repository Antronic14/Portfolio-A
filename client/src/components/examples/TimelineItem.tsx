import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <div className="p-8 bg-background">
      <TimelineItem 
        title="Web Developer Intern"
        company="VaultofCodes"
        duration="2024"
        achievements={[
          { text: "Developed responsive web applications using MERN stack" },
          { text: "Improved user experience by 25%" }
        ]}
      />
    </div>
  );
}
