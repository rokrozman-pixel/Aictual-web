import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Input Content",
    detail: "Upload video, text, or audio via API or dashboard."
  },
  {
    num: "02",
    title: "AI Processing",
    detail: "Our models analyze context, translate, and adapt assets."
  },
  {
    num: "03",
    title: "Quality Control",
    detail: "Human-in-the-loop verification for critical accuracy."
  },
  {
    num: "04",
    title: "Global Output",
    detail: "Publish localized assets instantly to any destination."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-white/30 border-y border-aictual-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-2 block">Workflow</span>
            <h2 className="font-display text-4xl font-bold">How aictual works.</h2>
          </div>
          <p className="text-aictual-gray max-w-md text-sm md:text-base">
            A streamlined pipeline designed to reduce friction in global content distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 md:p-8 group border-l border-aictual-black/10 md:border-l-0 md:first:border-l md:[&:not(:last-child)]:border-r">
                {/* Horizontal line for desktop flow */}
               {index < steps.length - 1 && (
                 <div className="hidden md:block absolute top-1/2 -right-3 z-10 bg-aictual-bg p-1 rounded-full border border-aictual-black/10">
                   <ArrowRight className="w-4 h-4 text-aictual-gray" />
                 </div>
               )}

              <span className="text-6xl font-display font-bold text-aictual-black/5 mb-6 block group-hover:text-aictual-accent/20 transition-colors">
                {step.num}
              </span>
              
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-aictual-accent transition-colors">
                {step.title}
              </h3>
              
              <p className="text-sm text-aictual-gray leading-relaxed">
                {step.detail}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-aictual-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;