import { ShieldCheck, AlertTriangle, FileText, Activity, Terminal, Lock, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function DMCA() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>DMCA Policy | DigiNepal Intellectual Property Protection</title>
                <meta name="description" content="Official DMCA compliance and intellectual property protection protocols for the DigiNepal tactical grid. Procedure for takedown requests and counter-notifications." />
            </Helmet>

            {/* Tactical Legal Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">LEGAL_PROTOCOL_ACCESS :: ENCRYPTED</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">DMCA_POLICY</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        Intellectual property protection and copyright infringement response protocols. Enforced via global digital rights synchronization.
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

            {/* Tactical Intro Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: <ShieldCheck size={28} />, title: 'Respect_IP', desc: 'Valid intellectual property claims are processed via immediate HQ authorization.', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20' },
                    { icon: <AlertTriangle size={28} />, title: 'Zero_Tolerance', desc: 'Repeat infringers will be permanently purged from the neural grid.', color: 'text-secondary', bg: 'bg-secondary/5', border: 'border-secondary/20' },
                    { icon: <FileText size={28} />, title: 'Compliant_v3.2', desc: 'Operating under global Digital Millennium Copyright Act protocols.', color: 'text-white', bg: 'bg-white/5', border: 'border-white/10' },
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`skeuo-panel border ${item.border} p-8 space-y-6 hover:bg-white/5 transition-all group rounded-[2.5rem]`}
                    >
                        <div className={`skeuo-inset w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center border-white/10 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-black text-white uppercase tracking-tighter text-lg leading-none">{item.title}</h3>
                            <p className="text-xs text-text-dim/60 leading-relaxed uppercase tracking-widest font-medium italic border-l-2 border-white/5 pl-4">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
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
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">PROTOCOL_DETAILS</h2>
                                <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] text-tactical">IP_DEFENSE_MANUAL</p>
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
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Overview</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    DigiNepal respects the intellectual property rights of all grid participants. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we respond expeditiously to verified claims of copyright infringement committed through the platform.
                                </p>
                                <div className="skeuo-inset p-8 rounded-[2rem] bg-secondary/5 border-secondary/20">
                                    <p className="text-secondary/80">
                                        It is our policy to terminate the uplink authorization of repeat infringers. Verified takedown requests result in immediate resource quarantine.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Takedown_Request_Payload</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>To submit a valid DMCA takedown packet, provide the following telemetry in writing:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'IDENTIFICATION: Clear description of the copyrighted work.',
                                        'MATERIAL_LOCATOR: Specific URL of the infringing resource.',
                                        'AGENT_CONTACT: Full address, phone, and secure email.',
                                        'GOOD_FAITH_STATEMENT: Assertion of unauthorized use.',
                                        'ACCURACY_CERTIFICATION: Perjury statement of fact.',
                                        'AUTHORIZATION_SIGNATURE: Physical or electronic signature.'
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
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">03</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Designated_DMCA_Agent</h3>
                            </div>
                            <div className="pl-16 space-y-6">
                                <div className="skeuo-panel p-10 rounded-[2.5rem] bg-deep/40 border-primary/20 space-y-6">
                                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                                        <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] text-tactical">DIRECT_UPLINK_FOR_LEGAL_NOTICES</h4>
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2">
                                            <p className="text-xl font-black text-white tracking-tighter uppercase">DIGINEPAL_IP_HQ</p>
                                            <p className="text-sm text-text-dim/60 font-medium italic">Pokhara, Kaski, Nepal</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-black text-white uppercase tracking-widest break-all">sunarsaimon.43244@gmail.com</p>
                                            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] pt-2">Subject: DMCA_TAKEDOWN_REQUEST</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-text-dim/40 font-black uppercase tracking-[0.5em] text-tactical">ESTIMATED_PROCESSING_LATENCY: 5.00_BUSINESS_DAYS</p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">04</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Counter_Notification</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>If content was removed via mistaken authorization, submit a counter-notification including signature, original locator, and a statement under penalty of perjury regarding misidentification.</p>
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
