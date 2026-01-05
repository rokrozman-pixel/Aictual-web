import React, { useState } from 'react';
import { Mail, ArrowRight, Copy, Check, MessageSquare, Globe, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "rok.rozman@aictual.ai";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 w-full min-h-screen flex flex-col items-center">
      {/* Hero Header */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-5xl mx-auto text-center">
        <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-6 block animate-in fade-in slide-in-from-bottom-3 duration-700">Get Started</span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-aictual-black tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Let's build <br/><span className="italic font-normal text-aictual-accent">something global.</span>
        </h1>
        <p className="text-xl md:text-2xl text-aictual-gray max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000">
          We don't do automated tickets. Every partnership starts with a direct conversation.
        </p>
      </section>

      {/* Main Contact Card */}
      <section className="px-6 md:px-12 pb-32 w-full max-w-7xl mx-auto">
        <div className="relative group animate-in fade-in zoom-in-95 duration-1000">
          {/* Decorative Blur Background */}
          <div className="absolute -inset-4 bg-aictual-accent/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-white border border-aictual-black/5 rounded-[2.5rem] p-12 md:p-24 flex flex-col items-center text-center shadow-2xl shadow-aictual-black/5 overflow-hidden">
            {/* Subtle Grain Overlay for the card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grain"></div>
            
            <div className="w-16 h-16 rounded-full bg-aictual-black flex items-center justify-center mb-10 shadow-lg">
              <Mail className="text-white w-8 h-8" strokeWidth={1.5} />
            </div>

            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-aictual-gray mb-6">Direct Inquiry</h2>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href={`mailto:${email}`}
                className="font-display text-3xl md:text-5xl lg:text-4xl font-bold text-aictual-black hover:text-aictual-accent transition-colors duration-300 break-all"
              >
                {email}
              </a>
              
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-aictual-bg border border-aictual-black/5 text-sm font-medium hover:bg-white hover:border-aictual-accent transition-all duration-300 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-500" />
                    <span>Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-aictual-gray" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-aictual-black/5 pt-16">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-aictual-accent/5 rounded-xl">
                  <MessageSquare size={24} className="text-aictual-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-aictual-black mb-1">Response Time</h4>
                  <p className="text-sm text-aictual-gray">Under 12 hours</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-aictual-accent/5 rounded-xl">
                  <Globe size={24} className="text-aictual-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-aictual-black mb-1">Office Hours</h4>
                  <p className="text-sm text-aictual-gray">Amsterdam (CET)</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="p-3 bg-aictual-accent/5 rounded-xl">
                  <Zap size={24} className="text-aictual-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-aictual-black mb-1">Fast Onboarding</h4>
                  <p className="text-sm text-aictual-gray">Ready in 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          <div className="text-left max-w-md">
            <h3 className="font-display font-bold text-2xl mb-2 text-aictual-black">What happens next?</h3>
            <p className="text-aictual-gray">We'll review your content, prepare a custom demo of your voice in 3 languages, and schedule a brief strategy call.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;