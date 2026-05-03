import { ShieldCheck, Activity, Terminal, Lock, Database, Cpu, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Privacy Policy | DigiNepal</title>
                <meta name="description" content="Official privacy policy for DigiNepal. Learn how we collect, use, and protect your personal information when using our digital asset marketplace." />
            </Helmet>

            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/80">Privacy Protocol</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">Privacy Policy</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/80 max-w-2xl border-l-4 border-secondary/20 pl-8">
                        At DigiNepal, we value your privacy and are committed to protecting your personal data. This policy outlines our practices regarding information collection and usage.
                    </p>
                </div>
                <div className="flex gap-8 text-center lg:text-right shrink-0">
                    <div className="skeuo-inset px-6 py-4 rounded-xl border-white/5 bg-deep/40">
                        <p className="text-[9px] font-black text-secondary/60 uppercase tracking-[0.4em] mb-1">LAST UPDATED</p>
                        <p className="text-lg font-black text-white tracking-widest">May 3, 2026</p>
                    </div>
                </div>
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
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Data Handling</h2>
                                <p className="text-[10px] font-black text-text-dim/60 uppercase tracking-widest">Core Transparency</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-20">
                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">01</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Introduction</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>
                                    Welcome to DigiNepal. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
                                </p>
                                <p>
                                    By using DigiNepal, you agree to the collection and use of information in accordance with this policy. We encourage you to read this document carefully to understand our views and practices regarding your personal data.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Information We Collect</h3>
                            </div>
                            <div className="pl-16 space-y-10 border-l-2 border-white/5">
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black text-primary/80 uppercase tracking-widest">2.1 Personal Information</h4>
                                    <p className="text-text-dim/80">We may collect personally identifiable information that you provide to us directly, including:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'Account Info: Name, email address, and password.',
                                            'Billing: Payment details and transaction history.',
                                            'Support: Correspondence and contact information.',
                                            'Creator Data: Portfolio details and payout information.'
                                        ].map((item, i) => (
                                            <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-medium text-white/80 border-white/5 flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black text-secondary/80 uppercase tracking-widest">2.2 Usage and Technical Data</h4>
                                    <p className="text-text-dim/80">We automatically collect certain information when you visit our site, including:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'Log Data: IP address, browser type, and version.',
                                            'Activity: Pages visited, time spent, and links clicked.',
                                            'Cookies: Data stored on your device to improve experience.',
                                            'Device: Operating system and unique device identifiers.'
                                        ].map((item, i) => (
                                            <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-medium text-white/80 border-white/5 flex items-center gap-4">
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
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">How We Use Your Information</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>We use the information we collect for various purposes, including to:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'Provide, operate, and maintain our services.',
                                        'Process transactions and manage asset delivery.',
                                        'Improve and personalize your experience on our site.',
                                        'Communicate with you regarding updates and support.',
                                        'Protect against fraudulent or unauthorized activity.',
                                        'Comply with legal obligations and industry standards.'
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
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">04</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Data Security</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <div className="skeuo-panel p-10 rounded-[2.5rem] bg-deep/40 border-primary/20 flex flex-col md:flex-row items-center gap-10">
                                    <div className="skeuo-inset p-6 rounded-2xl border-primary/20 bg-primary/5">
                                        <Lock size={48} className="text-primary" />
                                    </div>
                                    <p>
                                        We implement robust security measures, including encryption and secure server protocols, to protect your data. While we strive to use commercially acceptable means to protect your personal information, remember that no method of transmission over the internet is 100% secure.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">05</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Contact Us</h3>
                            </div>
                            <div className="pl-16 space-y-6">
                                <div className="skeuo-inset p-10 rounded-[2.5rem] bg-deep/40 border-white/5 grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Our Office</h4>
                                        <div className="flex items-start gap-3">
                                            <MapPin size={18} className="text-primary mt-1" />
                                            <div>
                                                <p className="text-xl font-black text-white tracking-tighter uppercase">DigiNepal HQ</p>
                                                <p className="text-sm text-text-dim/60 font-medium">Pokhara, Kaski, Nepal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black text-secondary/60 uppercase tracking-widest">Inquiries</h4>
                                        <div className="flex items-center gap-3">
                                            <Mail size={18} className="text-secondary" />
                                            <p className="text-sm font-medium text-white break-all">sunarsaimon.43244@gmail.com</p>
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
