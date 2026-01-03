import React from 'react';
import WhyAictual from '../components/WhyAictual';
import CTA from '../components/CTA';

const Company: React.FC = () => {
  return (
    <div className="pt-24 w-full">
        <section className="px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto">
            <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Company</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-aictual-black">
                We enable the world <br/>to speak.
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-6">
                    <p className="text-lg text-aictual-gray leading-relaxed">
                        Founded in the creative heart of <span className="text-aictual-black font-medium">Amsterdam</span>, Aictual began with a simple premise: content shouldn't be limited by the language it was created in.
                    </p>
                    <p className="text-lg text-aictual-gray leading-relaxed">
                        We are building the infrastructure for a truly borderless internet, where ideas can flow freely across linguistic boundaries without losing their essence.
                    </p>
                </div>
                <div className="space-y-6">
                     <p className="text-lg text-aictual-gray leading-relaxed">
                        Our team consists of AI researchers and media professionals working together to solve the most complex challenges in natural language processing and generative media.
                    </p>
                </div>
            </div>
        </section>

        {/* Location Section replacing the team photo */}
        <section className="w-full py-24 bg-aictual-black text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
             
             <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
                <div>
                     <span className="text-aictual-accent font-mono text-xs uppercase tracking-widest mb-4 block">Headquarters</span>
                     <h2 className="font-display text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">Amsterdam</h2>
                     <p className="text-xl text-white/60 font-light">The Netherlands</p>
                </div>
                
                <div className="max-w-md pb-2">
                    <div className="h-[1px] w-12 bg-aictual-accent mb-6"></div>
                    <p className="text-white/80 leading-relaxed text-lg">
                        Rooted in a city defined by centuries of connection and trade, we continue the tradition by exporting ideas globally through intelligence.
                    </p>
                </div>
             </div>
        </section>

        <WhyAictual />

        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Accuracy First", desc: "In translation, close enough isn't good enough. We obsess over nuance." },
                    { title: "Human Centric", desc: "AI should amplify human creativity, not replace it. Our tools are designed for creators." },
                    { title: "Radical Transparency", desc: "We are open about how our models work and how data is handled." }
                ].map((val, i) => (
                    <div key={i} className="pt-6 border-t border-aictual-black/10 hover:border-aictual-accent transition-colors duration-300">
                        <h3 className="font-display text-xl font-semibold mb-3">{val.title}</h3>
                        <p className="text-aictual-gray text-sm leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        <CTA />
    </div>
  );
};

export default Company;