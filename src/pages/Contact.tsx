import React, { useState } from 'react';
import { Mail, Send, Headphones, MessageSquare, Instagram, Music2, Share2, Ghost, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault();

        setLoading(true);
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setSubmitted(true);
        setLoading(false);

        // Reset after 8 seconds
        setTimeout(() => setSubmitted(false), 8000);
    };

    return (
        <div className="bg-white min-h-screen relative overflow-hidden font-sans">
            {/* Background Dotted Map Pattern */}
            <div className="absolute top-0 left-0 right-0 h-[600px] z-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'radial-gradient(#3E517A 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
                {/* World Map SVG or Illustration Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center -translate-y-20 opacity-20">
                    <svg viewBox="0 0 1000 500" className="w-[1200px] h-auto fill-primary">
                        <circle cx="200" cy="150" r="4" className="animate-pulse" />
                        <circle cx="450" cy="220" r="4" className="animate-pulse" />
                        <circle cx="780" cy="350" r="4" className="animate-pulse" />
                        <circle cx="850" cy="180" r="4" className="animate-pulse" />
                        {/* Nepal Marker */}
                        <g className="relative">
                            <circle cx="700" cy="195" r="5" className="fill-accent animate-ping" />
                            <circle cx="700" cy="195" r="5" className="fill-accent" />
                            <foreignObject x="650" y="210" width="100" height="40">
                                <div className="bg-primary text-white text-[8px] font-bold px-2 py-1 rounded-md shadow-lg text-center">
                                    Pokhara, Nepal
                                </div>
                            </foreignObject>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter">CONTACT US</h1>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-0 bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden relative">

                    {/* Success Message Overlay */}
                    {submitted && (
                        <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-200/50">
                                <CheckCircle size={48} className="animate-[bounce_2s_infinite]" />
                            </div>
                            <h2 className="text-4xl font-black text-primary mb-3">Message Received!</h2>
                            <p className="text-text-dim text-lg max-w-sm leading-relaxed">
                                We've got your message, Saimon! <br />
                                Our team will get back to you at <strong>Pokhara</strong> office or via email within 24 hours.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-secondary font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    )}

                    {/* Left: Message Form */}
                    <div className="flex-[1.8] p-8 md:p-16">
                        <div className="mb-10">
                            <h2 className="text-3xl font-display font-black text-text-main mb-3 uppercase tracking-tight">Send Us a Message</h2>
                            <p className="text-text-dim text-sm leading-relaxed max-w-md">Do you have a question? Complaints? or need any help to choose the right product from DigiNepal? Feel free to contact us.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-text-dim tracking-widest pl-1">First Name</label>
                                    <input required type="text" placeholder="Enter your first name" className="w-full bg-bg rounded-2xl p-4 border-2 border-transparent focus:border-secondary/20 focus:bg-white outline-none transition-all text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-text-dim tracking-widest pl-1">Last Name</label>
                                    <input required type="text" placeholder="Enter your last name" className="w-full bg-bg rounded-2xl p-4 border-2 border-transparent focus:border-secondary/20 focus:bg-white outline-none transition-all text-sm font-medium" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-text-dim tracking-widest pl-1">Email</label>
                                    <input required type="email" placeholder="Enter your email" className="w-full bg-bg rounded-2xl p-4 border-2 border-transparent focus:border-secondary/20 focus:bg-white outline-none transition-all text-sm font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-text-dim tracking-widest pl-1">Contact Details</label>
                                    <div className="flex gap-2">
                                        <div className="w-24 bg-bg rounded-2xl flex items-center justify-center p-4 gap-2 text-xs font-bold border-2 border-transparent">
                                            <span>🇳🇵</span>
                                            <span>+977</span>
                                        </div>
                                        <input required type="tel" placeholder="Enter your number" className="flex-1 bg-bg rounded-2xl p-4 border-2 border-transparent focus:border-secondary/20 focus:bg-white outline-none transition-all text-sm font-medium" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-text-dim tracking-widest pl-1">Email / Message</label>
                                <textarea required placeholder="Enter your message" className="w-full bg-bg rounded-3xl p-6 border-2 border-transparent focus:border-secondary/20 focus:bg-white outline-none transition-all text-sm font-medium h-48 resize-none" />
                            </div>

                            <div className="pt-4 text-center md:text-left">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`bg-primary text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                    <Send size={18} className={loading ? 'animate-pulse' : ''} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Info Sidebar */}
                    <div className="flex-1 bg-primary p-8 md:p-12 text-white flex flex-col justify-between relative group">
                        {/* Decorative Gradient Flare */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-display font-black leading-tight mb-12">Hi! We are always here to help you</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                                        <Headphones size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Hotline :</p>
                                        <p className="font-bold text-lg">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">SMS / Whatsapp :</p>
                                        <p className="font-bold text-lg">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                                        <Mail size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Email :</p>
                                        <p className="font-bold text-lg text-sm truncate">sunarsaimon.43244@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">Contact with us</p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: <Ghost size={18} />, color: 'hover:bg-[#FFFC00] hover:text-black' },
                                    { icon: <Instagram size={18} />, color: 'hover:bg-[#E4405F]' },
                                    { icon: <Music2 size={18} />, color: 'hover:bg-[#000000]' },
                                    { icon: <Music2 size={18} />, color: 'hover:bg-[#25D366]' },
                                    { icon: <Share2 size={18} />, color: 'hover:bg-blue-400' }
                                ].map((social, i) => (
                                    <a key={i} className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg ${social.color}`}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
