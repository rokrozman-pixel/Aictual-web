import React from 'react';

const cases = [
  {
    category: "Media & Publishing",
    title: "Global Newsrooms",
    desc: "Translate articles and video reports in real-time for international audiences."
  },
  {
    category: "Global Marketing",
    title: "Campaign Localization",
    desc: "Adapt ad copy and creative assets while maintaining brand consistency."
  },
  {
    category: "Education",
    title: "Universal Learning",
    desc: "Make courseware accessible in 30+ languages with automated voiceovers."
  },
  {
    category: "Enterprise",
    title: "Internal Comms",
    desc: "Unify global teams with instant translation of town halls and documents."
  },
  {
    category: "Product",
    title: "App Localization",
    desc: "Continuous localization integration for software and digital products."
  },
  {
    category: "Creators",
    title: "Content Expansion",
    desc: "Help YouTubers and podcasters reach non-native speaking followers."
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-12 border-b border-aictual-black/10 pb-6 inline-block">
            Designed for every scale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-aictual-black/5 p-8 hover:border-aictual-accent transition-all duration-300 hover:shadow-lg hover:shadow-aictual-accent/5"
            >
              <div className="text-xs font-bold tracking-widest uppercase text-aictual-accent mb-4">
                {item.category}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-aictual-gray text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-aictual-accent">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;