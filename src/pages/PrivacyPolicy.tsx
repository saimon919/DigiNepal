import { ShieldCheck, Activity, Terminal, Lock, Database, Cpu } from 'lucide-react';
// import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Privacy Policy | DigiNepal Tactical Data Grid</title>
                <meta name="description" content="Official data handling and privacy protocols for the DigiNepal tactical digital asset marketplace. Learn how we protect your agent signature and transaction telemetry." />
            </Helmet>

            {/* Tactical Legal Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">LEGAL_PROTOCOL_ACCESS :: ENCRYPTED</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">PRIVACY_POLICY</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        Official data handling and privacy protocols for the DigiNepal tactical asset marketplace. Enforced via neural grid synchronization.
                    </p>
                </div>
                <div className="flex gap-8 text-center lg:text-right shrink-0">
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-secondary/60 uppercase tracking-[0.4em] mb-1 text-tactical">LAST_UPDATE</p>
                        <p className="text-lg font-black text-white tracking-widest uppercase">2026.04.23</p>
                    </div>
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-primary/60 uppercase tracking-[0.4em] mb-1 text-tactical">STATUS</p>
                        <p className="text-lg font-black text-primary tracking-widest uppercase flex items-center gap-2">
                            <ShieldCheck size={16} /> ENFORCED
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Document Console */}
            <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 bg-deep/40 relative group overflow-hidden">
                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-16 space-y-16 overflow-hidden relative">
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="skeuo-inset p-3 rounded-xl border-primary/20">
                                <Terminal size={24} className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">DATA_HANDLING_PROTOCOLS</h2>
                                <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] text-tactical">CORE_SYSTEM_DIRECTIVES</p>
                            </div>
                        </div>
                        <div className="hidden sm:block skeuo-inset p-4 rounded-2xl opacity-20">
                            <Database size={32} />
                        </div>
                    </div>

                    <div className="space-y-20">
                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">01</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Introduction</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    Welcome to DigiNepal ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy on the tactical grid. This Privacy Policy explains how we collect, use, disclose, and safeguard your telemetry data when you access our secure marketplace grid.
                                </p>
                                <div className="skeuo-inset p-8 rounded-[2rem] bg-secondary/5 border-secondary/20">
                                    <p className="text-secondary/80">
                                        Please analyze this protocol carefully. If you do not authorize these data synchronization terms, please abort your connection to the grid immediately.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Information_Acquisition</h3>
                            </div>
                            <div className="pl-16 space-y-10 border-l-2 border-white/5">
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black text-primary/60 uppercase tracking-[0.4em] text-tactical">2.1_AGENT_TELEMETRY (PERSONAL DATA)</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'ACCOUNT_SIGNATURE: Name, email, and access keys.',
                                            'TRANSACTION_LOGS: Billing records and acquisition history.',
                                            'COMM_UPLINKS: Metadata from contact and support requests.',
                                            'CREATOR_PROFILES: Portfolio data and distribution payouts.'
                                        ].map((item, i) => (
                                            <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-black text-white/60 tracking-widest uppercase border-white/5 flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black text-secondary/60 uppercase tracking-[0.4em] text-tactical">2.2_AUTOMATED_SCANNING (SYSTEM DATA)</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'IP_ADDRESS: Regional node identification.',
                                            'DEVICE_SPECS: Operating system and browser fingerprint.',
                                            'SESSION_DATA: Duration and interaction telemetry.',
                                            'COOKIE_NODES: Local persistent data tokens.'
                                        ].map((item, i) => (
                                            <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-black text-white/60 tracking-widest uppercase border-white/5 flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">03</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Usage_Directives</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>We utilize acquired telemetry strings to:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'Maintain agent account stability and authorization.',
                                        'Execute asset distribution and transaction confirmation.',
                                        'Monitor grid performance and user interaction patterns.',
                                        'Defend against unauthorized access and fraudulent uplinks.',
                                        'Deliver optimized tactical resource recommendations.'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <Activity size={18} className="text-primary mt-1 shrink-0" />
                                            <p className="text-sm font-black uppercase tracking-widest leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">04</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Nodal_Security</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <div className="skeuo-panel p-10 rounded-[2.5rem] bg-deep/40 border-primary/20 flex flex-col md:flex-row items-center gap-10">
                                    <div className="skeuo-inset p-6 rounded-2xl border-primary/20 bg-primary/5">
                                        <ShieldCheck size={48} className="text-primary" />
                                    </div>
                                    <p>
                                        We implement industry-standard security protocols including AES-256 encryption, secure RSA authentication, and regular grid integrity audits to safeguard your telemetry. However, no data uplink is absolute. Maintain personal key hygiene.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">05</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Contact_Administration</h3>
                            </div>
                            <div className="pl-16 space-y-6">
                                <div className="skeuo-inset p-10 rounded-[2.5rem] bg-deep/40 border-white/5 grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] text-tactical">CENTRAL_DATA_CONTROLLER</h4>
                                        <p className="text-xl font-black text-white tracking-tighter uppercase">DIGINEPAL_HQ</p>
                                        <p className="text-sm text-text-dim/60 font-medium italic">Pokhara, Kaski, Nepal</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.4em] text-tactical">DIRECT_UPLINK</h4>
                                        <p className="text-sm font-black text-white uppercase tracking-widest break-all">sunarsaimon.43244@gmail.com</p>
                                        <p className="text-sm font-black text-white tracking-widest">+977 9867309193</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-12 text-center">
                <div className="flex items-center justify-center gap-4 text-text-dim/20">
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/10" />
                    <Cpu size={20} />
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] text-tactical">END_OF_LEGAL_MANIFEST</span>
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    );
}
