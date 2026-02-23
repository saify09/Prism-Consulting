import { Rocket } from "lucide-react";

const IDPSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Enterprise-Grade AI Solutions
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Purpose-built products that deliver measurable outcomes in complex domains.
          </p>

          <div className="bg-muted rounded-2xl p-12 border border-border inline-block w-full max-w-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Coming Soon</h3>
            <p className="text-muted-foreground">
              We're building something exciting. Stay tuned for our upcoming product launches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDPSection;
