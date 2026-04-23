import { ShieldCheck, Server, Activity, Terminal } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 space-y-12 relative font-mono">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Readout */}
            <div className="glass-panel hud-border p-8 md:p-12 relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3 text-secondary mb-4">
                    <Server size={16} className="animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">LEGAL_PROTOCOL_ACCESS</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-widest uppercase">
                    PRIVACY_POLICY
                </h1>
                <div className="flex justify-center gap-8 pt-6 border-t border-white/5 text-[9px] uppercase tracking-widest text-text-dim">
                    <span className="flex items-center gap-2"><Activity size={12} className="text-secondary" /> Last_Update: 2026.03.08</span>
                    <span className="flex items-center gap-2 text-primary"><ShieldCheck size={12} /> Status: ENFORCED</span>
                </div>
            </div>

            {/* Legal Text Body */}
            <div className="glass-panel hud-border p-8 md:p-12 space-y-12 relative z-10">
                
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={20} className="text-primary" />
                        Data_Handling_Protocols
                    </h2>
                    <span className="text-[10px] text-text-dim uppercase tracking-widest">Read_Only</span>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">01.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Introduction</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            Welcome to DigiNepal ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>DigiNepal.com</strong> and use our digital marketplace services.
                        </p>
                        <p className="border-l-2 border-secondary/50 pl-4 py-1">
                            Please read this policy carefully. If you do not agree with the terms of this privacy policy, please discontinue use of our site. We reserve the right to make changes to this policy at any time — the updated version will be indicated by an updated "Last Updated" date.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">02.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Information We Collect</h2>
                    </div>
                    <div className="pl-8 space-y-6 text-text-dim text-sm leading-relaxed">
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs border-b border-white/10 pb-1 inline-block">2.1 Personal Data You Provide</h3>
                            <ul className="list-disc list-inside space-y-2 mt-2 marker:text-primary">
                                <li><strong>Account Registration:</strong> Name, email address, and password when you create an account.</li>
                                <li><strong>Purchases:</strong> Billing name and payment information processed via our secure payment partners (eSewa). We do not store full card numbers.</li>
                                <li><strong>Contact Forms:</strong> Your name, email, phone number, and message when you contact us.</li>
                                <li><strong>Creator Profiles:</strong> If you register as a creator, we collect portfolio links, bio, and payout information.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs border-b border-white/10 pb-1 inline-block">2.2 Automatically Collected Data</h3>
                            <ul className="list-disc list-inside space-y-2 mt-2 marker:text-secondary">
                                <li><strong>Log Data:</strong> IP address, browser type and version, pages visited, time and date of visit, time spent on pages.</li>
                                <li><strong>Cookies:</strong> Small data files placed on your device. See Section 5 for details.</li>
                                <li><strong>Device Information:</strong> Device type, operating system, and browser settings.</li>
                                <li><strong>Usage Data:</strong> Pages viewed, search queries, products clicked, and cart activity.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">03.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">How We Use Your Information</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-primary">
                            <li>Create and manage your account and authenticate your identity.</li>
                            <li>Process transactions and send related order confirmations and download links.</li>
                            <li>Provide you access to purchased digital assets via your Library.</li>
                            <li>Respond to your customer service requests and inquiries.</li>
                            <li>Send you marketing and promotional communications (with your consent).</li>
                            <li>Analyze usage patterns to improve the platform's performance and user experience.</li>
                            <li>Detect and prevent fraud, abuse, and violations of our Terms of Service.</li>
                            <li>Comply with applicable legal obligations in Nepal and internationally.</li>
                            <li>Serve targeted advertisements via Google AdSense based on browsing behavior (see Section 6).</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">04.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Sharing Your Information</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 marker:text-secondary">
                            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website.</li>
                            <li><strong>Advertising Partners:</strong> Google AdSense may use cookies and web beacons. You can opt out at <a href="https://www.google.com/settings/ads" className="text-primary hover:text-white transition-colors">Google Ad Settings</a>.</li>
                            <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
                            <li><strong>With Your Consent:</strong> Any other sharing will only happen with your explicit consent.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">05.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Cookies Policy</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>We use cookies to enhance your experience. Here's what we use:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-primary">
                            <li><strong>Essential Cookies:</strong> Required for authentication, session management, and cart functionality.</li>
                            <li><strong>Analytics Cookies:</strong> Used by tools like Google Analytics to understand site usage.</li>
                            <li><strong>Advertising Cookies:</strong> Used by Google AdSense to deliver relevant advertisements.</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">06.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Google AdSense & Advertising</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            DigiNepal uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on users' prior visits to our site and other sites on the Internet.
                        </p>
                        <p>
                            Google's use of advertising cookies enables it and its partners to serve ads. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:text-white transition-colors">Google Ad Settings</a> or <a href="https://www.aboutads.info" className="text-primary hover:text-white transition-colors">aboutads.info</a>.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">07.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Data Security</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            We implement industry-standard security measures including SSL/TLS encryption, secure authentication, and regular security audits to protect your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">08.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Your Rights</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, and to withdraw consent for marketing.</p>
                        <p>To exercise any of these rights, contact us at <strong className="text-white">sunarsaimon.43244@gmail.com</strong>.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">09.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Contact Us</h2>
                    </div>
                    <div className="pl-8 space-y-4">
                        <div className="bg-black/40 border border-primary/20 rounded-xl p-6 space-y-2 text-sm font-mono">
                            <p className="text-primary font-bold uppercase tracking-widest">DigiNepal Data Controller</p>
                            <p className="text-text-dim">Pokhara, Kaski, Nepal</p>
                            <p className="text-text-dim">Email: <span className="text-white">sunarsaimon.43244@gmail.com</span></p>
                            <p className="text-text-dim">Phone: <span className="text-white">+977 9867309193</span></p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
