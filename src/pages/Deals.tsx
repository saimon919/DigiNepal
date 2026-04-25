import { ExternalLink, ShieldCheck, Zap, TrendingUp, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { affiliateProducts } from '../data/affiliateProducts';

export default function Deals() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Premium Tech Deals | DigiNepal Tactical Hardware Grid</title>
                <meta name="description" content="Curated high-performance gear and digital tools optimized for the DigiNepal community. Transform your setup with our hand-picked tactical selections." />
            </Helmet>

            {/* Tactical Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-primary">
                        <TrendingUp size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">EXTERNAL_GEAR_UPLINK :: VERIFIED</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">PRIME_DEALS</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-primary/20 pl-8">
                        Our intelligence team has scanned the global grid for the highest efficiency hardware. Curated specifically for the DigiNepal elite.
                    </p>
                </div>
            </div>

            {/* Deals Grid */}
            <div className="max-w-4xl mx-auto space-y-24">
                {affiliateProducts.map((product) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        key={product.id}
                        className="skeuo-panel p-2 rounded-[3rem] border-white/10 bg-deep/40 overflow-hidden"
                    >
                        <div className="bg-white rounded-[2.8rem] p-8 md:p-12 text-gray-900 font-sans">
                            {/* Product Header */}
                            <div className="text-center space-y-6 mb-10">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                    {product.headline}
                                </h2>
                                
                                <a 
                                    href={product.affiliateLink} 
                                    target="_blank" 
                                    rel="nofollow sponsored"
                                    className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 px-10 rounded-full transition-transform hover:scale-105 shadow-xl shadow-yellow-400/20"
                                >
                                    <Zap size={20} fill="currentColor" /> 🔥 CHECK LATEST PRICE ON AMAZON
                                </a>
                            </div>

                            {/* Image Visual */}
                            <div className="bg-gray-100 rounded-[2rem] overflow-hidden mb-12 aspect-[16/9] flex items-center justify-center border border-gray-200">
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="max-h-full max-w-full object-contain p-8"
                                />
                            </div>

                            {/* Product Narrative */}
                            <div className="space-y-10">
                                <p className="text-xl md:text-2xl text-gray-700 italic border-l-8 border-yellow-400 pl-8 font-medium leading-relaxed">
                                    "{product.hook}"
                                </p>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">Why It’s a Game Changer:</h3>
                                    <ul className="space-y-4">
                                        {product.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-4 text-lg text-gray-600">
                                                <div className="mt-1.5 flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                                    <ShieldCheck size={14} strokeWidth={3} />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Secondary CTA */}
                                <a 
                                    href={product.affiliateLink} 
                                    target="_blank" 
                                    rel="nofollow sponsored"
                                    className="block w-full bg-black hover:bg-gray-800 text-white text-center font-black py-6 rounded-2xl transition-colors tracking-widest uppercase text-sm"
                                >
                                    ⚡ VIEW TODAY’S DEAL
                                </a>

                                {/* Pros/Cons */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                                        <h4 className="text-xs font-black text-green-600 uppercase tracking-[0.2em] mb-3">Pros</h4>
                                        <p className="text-green-900 font-bold">{product.pros}</p>
                                    </div>
                                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                                        <h4 className="text-xs font-black text-red-600 uppercase tracking-[0.2em] mb-3">Cons</h4>
                                        <p className="text-red-900 font-bold">{product.cons}</p>
                                    </div>
                                </div>

                                <p className="text-center text-gray-500 font-bold">
                                    <span className="text-gray-400">Ideal For:</span> {product.idealUser}
                                </p>

                                {/* Final CTA */}
                                <a 
                                    href={product.affiliateLink} 
                                    target="_blank" 
                                    rel="nofollow sponsored"
                                    className="flex items-center justify-center gap-2 text-xl font-black text-blue-600 hover:text-blue-700 underline underline-offset-8 transition-colors"
                                >
                                    👉 SEE AVAILABILITY & REVIEWS <ExternalLink size={20} />
                                </a>

                                <div className="pt-10 border-t border-gray-100 flex items-center justify-center gap-3 text-gray-400">
                                    <Info size={16} />
                                    <p className="text-xs font-bold italic tracking-tight">
                                        {product.disclosure}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
