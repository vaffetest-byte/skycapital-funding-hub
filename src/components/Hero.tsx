import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container relative z-10 px-4 md:px-8 pt-32 pb-20">
        {/* Trust badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90">Trusted by 10,000+ Businesses Nationwide</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-white max-w-5xl mx-auto leading-tight animate-fade-up-delay-1">
          Flexible Funding Solutions for{" "}
          <span className="text-accent">Every Business Need</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto animate-fade-up-delay-2">
          SkyCapital provides fast, reliable, and tailored financing options to help businesses grow without limits. Get funded in as little as 24 hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="https://forms.zohopublic.com/skycapnow1/form/BusinessApplication/formperma/k4ySefBCGaIjXzTbs58TKi9KHTcjBurx7BVBYrs0buI" target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl">
            Book Consultation
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-up-delay-3">
          {[
            { value: "$200M", label: "Funded to Date" },
            { value: "24hrs", label: "Average Funding Time" },
            { value: "95%", label: "Approval Rate" },
            { value: "10K+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-dark rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 40% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
