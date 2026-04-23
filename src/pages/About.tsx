import { Target, Zap, Shield, Globe, Award, Database, Terminal, Server, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
        <div className="max-w-6xl mx-auto py-16 px-4 space-y-24 relative font-mono">
            <Helmet>
                <title>About DigiNepal | Nepal's Leading 3D Asset Marketplace</title>
                <meta name="description" content="Learn about the origin and mission of DigiNepal — built by creators, for creators, to bring world-class assets to Nepal's digital future." />
            </Helmet>

            <div className="scanline" />

            {/* Tactical Header */}
            <section className="text-center space-y-8 relative z-10 py-10">
                <div className="flex items-center justify-center gap-3 text-secondary mb-4">
                    <Server size={16} className="animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black">MISSION_MANIFEST_v4.0</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-widest uppercase leading-tight">
                    DIGINEPAL_<span className="text-primary">CORE</span>
                </h1>
                <p className="text-sm md:text-xl text-text-dim max-w-2xl mx-auto font-mono uppercase tracking-[0.2em] leading-relaxed">
                    Empowering Nepal's Digital Frontier with high-fidelity asset distributions and tactical creative resources.
                </p>
                <div className="flex justify-center gap-8 pt-10 border-t border-white/5 text-[9px] uppercase tracking-widest text-text-dim">
                    <span className="flex items-center gap-2"><Activity size={12} className="text-primary" /> System: ACTIVE</span>
                    <span className="flex items-center gap-2"><Globe size={12} className="text-secondary" /> Nodes: GLOBAL</span>
                </div>
            </section>

            {/* Origin Nodes */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                <div className="lg:col-span-8 glass-panel hud-border p-1 hover:border-primary/40 transition-all duration-700 group overflow-hidden h-[400px]">
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                            alt="Nepal Landscape"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute bottom-10 left-10 space-y-2">
                            <h3 className="text-3xl font-black text-white uppercase tracking-widest">Himalayan_Roots</h3>
                            <p className="text-xs text-text-dim max-w-md uppercase tracking-wider font-mono">
                                Born in the shadow of the mountains, built by artists who believe geography should never limit digital opportunity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 glass-panel hud-border bg-primary/5 p-10 flex flex-col justify-center space-y-8 relative overflow-hidden group">
                    <div className="scanline" />
                    <Target size={48} className="text-primary animate-pulse" />
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-white uppercase tracking-widest">Protocol::Mission</h3>
                        <p className="text-xs text-text-dim leading-loose uppercase font-mono">
                            To democratize access to high-fidelity assets for every Nepali developer while creating sustainable passive income for the creative class.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Terminal */}
            <section className="space-y-12 relative z-10">
                <div className="flex items-center gap-4">
                    <Terminal size={24} className="text-primary" />
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest">Core_Operating_Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamValues.map((item, idx) => (
                        <div key={idx} className="glass-panel p-10 space-y-8 border border-white/5 hover:border-primary/30 transition-all group">
                            <div className={`w-14 h-14 ${item.bg} ${item.color} flex items-center justify-center rounded-none border border-white/10 group-hover:border-primary transition-colors`}>
                                {item.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-black text-white uppercase tracking-widest">{item.title}</h3>
                                <p className="text-xs text-text-dim leading-relaxed uppercase font-mono">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Chronological Manifest */}
            <section className="glass-panel hud-border p-10 md:p-16 space-y-12 relative z-10 bg-surface/40">
                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest flex items-center gap-3">
                        <Database size={24} className="text-secondary" /> Deployment_History
                    </h2>
                    <span className="text-[10px] text-text-dim uppercase font-mono">READ_ONLY</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {milestones.map((m, i) => (
                        <div key={i} className="space-y-4 relative">
                            <div className="text-4xl font-black text-primary/10 font-display absolute -top-8 -left-2 select-none">{m.year}</div>
                            <div className="relative pt-2">
                                <h3 className="font-black text-white uppercase tracking-widest text-sm mb-2">{m.title}</h3>
                                <p className="text-[11px] text-text-dim leading-relaxed uppercase font-mono">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Telemetry Bar */}
            <section className="glass-panel hud-border p-12 bg-primary/10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                <div className="scanline" />
                {[
                    { icon: <Award size={20} />, value: 'QUALITY', label: 'Manual Curation' },
                    { icon: <Globe size={20} />, value: 'NODES', label: 'Global Access' },
                    { icon: <Shield size={20} />, value: 'SECURE', label: 'Encrypted Trans' },
                    { icon: <Database size={20} />, value: 'ASSETS', label: 'Verified Library' },
                ].map((s, i) => (
                    <div key={i} className="space-y-3">
                        <div className="flex justify-center text-primary mb-2 opacity-50">{s.icon}</div>
                        <p className="text-3xl font-black text-white tracking-widest uppercase">{s.value}</p>
                        <p className="text-[9px] text-text-dim uppercase tracking-[0.3em] font-black">{s.label}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

