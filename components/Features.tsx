import React from 'react';
import { Globe2, Mic2, Zap } from 'lucide-react';

const features = [
  {
    title: "Global Reach",
    description: "Don't limit your audience to one language. Expand to Spanish, Japanese, German, and 30+ others instantly.",
    icon: Globe2
  },
  {
    title: "Quality Dubbing",
    description: "We don't just use raw AI. We fine-tune every second to ensure the translation captures your emotion and style.",
    icon: Mic2
  },
  {
    title: "Zero Effort",
    description: "You send the file. We send back a fully dubbed, lip-synced video ready for upload. No software to learn.",
    icon: Zap
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 w-full border-t border-aictual-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-aictual-black">
              Why <span className="text-aictual-accent">aictual.</span>?
            </h2>
            <p className="text-aictual-gray text-lg">We handle the technical heavy lifting.</p>
            <div className="h-[2px] w-12 bg-aictual-accent mt-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 border border-aictual-black/10 hover:border-aictual-accent transition-colors duration-300 bg-white/40 backdrop-blur-sm flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-aictual-black/10 rounded-full group-hover:border-aictual-accent transition-colors bg-white">
                  <feature.icon className="w-6 h-6 text-aictual-black group-hover:text-aictual-accent transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-4">{feature.title}</h3>
                <p className="text-aictual-gray text-base leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-wider text-aictual-accent">Learn More</span>
                <span className="text-aictual-accent">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;