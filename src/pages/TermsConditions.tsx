import { ShieldCheck, Server, Activity, Terminal } from 'lucide-react';

export default function TermsConditions() {
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
                    TERMS_&_CONDITIONS
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
                        Service_Agreement
                    </h2>
                    <span className="text-[10px] text-text-dim uppercase tracking-widest">Read_Only</span>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">01.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Agreement to Terms</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            By accessing and using DigiNepal ("the Platform," "we," "us," "our"), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. DigiNepal is operated by its founders in Pokhara, Nepal.
                        </p>
                        <p className="border-l-2 border-secondary/50 pl-4 py-1">
                            We reserve the right to revise these terms at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms and Conditions.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">02.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Description of Service</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>
                            DigiNepal is an online digital marketplace that allows registered creators ("Sellers") to publish, list, and sell digital products including 3D assets, textures, scripts, audio files, design templates, and other creative digital goods (collectively "Digital Products"). Registered buyers ("Buyers") may browse the marketplace and purchase Digital Products for personal or commercial use as defined by the applicable license.
                        </p>
                        <p>
                            DigiNepal acts as a platform intermediary and is not the seller of record for any individual Digital Product. Each Seller is responsible for the accuracy, legality, and quality of their listed products.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">03.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">User Accounts</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>To purchase or sell products on DigiNepal, you must create an account. You agree to:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-primary">
                            <li>Provide accurate, current, and complete registration information.</li>
                            <li>Maintain and promptly update your account information to keep it accurate.</li>
                            <li>Keep your password confidential and not share it with any third party.</li>
                            <li>Accept responsibility for all activities that occur under your account.</li>
                            <li>Notify us immediately of any unauthorized use of your account.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">04.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Purchasing Digital Products</h2>
                    </div>
                    <div className="pl-8 space-y-6 text-text-dim text-sm leading-relaxed">
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs border-b border-white/10 pb-1 inline-block">4.1 Pricing and Payment</h3>
                            <p>All prices are listed in Nepali Rupees (NPR / Rs.). Prices are set by individual Sellers. DigiNepal may charge a platform fee which is deducted from the Seller's earnings. Payment is processed securely via eSewa. By completing a purchase, you authorize us to charge your selected payment method.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs border-b border-white/10 pb-1 inline-block">4.2 Refund Policy</h3>
                            <p>Due to the nature of digital products, all sales are final once a download link has been issued. We may issue refunds at our sole discretion in cases where: (a) the product is substantially different from its description; (b) the product file is corrupt or non-functional; or (c) the same product was accidentally purchased twice. Refund requests must be submitted within 7 days of purchase via our Contact page.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs border-b border-white/10 pb-1 inline-block">4.3 License Grant</h3>
                            <p>Upon successful purchase, you are granted a non-exclusive, non-transferable, royalty-free license to use the Digital Product as specified in the product's license terms. Unless explicitly stated otherwise, you may use the asset in personal and commercial projects but may not resell, redistribute, or sublicense the files independently.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">05.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Seller Responsibilities</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>As a Seller on DigiNepal, you represent and warrant that:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-secondary">
                            <li>You own or have the legal right to sell the Digital Products you list.</li>
                            <li>Your products do not infringe on any third-party intellectual property rights.</li>
                            <li>Your products are accurately described and the listed files match the preview images.</li>
                            <li>Your products are free from viruses, malware, or any malicious code.</li>
                            <li>You have obtained all necessary permissions for any third-party content included in your products.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">06.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Intellectual Property</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>The DigiNepal platform itself — including its design, logo, code, content, and branding — is the exclusive property of DigiNepal and is protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our platform content without written permission.</p>
                        <p>Digital Products listed by Sellers remain the intellectual property of those Sellers. Purchasing a product grants you a usage license only, not ownership of the underlying intellectual property.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">07.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Prohibited Conduct</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 marker:text-primary">
                            <li>Use the platform for any unlawful purpose or in violation of any applicable laws.</li>
                            <li>Upload or distribute malware, viruses, or any harmful software.</li>
                            <li>Attempt to gain unauthorized access to any part of the platform or other users' accounts.</li>
                            <li>Scrape, crawl, or otherwise collect data from the platform without permission.</li>
                            <li>Circumvent any payment systems or pricing mechanisms.</li>
                            <li>Post false, misleading, or defamatory content about products or other users.</li>
                            <li>Resell or redistribute purchased Digital Products without the Seller's explicit permission.</li>
                            <li>Use the platform to conduct money laundering or other financial crimes.</li>
                        </ul>
                    </div>
                </section>
                
                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">08.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Third-Party Services</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>DigiNepal may contain links to third-party websites and may display advertisements from third-party networks including Google AdSense. We are not responsible for the content, privacy policies, or practices of third-party sites.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">09.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Disclaimer & Limitation of Liability</h2>
                    </div>
                    <div className="pl-8 space-y-4 text-text-dim text-sm leading-relaxed">
                        <p>The platform is provided on an "as is" and "as available" basis. DigiNepal makes no warranties, expressed or implied, and hereby disclaims all other warranties including merchantability, fitness for a particular purpose, or non-infringement.</p>
                        <p className="border-l-2 border-secondary/50 pl-4 py-1">In no event shall DigiNepal, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or related to your use of the platform. Our aggregate liability to you shall not exceed the amount you paid to DigiNepal in the 12 months preceding the claim.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-black text-sm">10.</span>
                        <h2 className="text-lg font-black text-white uppercase tracking-widest">Contact</h2>
                    </div>
                    <div className="pl-8 space-y-4">
                        <div className="bg-black/40 border border-primary/20 rounded-xl p-6 space-y-2 text-sm font-mono">
                            <p className="text-primary font-bold uppercase tracking-widest">DigiNepal Legal</p>
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
