import { ShieldCheck, Activity, Lock, Database, Cpu, FileText } from 'lucide-react';
// import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function TermsConditions() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Terms & Conditions | DigiNepal Tactical Service Agreement</title>
                <meta name="description" content="Official terms of service and usage conditions for the DigiNepal digital asset grid. Authorization and licensing protocols for agents and creators." />
            </Helmet>

            {/* Tactical Legal Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">LEGAL_PROTOCOL_ACCESS :: ENCRYPTED</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">TERMS_OF_SERVICE</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        Official usage conditions and service agreements for the DigiNepal asset marketplace. Authorization required for all grid interactions.
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
                                <FileText size={24} className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">SERVICE_AGREEMENT</h2>
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
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Agreement_to_Terms</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    By accessing and using the DigiNepal Tactical Grid ("the Platform"), you agree to be bound by these Terms and Conditions and all applicable neural regulations. If you do not authorize these terms, you are prohibited from using or accessing this node. DigiNepal is operated by its founders in Pokhara, Nepal.
                                </p>
                                <div className="skeuo-inset p-8 rounded-[2rem] bg-secondary/5 border-secondary/20">
                                    <p className="text-secondary/80">
                                        We reserve the right to revise these protocols at any time. By maintaining your connection to this website, you agree to be bound by the then-current version of these Terms.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Service_Description</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    DigiNepal is an online digital marketplace that allows registered creators ("Sellers") to publish, list, and distribute digital products including 3D modules, texture arrays, scripts, and other tactical resources (collectively "Digital Assets"). Registered buyers ("Agents") may browse the grid and acquire Digital Assets for personal or commercial deployment.
                                </p>
                                <p>
                                    DigiNepal acts as a nodal intermediary and is not the seller of record for individual Digital Assets. Each Seller is responsible for the integrity, legality, and quality of their listed data packets.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">03</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Agent_Accounts</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>To acquire or distribute data packets, you must initialize an account. You agree to:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {[
                                        'Provide accurate agent signature data.',
                                        'Maintain nodal security and access keys.',
                                        'Keep authorization credentials confidential.',
                                        'Accept responsibility for all uplink activity.',
                                        'Notify administration of unauthorized access.'
                                    ].map((item, i) => (
                                        <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-black text-white/60 tracking-widest uppercase border-white/5 flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">04</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Asset_Acquisition</h3>
                            </div>
                            <div className="pl-16 space-y-10 border-l-2 border-white/5">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-primary/60 uppercase tracking-[0.4em] text-tactical">4.1_VALUATION_AND_PAYMENT</h4>
                                    <p className="text-text-dim/60 font-medium italic">
                                        All valuations are listed in Nepali Rupees (NPR / Rs.). Payment is executed securely via eSewa. By completing an acquisition, you authorize us to charge your selected payment node.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-secondary/60 uppercase tracking-[0.4em] text-tactical">4.2_REFUND_PROTOCOL</h4>
                                    <p className="text-text-dim/60 font-medium italic">
                                        Due to the nature of digital distributions, all sales are final once a data packet download link has been authorized. Refunds are only issued for corrupt files or accidental duplicate acquisitions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">05</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Intellectual_Property</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    The DigiNepal platform — including its design, architecture, code, and branding — is the exclusive property of DigiNepal and is protected by Hymalayan intellectual property laws. You may not reproduce or create derivative works from our platform core.
                                </p>
                                <p>
                                    Digital Assets remain the intellectual property of the Sellers. Acquisition grants a usage license only, not ownership of the underlying data.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">06</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Prohibited_Conduct</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>Agents are strictly prohibited from:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'Using the grid for unlawful or destructive purposes.',
                                        'Distributing malware or unauthorized data strings.',
                                        'Attempting to bypass payment or security nodes.',
                                        'Scraping data from the grid without authorization.',
                                        'Reselling acquired assets without explicit permission.'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <Activity size={18} className="text-secondary mt-1 shrink-0" />
                                            <p className="text-sm font-black uppercase tracking-widest leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">07</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Liability_Limitation</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed italic border-l-2 border-white/5">
                                <p>
                                    The platform is provided on an "as is" basis. DigiNepal makes no absolute warranties of grid stability. In no event shall DigiNepal or its affiliates be liable for any indirect or consequential damages arising from grid interaction.
                                </p>
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
