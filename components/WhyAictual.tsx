import React from 'react';

const stats = [
  { label: "Designed for scale.", value: "50+" },
  { label: "Built for accuracy.", value: "99.8%" },
  { label: "Global by default.", value: "24/7" },
];

const WhyAictual: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="group cursor-default">
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 group-hover:text-aictual-accent transition-colors duration-500">
                {stat.label}
            </h3>
            <div className="w-12 h-[2px] bg-aictual-black/10 mx-auto mb-6 group-hover:w-24 group-hover:bg-aictual-accent transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAictual;