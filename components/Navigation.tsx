import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Company', path: '/company' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-aictual-bg/95 backdrop-blur-md border-aictual-black/5 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group cursor-pointer z-50 relative inline-block">
            <img 
              src="/aictual-logo-T4.png" 
              alt="aictual." 
              className="h-12 w-auto"
            />
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-aictual-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path ? 'text-aictual-black' : 'text-aictual-gray hover:text-aictual-black'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-aictual-accent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contact">
                <button className="hidden md:block px-5 py-2 border border-aictual-black text-sm font-medium hover:bg-aictual-black hover:text-white transition-all duration-300">
                  Get Started
                </button>
            </Link>
            <button 
              className="md:hidden p-2 z-50" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-aictual-black" /> : <Menu className="w-6 h-6 text-aictual-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-aictual-bg z-30 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-display text-2xl font-bold text-aictual-black hover:text-aictual-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="mt-8 px-8 py-3 border border-aictual-black text-lg font-medium hover:bg-aictual-black hover:text-white transition-all duration-300">
                Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;