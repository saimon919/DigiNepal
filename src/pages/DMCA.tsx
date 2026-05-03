import { ShieldCheck, AlertTriangle, FileText, Activity, Terminal, Lock, Database, Cpu, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function DMCA() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>DMCA Policy | DigiNepal</title>
                <meta name="description" content="Official DMCA compliance policy for DigiNepal. Procedures for copyright takedown requests and intellectual property protection." />
            </Helmet>

            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/80">IP Protection</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">DMCA Policy</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/80 max-w-2xl border-l-4 border-secondary/20 pl-8">
                        DigiNepal respects intellectual property rights. This policy outlines our compliance with the Digital Millennium Copyright Act.
                    </p>
                </div>
                <div className="flex gap-8 text-center lg:text-right shrink-0">
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-secondary/60 uppercase tracking-[0.4em] mb-1">LAST UPDATED</p>
                        <p className="text-lg font-black text-white tracking-widest">May 3, 2026</p>
                    </div>
                </div>
            </div>

            {/* Intro Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: <ShieldCheck size={28} />, title: 'Respect IP', desc: 'We take intellectual property claims seriously and process them promptly.', color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20' },
                    { icon: <AlertTriangle size={28} />, title: 'Policy Enforced', desc: 'Repeat infringers will be permanently removed from our platform.', color: 'text-secondary', bg: 'bg-secondary/5', border: 'border-secondary/20' },
                    { icon: <FileText size={28} />, title: 'DMCA Compliant', desc: 'Operating under standard Digital Millennium Copyright Act protocols.', color: 'text-white', bg: 'bg-white/5', border: 'border-white/10' },
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
                            <p className="text-sm text-text-dim/80 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Document */}
            <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 bg-deep/40 relative group overflow-hidden">
                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-16 space-y-16 overflow-hidden relative">
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="skeuo-inset p-3 rounded-xl border-primary/20">
                                <Terminal size={24} className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Compliance Details</h2>
                                <p className="text-[10px] font-black text-text-dim/60 uppercase tracking-widest">Copyright Manual</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-20">
                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">01</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Overview</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>
                                    DigiNepal respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond quickly to notices of alleged infringement that are reported to our designated copyright agent.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Takedown Notices</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>To file a notice of infringement, please provide our copyright agent with the following information in writing:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'Identification of the copyrighted work claimed to have been infringed.',
                                        'Identification of the material that is claimed to be infringing.',
                                        'Your contact information, including address and email.',
                                        'A statement that you have a good faith belief that the use is unauthorized.',
                                        'A statement that the information in the notice is accurate.',
                                        'A physical or electronic signature of the copyright owner.'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <ShieldCheck size={18} className="text-primary mt-1 shrink-0" />
                                            <p className="text-sm font-medium leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">03</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Designated Agent</h3>
                            </div>
                            <div className="pl-16 space-y-6">
                                <div className="skeuo-panel p-10 rounded-[2.5rem] bg-deep/40 border-primary/20 space-y-6">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-3">
                                                <MapPin size={18} className="text-primary mt-1" />
                                                <div>
                                                    <p className="text-xl font-black text-white tracking-tighter uppercase">DigiNepal IP Team</p>
                                                    <p className="text-sm text-text-dim/60 font-medium">Pokhara, Kaski, Nepal</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <Mail size={18} className="text-secondary" />
                                                <p className="text-sm font-medium text-white break-all">sunarsaimon.43244@gmail.com</p>
                                            </div>
                                            <p className="text-[10px] font-black text-secondary uppercase tracking-widest pt-2">Subject: DMCA Takedown Request</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
