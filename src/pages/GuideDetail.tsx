import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, ArrowRight, BookOpen, Share2, Shield, Zap, Terminal, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdBanner from '../components/AdBanner';
import { guidesData } from '../data/guidesData';

export default function GuideDetail() {
    const { slug } = useParams<{ slug: string }>();
    const guide = slug ? (guidesData as any)[slug] : null;

    if (!guide) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
                <div className="glass-panel hud-border p-12 text-center space-y-4">
                    <Terminal size={48} className="text-secondary mx-auto opacity-50" />
                    <h2 className="text-2xl font-black text-white tracking-widest uppercase">ERROR: DATA_NOT_FOUND</h2>
                    <p className="text-text-dim max-w-sm">The requested instructional packet does not exist on the current grid nodes.</p>
                    <Link to="/guides" className="inline-block bg-primary text-bg px-8 py-3 rounded-xl font-black text-xs tracking-widest hover:shadow-glow-strong transition-all">
                        RETURN_TO_INDEX
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
        <Helmet>
            <title>{guide.title} - DigiNepal Guides</title>
            <meta name="description" content={guide.intro.substring(0, 150) + "..."} />
            <meta name="keywords" content={guide.keywords ? guide.keywords.join(', ') : ''} />
            <link rel="canonical" href={`https://diginepal.vercel.app/guides/${guide.slug}`} />
            <meta property="og:title" content={guide.title} />
            <meta property="og:description" content={guide.intro.substring(0, 150) + "..."} />
            <meta property="og:image" content={guide.image} />
        </Helmet>
        <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
            {/* HUD Header Readout */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-white/5">
                <div className="space-y-6 flex-1">
                    <Link to="/guides" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.3em]">
                        <ChevronLeft size={14} /> BACK_TO_INDEX
                    </Link>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{guide.category}</span>
                            <span className="text-[9px] font-mono text-text-dim flex items-center gap-1 uppercase tracking-widest"><Clock size={12} /> {guide.readTime}</span>
                            <span className="hidden md:flex text-[9px] font-mono text-secondary flex items-center gap-1 uppercase tracking-widest"><Shield size={12} /> SECURED_CONTENT.v4</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight tracking-tighter text-glow-blue">
                            {guide.title}
                        </h1>
                        <p className="text-xl text-text-dim leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-6 italic">
                            {guide.intro}
                        </p>
                    </div>
                </div>

                {/* Technical Meta Sidebar */}
                <div className="w-full md:w-64 glass-panel hud-border p-6 space-y-4 shrink-0">
                    <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-text-dim uppercase">Status:</span>
                            <span className="text-primary font-bold">VERIFIED</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-text-dim uppercase">Baud_Rate:</span>
                            <span className="text-primary font-bold">96kbps</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-text-dim uppercase">Access_ID:</span>
                            <span className="text-primary font-bold">0x{slug?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString(16).toUpperCase() || 'FF00'}</span>
                        </div>
                        <div className="pt-2 border-t border-white/5">
                             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2 }}
                                    className="h-full bg-primary"
                                />
                             </div>
                             <span className="text-[8px] font-mono text-text-dim uppercase mt-1 block">Packet_Transfer: 100%</span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black text-white hover:bg-primary/20 hover:border-primary/50 transition-all uppercase tracking-widest">
                        <Share2 size={14} /> SHARE_PACKET
                    </button>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
                        <Activity size={14} className="text-primary group-hover:animate-pulse" />
                        <span className="text-[9px] font-mono text-text-dim uppercase">Telemetry: Active</span>
                    </div>
                </div>
            </div>

            {/* Cover Visualization */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[21/9] hud-border group">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 flex gap-2">
                    {guide.keywords?.map((kw: string, i: number) => (
                         <span key={i} className="bg-bg/80 backdrop-blur-md border border-white/10 text-[9px] text-white px-3 py-1.5 rounded-lg font-mono uppercase tracking-widest">
                            {kw}
                         </span>
                    ))}
                </div>
            </div>

            {/* Ad Integration Buffer */}
            <AdBanner slot="horizontal" />

            {/*主 Article Body Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-10">
                    <div className="glass-panel hud-border p-8 md:p-12 space-y-12">
                        {guide.sections.map((section: any, idx: number) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 border border-primary/20 text-primary rounded-xl flex items-center justify-center text-sm font-black shrink-0 font-mono">
                                            0{idx + 1}
                                        </div>
                                        <h2 className="text-2xl font-black text-white tracking-tight uppercase border-b border-primary/30 pb-2 flex-1">
                                            {section.heading}
                                        </h2>
                                    </div>
                                    <div className="space-y-6">
                                        {section.body.split('\n\n').map((para: string, i: number) => (
                                            <p key={i} className="text-text-dim leading-relaxed text-lg font-medium">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </section>
                                {idx === 1 && <AdBanner slot="in-article" className="mt-12 bg-white/5 p-4 rounded-2xl" />}
                            </motion.div>
                        ))}

                        {/* Summary Node */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 space-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap size={80} className="text-primary" />
                            </div>
                            <h2 className="text-xl font-black text-primary flex items-center gap-3 uppercase tracking-widest">
                                < BookOpen size={20} /> CONCLUSION_READOUT
                            </h2>
                            <p className="text-text-dim leading-relaxed font-medium relative z-10">{guide.conclusion}</p>
                        </div>
                    </div>
                </div>

                {/* Sticky Right Sidebar: Related Nodes */}
                <aside className="lg:col-span-4 space-y-8 sticky top-32 h-fit">
                    <div className="glass-panel hud-border p-6 space-y-6">
                        <div className="flex items-center gap-2 text-primary">
                            <Terminal size={16} />
                            <h3 className="text-xs font-black uppercase tracking-[0.2em]">Related_Nodes</h3>
                        </div>
                        <div className="space-y-4">
                            {Object.values(guidesData)
                                .filter(g => g.slug !== slug)
                                .slice(0, 3)
                                .map((g, i) => (
                                    <Link
                                        key={i}
                                        to={`/guides/${g.slug}`}
                                        className="block p-4 bg-white/5 border border-white/5 hover:border-primary/30 rounded-xl transition-all group"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[8px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">{g.category}</span>
                                            <span className="text-[8px] font-mono text-text-dim uppercase">{g.readTime}</span>
                                        </div>
                                        <p className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                            {g.title}
                                        </p>
                                        <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-text-dim group-hover:text-white transition-all">
                                            <span>ACCESS_DATA</span> <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden hud-border h-48 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&q=80" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" alt="Free assets" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                            <h4 className="font-black text-lg tracking-tight mb-2">FREE_MODULE_PACKS</h4>
                            <p className="text-xs font-mono text-white/70 mb-4">ACCESS_LEVEL: OPEN</p>
                            <Link to="/free-resources" className="bg-primary text-bg px-5 py-2 rounded-lg text-[10px] font-black tracking-widest hover:shadow-glow transition-all">INITIALIZE</Link>
                        </div>
                    </div>

                    <AdBanner slot="sidebar" />
                </aside>
            </div>

            {/* Global CTA Node */}
            <div className="bg-primary p-[1px] rounded-[2rem] shadow-glow-strong">
                <div className="bg-bg rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Shield size={24} className="text-primary" />
                            <h3 className="text-3xl font-display font-black text-white tracking-tighter">JOIN_THE_NEURAL_NETWORK</h3>
                        </div>
                        <p className="text-lg text-text-dim font-medium max-w-xl leading-relaxed">
                            Contribute to the grid as a verified creator or synchronize your local library with high-fidelity asset distributions.
                        </p>
                    </div>
                    <Link
                        to="/store"
                        className="bg-primary text-bg px-12 py-6 rounded-2xl font-black tracking-[0.2em] text-sm hover:scale-105 hover:shadow-glow-strong transition-all shrink-0"
                    >
                        SYNC_WITH_STORE
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}
