import { Lock, FileText, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function TermsConditions() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Terms & Conditions | DigiNepal</title>
                <meta name="description" content="Official terms of service for DigiNepal. Understand your rights and responsibilities when using our digital asset marketplace." />
            </Helmet>

            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Lock size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/80">Service Agreement</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">Terms of Service</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/80 max-w-2xl border-l-4 border-secondary/20 pl-8">
                        These terms govern your use of the DigiNepal marketplace. By accessing our platform, you agree to comply with these conditions.
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
                                <FileText size={24} className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Usage Agreement</h2>
                                <p className="text-[10px] font-black text-text-dim/60 uppercase tracking-widest">General Terms</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-20">
                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">01</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Acceptance of Terms</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>
                                    By accessing and using DigiNepal, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                </p>
                                <p>
                                    We reserve the right to update or change our Terms and Conditions at any time. Your continued use of the service after we post any modifications to the Terms and Conditions on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms and Conditions.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">02</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Service Description</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>
                                    DigiNepal provides a platform for creators to list and sell digital products, including 3D models, textures, scripts, and other creative assets. We act as an intermediary between sellers and buyers and are not responsible for the quality or legality of the assets listed by third-party sellers.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">03</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">User Accounts</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {[
                                        'Provide accurate personal information.',
                                        'Maintain the security of your account.',
                                        'Keep your password confidential.',
                                        'Accept responsibility for account activity.',
                                        'Notify us of any security breaches.'
                                    ].map((item, i) => (
                                        <li key={i} className="skeuo-inset p-4 rounded-xl text-sm font-medium text-white/80 border-white/5 flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">04</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Payments and Refunds</h3>
                            </div>
                            <div className="pl-16 space-y-10 border-l-2 border-white/5">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-primary/80 uppercase tracking-widest">4.1 Pricing</h4>
                                    <p className="text-text-dim/80">
                                        All prices are listed in Nepali Rupees (NPR). We reserve the right to change prices for products at any time.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-secondary/80 uppercase tracking-widest">4.2 Refund Policy</h4>
                                    <p className="text-text-dim/80">
                                        Due to the digital nature of our products, all sales are final once the download has been initiated. Refunds may be granted at our discretion for defective assets or duplicate purchases.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">05</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Intellectual Property</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>
                                    The DigiNepal platform, including its original content, features, and functionality, is and will remain the exclusive property of DigiNepal and its licensors.
                                </p>
                                <p>
                                    Assets purchased on the platform are licensed to the buyer for specific uses as defined in the product description. Ownership of the intellectual property remains with the original creator.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="skeuo-inset w-12 h-12 rounded-xl flex items-center justify-center font-black text-primary border-primary/20 bg-primary/5">06</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Prohibited Activities</h3>
                            </div>
                            <div className="pl-16 space-y-6 text-lg text-text-dim/80 font-medium leading-relaxed border-l-2 border-white/5">
                                <p>Users are strictly prohibited from:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    {[
                                        'Using the service for any illegal purpose.',
                                        'Uploading malware or malicious code.',
                                        'Attempting to hack or bypass security.',
                                        'Scraping site data without permission.',
                                        'Unauthorized redistribution of assets.'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <CheckCircle size={18} className="text-secondary mt-1 shrink-0" />
                                            <p className="text-sm font-medium leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
