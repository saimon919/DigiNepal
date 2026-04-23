import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Download, ChevronDown, Check, Terminal, ShoppingCart, Shield, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const compatibilityTools = [
    { name: 'Unity', version: '2021+', supported: true },
    { name: 'Unreal Engine', version: 'UE5+', supported: true },
    { name: 'Blender', version: '3.x+', supported: true },
    { name: 'Godot', version: '4.x', supported: true },
    { name: 'Cinema 4D', version: 'R25+', supported: false },
];

const faqs = [
    {
        q: 'What file formats are included?',
        a: 'This asset pack includes FBX, OBJ, and BLEND formats. Textures are provided in PNG format at 2K and 4K resolutions, ensuring compatibility with all major 3D software.',
    },
    {
        q: 'Can I use this in a commercial game?',
        a: 'Yes. All DigiNepal assets come with a Royalty-Free Commercial License. You may use this asset in any personal or commercial project including games, films, apps, and architectural visualizations — with no royalty payments.',
    },
    {
        q: 'Can I resell or redistribute the files?',
        a: 'No. The license grants you the right to use the asset in your projects, but you may not resell, redistribute, or sublicense the raw asset files. Your finished game or project is fine; selling the asset itself is not permitted.',
    },
    {
        q: 'Is there customer support if I have trouble importing?',
        a: 'Yes! DigiNepal offers 24/7 support via email and our community Discord. The creator of this asset also provides documentation on how to import and configure the asset for each supported platform.',
    },
    {
        q: 'What happens if the file doesn\'t work?',
        a: 'If you experience any technical issues with a purchased asset, please contact us within 7 days of purchase. If the file is genuinely defective, we will issue a replacement or a full refund — no questions asked.',
    },
];

