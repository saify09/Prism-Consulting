import { Brain, Target, Network } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Agentic AI & ML",
    subtitle: "Predictive Analytics",
    description:
      "Building autonomous, multi-persona agent fleets that reason, act, and self-correct. Our systems move beyond simple automation to true machine reasoning.",
    features: ["Multi-agent orchestration", "Self-correcting pipelines", "Federated learning"],
  },
  {
    icon: Target,
    title: "Product Strategy and Implementation",
    subtitle: "End-to-End Execution",
    description:
      "From market-gap analysis to technical roadmaps and full implementation for high-stakes healthcare and finance. We translate complex requirements into delivered solutions.",
    features: ["Market gap analysis", "Technical roadmapping", "Full-cycle implementation"],
  },
  {
    icon: Network,
    title: "Data and Enterprise Strategy",
    subtitle: "Strategic Consulting",
    description:
      "Comprehensive data strategy and enterprise transformation consulting. We architect the foundation for data-driven decision making at scale.",
    features: ["Data governance frameworks", "Enterprise architecture", "Digital transformation"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Precision Intelligence for Complex Domains
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in high-stakes sectors where reliability isn't optional—it's essential.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
