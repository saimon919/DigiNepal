import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, ArrowRight, BookOpen, Share2, Shield, Zap, Terminal, Activity, Cpu, Globe, User, Calendar, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdBanner from '../components/AdBanner';
import { guidesData } from '../data/guidesData';

export default function GuideDetail() {
    const { slug } = useParams<{ slug: string }>();
    const guide = slug ? (guidesData as any)[slug] : null;

    if (!guide) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-8 px-4">
                <div className="skeuo-panel p-12 text-center space-y-10 border-white/10 max-w-lg rounded-[3rem] bg-deep/40">
                    <div className="skeuo-inset w-24 h-24 rounded-full flex items-center justify-center mx-auto border-secondary/20 bg-secondary/5 relative">
                        <div className="absolute inset-0 rounded-full border border-secondary/40 animate-ping opacity-20" />
                        <Terminal size={48} className="text-secondary" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Error: Content Not Found</h2>
                        <p className="text-text-dim/80 font-medium leading-relaxed">The requested guide could not be located in our database.</p>
                    </div>
                    <Link to="/guides" className="skeuo-panel bg-primary text-deep px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(141,242,192,0.3)] inline-block">
                        Return to Guides
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>{guide.title} | DigiNepal Developer Guides</title>
                <meta name="description" content={guide.intro.substring(0, 160) + "..."} />
                <meta property="og:image" content={guide.image} />
            </Helmet>

            {/* Guide Header */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-12 border-b border-white/5">
                <div className="space-y-10 flex-1">
                    <Link to="/guides" className="skeuo-inset inline-flex items-center gap-3 px-6 py-3 rounded-xl text-primary/60 hover:text-primary transition-all font-black text-[10px] uppercase tracking-widest bg-deep/40 border-white/5">
                        <ChevronLeft size={16} strokeWidth={3} /> Back to Knowledge Base
                    </Link>
                    
                    <div className="space-y-8">
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="skeuo-inset bg-primary/10 px-4 py-1.5 rounded-lg border-primary/20">
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{guide.category}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-dim/80">
                                <User size={14} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">{guide.author || 'DigiNepal Team'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-dim/80">
                                <Calendar size={14} className="text-secondary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">{guide.lastUpdated || '2026.04.28'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-dim/80">
                                <Clock size={14} className="text-accent" />
                                <span className="text-[10px] font-black uppercase tracking-widest">{guide.readTime}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter uppercase">
                            {guide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-text-dim/80 leading-relaxed max-w-4xl font-medium border-l-4 border-primary/20 pl-10">
                            {guide.intro}
                        </p>
                    </div>
                </div>

                {/* Metadata Sidebar */}
                <div className="w-full lg:w-80 skeuo-panel p-8 rounded-[2.5rem] bg-deep/40 border-white/5 space-y-8 shrink-0">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary/40 border-b border-white/5 pb-4 mb-4">
                            <Activity size={18} className="animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Guide Metadata</span>
                        </div>
                        {[
                            { label: 'STATUS', value: 'VERIFIED', color: 'text-primary' },
                            { label: 'VISIBILITY', value: 'PUBLIC', color: 'text-secondary' },
                            { label: 'LANGUAGE', value: 'EN-NP', color: 'text-white/40' }
                        ].map((stat, i) => (
                            <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                <span className="text-text-dim/40">{stat.label}:</span>
                                <span className={`${stat.color} skeuo-inset px-2 py-0.5 rounded`}>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full skeuo-panel bg-white/5 py-4 rounded-xl flex items-center justify-center gap-4 text-[10px] font-black text-white hover:text-primary hover:border-primary/20 transition-all uppercase tracking-widest">
                        <Share2 size={16} /> Share Guide
                    </button>
                </div>
            </div>

            {/* Main Visual */}
            <div className="skeuo-panel p-2 rounded-[4rem] border-white/5 bg-deep/40 group relative overflow-hidden aspect-[21/9]">
                <div className="skeuo-inset h-full w-full rounded-[3.8rem] overflow-hidden relative">
                    <img 
                        src={guide.image} 
                        alt={guide.title} 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 flex flex-wrap gap-4">
                        {guide.keywords?.map((kw: string, i: number) => (
                             <div key={i} className="skeuo-panel bg-deep/80 backdrop-blur-md border-white/10 px-5 py-2.5 rounded-xl">
                                <span className="text-[10px] text-primary font-black uppercase tracking-widest">{kw}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ad (Top) */}
            <div className="max-w-5xl mx-auto skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    <div className="skeuo-panel p-1 rounded-[4rem] border-white/10 bg-deep/40">
                        <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.8rem] p-10 md:p-20 space-y-20">
                            {guide.sections.map((section: any, idx: number) => (
                                <motion.section 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-10"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="skeuo-inset w-16 h-16 bg-primary/5 rounded-[1.5rem] flex items-center justify-center text-2xl font-black text-primary shrink-0 border border-primary/20">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                                            {section.heading}
                                        </h2>
                                    </div>
                                    <div className="space-y-10 pl-0 md:pl-24">
                                        {section.body.split('\n\n').map((para: string, i: number) => (
                                            <p key={i} className="text-lg md:text-2xl text-text-dim/80 leading-relaxed font-medium border-l-2 border-white/5 pl-10">
                                                {para}
                                            </p>
                                        ))}
                                        
                                        {section.code && (
                                            <div className="skeuo-inset p-8 rounded-[2rem] bg-deep/80 border-white/5 font-mono text-sm overflow-x-auto text-primary">
                                                <pre><code>{section.code}</code></pre>
                                            </div>
                                        )}
                                        
                                        {section.image && (
                                            <div className="skeuo-panel p-2 rounded-[2rem] border-white/5 overflow-hidden">
                                                <img src={section.image} alt={section.heading} className="w-full rounded-[1.8rem] opacity-80" />
                                            </div>
                                        )}
                                    </div>
                                </motion.section>
                            ))}

                            {/* FAQ Section */}
                            {guide.faqs && guide.faqs.length > 0 && (
                                <section className="md:ml-24 space-y-12">
                                    <div className="flex items-center gap-6">
                                        <div className="skeuo-inset p-4 rounded-2xl border-secondary/20">
                                            <HelpCircle size={32} className="text-secondary" />
                                        </div>
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Frequently Asked Questions</h2>
                                    </div>
                                    <div className="space-y-6">
                                        {guide.faqs.map((faq: any, i: number) => (
                                            <div key={i} className="skeuo-panel p-8 rounded-3xl border-white/5 bg-deep/20 space-y-4">
                                                <h3 className="text-xl font-black text-white uppercase tracking-tighter">{faq.question}</h3>
                                                <p className="text-text-dim/80 font-medium leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Conclusion */}
                            <div className="md:ml-24 skeuo-panel bg-primary/5 border-primary/20 rounded-[3rem] p-12 md:p-16 space-y-8 relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
                                    <Zap size={200} className="text-primary" />
                                </div>
                                <div className="flex items-center gap-6 text-primary relative z-10">
                                    <div className="skeuo-inset p-4 rounded-2xl border-primary/20 bg-deep/40">
                                        <BookOpen size={32} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">Final Thoughts</h2>
                                </div>
                                <p className="text-lg md:text-2xl text-text-dim/80 leading-relaxed font-medium relative z-10 pl-4 border-l-2 border-primary/20">{guide.conclusion}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    <div className="skeuo-panel p-10 rounded-[3rem] bg-deep/40 border-white/5 space-y-10">
                        <div className="flex items-center gap-4 text-primary/60 border-b border-white/5 pb-6">
                            <Terminal size={20} />
                            <h3 className="text-[10px] font-black uppercase tracking-widest">Related Guides</h3>
                        </div>
                        <div className="space-y-8">
                            {Object.values(guidesData)
                                .filter(g => (g as any).slug !== slug)
                                .slice(0, 3)
                                .map((g: any, i: number) => (
                                    <Link
                                        key={i}
                                        to={`/guides/${g.slug}`}
                                        className="block group"
                                    >
                                        <div className="skeuo-inset p-6 rounded-2xl border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all space-y-4 bg-deep/40">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[8px] font-black text-secondary uppercase tracking-widest">{g.category}</span>
                                                <span className="text-[8px] font-black text-text-dim/40 uppercase tracking-widest">{g.readTime}</span>
                                            </div>
                                            <p className="text-lg font-black text-white group-hover:text-primary transition-colors line-clamp-2 leading-none uppercase tracking-tighter">
                                                {g.title}
                                            </p>
                                            <div className="flex items-center gap-2 text-[9px] font-black text-text-dim/40 group-hover:text-primary group-hover:gap-4 transition-all uppercase tracking-widest pt-2">
                                                Read Guide <ArrowRight size={14} strokeWidth={3} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    {/* Resources Promo */}
                    <div className="skeuo-panel p-1 rounded-[3rem] border-secondary/20 bg-deep/40 group cursor-pointer overflow-hidden relative">
                        <div className="bg-deep/60 backdrop-blur-xl rounded-[2.9rem] p-10 space-y-8 text-center relative z-10">
                            <div className="skeuo-inset w-20 h-20 rounded-full flex items-center justify-center mx-auto border-secondary/20 bg-secondary/5">
                                <Globe size={40} className="text-secondary" />
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-black text-2xl text-white tracking-tighter uppercase leading-none">Free Resources</h4>
                                <p className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">Download Now</p>
                            </div>
                            <Link to="/free-resources" className="skeuo-panel bg-secondary text-deep w-full py-5 rounded-2xl text-[10px] font-black tracking-widest hover:scale-105 transition-all block">Browse Cache</Link>
                        </div>
                    </div>

                    <div className="skeuo-inset p-4 rounded-[2.5rem] border-white/5 bg-deep/20 overflow-hidden">
                        <AdBanner slot="sidebar" />
                    </div>
                </aside>
            </div>
            
            {/* Ad (Bottom) */}
            <div className="max-w-5xl mx-auto skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            {/* Bottom Footer Telemetry */}
            <div className="pt-12 text-center">
                <div className="flex items-center justify-center gap-4 text-text-dim/20">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/10" />
                    <Cpu size={20} />
                    <span className="text-[9px] font-black uppercase tracking-widest">End of Article</span>
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    );
}
