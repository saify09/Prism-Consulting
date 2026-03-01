import { MapPin, Shield, Users, Linkedin } from "lucide-react";
import archanaHeadshot from "@/assets/archana-modi-headshot.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Texas-Based Specialists in High-Complexity Sectors
          </h2>
          <p className="text-muted-foreground text-lg">
            We are a team of specialists with deep expertise in the most
            demanding domains. Our focus on precision and reliability over hype
            ensures that our solutions meet the rigorous standards of enterprise
            healthcare and finance.
          </p>
        </div>

        {/* Founder section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Founder card — left column */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Founder headshot */}
              <img 
                src={archanaHeadshot} 
                alt="Archana Modi, Founder & Principal Consultant at Prism Consulting"
                className="w-28 h-28 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Archana Modi
                </h3>
                <p className="text-accent font-medium mb-4">
                  Founder & Principal Consultant
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Archana Modi is an operations transformation leader and consulting strategist
                  with a proven record of driving measurable impact across Fortune 100 companies and
                  high‑growth organizations. She has worked with industry leaders such as
                  McKesson, J P Morgan Chase, American Express, Hewlett Packard and 7 Eleven,
                  where she has led enterprise‑level initiatives that improved operational performance,
                  enhanced patient and customer experience, and delivered multimillion‑dollar efficiency gains.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  With deep expertise in healthcare operations, digital transformation,
                  and process optimization, Archana specializes in diagnosing complex workflow
                  challenges and designing scalable, technology‑enabled solutions.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Archana's consulting niche centers on operational excellence,
                  performance improvement, and data‑driven transformation.
                  She is known for her ability to partner with cross‑functional teams,
                  translate insights into action, and guide organizations through meaningful,
                  sustainable change.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quote and stats — right column (original design on lg+) */}
          <div className="relative lg:pr-10 lg:pb-10">
            <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                "We build the autonomous intelligence that drives modern
                enterprise."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Federated Intelligence</p>
                  <p className="text-primary-foreground/60 text-sm">
                    Privacy-first distributed learning
                  </p>
                </div>
              </div>
            </div>

            {/* Stats card — only shows floating on desktop; on mobile shown inline below */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-card rounded-xl p-6 border border-border shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>

            {/* Mobile-only inline stats */}
            <div className="lg:hidden mt-4 bg-card rounded-xl p-5 border border-border flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Based in Texas</p>
              <p className="text-muted-foreground text-sm">
                Serving enterprise clients across North America
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Domain Expertise</p>
              <p className="text-muted-foreground text-sm">
                Healthcare, Financial Technology, Retail, Life Science, M&A
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Compliance-First</p>
              <p className="text-muted-foreground text-sm">
                HIPAA, SOC 2, enterprise security standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
