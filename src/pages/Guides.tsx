import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Server, Terminal, ShieldAlert, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { guidesData } from '../data/guidesData';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';

export default function Guides() {
    const guides = Object.values(guidesData);
    const featuredGuide = guides[0];
    const otherGuides = guides.slice(1);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Tactical Briefings | DigiNepal Knowledge Base</title>
                <meta name="description" content="Access instructional data packets for digital asset creation and deployment. Connect to the grid and elevate your development workflow protocols." />
            </Helmet>

            {/* Tactical Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Server size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">NEURAL_KNOWLEDGE_BASE_v4.0</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">DATA_CUBES</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        High-level instructional data packets for creator and developer ops. Connect to the knowledge grid and elevate your deployment protocols.
                    </p>
                </div>
                <div className="flex gap-8 text-center lg:text-right shrink-0">
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-secondary/60 uppercase tracking-[0.4em] mb-1 text-tactical">NODES_SYNCED</p>
                        <p className="text-lg font-black text-white tracking-widest uppercase">{guides.length} PACKETS</p>
                    </div>
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-primary/60 uppercase tracking-[0.4em] mb-1 text-tactical">STATUS</p>
                        <p className="text-lg font-black text-primary tracking-widest uppercase flex items-center gap-2">
                            <ShieldAlert size={16} /> NOMINAL
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Guide: Prime Module */}
            {featuredGuide && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        to={`/guides/${featuredGuide.slug}`}
                        className="block skeuo-panel p-1 rounded-[3.5rem] border-primary/20 bg-deep/40 hover:scale-[1.01] transition-all group overflow-hidden"
                    >
                        <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="lg:col-span-7 h-[400px] lg:h-[500px] relative overflow-hidden skeuo-inset rounded-[3rem] m-2">
                                    <img
                                        src={featuredGuide.image}
                                        alt={featuredGuide.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-deep via-transparent to-transparent hidden lg:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent lg:hidden" />
                                    <div className="absolute top-8 left-8 skeuo-panel bg-primary text-deep px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-[0.4em] text-tactical">
                                        PRIORITY_MODULE
                                    </div>
                                </div>
                                <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center space-y-10 relative">
                                    <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-40 group-hover:text-primary transition-all">
                                        <Terminal size={64} />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-secondary">
                                            <Zap size={16} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-tactical">{featuredGuide.category}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-none uppercase tracking-tighter group-hover:text-primary transition-colors">{featuredGuide.title}</h2>
                                    </div>
                                    <p className="text-lg text-text-dim/60 font-medium leading-relaxed italic border-l-4 border-white/5 pl-8 line-clamp-3">
                                        {featuredGuide.intro}
                                    </p>
                                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                        <div className="flex items-center gap-6">
                                            <div className="skeuo-inset px-4 py-2 rounded-xl flex items-center gap-3 bg-deep/40 border-white/5">
                                                <Clock size={16} className="text-primary/60" />
                                                <span className="text-[10px] font-black uppercase text-white tracking-widest">{featuredGuide.readTime}</span>
                                            </div>
                                        </div>
                                        <button className="skeuo-panel bg-primary text-deep px-10 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-xs group-hover:scale-105 transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.3)] flex items-center gap-4">
                                            INITIALIZE_SYNC <ArrowRight size={18} strokeWidth={3} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            )}

            {/* Ad Banner */}
            <div className="skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            {/* Guide Grid: Protocol Array */}
            <div className="space-y-12">
                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex items-center gap-6">
                        <div className="skeuo-inset p-3 rounded-xl border-secondary/20">
                            <BookOpen size={24} className="text-secondary" />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">STANDARD_PROTOCOLS</h3>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <div className="skeuo-inset px-5 py-2 rounded-xl text-[10px] font-black uppercase text-text-dim/40 tracking-widest bg-deep/40 border-white/5 text-tactical">
                            FILTER: ALL_MODULES
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {otherGuides.map((guide, i) => (
                        <motion.div
                            key={guide.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={`/guides/${guide.slug}`}
                                className="skeuo-panel p-1 rounded-[2.5rem] border-white/5 bg-deep/40 group overflow-hidden flex flex-col h-full"
                            >
                                <div className="bg-deep/60 backdrop-blur-xl rounded-[2.3rem] p-6 space-y-8 flex-1 flex flex-col">
                                    <div className="skeuo-inset aspect-video rounded-2xl overflow-hidden relative border-white/5">
                                        <img
                                            src={guide.image}
                                            alt={guide.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 right-4 skeuo-panel bg-secondary/10 backdrop-blur-md px-3 py-1 rounded-lg border-secondary/20">
                                            <span className="text-[9px] uppercase tracking-widest text-secondary font-black text-tactical">
                                                {guide.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-1">
                                        <h3 className="text-xl font-black text-white leading-tight uppercase group-hover:text-secondary transition-colors tracking-tighter line-clamp-2">
                                            {guide.title}
                                        </h3>
                                        <p className="text-sm font-medium text-text-dim/60 leading-relaxed italic border-l-2 border-white/5 pl-6 line-clamp-3">
                                            {guide.intro}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3 text-text-dim/40">
                                            <Clock size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">{guide.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-secondary font-black uppercase tracking-[0.4em] text-[10px] group-hover:gap-5 transition-all text-tactical">
                                            UPLINK <ArrowRight size={14} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ad Banner (Bottom) */}
            <div className="skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            {/* Global CTA: Grid Uplink */}
            <div className="skeuo-panel p-1 rounded-[3.5rem] border-primary/20 bg-deep/40 mt-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full" />
                
                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-12 md:p-20 text-center space-y-10 relative">
                    <div className="skeuo-inset w-24 h-24 rounded-full flex items-center justify-center mx-auto border-primary/20 bg-primary/5">
                        <Terminal size={48} className="text-primary" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter uppercase leading-none">READY_FOR_DEPLOYMENT?</h2>
                        <p className="text-lg md:text-xl text-text-dim/60 font-medium max-w-2xl mx-auto italic border-l-4 border-primary/20 pl-8 inline-block">
                            Initialize your creator signature and distribute your assets across the global neural grid. High-fidelity marketplace ready.
                        </p>
                    </div>
                    <div className="pt-6">
                        <Link
                            to="/store"
                            className="skeuo-panel bg-primary text-deep px-14 py-6 rounded-2xl font-black uppercase tracking-[0.6em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_40px_rgba(141,242,192,0.3)] inline-flex items-center gap-6"
                        >
                            ACCESS_MARKET_TERMINAL <ArrowRight size={20} strokeWidth={3} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-12 text-center">
                <div className="flex items-center justify-center gap-4 text-text-dim/20">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/10" />
                    <Cpu size={20} />
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-tactical">END_OF_KNOWLEDGE_STREAM</span>
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    );
}
