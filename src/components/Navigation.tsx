import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-lhomon.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bhutanDropdownOpen, setBhutanDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Travel Guide', path: '/travel-guide' },
    { 
      name: 'Bhutan', 
      path: '/bhutan',
      dropdown: [
        { name: 'Gallery', path: '/bhutan/gallery' },
        { name: 'Festivals', path: '/bhutan/festivals' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Lhomon Tours" className="h-11 w-auto" />
            <span className="font-semibold text-xl text-primary">Lhomon Tours and Trek</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setBhutanDropdownOpen(true)}
                    onMouseLeave={() => setBhutanDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`nav-link flex items-center space-x-1 ${
                        isActive(link.path) || location.pathname.startsWith('/bhutan') 
                          ? 'text-accent' 
                          : ''
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {bhutanDropdownOpen && (
                      <div className="nav-dropdown">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-4 py-2 nav-link ${
                              isActive(item.path) ? 'text-accent bg-accent/10' : ''
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'text-accent' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <Link
                        to={link.path}
                        className={`block px-3 py-2 text-base nav-link ${
                          isActive(link.path) || location.pathname.startsWith('/bhutan')
                            ? 'text-accent bg-accent/10' 
                            : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-6 py-2 text-sm nav-link ${
                            isActive(item.path) ? 'text-accent bg-accent/10' : ''
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 text-base nav-link ${
                        isActive(link.path) ? 'text-accent bg-accent/10' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;