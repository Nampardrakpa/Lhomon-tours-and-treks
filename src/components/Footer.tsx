import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-lhomon.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Lhomon Tours" className="h-8 w-auto" />
              <span className="font-semibold text-lg">Lhomon Tours</span>
            </div>
            <p className="text-primary-foreground/80">
              Lhomon Tours and Treks — Registered in Bhutan
            </p>
            <p className="text-sm text-primary-foreground/70">
              Authentic journeys through the Last Shangri-La
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/tours" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tours
              </Link>
              <Link to="/travel-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Travel Guide
              </Link>
              <Link to="/bhutan/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/bhutan/festivals" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Festivals
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/lhomontours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/lhomontours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:info@lhomontours.bt"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Lhomon Tours and Treks. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a 
                href="https://example.com/privacy" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://example.com/terms" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;