import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 w-full flex flex-col items-center justify-center text-center relative border-t border-aictual-black/5">
        
        {/* Decorative Circles */}
        <div className="absolute left-10 top-20 w-32 h-32 border border-aictual-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute right-10 bottom-20 w-48 h-48 border border-aictual-black/5 rounded-full"></div>

      <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-aictual-black relative z-10 max-w-4xl">
        Ready to expand your <span className="relative">
            audience?
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-aictual-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        </span>
      </h2>
      
      <p className="text-lg text-aictual-gray max-w-lg mb-12">
        Send us your content, and let's get started.
      </p>

      <button className="group px-10 py-5 bg-aictual-black text-white text-lg font-medium tracking-wide transition-all hover:scale-105 hover:shadow-xl hover:shadow-aictual-accent/20 flex items-center gap-2">
        Team up with us
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <div className="mt-8 flex items-center justify-center gap-6 text-sm text-aictual-gray/80">
        <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-aictual-accent" />
            <span>Professional Quality</span>
        </div>
        <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-aictual-accent" />
            <span>Fast Turnaround</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;