import { ShieldCheck, AlertTriangle, FileText, Server, Activity, Terminal } from 'lucide-react';

export default function DMCA() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 space-y-12 relative font-mono">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Readout */}
            <div className="glass-panel hud-border p-8 md:p-12 relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3 text-secondary mb-4">
                    <Server size={16} className="animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">LEGAL_PROTOCOL_ACCESS</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-widest uppercase">
                    DMCA_POLICY
                </h1>
                <div className="flex justify-center gap-8 pt-6 border-t border-white/5 text-[9px] uppercase tracking-widest text-text-dim">
                    <span className="flex items-center gap-2"><Activity size={12} className="text-secondary" /> Last_Update: 2026.03.08</span>
                    <span className="flex items-center gap-2 text-primary"><ShieldCheck size={12} /> Status: ENFORCED</span>
                </div>
            </div>

            {/* Intro Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {[
                    { icon: <ShieldCheck size={24} />, title: 'Respect_IP', desc: 'DigiNepal acts swiftly on valid intellectual property claims.', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30' },
                    { icon: <AlertTriangle size={24} />, title: 'Zero_Tolerance', desc: 'Repeat infringers are permanently purged from the network.', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/30' },
                    { icon: <FileText size={24} />, title: 'DMCA_Compliant', desc: 'Operating under Digital Millennium Copyright Act protocols.', color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
                ].map((item, i) => (
                    <div key={i} className={`glass-panel border ${item.border} p-6 space-y-4 hover:bg-white/5 transition-all group`}>
                        <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                            {item.icon}
                        </div>
                        <h3 className="font-black text-white uppercase tracking-widest text-sm">{item.title}</h3>
                        <p className="text-xs text-text-dim leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Legal Text Body */}
            <div className="glass-panel hud-border p-8 md:p-12 space-y-12 relative z-10">
                
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={20} className="text-primary" />
                        Protocol_Details
                    </h2>
                    <span className="text-[10px] text-text-dim uppercase tracking-widest">Read_Only</span>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">01.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Overview</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            DigiNepal respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond expeditiously to claims of copyright infringement committed using the DigiNepal platform, provided that the claims are submitted in accordance with the procedure outlined below.
                        </p>
                        <p className="border-l-2 border-secondary/50 pl-4 py-1">
                            It is our policy to terminate the accounts of users who are determined to be repeat infringers. If you believe that content available on DigiNepal infringes one or more of your copyrights, please notify us by submitting a DMCA Takedown Request.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">02.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">DMCA Takedown Request</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>To submit a valid DMCA takedown request, please provide our designated copyright agent with the following information in writing:</p>
                        <ol className="list-decimal list-inside space-y-3 marker:text-primary marker:font-bold">
                            <li><strong className="text-white">Identification of work:</strong> Description of the copyrighted work claimed to have been infringed.</li>
                            <li><strong className="text-white">Identification of material:</strong> Location on DigiNepal (URL) specific enough to allow us to locate it.</li>
                            <li><strong className="text-white">Contact info:</strong> Address, telephone number, and email address.</li>
                            <li><strong className="text-white">Good faith statement:</strong> Belief that the use is not authorized by the copyright owner.</li>
                            <li><strong className="text-white">Accuracy statement:</strong> Made under penalty of perjury, that info is accurate.</li>
                            <li><strong className="text-white">Signature:</strong> Physical or electronic signature of the authorized person.</li>
                        </ol>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">03.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Where to Send Request</h2>
                    </div>
                    <div className="pl-8 space-y-4">
                        <p className="text-text-dim text-sm">Send your completed notice to our Designated Agent:</p>
                        <div className="bg-black/40 border border-primary/20 rounded-xl p-6 space-y-2 text-sm font-mono">
                            <p className="text-primary font-bold uppercase tracking-widest">DigiNepal DMCA Agent</p>
                            <p className="text-text-dim">Pokhara, Kaski, Nepal</p>
                            <p className="text-text-dim flex items-center gap-2">Email: <a href="mailto:sunarsaimon.43244@gmail.com" className="text-white hover:text-primary transition-colors">sunarsaimon.43244@gmail.com</a></p>
                            <p className="text-text-dim border-t border-white/10 pt-2 mt-2">Subject: <span className="text-white">DMCA Takedown Request – [Product Name]</span></p>
                        </div>
                        <p className="text-secondary/80 text-xs uppercase tracking-widest">Expected processing time: 5 Business Days.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">04.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Counter-Notification</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>If you believe content was removed by mistake, submit a counter-notification including:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-secondary">
                            <li>Physical/electronic signature.</li>
                            <li>Identification of removed material and original URL.</li>
                            <li>Statement under penalty of perjury regarding mistake/misidentification.</li>
                            <li>Name, address, phone number, and consent to jurisdiction.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">05.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Repeat Infringers & Protection</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>Repeat infringers will have their access permanently revoked at administrator discretion. False notices may be subject to liability under Section 512(f).</p>
                        <p>We encourage creators to protect their assets via watermarks, timestamps, and explicit license documentation.</p>
                    </div>
                </section>

            </div>
        </div>
    );
}
