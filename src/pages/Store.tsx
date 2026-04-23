import { useEffect, useState } from 'react';
import { ShoppingBag, Search, X, Database, Zap } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    download_url?: string;
}

const categories = ['All', '3D Models', 'Textures', 'Scripts', 'Books PDF', 'Audio', 'VFX'];

export default function Store() {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const addToCart = useCartStore(state => state.addToCart);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Failed to fetch products", error);
            } else {
                setProducts(data || []);
            }
        };

        fetchProducts();
    }, []);

    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === 'All' ? true : p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="px-4 md:px-0 space-y-10 pb-10 relative font-mono">
            <Helmet>
                <title>DigiNepal Store - 3D Models, Textures, Scripts & Assets</title>
                <meta name="description" content="Browse our catalog of premium 3D models, seamless PBR textures, game ready scripts, and high-fidelity environment assets." />
                <link rel="canonical" href="https://diginepal.vercel.app/store" />
            </Helmet>
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Store Intro */}
            <div className="glass-panel hud-border p-8 md:p-12 relative overflow-hidden group">
                <div className="scanline"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative z-10 w-full">
                    <div className="space-y-4 max-w-2xl flex-1">
                        <div className="flex items-center gap-3 text-secondary mb-2">
                            <Database size={16} className="animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black">ASSET_REPOSITORY_ONLINE</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-widest uppercase">
                            Digital_Armory
                        </h1>
                        <p className="text-text-dim text-sm leading-relaxed font-mono">
                            Accessing {products.length > 0 ? `${products.length}+` : 'verified'} premium digital assets. 
                            Deploying 3D models, textures, scripts, and tactical add-ons. All files cleared for immediate download.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 lg:max-w-md w-full relative">
                        <div className="absolute -top-3 left-4 bg-bg px-2 text-[10px] text-primary uppercase tracking-widest font-bold z-10">Search_Query</div>
                        <div className="flex items-center gap-3 bg-black/40 rounded-none border border-primary/30 px-5 py-4 focus-within:border-primary focus-within:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300 relative group-hover:border-primary/50">
                            <Search size={18} className="text-primary animate-pulse" />
                            <input
                                type="text"
                                id="search-input"
                                name="q"
                                placeholder="ENTER ASSET NAME..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none w-full text-white font-mono placeholder:text-text-dim/50 uppercase tracking-widest text-sm"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-secondary hover:text-white transition-colors">
                                    <X size={18} />
                                </button>
                            )}
                            
                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 relative z-10 pt-8 mt-6 border-t border-white/5">
                    <div className="w-full text-xs text-text-dim uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={14} className="text-secondary" />
                        Sort_Protocols:
                    </div>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-primary/20 text-primary border-primary shadow-[0_0_10px_rgba(0,255,0,0.2)]'
                                : 'bg-black/40 text-text-dim border-white/10 hover:border-primary/50 hover:text-white'
                                }`}
                        >
                            [{cat}]
                        </button>
                    ))}
                </div>
            </div>

            {/* Ad Banner */}
            <AdBanner slot="horizontal" />

            {/* Product Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            key={product.id}
                            className="glass-panel p-4 group relative hover:border-primary/50 transition-all duration-500"
                        >
                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <Link to={`/product/${product.id}`} className="aspect-square bg-black/50 overflow-hidden mb-6 relative block border border-white/5 group-hover:border-primary/30 transition-colors">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform-gpu opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="bg-black/80 text-[9px] uppercase tracking-widest text-primary px-2 py-1 border border-primary/30">
                                        {product.category}
                                    </span>
                                </div>

                                <button
                                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                    className="absolute bottom-4 right-4 bg-primary/20 backdrop-blur-md p-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all active:scale-95 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                                    <ShoppingBag size={18} strokeWidth={2} />
                                </button>
                            </Link>

                            <div className="px-2 pb-2">
                                <h3 className="font-black text-sm mb-2 truncate text-white uppercase tracking-widest group-hover:text-primary transition-colors">{product.name}</h3>
                                <div className="flex justify-between items-center mt-3 border-t border-white/10 pt-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                                        <span className="text-[10px] text-text-dim uppercase tracking-widest">Verified</span>
                                    </div>
                                    <p className="text-primary font-bold tracking-widest text-sm">Rs.{product.price}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-24 text-text-dim space-y-6 glass-panel hud-border"
                    >
                        <div className="w-20 h-20 bg-black/40 rounded-none border border-primary/30 flex items-center justify-center mx-auto text-primary relative">
                            <Search size={32} />
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-2xl font-black text-white uppercase tracking-widest">NO_ASSETS_FOUND</p>
                            <p className="text-sm font-mono max-w-md mx-auto">Database query returned 0 results. Adjust your parameters and try again.</p>
                        </div>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                            className="mt-6 px-6 py-3 bg-primary/20 border border-primary text-primary font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,0,0.2)]"
                        >
                            RESET_QUERY
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
