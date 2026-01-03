import React, { useState } from 'react';
import { Check, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingDrivers = [
    {
      title: "Total minutes of speech",
      desc: "The core driver of cost. More spoken content means more transcription, translation, and voice synthesis."
    },
    {
      title: "On-camera speaking",
      desc: "Videos with visible speakers may require additional processing for accurate timing and optional lip-sync."
    }
  ];

  const whatsIncluded = [
    "Accurate transcription",
    "High-quality translation",
    "Natural AI voice dubbing",
    "Timing and alignment",
    "Quality control before delivery"
  ];

  const steps = [
    { title: "Upload your video", desc: "Drag and drop your file into our secure portal." },
    { title: "Analysis", desc: "Our system identifies every second of spoken content." },
    { title: "Price Estimate", desc: "You receive a clear quote before any work begins." },
    { title: "Dub & Deliver", desc: "We process your video and deliver the localized version." }
  ];

  const faqs = [
    {
      q: "How exactly is 'spoken content' measured?",
      a: "Our AI analyzes the audio track to detect human speech. We exclude segments of silence, background music, or sound effects from the billable time."
    },
    {
      q: "Is there a minimum order size?",
      a: "There is a minimum charge of 1 minute per project. For very high volumes, please contact our enterprise team for custom rates."
    },
    {
      q: "How accurate is the lip-syncing?",
      a: "Our neural lip-sync technology is designed for professional broadcast quality. It significantly reduces the 'uncanny valley' effect common in traditional dubbing."
    },
    {
      q: "Which languages do you support?",
      a: "We currently support over 30 languages including Spanish, French, German, Japanese, Mandarin, and Arabic, with more being added monthly."
    }
  ];

  return (
    <div className="pt-24 w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto text-center">
        <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Pricing</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-aictual-black">
          Simple and transparent.
        </h1>
        <p className="text-xl text-aictual-gray max-w-3xl mx-auto leading-relaxed">
          We charge based on the actual amount of spoken content in your video. 
          You only pay for the parts where someone is speaking—not for silence, music, or visuals.
        </p>
      </section>

      {/* Core Pricing Card */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-aictual-black/10 rounded-3xl p-8 md:p-16 text-center shadow-xl shadow-aictual-black/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-aictual-accent/5 rounded-full -mr-16 -mt-16"></div>
            
            <span className="text-sm font-bold uppercase tracking-widest text-aictual-accent mb-4 block">Pay-As-You-Go</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <span className="text-aictual-gray text-2xl font-light">Starting at</span>
              <div className="flex items-baseline">
                <span className="text-6xl md:text-8xl font-display font-bold text-aictual-black">~$4</span>
                <span className="text-aictual-gray text-xl ml-2">per minute of speech</span>
              </div>
            </div>
            
            <div className="max-w-md mx-auto h-[1px] bg-aictual-black/5 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              {pricingDrivers.map((driver, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 font-display font-bold text-aictual-black">
                    <Info size={16} className="text-aictual-accent" />
                    {driver.title}
                  </div>
                  <p className="text-sm text-aictual-gray leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-12 py-4 bg-aictual-black text-white text-sm font-medium hover:bg-aictual-gray transition-all shadow-lg hover:shadow-aictual-black/20">
                  Contact Sales for a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-24 px-6 md:px-12 bg-white/50 border-y border-aictual-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">What’s Included</h2>
            <p className="text-aictual-gray">Every minute of processed content includes our full suite of technologies.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whatsIncluded.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-aictual-black/5 rounded-2xl bg-white">
                <div className="w-10 h-10 rounded-full bg-aictual-accent/10 flex items-center justify-center mb-4">
                  <Check className="text-aictual-accent w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-aictual-black">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Pricing focus) */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-16 text-center">Built to Scale</h2>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-display font-bold text-aictual-black/5 mb-6 group-hover:text-aictual-accent/20 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-aictual-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-aictual-black/10 pb-4">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between text-left py-4 focus:outline-none"
              >
                <span className="font-display font-bold text-lg text-aictual-black">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="text-aictual-accent" /> : <ChevronDown className="text-aictual-gray" />}
              </button>
              {openFaq === i && (
                <div className="pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-aictual-gray leading-relaxed italic">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Pricing;