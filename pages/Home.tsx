import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Video Demonstration Section */}
      <section className="py-12 px-6 w-full">
        <div className="max-w-6xl mx-auto relative group">
          {/* Aictual style glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-aictual-accent/20 to-aictual-black/5 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video border border-aictual-black/10">
          <video 
            className="w-full h-full object-cover opacity-90"
            controls
            poster="/thumbnail-sample-video.png"
            src="https://aictual.ai/Final-DONE.mp4"
          >
          Your browser does not support the video tag.
          </video>
            
          </div>
          <p className="text-center text-aictual-gray mt-6 text-sm font-medium">
            Watch how we seamlessly transform content into multiple languages while preserving the original voice.
          </p>
        </div>
      </section>

      <Features />

      <CTA />
    </>
  );
};

export default Home;