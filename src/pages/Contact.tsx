import React, { useState } from 'react';
import { Mail, Send, Headphones, MessageSquare, Instagram, Music2, Share2, Ghost, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault();

        setLoading(true);
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setLoading(false);

        // Reset after 8 seconds
        setTimeout(() => setSubmitted(false), 8000);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32 overflow-hidden">
            <Helmet>
                <title>Contact Us | DigiNepal Support</title>
                <meta name="description" content="Get in touch with the DigiNepal team for support, business inquiries, or questions about our digital assets." />
            </Helmet>

            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Headphones size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/80">Support Center</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">Contact Us</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/80 max-w-2xl border-l-4 border-secondary/20 pl-8">
                        Have a question about a digital asset, need help with a download, or want to partner with us? Our team is here to help. We aim to respond to all inquiries within 24 hours.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left: Contact Form */}
                <div className="lg:col-span-8">
                    <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 relative group overflow-hidden">
                        <div className="bg-deep/40 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-16 space-y-12 overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="py-12 flex flex-col items-center text-center space-y-10"
                                    >
                                        <div className="skeuo-inset w-32 h-32 rounded-full flex items-center justify-center border-primary/20 bg-primary/5 relative">
                                            <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20" />
                                            <CheckCircle size={56} className="text-primary" />
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-none">Message Sent!</h2>
                                            <p className="text-lg text-text-dim/80 max-w-lg mx-auto font-medium leading-relaxed border-l-4 border-primary/20 pl-8">
                                                Thank you for reaching out. A member of our support team will get back to you at your provided email address shortly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="skeuo-panel bg-primary text-deep px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(141,242,192,0.3)]"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-12"
                                    >
                                        <div className="flex items-center justify-between border-b border-white/5 pb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="skeuo-inset p-3 rounded-xl border-primary/20">
                                                    <Mail size={24} className="text-primary" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Send us a message</h2>
                                                    <p className="text-[10px] font-black text-text-dim/60 uppercase tracking-widest">Fill out the form below</p>
                                                </div>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-primary/80 tracking-widest ml-4 flex items-center gap-2">
                                                        First Name *
                                                    </label>
                                                    <input required type="text" placeholder="John" className="w-full h-16 skeuo-inset px-8 rounded-2xl text-white font-medium text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-primary/80 tracking-widest ml-4 flex items-center gap-2">
                                                        Last Name *
                                                    </label>
                                                    <input required type="text" placeholder="Doe" className="w-full h-16 skeuo-inset px-8 rounded-2xl text-white font-medium text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-secondary/80 tracking-widest ml-4 flex items-center gap-2">
                                                        Email Address *
                                                    </label>
                                                    <input required type="email" placeholder="john@example.com" className="w-full h-16 skeuo-inset px-8 rounded-2xl text-white font-medium text-sm focus:border-secondary/40 transition-all outline-none border-white/5 bg-deep/40" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase text-secondary/80 tracking-widest ml-4 flex items-center gap-2">
                                                        Phone Number (Optional)
                                                    </label>
                                                    <div className="flex gap-4 h-16">
                                                        <div className="w-24 skeuo-inset rounded-2xl flex items-center justify-center text-[10px] font-black text-white/40 tracking-widest bg-deep/40 border-white/5">
                                                            +977
                                                        </div>
                                                        <input type="tel" placeholder="98XXXXXXXX" className="flex-1 skeuo-inset px-8 rounded-2xl text-white font-medium text-sm focus:border-secondary/40 transition-all outline-none border-white/5 bg-deep/40" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase text-primary/80 tracking-widest ml-4 flex items-center gap-2">
                                                    How can we help? *
                                                </label>
                                                <textarea required placeholder="Please describe your issue or inquiry..." className="w-full h-48 skeuo-inset p-8 rounded-[2rem] text-white font-medium text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40 resize-none" />
                                            </div>

                                            <div className="pt-8 border-t border-white/5">
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className={`w-full md:w-auto h-20 skeuo-panel bg-primary text-deep px-16 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(141,242,192,0.3)] flex items-center justify-center gap-6 ${loading ? 'opacity-70 cursor-wait' : ''}`}
                                                >
                                                    {loading ? 'Sending...' : 'Send Message'}
                                                    <Send size={20} className={loading ? 'animate-bounce' : 'group-hover:translate-x-2 transition-transform'} />
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Directory & Socials */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="skeuo-panel p-1 rounded-[3rem] border-secondary/20 bg-secondary/5">
                        <div className="bg-deep/80 backdrop-blur-2xl rounded-[3rem] p-10 space-y-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[80px] rounded-full" />
                            
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">Contact Info</h3>
                                <p className="text-[10px] font-black text-text-dim/60 uppercase tracking-widest">Reach out directly</p>
                            </div>

                            <div className="space-y-6">
                                <div className="skeuo-panel p-6 rounded-2xl bg-white/5 border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group flex items-start gap-5 cursor-pointer">
                                    <div className="skeuo-inset p-3 rounded-xl border-primary/20 group-hover:scale-110 transition-transform">
                                        <Headphones size={20} className="text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-text-dim/60 mb-1">Phone Support</p>
                                        <p className="font-black text-white text-lg tracking-tighter">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="skeuo-panel p-6 rounded-2xl bg-white/5 border-white/5 hover:border-secondary/30 hover:bg-secondary/5 transition-all group flex items-start gap-5 cursor-pointer">
                                    <div className="skeuo-inset p-3 rounded-xl border-secondary/20 group-hover:scale-110 transition-transform">
                                        <MessageSquare size={20} className="text-secondary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-text-dim/60 mb-1">WhatsApp / SMS</p>
                                        <p className="font-black text-white text-lg tracking-tighter">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="skeuo-panel p-6 rounded-2xl bg-white/5 border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group flex items-start gap-5 cursor-pointer">
                                    <div className="skeuo-inset p-3 rounded-xl border-primary/20 group-hover:scale-110 transition-transform">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-text-dim/60 mb-1">Email</p>
                                        <p className="font-black text-white text-sm tracking-tighter break-all">sunarsaimon.43244@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 space-y-6">
                                <div className="flex items-center gap-3 text-secondary/60">
                                    <Share2 size={16} />
                                    <p className="text-[9px] font-black uppercase tracking-widest">Connect with us</p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { icon: <Ghost size={18} />, name: 'Snapchat' },
                                        { icon: <Instagram size={18} />, name: 'Instagram' },
                                        { icon: <Music2 size={18} />, name: 'TikTok' }
                                    ].map((social, i) => (
                                        <button key={i} className="skeuo-inset w-14 h-14 rounded-2xl flex items-center justify-center text-text-dim/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all border-white/5" title={social.name}>
                                            {social.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