type Tab = 'description' | 'features' | 'compatibility' | 'license' | 'faq';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [mainImage, setMainImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<Tab>('description');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const addToCart = useCartStore(state => state.addToCart);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;

            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Detail Fetch Error:", error);
                setProduct(null);
            } else {
                setProduct(data);
                setMainImage(data.image);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    if (loading) return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
    );

    if (!product) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold text-text-dim">Product Not Found</h2>
            <Link to="/store" className="bg-primary text-white px-6 py-2 rounded-full">Return to Store</Link>
        </div>
    );

    const gallery = [product.image, ...(product.additionalImages || [])];

    const tabs: { key: Tab; label: string }[] = [
        { key: 'description', label: 'Description' },
        { key: 'features', label: 'Features' },
        { key: 'compatibility', label: 'Compatibility' },
        { key: 'license', label: 'License' },
        { key: 'faq', label: 'FAQ' },
    ];    return (
        <div className="max-w-7xl mx-auto py-10 px-4 space-y-12 pb-32">
            <Helmet>
                <title>{product.name} | DigiNepal Premium Asset</title>
                <meta name="description" content={product.description || `Secure and download ${product.name} from the DigiNepal marketplace.`} />
            </Helmet>

            <div className="scanline" />

            {/* Breadcrumb / Back Navigation */}
            <Link to="/store" className="inline-flex items-center gap-3 text-text-dim hover:text-primary transition-all mb-4 font-black uppercase tracking-[0.3em] text-[10px] group">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                RETURN_TO_MARKET_NODE
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* LEFT SIDE: Tactical Intelligence Gallery */}
                <div className="lg:col-span-7 sticky top-28 space-y-8">
                    <div className="glass-panel hud-border p-4 md:p-8 flex items-center justify-center relative overflow-hidden h-[45vh] min-h-[400px] lg:h-[550px] group">
                        <div className="scanline" />
                        
                        {/* Status Indicators */}
                        <div className="absolute top-6 left-6 flex flex-col gap-3 z-20">
                            <span className="bg-primary/5 backdrop-blur-md px-4 py-1.5 border border-primary/20 text-[9px] font-black tracking-widest uppercase text-primary flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /> ASSET_VERIFIED
                            </span>
                        </div>

                        <div className="absolute top-6 right-6 z-20">
                            <div className="bg-secondary/10 border border-secondary/30 text-secondary px-5 py-2 text-[9px] font-black tracking-[0.3em]">
                                HIGH_DEMAND
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={mainImage}
                                initial={{ opacity: 0, scale: 0.9, filter: "brightness(0)" }}
                                animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "brightness(0)" }}
                                transition={{ duration: 0.6 }}
                                src={mainImage}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            />
                        </AnimatePresence>

                        <div className="absolute bottom-6 right-6 z-20 border border-white/5 bg-black/40 p-4 opacity-0 group-hover:opacity-100 transition-all">
                            <span className="text-[8px] font-mono text-text-dim uppercase tracking-widest">ZOOM_PROTOCOL: ACTIVE</span>
                        </div>
                    </div>

                    {/* Sequential Thumbnail Buffer */}
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`w-24 shrink-0 aspect-[4/3] bg-black/60 border-2 transition-all duration-500 overflow-hidden ${mainImage === img ? 'border-primary shadow-glow scale-105' : 'border-white/5 opacity-40 hover:opacity-100 hover:border-white/20'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Buffer ${idx}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: Telemetry & Acquisition */}
                <div className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="bg-white/5 text-primary border border-primary/20 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                <Terminal size={10} /> CORE_MODULE
                            </span>
                            <span className="bg-white/5 text-text-dim border border-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight tracking-[0.1em] uppercase">
                            {product.name}
                        </h1>

                        <div className="flex items-end gap-6 bg-black/40 p-6 border-l-2 border-primary">
                            <div className="space-y-1">
                                <p className="text-[9px] font-black text-primary tracking-widest uppercase">Acquisition_Cost</p>
                                <span className="text-4xl font-display font-black text-white">Rs. {product.price.toLocaleString()}</span>
                            </div>
                            <span className="text-lg text-text-dim line-through opacity-30 font-bold mb-1">
                                Rs. {Math.round(product.price * 1.4).toLocaleString()}
                            </span>
                        </div>

                        <p className="text-sm text-text-dim leading-relaxed font-mono uppercase tracking-widest border-b border-white/5 pb-8">
                            {product.description || `Tactical high-fidelity software asset optimized for production pipelines. Features advanced PBR integration and seamless deployment readiness.`}
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-6 border-b border-white/5">
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-primary uppercase tracking-widest">DATA_FORMATS</p>
                                <p className="font-bold text-xs text-white tracking-widest font-mono">BLEND, FBX, OBJ</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-primary uppercase tracking-widest">CLEARANCE</p>
                                <p className="font-bold text-xs text-white tracking-widest font-mono text-secondary">ROYALTY_FREE_COM</p>
                            </div>
                        </div>

                        {/* Transaction Interface */}
                        <div className="flex gap-4 pt-4 lg:relative">
                            <button
                                onClick={() => addToCart(product)}
                                className="h-20 flex-1 bg-primary text-black font-black tracking-[0.5em] text-sm hover:bg-white transition-all duration-300 shadow-glow flex items-center justify-center gap-4 group"
                            >
                                <ShoppingCart size={20} />
                                INITIATE_ACQUISITION
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 text-[9px] font-black text-text-dim uppercase tracking-[0.2em]">
                                <Download size={14} className="text-primary" /> INSTANT_DL
                            </div>
                            <div className="flex items-center gap-3 text-[9px] font-black text-text-dim uppercase tracking-[0.2em]">
                                <Shield size={14} className="text-secondary" /> DATA_SECURE
                            </div>
                        </div>
                    </div>

                    {/* Tactical Documentation Tabs */}
                    <div className="space-y-4 pt-10">
                        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-0 overflow-x-auto no-scrollbar">
                            {tabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all -mb-px border-b-2 ${activeTab === tab.key
                                        ? 'border-primary text-primary bg-primary/5'
                                        : 'border-transparent text-text-dim hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="glass-panel p-8 min-h-[350px] relative overflow-hidden bg-black/20">
                            <div className="scanline" />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="font-mono text-xs uppercase tracking-widest leading-loose text-text-dim"
                                >
                                    {activeTab === 'description' && (
                                        <div className="space-y-6">
                                            <p className="border-l-2 border-primary/20 pl-6">
                                                {product.description || `This high-fidelity digital module has been engineered according to industrial PBR (Physically Based Rendering) standards. The architecture focuses on performance efficiency and visual fidelity across all major game engines and visualization platforms.`}
                                            </p>
                                            <p className="border-l-2 border-white/5 pl-6">
                                                All meshes undergo rigorous topology validation. Non-overlapping UV maps ensure optimal lightmap density and texture resolution utilization.
                                            </p>
                                        </div>
                                    )}

                                    {activeTab === 'features' && (
                                        <ul className="space-y-4">
                                            {[
                                                '4K NEURAL PBR TEXTURES',
                                                'CLEAN TOPOLOGY: ENGINE_READY',
                                                'NON-OVERLAPPING UV PIPELINE',
                                                'MODULAR 1M GRID SNAP ALIGNMENT',
                                                'MULTI_LOD DYNAMIC SCALING',
                                                'UNITY & UNREAL PRESET MATERIALS',
                                            ].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-4 text-white hover:text-primary transition-colors">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-none shadow-glow shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {activeTab === 'compatibility' && (
                                        <div className="grid grid-cols-1 gap-4">
                                            {compatibilityTools.map((tool) => (
                                                <div
                                                    key={tool.name}
                                                    className={`flex items-center justify-between p-5 border ${tool.supported ? 'border-primary/20 bg-primary/5' : 'border-white/5 bg-black/40'}`}
                                                >
                                                    <div>
                                                        <p className="font-black text-white text-[10px] tracking-widest">{tool.name}::CORE</p>
                                                        <p className="text-[9px] font-bold text-text-dim mt-1">{tool.version}</p>
                                                    </div>
                                                    <span className={`px-4 py-1.5 text-[8px] font-black uppercase tracking-widest ${tool.supported ? 'bg-primary text-black' : 'bg-white/5 text-text-dim border border-white/10'}`}>
                                                        {tool.supported ? 'AUTHORIZED' : 'UNKNOWN'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'license' && (
                                        <div className="space-y-6">
                                            <div className="border border-white/5 p-6 space-y-6 bg-black/40">
                                                <h3 className="font-black text-primary text-sm tracking-[0.3em]">LICENSE_PROTOCOL::ROYALTY_FREE</h3>
                                                <div className="space-y-4">
                                                    <div className="bg-primary/5 p-4 border border-primary/20 space-y-4">
                                                        <h4 className="font-black text-primary text-[10px] tracking-widest uppercase flex items-center gap-3">
                                                            <Check size={14} /> AUTHORIZED_ACTION
                                                        </h4>
                                                        <ul className="space-y-2 text-[9px] text-text-dim">
                                                            <li>:: COMMERCIAL_USE: UNLIMITED</li>
                                                            <li>:: GLOBAL_REPOST_AUTH</li>
                                                            <li>:: MODIFICATION: ENABLED</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-red-500/5 p-4 border border-red-500/20 space-y-4">
                                                        <h4 className="font-black text-red-500 text-[10px] tracking-widest uppercase flex items-center gap-3">
                                                            <X size={14} /> RESTRICTED_ACTION
                                                        </h4>
                                                        <ul className="space-y-2 text-[9px] text-text-dim">
                                                            <li>:: RAW_FILE_REDISTRIBUTION</li>
                                                            <li>:: COPYRIGHT_CLAIM_ATTEMPT</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'faq' && (
                                        <div className="space-y-3">
                                            {faqs.map((faq, i) => (
                                                <div key={i} className="border border-white/5 bg-black/40 overflow-hidden">
                                                    <button
                                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-all"
                                                    >
                                                        <span className="font-black text-white text-[10px] pr-4 tracking-widest">{faq.q}</span>
                                                        <ChevronDown
                                                            size={16}
                                                            className={`text-primary shrink-0 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`}
                                                        />
                                                    </button>
                                                    <AnimatePresence>
                                                        {openFaq === i && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden border-t border-white/5"
                                                            >
                                                                <div className="p-6 text-text-dim text-[10px] font-mono leading-loose tracking-widest">
                                                                    {faq.a}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
