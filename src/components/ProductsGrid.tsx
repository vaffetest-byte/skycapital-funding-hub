import ProductCard from "@/components/ProductCard";
import { 
  Banknote, 
  Building2, 
  CreditCard, 
  Truck, 
  FileText, 
  Rocket, 
  Home, 
  TrendingUp 
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: Banknote,
    title: "Merchant Cash Advance (MCA)",
    description: "Get capital based on your future sales. Flexible repayment that adjusts with your revenue flow."
  },
  {
    icon: Building2,
    title: "Business Term Loans",
    description: "Traditional financing with predictable payments. Ideal for established businesses seeking growth capital."
  },
  {
    icon: CreditCard,
    title: "Line of Credit",
    description: "Access funds when you need them. Only pay interest on what you use with revolving credit."
  },
  {
    icon: Truck,
    title: "Equipment Financing",
    description: "Upgrade your business equipment without draining cash reserves. Competitive rates available."
  },
  {
    icon: FileText,
    title: "Invoice Factoring",
    description: "Turn unpaid invoices into immediate working capital. Improve cash flow without adding debt."
  },
  {
    icon: Rocket,
    title: "Startup Funding",
    description: "Launch your vision with capital designed for new ventures. Flexible terms for emerging businesses."
  },
  {
    icon: Home,
    title: "Real Estate Investor Funding",
    description: "Finance your property investments with speed. Fix-and-flip, rental, or commercial opportunities."
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Financing",
    description: "Funding that grows with your business. Repayments tied to your monthly revenue performance."
  }
];

const ProductsGrid = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container px-4 md:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Funding Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Funding Solutions That <span className="text-gradient">Fit Your Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick cash advances to long-term financing, we have the perfect solution for every business challenge.
          </p>
        </div>

        {/* Products grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`scroll-reveal-scale stagger-${index + 1} ${gridVisible ? 'visible' : ''}`}
            >
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
                delay={0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
