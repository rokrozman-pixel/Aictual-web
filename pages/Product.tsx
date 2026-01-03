import React from 'react';
import ProductPreview from '../components/ProductPreview';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Product: React.FC = () => {
  return (
    <div className="pt-24 w-full">
      <div className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
        <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Product</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-aictual-black">
          The operating system <br/>for global content.
        </h1>
        <p className="text-xl text-aictual-gray max-w-2xl leading-relaxed">
            Centralize your localization workflow. From automated transcription to neural dubbing and distribution, aictual handles the complexity of going global.
        </p>
      </div>

      {/* Video Demonstration Section (Imported from Home context) */}
      <section className="pb-24 px-6 w-full">
        <div className="max-w-6xl mx-auto relative group">
          {/* Aictual style glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-aictual-accent/20 to-aictual-black/5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video border border-aictual-black/10">
            <video 
              className="w-full h-full object-cover opacity-90"
              controls
              poster="https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1200&auto=format&fit=crop" 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            >
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded border border-aictual-black/10 text-xs font-bold uppercase tracking-wider text-aictual-black pointer-events-none shadow-sm">
              Demo: Real-time Lip Sync
            </div>
          </div>
          <p className="text-center text-aictual-gray mt-6 text-sm font-medium">
            Watch how we seamlessly transform content into multiple languages while preserving the original voice.
          </p>
        </div>
      </section>
      
      <ProductPreview />
      <HowItWorks />
      
      <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-display text-3xl font-bold mb-12">Deep Dive Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Lip-Sync Preservation", desc: "Our AI adjusts facial movements in video to match translated audio seamlessly." },
                    { title: "Brand Voice Cloning", desc: "Train a custom model on your brand's unique spokesperson voice for consistency." },
                    { title: "API Integration", desc: "Webhooks and REST API to automate ingestion and publishing to CMS." }
                ].map((f, i) => (
                    <div key={i} className="p-8 border border-aictual-black/10 rounded hover:shadow-lg transition-all">
                        <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                        <p className="text-aictual-gray">{f.desc}</p>
                    </div>
                ))}
            </div>
          </div>
      </div>
      
      <Features />
      
      <CTA />
    </div>
  );
};

export default Product;