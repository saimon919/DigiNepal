import { ArrowRight, Zap, Users, Terminal, Cpu, HardDrive, Activity, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AdBanner from '../components/AdBanner';

const HUD_BOX = "skeuo-panel p-8 transition-all duration-500 overflow-hidden relative group hover-lift";

const stats = [
    { value: '500+', label: 'ASSETS_VERIFIED', icon: <Cpu size={16} />, color: 'text-primary' },
    { value: '1.2k', label: 'NODES_CONNECTED', icon: <Users size={16} />, color: 'text-secondary' },
    { value: '10k+', label: 'DATA_UPLINKS', icon: <Activity size={16} />, color: 'text-accent' },
    { value: '24/7', label: 'SUPPORT_PROTOCOL', icon: <HardDrive size={16} />, color: 'text-primary' },
];

const TechnicalReadout = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-center py-2 border-b border-white/5 font-mono">
        <span className="text-[9px] text-text-dim uppercase tracking-[0.2em]">{label}</span>
        <span className="text-[10px] text-primary font-bold">{value}</span>
    </div>
);

export default function Home() {
    return (
        <div className="space-y-24 relative z-10 pb-20">
            <Helmet>
                <title>DigiNepal - Premium Tactical Digital Assets</title>
                <meta name="description" content="Nepal's premier tactical digital asset marketplace. Buy and sell 3D models, textures, and game development resources." />
                <link rel="canonical" href="https://diginepal.vercel.app/" />
            </Helmet>

            {/* HERO INTERFACE: COMMAND_INITIALIZED */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-12 max-w-6xl mx-auto py-20 px-4 relative"
            >
                {/* Tech Status Badges */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="skeuo-inset px-5 py-2 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_var(--neon-glow)] animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase text-tactical">SYSTEM_ONLINE</span>
                    </div>
                    <div className="hidden sm:flex skeuo-inset px-5 py-2 rounded-full items-center gap-3">
                        <span className="text-[10px] font-black tracking-[0.4em] text-text-dim uppercase text-tactical">SEC_LEVEL_04</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <motion.h1 
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter leading-[0.8] text-white"
                    >
                        NEPAL.<span className="text-primary text-glow">GRID</span>
                        <br />
                        <span className="text-lg sm:text-2xl md:text-5xl text-text-dim tracking-[0.2em] uppercase text-tactical">Tactical_Distribution</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-2xl text-text-dim max-w-3xl mx-auto font-medium"
                    >
                        Centralized nexus for high-fidelity assets. Initializing secure neural transfer for creative architects.
                    </motion.p>
                </div>

                {/* Hero CTA */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/store" className="group relative px-14 py-6 bg-primary rounded-2xl overflow-hidden shadow-[0_0_30px_var(--neon-glow)] transition-all hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        <span className="relative text-deep font-black tracking-[0.3em] text-xs text-tactical">INITIALIZE_VAULT</span>
                    </Link>
                    <Link to="/free-resources" className="skeuo-panel px-14 py-6 rounded-2xl hover:border-primary/50 transition-all hover-lift">
                        <span className="text-white font-black tracking-[0.3em] text-xs text-tactical">DATA_UPLINK</span>
                    </Link>
                </div>
            </motion.div>

            {/* BENTO_MODULES: INTERFACE_ANALYSIS */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 max-w-7xl mx-auto px-4">
                {/* Major Module: Featured Asset */}
                <motion.div
                    className={`${HUD_BOX} md:col-span-2 md:row-span-2 min-h-[550px] flex flex-col justify-between border-primary/20`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <div className="skeuo-inset inline-flex px-3 py-1 rounded-md mb-4">
                                <span className="text-[9px] font-bold text-primary flex items-center gap-2 tracking-widest">
                                    <Terminal size={10} /> MODULE: ALPHA_ASSET
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-none">P-01<br/>KTM_CORE</h2>
                            <p className="text-text-dim text-sm max-w-[80%] mt-4">Multi-layered PBR texture array for tactical architectural visualization.</p>
                        </div>
                        <div className="text-[10px] font-mono text-primary/30 text-right leading-relaxed">
                            REG_ID: 992-DN<br/>
                            SIG: 0x88F
                        </div>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="skeuo-inset rounded-xl p-6">
                            <TechnicalReadout label="Uplink_Speed" value="850 MBPS" />
                            <TechnicalReadout label="Format_Key" value="UDIM / 8K" />
                            <TechnicalReadout label="Encryption" value="AES_256" />
                        </div>
                        <Link to="/store" className="skeuo-panel block w-full text-center py-5 bg-primary/10 border-primary/30 text-primary rounded-xl font-black text-[10px] tracking-[0.4em] transition-all hover:bg-primary hover:text-deep uppercase text-tactical">
                            INIT_TRANSFER_PROTOCOL
                        </Link>
                    </div>
                </motion.div>

                {/* Module: Instant Delivery */}
                <motion.div className={HUD_BOX}>
                    <div className="space-y-6">
                        <div className="w-14 h-14 skeuo-inset rounded-xl flex items-center justify-center text-secondary">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-display font-black text-white uppercase tracking-tighter">DATA_SPEED</h3>
                        <p className="text-text-dim text-xs leading-relaxed font-medium">Near-zero latency procurement array. Neural packets deployed instantly.</p>
                    </div>
                </motion.div>

                {/* Module: Community Hub */}
                <motion.div className={HUD_BOX}>
                    <div className="space-y-6">
                        <div className="w-14 h-14 skeuo-inset rounded-xl flex items-center justify-center text-accent">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-display font-black text-white uppercase tracking-tighter">NODE_COMM</h3>
                        <p className="text-text-dim text-xs leading-relaxed font-medium">Global network of 5,000+ units operating within the creative grid.</p>
                    </div>
                </motion.div>

                {/* Module: Categories */}
                <motion.div className={`${HUD_BOX} md:col-span-2 flex flex-col justify-between`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] text-tactical">Direct_Access</span>
                            <h3 className="text-3xl font-display font-black text-white mt-2">VAULT_INDEX</h3>
                        </div>
                        <Link to="/store" className="skeuo-panel p-3 border-white/10 hover:border-primary transition-all">
                            <ArrowRight size={20} className="text-text-dim group-hover:text-primary" />
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8">
                        {['MODELS_3D', 'TEXTURES_8K', 'PLUGINS_MAX', 'SCRIPTS_PY'].map((cat) => (
                            <div key={cat} className="skeuo-inset px-4 py-2 rounded-lg font-mono text-[9px] text-text-dim hover:text-primary transition-all cursor-pointer uppercase font-bold tracking-widest">
                                {cat}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* AD_SENSE_BUFFER: AD_UNIT */}
            <div className="max-w-7xl mx-auto px-4">
                <AdBanner slot="horizontal" />
            </div>

            {/* SYSTEM_TELEMETRY: DATA_FEED */}
            <section className="max-w-7xl mx-auto px-4 text-center space-y-16">
                <div className="space-y-4">
                    <div className="skeuo-inset inline-flex px-6 py-2 rounded-full">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] text-tactical">Telemetry_Readout</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white leading-tight">GRID_DIAGNOSTICS</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="skeuo-panel p-10 border-white/5 flex flex-col items-center justify-center gap-6"
                        >
                            <div className={`${stat.color} p-4 skeuo-inset rounded-2xl`}>{stat.icon}</div>
                            <div className="space-y-2">
                                <p className={`text-5xl font-display font-black ${stat.color} text-glow leading-none`}>{stat.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-dim text-tactical">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DOCUMENTATION: CORE_MISSION */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="skeuo-panel p-10 md:p-20 space-y-16 border-white/10">
                    <div className="max-w-4xl space-y-6">
                        <div className="skeuo-inset inline-flex px-4 py-2 rounded-lg">
                            <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase text-tactical">LOG_ENTRY // 0x779</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[0.9]">
                            PRIMARY_DATA<br/><span className="text-primary">STORAGE_VAULT</span>
                        </h2>
                        <p className="text-xl text-text-dim leading-relaxed font-medium max-w-2xl">
                            DigiNepal operates as the regional hub for high-precision digital components. Our directive is to stabilize the asset supply for creative architects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-base text-text-dim font-medium leading-relaxed">
                        <div className="space-y-12">
                            <div className="skeuo-inset p-8 rounded-2xl space-y-4">
                                <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                                    <div className="w-1.5 h-6 bg-primary rounded-full" /> SYSTEM_ARCHITECTURE
                                </h3>
                                <p>
                                    As Nepal's first specialized distribution node, we've architected a secure gateway for digital creators to deploy complex modules. Our infrastructure supports 3D models, textures, and scripts mapped to global standards.
                                </p>
                            </div>
                            <div className="skeuo-inset p-8 rounded-2xl space-y-4">
                                <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                                    <div className="w-1.5 h-6 bg-secondary rounded-full" /> CREATOR_PROTOCOL
                                </h3>
                                <p>
                                    Our uplink protocols enable regional units to monetize intellectual synthesis. Every packet in the vault undergoes technical validation—topology, mapping, and metadata accuracy—ensuring seamless integration.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="skeuo-inset p-8 rounded-2xl space-y-4">
                                <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                                    <div className="w-1.5 h-6 bg-accent rounded-full" /> PROCUREMENT_LOGIC
                                </h3>
                                <p>
                                    Units acquire assets via low-latency procurement. Every transaction registers a persistent license on the user's core profile. We support regional arrays like eSewa for a frictionless acquisition cycle.
                                </p>
                            </div>
                            <div className="skeuo-inset p-8 rounded-2xl space-y-4">
                                <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
                                    <div className="w-1.5 h-6 bg-primary rounded-full" /> SCALABILITY_FEED
                                </h3>
                                <p>
                                    Module-based development reduces production cycle-time by up to 70%. By utilizing pre-initialized assets, developers bypass basic modeling to focus on core mechanics and system integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESOURCE_HOLOGRAPH: GUIDES_PREVIEW */}
            <section className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="skeuo-panel bg-gradient-to-br from-primary/10 via-deep to-deep rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden border-primary/20"
                >
                    <div className="space-y-8 relative z-10 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-primary">
                            <BookOpen size={24} />
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-tactical">Instructional_Packets</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white leading-[0.8] tracking-tighter">
                            LEARNING_DRIVE<br/>SYNC_INIT
                        </h2>
                        <p className="text-text-dim max-w-xl text-xl font-medium">
                            Access our centralized database of SEO-optimized technical documentation. Master the protocols of digital asset deployment.
                        </p>
                    </div>
                    <Link
                        to="/guides"
                        className="relative z-10 bg-primary px-16 py-7 rounded-2xl text-deep font-black tracking-[0.4em] text-xs hover:scale-105 hover:shadow-[0_0_40px_var(--neon-glow)] transition-all shrink-0 text-tactical"
                    >
                        SYNC_LEARNING
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}


