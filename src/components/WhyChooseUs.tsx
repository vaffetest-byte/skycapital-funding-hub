import { Check, Clock, Shield, Users, Percent, HeartHandshake } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Clock,
    title: "Fast Approvals",
    description: "Get pre-approved in minutes with decisions made same-day. No lengthy waiting periods."
  },
  {
    icon: Shield,
    title: "Transparent Terms",
    description: "Clear pricing with no hidden fees. Know exactly what you're paying from day one."
  },
  {
    icon: Users,
    title: "Dedicated Specialists",
    description: "Work with funding experts who understand your industry and business needs."
  },
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Access industry-leading rates with terms designed to help your business thrive."
  },
  {
    icon: HeartHandshake,
    title: "Flexible Repayment",
    description: "Payment plans that adapt to your cash flow. We work with you, not against you."
  },
  {
    icon: Check,
    title: "High Approval Rates",
    description: "95% approval rate for qualified businesses. We find ways to say yes."
  }
];

const WhyChooseUs = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="why-us" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div 
            ref={leftRef}
            className={`scroll-reveal-left ${leftVisible ? 'visible' : ''}`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Why SkyCapital
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for Businesses That{" "}
              <span className="text-gradient">Move Fast</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've funded over $200 Million to businesses nationwide. Our streamlined process and expert team ensure you get the capital you need, when you need it.
            </p>

            {/* CTA stats */}
            <div className="flex gap-8">
              <div className={`scroll-reveal stagger-1 ${leftVisible ? 'visible' : ''}`}>
                <div className="text-4xl font-bold text-primary">$200M+</div>
                <div className="text-sm text-muted-foreground">Total Funded</div>
              </div>
              <div className={`scroll-reveal stagger-2 ${leftVisible ? 'visible' : ''}`}>
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className={`scroll-reveal stagger-3 ${leftVisible ? 'visible' : ''}`}>
                <div className="text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div ref={rightRef} className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50 scroll-reveal-scale stagger-${index + 1} ${rightVisible ? 'visible' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
