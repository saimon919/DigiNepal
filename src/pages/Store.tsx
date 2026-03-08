import { useEffect, useState } from 'react';
import { ShoppingBag, Search, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AdBanner from '../components/AdBanner';
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
        <div className="px-4 md:px-0 space-y-10 pb-10">
            {/* Store Intro */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-gray-100 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative z-10">
                    <div className="space-y-4 max-w-2xl">
                        <span className="bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase inline-block shadow-sm">
                            Digital Library
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-text-main tracking-tight leading-tight">
                            Browse All Assets
                        </h1>
                        <p className="text-text-dim text-lg leading-relaxed font-medium">
                            Discover {products.length > 0 ? `${products.length}+` : 'hundreds of'} premium digital assets — 3D models, textures, scripts, VFX, & Books — ready to drop into your projects. Every asset is carefully curated.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center gap-3 bg-bg rounded-[2rem] px-5 py-3 border border-gray-200 text-text-dim lg:w-96 shadow-sm focus-within:shadow-premium focus-within:border-primary/30 transition-all duration-300">
                        <Search size={20} className="text-primary" />
                        <input
                            type="text"
                            id="search-input"
                            name="q"
                            placeholder="Search assets by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none w-full text-text-main font-medium placeholder:text-gray-400"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-primary transition-colors">
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-gray-100">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-2xl text-sm font-black transition-all duration-300 ${activeCategory === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                : 'bg-bg text-text-dim hover:bg-secondary/20 hover:text-primary hover:scale-[1.02]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ad Banner */}
            <AdBanner slot="horizontal" />

            {/* Product Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            key={product.id}
                            className="bg-white rounded-[2.5rem] p-4 shadow-soft border border-gray-50 hover:shadow-premium transition-all duration-500 group"
                        >
                            <Link to={`/product/${product.id}`} className="aspect-square bg-bg rounded-[2rem] overflow-hidden mb-6 relative block border border-gray-50">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform-gpu"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <button
                                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl text-primary hover:bg-primary hover:text-white transition-all active:scale-90 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                                    <ShoppingBag size={20} strokeWidth={2.5} />
                                </button>
                            </Link>
                            <div className="px-2 pb-2">
                                <h3 className="font-black text-lg mb-1 truncate text-text-main pr-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <div className="flex justify-between items-center mt-3">
                                    <p className="text-[10px] bg-secondary/10 px-3 py-1.5 rounded-full font-black uppercase text-primary tracking-widest">{product.category}</p>
                                    <p className="text-xl font-display font-black text-text-main">Rs. {product.price}</p>
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
                        className="text-center py-24 text-text-dim space-y-4 bg-white rounded-[3rem] border border-gray-100 shadow-soft"
                    >
                        <div className="w-20 h-20 bg-bg rounded-3xl flex items-center justify-center mx-auto text-primary">
                            <Search size={32} />
                        </div>
                        <p className="text-3xl font-display font-black text-text-main">No products found</p>
                        <p className="text-lg font-medium max-w-md mx-auto">We couldn't find any assets matching your search criteria. Try a different category or broader keywords.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                            className="mt-4 px-6 py-3 bg-bg text-text-main font-bold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
