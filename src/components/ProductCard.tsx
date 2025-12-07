import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ icon: Icon, title, description, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-accent-foreground" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      <Button variant="ghost" className="p-0 h-auto text-secondary font-semibold group/btn">
        Learn More
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </Button>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 gradient-cta opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500" />
    </div>
  );
};

export default ProductCard;
