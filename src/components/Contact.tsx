import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personal';
import { Send, CheckCircle2, Mail, MapPin, UserCircle, RotateCcw } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            subject: `Portfolio Contact from ${name}`,
            message,
            from_name: 'Jay Dudhat Portfolio',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          return;
        }
      } catch (err) {
        console.warn('API submission failed, using client email dispatch:', err);
      }
    }

    // Default seamless dispatch
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary font-display">Let's Connect</h2>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            Whether you have a question, an internship opportunity, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 font-display">Contact Information</h3>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${personalData.email}`} 
                    className="flex items-center gap-4 p-3.5 -mx-3.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center text-left">
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary/70">Email</p>
                      <p className="text-sm font-semibold text-white break-all group-hover:text-accent-light transition-colors">{personalData.email}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-3.5 -mx-3.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center text-left">
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary/70">Location</p>
                      <p className="text-sm font-semibold text-white">{personalData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3.5 -mx-3.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <UserCircle size={20} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center text-left">
                      <p className="text-xs font-mono uppercase tracking-wider text-secondary/70">Role</p>
                      <p className="text-sm font-semibold text-white leading-snug">{personalData.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Message Received Box */}
          <div className="lg:col-span-3 glass-panel p-8 rounded-2xl">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ─── MESSAGE RECEIVED BOX ───────────────────────────────── */
                <motion.div
                  key="received-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-10 px-4 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="text-2xl font-black text-white font-display">
                    Message Received!
                  </h3>

                  <p className="text-secondary text-base max-w-md leading-relaxed">
                    Thank you for reaching out! Your message has been received, and I will get back to your email shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    >
                      <RotateCcw size={16} />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* ─── ORIGINAL CLEAN FORM ────────────────────────────────── */
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-6">
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
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
