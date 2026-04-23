import React, { useState } from 'react';
import { Mail, Send, Headphones, MessageSquare, Instagram, Music2, Share2, Ghost, CheckCircle, Terminal, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <div className="min-h-screen relative overflow-hidden font-mono pt-12 pb-24 px-4 md:px-8">
            {/* Background Map / Grid Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
                
                {/* Simplified HUD Map Radar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-[400px] h-[400px] border border-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-[200px] h-[200px] border border-primary/30 rounded-full" />
                    </div>
                </div>
                {/* Radar Sweep */}
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border-r-2 border-primary/50 origin-top-left animate-[spin_4s_linear_infinite] opacity-50" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 space-y-8">
                {/* Header Readout */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-primary/30 pb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Activity size={18} className="animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Secure_Channel_Init</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-widest uppercase">
                            COMM_LINK
                        </h1>
                    </div>
                    <div className="flex gap-6 text-[10px] uppercase tracking-widest text-text-dim text-right">
                        <div className="space-y-1">
                            <p>Status:</p>
                            <p className="text-secondary font-bold">Encrypted</p>
                        </div>
                        <div className="space-y-1">
                            <p>Node:</p>
                            <p className="text-primary font-bold">PKR_NEPAL</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-4">
                    {/* Left: Message Console */}
                    <div className="flex-[1.8] glass-panel hud-border p-8 md:p-12 relative overflow-hidden group">
                        
                        {/* Success Message Overlay */}
                        {submitted && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 z-50 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center border border-primary/50"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:4px_4px] opacity-10" />
                                <div className="w-24 h-24 bg-primary/10 text-primary border border-primary/30 rounded-full flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-50" />
                                    <CheckCircle size={48} />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest">TRANSMISSION_SUCCESS</h2>
                                <div className="space-y-2 text-text-dim text-sm max-w-sm mb-8 font-mono">
                                    <p>Payload received at HQ node [PKR].</p>
                                    <p>Processing queue active. Expected response time: &lt; 24h.</p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[10px] text-primary border border-primary/30 px-6 py-2 rounded uppercase tracking-[0.2em] hover:bg-primary/20 transition-all font-bold"
                                >
                                    OPEN_NEW_CHANNEL
                                </button>
                            </motion.div>
                        )}

                        <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-6">
                            <div>
                                <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Terminal size={20} className="text-primary" />
                                    Input_Console
                                </h2>
                                <p className="text-[10px] text-text-dim tracking-widest uppercase">Compile message for grid administrators.</p>
                            </div>
                            <Cpu size={24} className="text-white/20" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                        Param_FirstName
                                    </label>
                                    <input required type="text" id="first-name" name="first_name" placeholder="Execute input..." className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:bg-primary/5 focus:shadow-glow outline-none transition-all text-sm font-mono placeholder:text-white/20" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                        Param_LastName
                                    </label>
                                    <input required type="text" id="last-name" name="last_name" placeholder="Execute input..." className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:bg-primary/5 focus:shadow-glow outline-none transition-all text-sm font-mono placeholder:text-white/20" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        Node_Address (Email)
                                    </label>
                                    <input required type="email" id="contact-email" name="email" placeholder="user@grid.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:bg-primary/5 focus:shadow-glow outline-none transition-all text-sm font-mono placeholder:text-white/20" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                                        Frequency (Phone)
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="w-24 bg-black/40 border border-white/10 rounded-lg flex items-center justify-center p-4 gap-2 text-xs font-mono text-white/50">
                                            <span>NP</span>
                                            <span>+977</span>
                                        </div>
                                        <input required type="tel" id="contact-tel" name="phone" placeholder="98...." className="flex-1 bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:bg-primary/5 focus:shadow-glow outline-none transition-all text-sm font-mono placeholder:text-white/20" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 w-full">
                                <label className="text-[10px] font-black uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    Payload_Data (Message)
                                </label>
                                <textarea required id="contact-message" name="message" placeholder="Initialize data string..." className="w-full bg-black/40 border border-white/10 rounded-lg p-5 text-white focus:border-primary focus:bg-primary/5 focus:shadow-glow outline-none transition-all text-sm font-mono h-40 resize-none placeholder:text-white/20 block" />
                            </div>

                            <div className="pt-6 w-full border-t border-white/5">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full md:w-auto bg-primary text-bg px-12 py-4 rounded-lg font-black text-xs uppercase tracking-[0.2em] hover:shadow-glow-strong hover:bg-white transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-wait' : ''}`}
                                >
                                    {loading ? 'TRANSMITTING...' : 'INITIATE_TRANSFER'}
                                    <Send size={16} className={loading ? 'animate-bounce' : ''} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Technical Directory */}
                    <div className="flex-1 glass-panel hud-border p-8 relative overflow-hidden flex flex-col justify-between">
                        {/* Overlay elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full pointer-events-none" />
                        
                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-xl font-black text-white uppercase tracking-widest border-b border-primary/30 pb-4 mb-6">
                                    Global_Directory
                                </h3>
                                <p className="text-[10px] text-text-dim font-mono uppercase">Direct lines to central systems.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-start gap-4 cursor-pointer">
                                    <div className="mt-1 text-primary group-hover:animate-pulse">
                                        <Headphones size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-dim mb-1">Voice_CommProtocol</p>
                                        <p className="font-mono text-white text-sm">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-secondary/50 hover:bg-secondary/5 transition-all group flex items-start gap-4 cursor-pointer">
                                    <div className="mt-1 text-secondary group-hover:animate-pulse">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-dim mb-1">Text_PacketStream</p>
                                        <p className="font-mono text-white text-sm">+977 9867309193</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-start gap-4 cursor-pointer">
                                    <div className="mt-1 text-primary group-hover:animate-pulse">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-dim mb-1">Data_DropNode</p>
                                        <p className="font-mono text-white text-xs break-all">sunarsaimon.43244@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2">
                                <ShieldAlert size={12} className="text-secondary" />
                                Social_Uplinks
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { icon: <Ghost size={16} />, name: 'Snap' },
                                    { icon: <Instagram size={16} />, name: 'Insta' },
                                    { icon: <Music2 size={16} />, name: 'TikTok' },
                                    { icon: <Share2 size={16} />, name: 'Share' }
                                ].map((social, i) => (
                                    <button key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all" title={social.name}>
                                        {social.icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
