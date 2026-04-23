import { ArrowRight, Zap, Users, Terminal, Cpu, HardDrive, Activity, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdBanner from '../components/AdBanner';

const HUD_BOX = "glass-panel hud-border p-8 transition-all duration-500 overflow-hidden relative group";

const stats = [
    { value: '500+', label: 'TOTAL_PRODUCTS', icon: <Cpu size={16} />, color: 'text-primary' },
    { value: '1.2k', label: 'COMMUNITY_MEMS', icon: <Users size={16} />, color: 'text-blue-400' },
    { value: '10k+', label: 'TOTAL_DOWNLOADS', icon: <Activity size={16} />, color: 'text-secondary' },
    { value: '24/7', label: 'CLIENT_SUPPORT', icon: <HardDrive size={16} />, color: 'text-accent' },
];



const TechnicalReadout = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-center py-1 border-b border-white/5 font-mono">
        <span className="text-[9px] text-text-dim uppercase tracking-widest">{label}</span>
        <span className="text-[10px] text-primary">{value}</span>
    </div>
);

export default function Home() {
    return (
        <div className="space-y-24 relative z-10 pb-10">
            <Helmet>
                <title>DigiNepal - Premium Digital Assets for Creators</title>
                <meta name="description" content="Nepal's premier digital asset marketplace. Buy and sell 3D models, textures, and game development resources." />
                <link rel="canonical" href="https://diginepal.vercel.app/" />
            </Helmet>
            {/* HERO INTERFACE: SYSTEM_INITIALIZED */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-8 max-w-5xl mx-auto py-16 md:py-24 px-4 relative"
            >
                {/* Tech Status Badges */}
                <div className="flex justify-center gap-4 mb-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full flex items-center gap-2"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-[9px] font-black tracking-[0.3em] text-primary uppercase">CORE_OVERRIDE: ACTIVE</span>
                    </motion.div>
                    <div className="hidden md:flex bg-white/5 border border-white/10 px-4 py-1.5 rounded-full items-center gap-2">
                        <span className="text-[9px] font-black tracking-[0.3em] text-text-dim uppercase">VER: 2.0.4-ALPHA</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <motion.h1 
                        className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] text-white"
                    >
                        CORE.<span className="text-primary text-glow">GRID</span>
                        <br />
                        <span className="text-4xl md:text-6xl text-text-dim">DISTRIBUTION_NODE</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-text-dim max-w-2xl mx-auto font-medium"
                    >
                        High-fidelity digital assets for the next generation of creative architects. Initializing high-speed transfer protocols...
                    </motion.p>
                </div>

                {/* Hero CTA */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link to="/store" className="group relative px-12 py-5 bg-primary rounded-2xl overflow-hidden shadow-glow-strong">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        <span className="relative text-bg font-black tracking-[0.2em] text-sm">ACCESS_VAULT</span>
                    </Link>
                    <Link to="/free-resources" className="group px-12 py-5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all">
                        <span className="text-text-dim group-hover:text-white font-black tracking-[0.2em] text-sm">LEARNING_DRIVE</span>
                    </Link>
                </div>
            </motion.div>

            {/* HUD BENTO GRID: COMPONENT_ANALYSIS */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-[1280px] mx-auto px-4">
                {/* Major Module: Featured Asset */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`${HUD_BOX} md:col-span-2 md:row-span-2 min-h-[500px] flex flex-col justify-between`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold text-primary flex items-center gap-2">
                                <Terminal size={12} /> MODULE: FEATURED_ASSET
                            </span>
                            <h2 className="text-4xl font-display font-black text-white mt-4">NEON_CITADEL</h2>
                            <p className="text-text-dim text-sm max-w-[80%] mt-2">PBR Textured, modular environment kit. Cinema-ready geometry.</p>
                        </div>
                        <div className="text-[10px] font-mono text-primary/40 text-right">
                            CRC: AF-9293<br/>
                            SID: 0x221
                        </div>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                                <TechnicalReadout label="Geometry" value="824k Polys" />
                                <TechnicalReadout label="Format" value="FBX + UNITY" />
                                <TechnicalReadout label="Rigged" value="YES_v2" />
                            </div>
                            <div className="w-32 bg-primary/10 border border-primary/20 rounded-xl p-4 flex flex-col items-center justify-center">
                                <span className="text-[9px] font-black text-primary uppercase">Uplink</span>
                                <Activity size={24} className="text-primary my-2 animate-pulse" />
                                <span className="text-[9px] font-mono text-primary/60">STABLE</span>
                            </div>
                        </div>
                        <Link to="/store" className="block w-full text-center py-4 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-white rounded-xl font-black text-xs tracking-[0.3em] transition-all">
                            INITIALIZE_TRANSFER
                        </Link>
                    </div>
                </motion.div>

                {/* Module: Instant Delivery */}
                <motion.div whileHover={{ y: -5 }} className={`${HUD_BOX}`}>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-lg flex items-center justify-center text-secondary">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-display font-black text-white">INSTANT_LINK</h3>
                        <p className="text-text-dim text-[11px] leading-relaxed">Compressed neural packets delivered directly to your asset library upon confirmation.</p>
                    </div>
                </motion.div>

                {/* Module: Community Hub */}
                <motion.div whileHover={{ y: -5 }} className={`${HUD_BOX}`}>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-blue-400/10 border border-blue-400/30 rounded-lg flex items-center justify-center text-blue-400">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-display font-black text-white">GRID_NODES</h3>
                        <p className="text-text-dim text-[11px] leading-relaxed">Connecting 4,200+ creative units across the regional developer network.</p>
                    </div>
                </motion.div>

                {/* Module: Categories */}
                <motion.div whileHover={{ y: -5 }} className={`${HUD_BOX} md:col-span-2 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Directory Search</span>
                            <h3 className="text-2xl font-display font-black text-white mt-2">MODULE_LIBRARY</h3>
                        </div>
                        <Link to="/store" className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-secondary transition-all">
                            <ArrowRight size={18} className="text-text-dim" />
                        </Link>
                    </div>
                    <div className="flex gap-4 mt-8">
                        {['3D_ENV', 'TEX_PBR', 'SCR_CSHARP', 'DOC_TECH'].map((cat) => (
                            <div key={cat} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-mono text-[9px] text-text-dim hover:text-primary hover:border-primary transition-all cursor-pointer">
                                {cat}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* AD_SENSE_BUFFER: AD_UNIT */}
            <div className="max-w-[1280px] mx-auto px-4">
                <AdBanner slot="horizontal" />
            </div>

            {/* SYSTEM_TELEMETRY: PLATFORM_STATS */}
            <section className="max-w-[1280px] mx-auto px-4 text-center space-y-12">
                <div className="space-y-2">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Diagnostics</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white">SYSTEM_TELEMETRY</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-panel p-8 border-white/5 text-center flex flex-col items-center justify-center gap-4"
                        >
                            <div className={`${stat.color} opacity-40 mb-2`}>{stat.icon}</div>
                            <div>
                                <p className={`text-4xl font-display font-black ${stat.color} text-glow`}>{stat.value}</p>
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-dim mt-2">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DATABASE_LOGS: ABOUT_DIGINEPAL */}
            <section className="max-w-[1280px] mx-auto px-4">
                <div className="glass-panel hud-border p-10 md:p-20 space-y-12">
                    <div className="max-w-3xl space-y-4">
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase border border-primary/20">DOCUMENTATION_LOG // 0xAF32</span>
                        <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                            NEPAL'S PRIMARY_STORAGE_VAULT
                        </h2>
                        <p className="text-lg text-text-dim leading-relaxed font-medium">
                            DigiNepal is the centralized distribution node for high-fidelity digital assets. Our directive is to empower regional creators by bridging the gap between local talent and global developer grid standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-text-dim font-medium leading-relaxed">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                    <span className="text-primary font-mono select-none">&gt;</span> SYSTEM_CORE
                                </h3>
                                <p>
                                    As the region's first specialized distribution node, DigiNepal architected a secure gateway for digital creators to deploy 3D models, PBR textures, and complex game scripts. We serve as the technical backbone for architects, game developers, and creative units operating in the South Asian grid.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                    <span className="text-primary font-mono select-none">&gt;</span> CREATOR_UPLINK
                                </h3>
                                <p>
                                    Our platform protocols allow regional artists to monetize their intellectual synthesis. Upon uploading an asset, our curation logic verifies the technical parameters—topology, texture mapping, and metadata accuracy—ensuring every packet in the vault meets industry standards.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                    <span className="text-primary font-mono select-none">&gt;</span> PROCUREMENT_LOGIC
                                </h3>
                                <p>
                                    Buyers acquire assets with near-zero latency. Each procurement instance registers a secure license on the user's core profile, enabling persistent access to high-resource files. We support regional payment arrays including eSewa and global gateways for a seamless acquisition cycle.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                    <span className="text-primary font-mono select-none">&gt;</span> SCALABILITY_REPORT
                                </h3>
                                <p>
                                    Digital asset marketplaces like DigiNepal reduce production cycle-time by up to 70%. By utilizing pre-initialized modules, developers can bypass the modeling phase and focus on core mechanics. Our library is optimized for Unity, Unreal Engine, and standalone 3D environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESOURCE_HOLOGRAPH: GUIDES_PREVIEW */}
            <section className="max-w-[1280px] mx-auto px-4">
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-br from-primary/20 via-bg to-bg border border-primary/30 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-glow"
                >
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3 text-primary">
                            <BookOpen size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Education_Array</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9]">
                            INSTRUCTIONAL_PACKETS
                        </h2>
                        <p className="text-text-dim max-w-lg text-lg">
                            Access a vast database of SEO-optimized instructional documentation. Mastering the grid requires understanding the protocols of digital asset deployment.
                        </p>
                    </div>
                    <Link
                        to="/guides"
                        className="relative z-10 bg-primary px-12 py-6 rounded-2xl text-bg font-black tracking-widest text-sm hover:scale-105 hover:shadow-glow-strong transition-all shrink-0"
                    >
                        SYNC_LEARNING
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

