import { Target, Zap, Shield, Globe, Award, Database, Terminal, Server, Activity, Cpu, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const teamValues = [
    {
        icon: <Zap size={24} />,
        title: 'Speed::Latency_Zero',
        desc: 'Instant downloads, zero friction. We believe that when a creator has found the perfect asset, nothing should stand between them and building their vision. Our infrastructure is optimized for immediate data deployment.',
        color: 'text-primary',
        bg: 'bg-primary/10'
    },
    {
        icon: <Target size={24} />,
        title: 'Quality::Verified',
        desc: 'Curated, not crowded. We manually review every asset before it goes live. Our curation team checks for clean topology, proper UV mapping, and real compatibility — so you never waste cycles on a broken file.',
        color: 'text-secondary',
        bg: 'bg-secondary/10'
    },
    {
        icon: <Shield size={24} />,
        title: 'Security::Enforced',
        desc: 'Built by creators, for creators. DigiNepal was born out of a Pokhara-based collective of high-fidelity artists. We prioritize the security of intellectual property and the reliability of digital transactions.',
        color: 'text-accent',
        bg: 'bg-accent/10'
    },
];

const milestones = [
    { year: 'VISION', title: 'Origin::Core', desc: 'Conceived in Pokhara by a small group of developers struggling with international digital conversion and transaction friction.' },
    { year: 'ACTION', title: 'Phase::Build', desc: 'Architecting a platform that connects Nepali 3D artists and developers directly with the global development grid.' },
    { year: 'LAUNCH', title: 'Status::Live', desc: 'DigiNepal launches with integrated local payment gateways, enabling seamless NPR/Digital Asset exchange.' },
    { year: 'FUTURE', title: 'Objective::Global', desc: 'Expanding the reach of Nepal\'s digital class, providing world-class assets to developers worldwide.' },
];

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-24 pb-32">
            <Helmet>
                <title>About DigiNepal | Tactical Digital Mission</title>
                <meta name="description" content="Learn about the origin and mission of DigiNepal — built by creators, for creators, to bring world-class assets to Nepal's digital future." />
            </Helmet>

            {/* Tactical Mission Header */}
            <section className="text-center space-y-10 py-16 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-primary mb-6"
                >
                    <Server size={20} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-tactical">MISSION_MANIFEST_v4.2 :: ENCRYPTED</span>
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-9xl font-display font-black text-white tracking-tighter uppercase leading-none"
                >
                    DIGINEPAL_<span className="text-primary">CORE</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-text-dim/80 max-w-3xl mx-auto font-medium uppercase tracking-widest leading-relaxed italic border-l-4 border-primary/20 pl-8"
                >
                    Empowering Nepal's Digital Frontier with high-fidelity asset distributions and tactical creative resources through neural grid synchronization.
                </motion.p>
                <div className="flex justify-center gap-12 pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-text-dim/40 text-tactical">
                    <span className="flex items-center gap-3"><Activity size={16} className="text-primary" /> SYSTEM_ACTIVE</span>
                    <span className="flex items-center gap-3"><Globe size={16} className="text-secondary" /> NODES_GLOBAL</span>
                </div>
            </section>

            {/* Origin Nodes: Visual Data Array */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-8 skeuo-panel p-2 rounded-[3.5rem] border-white/10 group overflow-hidden h-[500px]"
                >
                    <div className="skeuo-inset h-full w-full rounded-[3.3rem] overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                            alt="Nepal Landscape"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                        <div className="absolute bottom-12 left-12 space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <MapPin size={20} />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Himalayan_Roots</h3>
                            </div>
                            <p className="text-base text-text-dim/80 max-w-lg uppercase tracking-widest font-medium italic">
                                Born in the shadow of the mountains, architected by digital artists who believe geography should never limit creative opportunity on the global grid.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-4 skeuo-panel p-1 rounded-[3rem] border-primary/20 bg-primary/5 flex flex-col justify-center space-y-10 px-12 relative overflow-hidden group"
                >
                    <div className="skeuo-inset p-6 rounded-2xl bg-deep/40 border-primary/20 w-fit group-hover:scale-110 transition-transform">
                        <Target size={48} className="text-primary animate-pulse" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">PROTOCOL::MISSION</h3>
                        <p className="text-base text-text-dim/80 leading-relaxed uppercase tracking-widest font-medium italic border-l-4 border-primary/40 pl-8">
                            To democratize access to high-fidelity assets for every local developer while creating sustainable passive income modules for the creative class.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Core Values Terminal: Tactical Modules */}
            <section className="space-y-16">
                <div className="flex items-center gap-6">
                    <div className="skeuo-inset p-4 rounded-2xl bg-primary/5 border-primary/20">
                        <Terminal size={32} className="text-primary" />
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">CORE_OPERATING_VALUES</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {teamValues.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="skeuo-panel p-10 space-y-10 border-white/5 bg-deep/40 hover:border-primary/40 transition-all group rounded-[2.5rem]"
                        >
                            <div className={`w-16 h-16 skeuo-inset flex items-center justify-center rounded-2xl ${item.bg} ${item.color} border-white/10 group-hover:border-primary transition-colors`}>
                                {item.icon}
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">{item.title}</h3>
                                <p className="text-sm text-text-dim/60 leading-relaxed uppercase tracking-widest font-medium italic border-l-2 border-white/10 pl-6">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Chronological Manifest: Data Streams */}
            <section className="skeuo-panel p-12 md:p-20 space-y-16 bg-deep/20 border-white/10 rounded-[4rem]">
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-10 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="skeuo-inset p-4 rounded-2xl border-secondary/20">
                            <Database size={32} className="text-secondary" />
                        </div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">DEPLOYMENT_HISTORY</h2>
                    </div>
                    <div className="skeuo-inset px-6 py-2 rounded-xl border-white/10 bg-deep/60">
                        <span className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.5em] text-tactical">ACCESS_LEVEL: READ_ONLY</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {milestones.map((m, i) => (
                        <div key={i} className="space-y-6 relative group">
                            <div className="text-6xl font-black text-primary/5 font-display absolute -top-12 -left-4 select-none group-hover:text-primary/10 transition-colors">{m.year}</div>
                            <div className="relative pt-4 space-y-4">
                                <h3 className="font-black text-white uppercase tracking-tighter text-lg leading-none border-l-2 border-primary/40 pl-4">{m.title}</h3>
                                <p className="text-[11px] text-text-dim/60 leading-relaxed uppercase tracking-widest font-medium italic">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Telemetry Array: Real-time Stats */}
            <section className="skeuo-panel p-2 rounded-[3.5rem] border-primary/10 bg-primary/5 relative z-10 overflow-hidden">
                <div className="bg-deep/80 backdrop-blur-2xl rounded-[3.3rem] p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { icon: <Award size={24} />, value: 'QUALITY', label: 'NEURAL_CURATION' },
                        { icon: <Globe size={24} />, value: 'NODES', label: 'GLOBAL_UPLINK' },
                        { icon: <Shield size={24} />, value: 'SECURE', label: 'DATA_INTEGRITY' },
                        { icon: <Cpu size={24} />, value: 'ASSETS', label: 'VERIFIED_VAULT' },
                    ].map((s, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ scale: 1.05 }}
                            className="space-y-6 group"
                        >
                            <div className="skeuo-inset w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-primary/40 border-white/5 group-hover:text-primary transition-colors">
                                {s.icon}
                            </div>
                            <div className="space-y-2">
                                <p className="text-4xl font-black text-white tracking-tighter leading-none">{s.value}</p>
                                <p className="text-[10px] text-text-dim/40 uppercase tracking-[0.4em] font-black text-tactical">{s.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
