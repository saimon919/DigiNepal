import { Target, Zap, Terminal, Users, MapPin, Shield, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const teamValues = [
    {
        icon: <Zap size={24} />,
        title: 'Instant Delivery',
        desc: 'Instant downloads, zero friction. We believe that when a creator has found the perfect asset, nothing should stand between them and building their vision. Our infrastructure is optimized for immediate delivery.',
        color: 'text-primary',
        bg: 'bg-primary/10'
    },
    {
        icon: <Target size={24} />,
        title: 'Curated Quality',
        desc: 'Curated, not crowded. We manually review every asset before it goes live. Our curation team checks for clean topology, proper UV mapping, and real compatibility — ensuring you never waste time on broken files.',
        color: 'text-secondary',
        bg: 'bg-secondary/10'
    },
    {
        icon: <Shield size={24} />,
        title: 'Secure Licensing',
        desc: 'Built by creators, for creators. DigiNepal prioritizes the security of intellectual property and the reliability of digital transactions, protecting both the buyer and the seller.',
        color: 'text-accent',
        bg: 'bg-accent/10'
    },
];

const milestones = [
    { year: '2023', title: 'The Concept', desc: 'Conceived in Pokhara by a small group of developers struggling to find high-quality, culturally relevant digital assets.' },
    { year: '2024', title: 'Platform Build', desc: 'Architecting a platform that connects Nepali 3D artists and developers directly with a global audience.' },
    { year: '2025', title: 'Beta Launch', desc: 'DigiNepal launches, enabling seamless digital asset exchange for game developers, architects, and designers.' },
    { year: 'FUTURE', title: 'Global Expansion', desc: 'Expanding the reach of Nepal\'s digital class, providing world-class assets and educational resources to creators worldwide.' },
];

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-24 pb-32">
            <Helmet>
                <title>About Us | DigiNepal</title>
                <meta name="description" content="Learn about DigiNepal — a premium digital asset marketplace built by creators, for creators. Discover our mission, team, and the story behind our platform." />
            </Helmet>

            {/* Header */}
            <section className="text-center space-y-10 py-16 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-primary mb-6"
                >
                    <Users size={20} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/80">Our Story & Mission</span>
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none"
                >
                    About <span className="text-primary">DigiNepal</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-text-dim max-w-3xl mx-auto font-medium leading-relaxed border-l-4 border-primary/20 pl-8 text-left"
                >
                    DigiNepal is a premium digital asset marketplace and educational hub designed specifically for game developers, 3D artists, and digital creators. We provide high-quality 3D models, textures, and comprehensive guides to help you build better digital experiences.
                </motion.p>
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
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Based in Pokhara, Nepal</h3>
                            </div>
                            <p className="text-base text-text-dim/80 max-w-lg font-medium">
                                Born in the shadow of the Himalayas, our team is composed of passionate digital artists and developers who believe geography should never limit creative opportunity on the global stage.
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
                        <Target size={48} className="text-primary" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Our Mission</h3>
                        <p className="text-base text-text-dim/80 leading-relaxed font-medium border-l-4 border-primary/40 pl-8">
                            To democratize access to high-fidelity digital assets for independent developers worldwide, while creating sustainable passive income opportunities for the South Asian creative class.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Core Values */}
            <section className="space-y-16">
                <div className="flex items-center gap-6">
                    <div className="skeuo-inset p-4 rounded-2xl bg-primary/5 border-primary/20">
                        <Terminal size={32} className="text-primary" />
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Core Values</h2>
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
                                <p className="text-sm text-text-dim/80 leading-relaxed font-medium border-l-2 border-white/10 pl-6">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* History */}
            <section className="skeuo-panel p-12 md:p-20 space-y-16 bg-deep/20 border-white/10 rounded-[4rem]">
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 pb-10 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="skeuo-inset p-4 rounded-2xl border-secondary/20">
                            <Database size={32} className="text-secondary" />
                        </div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Our Journey</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {milestones.map((m, i) => (
                        <div key={i} className="space-y-6 relative group">
                            <div className="text-5xl font-black text-primary/10 font-display absolute -top-10 -left-4 select-none group-hover:text-primary/20 transition-colors">{m.year}</div>
                            <div className="relative pt-4 space-y-4">
                                <h3 className="font-black text-white uppercase tracking-tighter text-lg leading-none border-l-2 border-primary/40 pl-4">{m.title}</h3>
                                <p className="text-sm text-text-dim/80 leading-relaxed font-medium">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
