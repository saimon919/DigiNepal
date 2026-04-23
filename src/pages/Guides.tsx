import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Server, Activity, Terminal, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { guidesData } from '../data/guidesData';
import AdBanner from '../components/AdBanner';

export default function Guides() {
    const guides = Object.values(guidesData);
    const featuredGuide = guides[0];
    const otherGuides = guides.slice(1);

    return (
        <div className="space-y-16 px-4 md:px-0 py-8 relative">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10 glass-panel hud-border p-12">
                <div className="flex items-center justify-center gap-3 text-primary mb-4">
                    <Server size={16} className="animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Knowledge_Base_Access</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter leading-tight uppercase">
                    DATA_CUBES &amp; <span className="text-glow-blue">PROTOCOLS</span>
                </h1>
                <p className="text-lg text-text-dim max-w-xl mx-auto font-mono">
                    Access high-level instructional packets for creator and developer ops. Connect to the grid and elevate your workflow.
                </p>
                
                {/* HUD Readouts */}
                <div className="flex justify-center gap-8 pt-6 border-t border-white/5 font-mono text-[9px] uppercase tracking-widest text-text-dim">
                    <span className="flex items-center gap-2"><Activity size={12} className="text-primary" /> Active_Nodes: {guides.length}</span>
                    <span className="flex items-center gap-2"><ShieldAlert size={12} className="text-secondary" /> Encryption: NONE</span>
                </div>
            </div>

            {/* Featured Guide */}
            {featuredGuide && (
                <Link
                    to={`/guides/${featuredGuide.slug}`}
                    className="block glass-panel hud-border overflow-hidden hover:border-primary/50 transition-all group relative z-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                        <div className="md:col-span-7 overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700" />
                            <img
                                src={featuredGuide.image}
                                alt={featuredGuide.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                            />
                            {/* Overlay tech grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-20 pointer-events-none" />
                        </div>
                        <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-6 relative border-l border-white/5">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Terminal className="text-primary" size={32} />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest outline outline-1 outline-offset-2 outline-primary/10">Priority_Node</span>
                                <span className="text-[10px] text-text-dim font-mono uppercase tracking-widest">{featuredGuide.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight uppercase group-hover:text-primary transition-colors">{featuredGuide.title}</h2>
                            <p className="text-text-dim leading-relaxed font-medium">{featuredGuide.intro.substring(0, 150)}...</p>
                            <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-4 text-[10px] font-mono text-text-dim uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {featuredGuide.readTime}</span>
                                    <span>STATUS: READY</span>
                                </div>
                                <span className="text-primary font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Initialize Packet <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            {/* Ad Banner */}
            <AdBanner slot="horizontal" />

            {/* Guide Cards Grid */}
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/20">
                    <h2 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-widest">
                        <BookOpen size={20} className="text-primary" />
                        Standard_Protocols
                    </h2>
                    <span className="text-[10px] font-mono text-primary uppercase">Sort: Auto</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherGuides.map((guide, i) => (
                        <motion.div
                            key={guide.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={`/guides/${guide.slug}`}
                                className="glass-panel hud-border overflow-hidden hover:border-secondary/50 transition-all group flex flex-col h-full bg-white/5"
                            >
                                <div className="aspect-video overflow-hidden relative border-b border-white/10">
                                    <div className="absolute inset-0 bg-bg/50 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                                    />
                                    <div className="absolute bottom-3 right-3 z-20 flex gap-1">
                                        <div className="w-1 h-3 bg-primary animate-pulse" />
                                        <div className="w-1 h-3 bg-primary/50" />
                                        <div className="w-1 h-3 bg-primary/20" />
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="bg-secondary/10 border border-secondary/20 text-secondary px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">
                                            {guide.category}
                                        </span>
                                        <span className="text-[9px] font-mono text-text-dim flex items-center gap-1 uppercase">
                                            <Clock size={10} /> {guide.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-black text-white leading-snug uppercase group-hover:text-secondary transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-sm font-medium text-text-dim leading-relaxed flex-1 line-clamp-3">
                                        {guide.intro}...
                                    </p>
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-secondary font-black text-[10px] flex items-center gap-1.5 uppercase tracking-widest group-hover:gap-2.5 transition-all">
                                            Access <ArrowRight size={12} />
                                        </span>
                                        <span className="text-[8px] font-mono text-text-dim uppercase">ID: 0x{guide.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString(16).toUpperCase()}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ad Banner */}
            <AdBanner slot="horizontal" />

            {/* Global CTA */}
            <div className="bg-primary p-[1px] rounded-[2rem] shadow-glow relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20 animate-slide"></div>
                <div className="bg-bg rounded-[2rem] p-10 md:p-16 text-center space-y-6 relative z-20">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                        <Terminal size={32} className="text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase">READY_TO_ESTABLISH_CONNECTION?</h2>
                    <p className="text-text-dim font-medium max-w-xl mx-auto text-lg">
                        Join the network grid. Sync your local data banks to our marketplace and distribute your creative payloads globally.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/store"
                            className="inline-flex items-center gap-2 bg-primary text-bg px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:scale-105 hover:shadow-glow-strong transition-all text-xs"
                        >
                            Open Market Terminal <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

