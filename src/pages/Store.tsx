import { useEffect, useState } from 'react';
import { ShoppingBag, Search, X, Database, Filter, Activity, Cpu, ArrowRight } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Store | DigiNepal Tactical Asset Repository</title>
                <meta name="description" content="Browse our catalog of premium 3D models, seamless PBR textures, game ready scripts, and high-fidelity environment assets." />
                <link rel="canonical" href="https://diginepal.vercel.app/store" />
            </Helmet>

            {/* Tactical Store Header */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Database size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">ASSET_REPOSITORY_v4.0 :: ACTIVE</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">DIGITAL_ARMORY</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        Deploying premium digital resources for game development, neural visualization, and tactical software engineering.
                    </p>
                </div>
                
                {/* Search Console */}
                <div className="w-full lg:max-w-md space-y-4">
                    <div className="flex items-center gap-2 mb-2 text-primary/40">
                        <Search size={14} />
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-tactical">SCAN_ARRAY_FOR_MATCHES</span>
                    </div>
                    <div className="skeuo-inset flex items-center gap-4 rounded-2xl px-6 h-16 bg-deep/40 border-white/5 focus-within:border-primary/30 transition-all">
                        <Search size={20} className="text-primary/60" />
                        <input
                            type="text"
                            placeholder="INITIALIZE_QUERY..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none w-full text-white font-black uppercase tracking-widest text-sm placeholder:text-white/10"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="text-primary hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Ad Banner (Top) */}
            <div className="skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="lg:w-64 shrink-0 space-y-10">
                    <div className="skeuo-panel p-8 rounded-[2.5rem] bg-deep/40 border-white/5">
                        <div className="flex items-center gap-3 mb-8 text-secondary">
                            <Filter size={18} />
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-tactical">SORT_PROTOCOLS</h3>
                        </div>
                        <div className="space-y-3">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all group ${activeCategory === cat
                                        ? 'skeuo-panel bg-primary text-deep text-tactical'
                                        : 'skeuo-inset text-text-dim/40 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {cat}
                                    <ArrowRight size={14} className={`${activeCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="skeuo-inset p-8 rounded-[2.5rem] border-white/5 bg-deep/20 space-y-6">
                        <div className="flex items-center gap-3 text-primary/40">
                            <Cpu size={18} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-tactical">GRID_METRICS</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                <span className="text-text-dim/40">LATENCY</span>
                                <span className="text-primary">0.04ms</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-primary" />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Store Grid */}
                <div className="flex-1 space-y-12">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    key={product.id}
                                    className="skeuo-panel p-1 rounded-[3rem] border-white/5 bg-deep/40 group overflow-hidden"
                                >
                                    <div className="bg-deep/60 backdrop-blur-xl rounded-[2.8rem] p-6 space-y-8 flex flex-col h-full">
                                        <Link to={`/product/${product.id}`} className="skeuo-inset aspect-square rounded-2xl overflow-hidden relative block border-white/5 group-hover:border-primary/20 transition-all">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            
                                            <div className="absolute top-4 left-4 skeuo-panel bg-deep/80 backdrop-blur-md px-3 py-1 rounded-lg border-white/10">
                                                <span className="text-[9px] uppercase tracking-widest text-primary font-black text-tactical">
                                                    {product.category}
                                                </span>
                                            </div>

                                            <button
                                                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                                className="absolute bottom-6 right-6 skeuo-panel bg-primary p-4 rounded-xl text-deep shadow-[0_0_30px_rgba(141,242,192,0.4)] translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 active:scale-90"
                                            >
                                                <ShoppingBag size={22} strokeWidth={2.5} />
                                            </button>
                                        </Link>

                                        <div className="space-y-6 flex-1 flex flex-col">
                                            <h3 className="font-black text-xl text-white tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                                            <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-auto">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#8df2c0] animate-pulse"></div>
                                                    <span className="text-[9px] text-text-dim/40 uppercase tracking-[0.4em] font-black text-tactical">VERIFIED_DATA</span>
                                                </div>
                                                <p className="text-white font-black tracking-tighter text-2xl">Rs. {product.price.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-40 space-y-10 skeuo-inset rounded-[4rem] border-white/5 bg-deep/20">
                            <div className="skeuo-inset w-32 h-32 rounded-full flex items-center justify-center mx-auto border-white/5 bg-deep/40 relative">
                                <Search size={48} className="text-white/10" />
                                <div className="absolute inset-0 rounded-full border border-secondary/20 animate-ping" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-4xl font-display font-black text-white tracking-tighter uppercase">DATABASE_MISMATCH</h3>
                                <p className="text-lg font-medium text-text-dim/40 uppercase tracking-widest italic max-w-md mx-auto">Query returned zero valid data packets. Reset search parameters.</p>
                            </div>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="skeuo-panel bg-primary text-deep px-12 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.3)]"
                            >
                                CLEAR_FILTERS
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Ad Banner (Bottom) */}
            <div className="skeuo-inset p-4 rounded-[2rem] border-white/5 bg-deep/20">
                <AdBanner slot="horizontal" />
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-12 text-center">
                <div className="flex items-center justify-center gap-6 text-text-dim/20">
                    <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-white/10" />
                    <Activity size={24} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-tactical">END_OF_DEPLOYMENT_ARRAY</span>
                    <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    );
}
