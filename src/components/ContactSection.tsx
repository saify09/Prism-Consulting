import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const industries = [
  "Healthcare",
  "Finance & Banking",
  "Insurance",
  "Pharmaceuticals",
  "Technology",
  "Government",
  "Other",
];

const maturityLevels = [
  { value: "exploring", label: "Exploring AI opportunities" },
  { value: "pilot", label: "Running pilot projects" },
  { value: "scaling", label: "Scaling AI solutions" },
  { value: "optimizing", label: "Optimizing existing AI" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    maturity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("industry", formData.industry);
      formDataToSend.append("maturity", formData.maturity);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_subject", `Strategy Audit Request from ${formData.company}`);

      // SEND TO API ENDPOINT
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          maturity: formData.maturity,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. We will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          industry: "",
          maturity: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again or contact us directly at archanaushah@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Schedule Your Strategy Audit
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Let's discuss how autonomous intelligence can transform your
              operations. Our strategy audits identify high-impact opportunities
              within your existing infrastructure.
            </p>

            {/* What to expect */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-4">
                What to expect:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-semibold text-accent">
                    1
                  </span>
                  Initial discovery call within 24-48 hours
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-semibold text-accent">
                    2
                  </span>
                  Customized assessment of your AI readiness
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-semibold text-accent">
                    3
                  </span>
                  Actionable roadmap with ROI projections
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Prefer email?
                </p>
                <p className="text-accent">info@prismconsulting.ai</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label id="label-industry" htmlFor="contact-industry" className="text-sm font-medium text-foreground mb-2 block">
                      Industry
                    </label>
                    <Select
                      name="industry"
                      value={formData.industry}
                      onValueChange={(value) =>
                        setFormData({ ...formData, industry: value })
                      }
                    >
                      <SelectTrigger id="contact-industry" aria-labelledby="label-industry" className="bg-background">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label id="label-maturity" htmlFor="contact-maturity" className="text-sm font-medium text-foreground mb-2 block">
                      AI Maturity Level
                    </label>
                    <Select
                      name="maturity"
                      value={formData.maturity}
                      onValueChange={(value) =>
                        setFormData({ ...formData, maturity: value })
                      }
                    >
                      <SelectTrigger id="contact-maturity" aria-labelledby="label-maturity" className="bg-background">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {maturityLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-2 block">
                    How can we help?
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your challenges and goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  className="w-full group bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. We respect
                  your data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
