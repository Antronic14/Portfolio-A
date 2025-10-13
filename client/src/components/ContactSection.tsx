import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const subject = `Contact from ${formData.name}`;
    const body = `From: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:antronic.a.2023.aids@ritchennai.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    toast({
      title: "Opening Email Client",
      description: "Your email client is opening with the message details.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 backdrop-blur-md bg-card/30 border-chart-1/20" data-testid="card-contact-form">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="bg-background/50 border-chart-1/30 focus:border-chart-1"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-chart-1/30 focus:border-chart-1"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message..."
                    rows={5}
                    className="bg-background/50 border-chart-1/30 focus:border-chart-1 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-chart-1 hover:bg-chart-1/90 text-background"
                  data-testid="button-submit-contact"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4" data-testid="text-email">
                  <div className="p-3 rounded-lg bg-chart-1/20">
                    <Mail className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">antronic.a.2023.aids@ritchennai.edu.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-4" data-testid="text-phone">
                  <div className="p-3 rounded-lg bg-chart-1/20">
                    <Phone className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">8015579731</p>
                  </div>
                </div>
                <div className="flex items-center gap-4" data-testid="text-location">
                  <div className="p-3 rounded-lg bg-chart-1/20">
                    <MapPin className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Antronic14"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-card hover-elevate active-elevate-2"
                  data-testid="link-social-github"
                >
                  <Github className="h-8 w-8 text-foreground" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/antronic-a-2bb74b28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-card hover-elevate active-elevate-2"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin className="h-8 w-8 text-foreground" />
                </motion.a>
                <motion.a
                  href="mailto:antronic.a.2023.aids@ritchennai.edu.in"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-card hover-elevate active-elevate-2"
                  data-testid="link-social-email"
                >
                  <Mail className="h-8 w-8 text-foreground" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
