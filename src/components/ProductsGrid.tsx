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
    description: "Fast MCA funding for New York & Florida businesses. Get capital based on future sales with flexible repayment.",
    featured: true
  },
  {
    icon: Building2,
    title: "Working Capital Loans",
    description: "Working capital loans for NY & FL small businesses. Predictable payments for growth and operations.",
    featured: false
  },
  {
    icon: CreditCard,
    title: "Business Line of Credit",
    description: "Flexible credit lines for New York and Florida businesses. Only pay interest on what you use.",
    featured: false
  },
  {
    icon: Truck,
    title: "Equipment Financing",
    description: "Equipment financing for NY & FL businesses. Upgrade machinery without draining cash reserves.",
    featured: false
  },
  {
    icon: FileText,
    title: "Invoice Factoring",
    description: "Turn unpaid invoices into immediate working capital for your New York or Florida business.",
    featured: false
  },
  {
    icon: Rocket,
    title: "Startup Funding",
    description: "Startup business loans for new ventures in NYC, Miami, and across NY & FL. Flexible terms available.",
    featured: true
  },
  {
    icon: Home,
    title: "Real Estate Investor Funding",
    description: "Fast real estate funding for NY & FL investors. Fix-and-flip, rental, or commercial properties.",
    featured: false
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Financing",
    description: "Revenue-based funding for growing businesses in New York and Florida. Payments tied to your revenue.",
    featured: false
  }
];

const ProductsGrid = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section 
      id="products" 
      className="py-24 bg-background relative overflow-hidden"
      aria-label="Business Funding Solutions for New York and Florida"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-8 relative z-10">
        {/* Section header - SEO optimized */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Business Funding Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Small Business Loans & MCA Funding for <span className="text-gradient">NY & Florida</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From <strong>merchant cash advance</strong> to <strong>working capital loans</strong>, we provide fast approval business funding 
            for small businesses across <strong>New York</strong> and <strong>Florida</strong>. Get funded in 24-48 hours.
          </p>
        </div>

        {/* Products grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`scroll-reveal-scale stagger-${Math.min(index + 1, 8)} ${gridVisible ? 'visible' : ''}`}
            >
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
                featured={product.featured}
                delay={0}
              />
            </div>
          ))}
        </div>

        {/* Local SEO - Service areas */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Available in: <strong>NYC</strong>, <strong>Brooklyn</strong>, <strong>Manhattan</strong>, <strong>Queens</strong>, <strong>Long Island</strong>, <strong>Buffalo</strong>, <strong>Albany</strong>, 
            <strong> Miami</strong>, <strong>Orlando</strong>, <strong>Tampa</strong>, <strong>Jacksonville</strong>, <strong>Fort Lauderdale</strong>, and all cities across New York & Florida
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;