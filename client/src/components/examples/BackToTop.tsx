import BackToTop from '../BackToTop';

export default function BackToTopExample() {
  return (
    <div className="h-screen bg-background">
      <BackToTop />
      <p className="p-8 text-muted-foreground">Scroll down to see the back to top button</p>
    </div>
  );
}
