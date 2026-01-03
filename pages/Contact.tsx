import React, { useState } from 'react';
import { Mail, CheckCircle, Video, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelUrl: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 w-full">
      <div className="px-6 md:px-12 py-12 md:py-20 max-w-4xl mx-auto text-center">
        <span className="text-aictual-accent font-medium tracking-widest text-xs uppercase mb-4 block">Get in touch</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-aictual-black">Partner With Us</h1>
        <p className="text-lg text-aictual-gray">
          Ready to take your content global? Fill out the form below and our team will get back to you with a custom proposal.
        </p>
      </div>

      <div className="px-6 md:px-12 pb-24 max-w-4xl mx-auto">
        <div className="bg-white border border-aictual-black/10 p-8 md:p-12 rounded-3xl shadow-lg shadow-aictual-black/5">
          {submitted ? (
            <div className="h-96 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-aictual-accent/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-aictual-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4 text-aictual-black">Application Received</h3>
              <p className="text-aictual-gray max-w-md mx-auto">
                Thanks for your interest in aictual. We'll review your channel and be in touch within 24 hours to discuss the next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aictual-black mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-aictual-bg/30 border border-aictual-black/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-aictual-accent focus:border-aictual-accent text-aictual-black placeholder-aictual-gray/50 transition-all"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aictual-black mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-aictual-bg/30 border border-aictual-black/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-aictual-accent focus:border-aictual-accent text-aictual-black placeholder-aictual-gray/50 transition-all"
                    placeholder="jane@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="channel" className="block text-sm font-medium text-aictual-black mb-2 flex items-center gap-2">
                  <Video size={14} className="text-aictual-gray" /> Channel / Portfolio URL
                </label>
                <input
                  type="url"
                  id="channel"
                  required
                  className="w-full px-4 py-3 bg-aictual-bg/30 border border-aictual-black/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-aictual-accent focus:border-aictual-accent text-aictual-black placeholder-aictual-gray/50 transition-all"
                  placeholder="https://youtube.com/@yourchannel"
                  value={formData.channelUrl}
                  onChange={(e) => setFormData({...formData, channelUrl: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-aictual-black mb-2">Tell us about your needs</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-aictual-bg/30 border border-aictual-black/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-aictual-accent focus:border-aictual-accent text-aictual-black placeholder-aictual-gray/50 resize-none transition-all"
                  placeholder="Which languages are you targeting? What is your typical video length?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full group relative px-8 py-4 bg-aictual-black text-white text-lg font-medium overflow-hidden transition-all hover:shadow-lg">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Application <ArrowRight className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-aictual-gray transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </button>
              </div>
              
              <p className="text-center text-xs text-aictual-gray mt-4">
                Or email us directly at <a href="mailto:partners@aictual.com" className="text-aictual-accent hover:underline">partners@aictual.com</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;