import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { Send, CheckCircle2, Mail, MapPin, UserCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.get('name')}`);
    const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`);
    
    setTimeout(() => {
      setStatus('success');
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary">Let's Connect</h2>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-8 rounded-2xl flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 text-secondary hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <p>{personalData.email}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-secondary">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Location</p>
                      <p>{personalData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-secondary">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <UserCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Role</p>
                      <p>{personalData.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 glass-panel p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary ml-1">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary ml-1">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none shadow-inner"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none disabled:shadow-none"
              >
                {status === 'submitting' ? (
                  <span className="animate-pulse">Preparing Email...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={20} />
                    Opening Mail Client...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
