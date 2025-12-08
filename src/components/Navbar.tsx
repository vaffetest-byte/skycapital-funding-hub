import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import skycapitalLogo from "@/assets/skycapital-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Funding Solutions", href: "#products" },
    { label: "How It Works", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={skycapitalLogo} 
              alt="Sky Capital" 
              className="h-36 md:h-44 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:8885553863" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(516)-523-0489</span>
            </a>
            <Button variant="accent" size="default" asChild>
              <a href="https://forms.zohopublic.com/skycapnow1/form/BusinessApplication/formperma/k4ySefBCGaIjXzTbs58TKi9KHTcjBurx7BVBYrs0buI" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <a href="tel:8885553863" className="flex items-center gap-2 text-white/80 py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(888) 555-FUND</span>
              </a>
              <Button variant="accent" className="w-full mt-2" asChild>
                <a href="https://forms.zohopublic.com/skycapnow1/form/BusinessApplication/formperma/k4ySefBCGaIjXzTbs58TKi9KHTcjBurx7BVBYrs0buI" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
