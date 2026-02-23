import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[640px] sm:min-h-[700px] md:min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />

      {/* Geometric patterns */}
      <div className="absolute inset-0 geometric-pattern opacity-60" />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            <span className="text-accent text-sm font-medium">
              Enterprise AI Solutions
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Beyond Automation:
            <br />
            <span className="text-gradient">Agentic AI</span> for the Enterprise
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Bridging the gap between complex policy and clinical/financial
            performance through federated machine learning and elite product
            strategy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Schedule a Strategy Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 md:mt-16 md:pt-16 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/50 text-xs md:text-sm mb-5 uppercase tracking-wider">
              Trusted by leaders in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 mb-10">
              <span className="text-primary-foreground/60 font-semibold text-sm md:text-base">Healthcare</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
              <span className="text-primary-foreground/60 font-semibold text-sm md:text-base">Finance</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
              <span className="text-primary-foreground/60 font-semibold text-sm md:text-base">Cardiology</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
              <span className="text-primary-foreground/60 font-semibold text-sm md:text-base">Oncology</span>
            </div>

            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-14 mt-4">

              {/* McKesson */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex items-end gap-[3px]">
                    <div className="w-2 h-3 bg-white rounded-sm" />
                    <div className="w-2 h-5 bg-white rounded-sm" />
                    <div className="w-2 h-7 bg-white rounded-sm" />
                  </div>
                  <span className="text-white font-bold text-base tracking-widest">McKESSON</span>
                </div>
              </div>

              {/* Hewlett Packard */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded flex items-center justify-center border-2 border-white">
                    <span className="text-white font-black text-xl leading-none">hp</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-white font-semibold text-xs tracking-widest uppercase">Hewlett</span>
                    <span className="text-white font-semibold text-xs tracking-widest uppercase">Packard</span>
                  </div>
                </div>
              </div>

              {/* J.P. Morgan */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <span className="text-white font-light text-lg md:text-2xl tracking-tight whitespace-nowrap">J.P. Morgan</span>
              </div>

              {/* 7-Eleven */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-white/10 border border-white/40">
                    <span className="text-white font-black text-2xl leading-none">7</span>
                  </div>
                  <div className="flex flex-col border-l border-white/40 pl-2 leading-none">
                    <span className="text-white font-bold text-sm tracking-widest">ELEVEN</span>
                    <div className="h-px w-full bg-white/50 mt-1" />
                  </div>
                </div>
              </div>

              {/* American Express */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 rounded border-2 border-white">
                    <span className="text-white font-black text-xs tracking-widest">AMEX</span>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-white font-semibold text-xs tracking-widest uppercase">American</span>
                    <span className="text-white font-semibold text-xs tracking-widest uppercase">Express</span>
                  </div>
                </div>
              </div>

              {/* Syntel */}
              <div
                className="cursor-default transition-opacity duration-500"
                style={{ opacity: 0.25 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.25")}
              >
                <div className="flex items-center gap-2">
                  <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
                    <path d="M11 2 C4 2 1 8 4 14 C7 20 18 20 18 26" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    <circle cx="11" cy="2" r="2" fill="white"/>
                    <circle cx="18" cy="26" r="2" fill="white"/>
                  </svg>
                  <span className="text-white font-bold text-xl tracking-wide italic">syntel</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
