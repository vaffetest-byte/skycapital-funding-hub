import { FileEdit, FileSpreadsheet, CheckCircle2, Wallet } from "lucide-react";

const steps = [
  {
    icon: FileEdit,
    step: "01",
    title: "Apply Online",
    description: "Complete our simple 5-minute application. No paperwork hassles."
  },
  {
    icon: FileSpreadsheet,
    step: "02",
    title: "Connect Your Business Details",
    description: "Provide essential business details so we can verify and match you with the best funding options."
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Get Approved",
    description: "Receive multiple funding offers tailored to your business."
  },
  {
    icon: Wallet,
    step: "04",
    title: "Receive Funds",
    description: "Get funded in as little as 24-48 hours directly to your account."
  }
];

const FundingProcess = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Funded in <span className="text-accent">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets you from application to funding faster than anyone else in the industry.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Step card */}
              <div className="text-center">
                {/* Icon with step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-sm font-bold text-accent-foreground shadow-accent">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingProcess;
