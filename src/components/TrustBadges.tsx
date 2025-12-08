import { Shield, Award, CheckCircle, Lock, BadgeCheck, Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const TrustBadges = () => {
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation();
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();

  const trustIndicators = [
    { icon: Shield, label: "SSL Secured", description: "256-bit encryption" },
    { icon: BadgeCheck, label: "BBB Accredited", description: "A+ Rating" },
    { icon: Lock, label: "Bank-Level Security", description: "SOC 2 Compliant" },
    { icon: Award, label: "Top Rated", description: "4.9/5 Stars" },
  ];

  const partners = [
    "Chase",
    "Bank of America", 
    "Wells Fargo",
    "Capital One",
    "American Express",
    "Visa",
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container px-4 md:px-8">
        {/* Trust Badges */}
        <div 
          ref={badgesRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 scroll-reveal ${badgesVisible ? 'visible' : ''}`}
        >
          {trustIndicators.map((item, index) => (
            <div 
              key={item.label}
              className={`flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 stagger-${index + 1} ${badgesVisible ? 'visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-sm">{item.label}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div 
          ref={logosRef}
          className={`scroll-reveal ${logosVisible ? 'visible' : ''}`}
        >
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
            Trusted Banking Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className={`text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 stagger-${index + 1} scroll-reveal ${logosVisible ? 'visible' : ''}`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Message */}
        <div className={`mt-10 text-center scroll-reveal stagger-3 ${logosVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">
              Over 10,000+ businesses funded with $200M+ in capital
            </span>
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
