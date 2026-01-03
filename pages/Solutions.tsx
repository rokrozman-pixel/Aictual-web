import React from 'react';
import { Mic, Video, Languages, Layers, Cpu, Music, ArrowRight, TrendingUp, Users, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const featuresList = [
    {
      icon: Languages,
      title: "Multilingual Translation",
      desc: "Our team ensures your video content is translated into over 30 languages with 98% accuracy, handling cultural nuances perfectly.",
    },
    {
      icon: Mic,
      title: "Voice Cloning",
      desc: "We analyze your voice sample to recreate your unique timbre and intonation. Your international audience hears YOU.",
    },
    {
      icon: Video,
      title: "AI Lip Syncing",
      desc: "We use advanced visual AI to adjust mouth movements in the video to perfectly match the translated audio track.",
    },
    {
      icon: Layers,
      title: "Multi-Speaker Detection",
      desc: "Interviews or podcasts? We identify different speakers and apply distinct voice clones to each person automatically.",
    },
    {
      icon: Music,
      title: "Audio Engineering",
      desc: "We professionally separate vocal tracks from music and sound effects, ensuring your background audio remains pristine.",
    },
    {
      icon: Cpu,
      title: "Full Service Delivery",
      desc: "No software for you to manage. We handle the rendering, QC, and delivery. You just hit upload.",
    }
  ];

  return (
    <div className="pt-24 w-full">
       <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto text-center">
         <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Our Technology</span>
         <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-aictual-black">
           Our Technology
         </h1>
         <p className="text-xl text-aictual-gray max-w-3xl mx-auto leading-relaxed">
           We combine cutting-edge AI with human expertise to deliver broadcast-quality localization.
         </p>
       </section>

       <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {featuresList.map((feature, i) => (
              <div key={i} className="group relative bg-white border border-aictual-black/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-aictual-black/5 overflow-hidden">
                <div className="absolute inset-0 bg-aictual-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 rounded-xl bg-aictual-black flex items-center justify-center mb-6 shadow-lg text-white transform group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 text-aictual-black relative z-10">{feature.title}</h3>
                <p className="text-aictual-gray leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Lip Sync Deep Dive */}
           <div className="bg-white border border-aictual-black/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-sm mb-32">
              <div className="flex-1 space-y-6">
                 <h2 className="font-display text-3xl md:text-4xl font-bold text-aictual-black">Lip Sync Technology</h2>
                 <p className="text-aictual-gray leading-relaxed text-lg">
                   Traditional dubbing looks awkward because the lips don't match the sound. aictual solves this by using Generative Adversarial Networks (GANs) to reshape the speaker's mouth area frame-by-frame. The result is indistinguishable from the original recording.
                 </p>
                 <ul className="space-y-4 pt-4">
                   {['Frame-perfect accuracy', 'Preserves facial expressions', 'HD & 4K support'].map(item => (
                     <li key={item} className="flex items-center gap-3 text-base font-medium text-aictual-black">
                       <div className="w-2 h-2 rounded-full bg-aictual-accent"></div> {item}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="flex-1 w-full aspect-video bg-aictual-black/5 rounded-2xl border border-aictual-black/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                     {[...Array(36)].map((_, i) => (
                       <div key={i} className="border-[0.5px] border-aictual-black/20"></div>
                     ))}
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto border-2 border-aictual-black rounded-full flex items-center justify-center mb-4 bg-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Video size={40} className="text-aictual-black" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-aictual-black">AI Processing Active</span>
                  </div>
              </div>
           </div>

           {/* Proof of Global Reach Section */}
           <div className="mb-32">
              <div className="text-center mb-16">
                <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Market Proof</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-aictual-black mb-6">Global Reach Is Already Proven</h2>
                <p className="text-xl text-aictual-gray max-w-3xl mx-auto leading-relaxed">
                  Some of the world’s biggest YouTube creators are already showing what happens when content goes multilingual.
                </p>
              </div>

              {/* carwow Case Study */}
              <div className="bg-aictual-black text-white rounded-3xl p-8 md:p-16 mb-16 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-[1px] bg-aictual-accent"></div>
                        <span className="text-aictual-accent font-display text-xl uppercase tracking-tighter italic">Case Study: carwow</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-1 space-y-4">
                            <h3 className="text-3xl font-display font-bold">The carwow Expansion</h3>
                            <p className="text-white/60 leading-relaxed">
                              Same content. Same brand. Entirely new audiences. carwow proved that language is not a barrier — it’s an opportunity.
                            </p>
                        </div>
                        
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { label: "Main Channel (EN)", value: "10M+", sub: "Subscribers" },
                                { label: "carwow en Español", value: "1.5M+", sub: "Subscribers" },
                                { label: "carwow Россия", value: "1.5M+", sub: "Subscribers" }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                    <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-medium">{stat.label}</div>
                                    <div className="text-4xl font-display font-bold text-aictual-accent mb-1">{stat.value}</div>
                                    <div className="text-xs text-white/40 font-medium">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
              </div>

              {/* Other Creators */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="space-y-6">
                    <h3 className="font-display text-3xl font-bold text-aictual-black">And carwow isn’t alone.</h3>
                    <p className="text-aictual-gray text-lg leading-relaxed">
                      Creators like MrBeast, Nas Daily, TED, and Kurzgesagt have successfully launched channels in multiple languages—reaching millions of viewers who would never engage with English-only content.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      {['MrBeast', 'Nas Daily', 'TED', 'Kurzgesagt'].map((creator) => (
                          <div key={creator} className="border border-aictual-black/10 p-6 rounded-xl flex items-center justify-center font-display font-bold text-aictual-black text-xl hover:bg-aictual-accent/5 hover:border-aictual-accent transition-all">
                              {creator}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Unlocking Opportunities */}
              <div className="border-t border-aictual-black/10 pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                      { icon: Users, title: "Massive New Audiences", desc: "Unlock billions of potential viewers overnight." },
                      { icon: TrendingUp, title: "Higher View Counts", desc: "Compound your views across localized channels." },
                      { icon: Globe, title: "Global Brand Presence", desc: "Be recognized as a world-class creator everywhere." },
                      { icon: DollarSign, title: "Additional Streams", desc: "New markets mean new advertisers and CPMs." }
                  ].map((item, i) => (
                      <div key={i} className="space-y-4">
                          <item.icon className="w-8 h-8 text-aictual-black" strokeWidth={1.5} />
                          <h4 className="font-display font-bold text-lg text-aictual-black">{item.title}</h4>
                          <p className="text-sm text-aictual-gray leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>

              <div className="mt-20 p-8 md:p-12 bg-aictual-bg border border-aictual-black/5 rounded-3xl text-center">
                  <p className="text-2xl font-display text-aictual-black italic max-w-4xl mx-auto leading-relaxed">
                    "With aictual., scaling your content globally doesn’t require new production, new teams, or new ideas — just your voice, translated and dubbed intelligently."
                  </p>
              </div>
           </div>
       </section>

       {/* Custom CTA based on content provided */}
       <section className="py-20 px-6 w-full flex flex-col items-center justify-center text-center border-t border-aictual-black/5 bg-white/50">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-aictual-black">Ready to transform your content?</h3>
          <Link to="/contact">
            <button className="group relative px-8 py-4 bg-aictual-black text-white text-lg font-medium overflow-hidden transition-all hover:pr-10 shadow-lg hover:shadow-aictual-accent/20">
                <span className="relative z-10 flex items-center gap-2">
                    Partner With Us <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-aictual-gray transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
          </Link>
       </section>
    </div>
  );
};

export default Solutions;