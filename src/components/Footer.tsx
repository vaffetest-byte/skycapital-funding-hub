import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import skycapitalLogo from "@/assets/skycapital-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container px-4 md:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Grow Your Business?
              </h3>
              <p className="text-primary-foreground/80">
                Apply now and get funded in as little as 24 hours.
              </p>
            </div>
            <Button variant="accent" size="xl" asChild>
              <a href="https://forms.zohopublic.com/skycapnow1/form/BusinessApplication/formperma/k4ySefBCGaIjXzTbs58TKi9KHTcjBurx7BVBYrs0buI" target="_blank" rel="noopener noreferrer">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <img 
              src={skycapitalLogo} 
              alt="Sky Capital" 
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-primary-foreground/70 mb-6">
              Empowering businesses with fast, flexible funding solutions since 2015.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h5 className="font-bold mb-4">Products</h5>
            <ul className="space-y-3">
              {[
                "Merchant Cash Advance",
                "Business Term Loans",
                "Line of Credit",
                "Equipment Financing",
                "Invoice Factoring",
                "Startup Funding"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-3">
              {[
                "About Us",
                "How It Works",
                "Blog",
                "Careers",
                "Partner Program",
                "Contact"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">(516)-523-0489</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">Support@skycapnow.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/70">
                  100 Financial Plaza, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 SkyCapital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Disclosures</a>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/40 mt-4 text-center md:text-left">
            SkyCapital is a financial services company. Funding products are subject to credit approval. Terms and conditions apply. 
            This is not an offer to lend. Contact us for complete details.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
