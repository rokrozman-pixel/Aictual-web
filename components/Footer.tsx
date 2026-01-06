import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-aictual-black backdrop-blur-lg border-t border-white/10 pt-20 pb-10 w-full mt-auto text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="group cursor-pointer relative inline-block">
                <img 
                  src="/aictual-logo-T4-W.png" 
                  alt="aictual." 
                  className="h-8 w-auto"
                />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-aictual-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Partnering with creators to break language barriers with next-gen AI dubbing and translation services.
            </p>
          </div>
          
          {/* Service Column */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-90">Service</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><NavLink to="/solutions" className="hover:text-aictual-accent transition-colors">Technology</NavLink></li>
              <li><NavLink to="/pricing" className="hover:text-aictual-accent transition-colors">How it Works</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-aictual-accent transition-colors">Partner Program</NavLink></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-90">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><NavLink to="/company" className="hover:text-aictual-accent transition-colors">About Us</NavLink></li>
              <li><a href="#" className="hover:text-aictual-accent transition-colors">Creators</a></li>
              <li><a href="#" className="hover:text-aictual-accent transition-colors">Careers</a></li>
              <li><NavLink to="/contact" className="hover:text-aictual-accent transition-colors">Get a sample video</NavLink></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs opacity-90">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-aictual-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-aictual-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/30 font-medium">
            © {new Date().getFullYear()} aictual Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/company/aictual" className="text-white/40 hover:text-aictual-accent transition-all transform hover:scale-110">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative grain/glow only for footer section */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-grain"></div>
    </footer>
  );
};

export default Footer;