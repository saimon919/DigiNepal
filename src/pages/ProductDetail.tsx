import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Download, ChevronDown, Check, Terminal, ShoppingCart, Shield, X, Cpu, Globe, Zap } from 'lucide-react';
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
            <div className="skeuo-inset w-12 h-12 rounded-full flex items-center justify-center border-primary/20">
                <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
            </div>
        </div>
    );

    if (!product) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8">
            <div className="skeuo-panel p-10 text-center border-white/10 max-w-md">
                <X size={48} className="text-secondary mx-auto mb-4" />
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">ASSET_NOT_FOUND</h2>
                <p className="text-text-dim/60 font-medium mt-2">The requested module ID could not be localized on the current grid.</p>
                <Link to="/store" className="inline-block mt-8 bg-primary text-deep px-10 py-4 rounded-xl font-black text-xs tracking-[0.4em] hover:scale-105 transition-all text-tactical">RETURN_TO_STORE</Link>
            </div>
        </div>
    );

    const gallery = [product.image, ...(product.additionalImages || [])];

    const tabs: { key: Tab; label: string }[] = [
        { key: 'description', label: 'Description' },
        { key: 'features', label: 'Features' },
        { key: 'compatibility', label: 'Compatibility' },
        { key: 'license', label: 'License' },
        { key: 'faq', label: 'FAQ' },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>{product.name} | DigiNepal Premium Asset</title>
                <meta name="description" content={product.description || `Secure and download ${product.name} from the DigiNepal marketplace.`} />
            </Helmet>

            {/* Breadcrumb / Back Navigation */}
            <Link to="/store" className="skeuo-inset inline-flex items-center gap-4 px-5 py-2.5 rounded-lg text-primary/60 hover:text-primary transition-all font-black uppercase tracking-[0.4em] text-[10px] group text-tactical border-white/5">
                <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                BACK_TO_MARKET_GRID
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* LEFT SIDE: Tactical Visualization Array */}
                <div className="lg:col-span-7 sticky top-28 space-y-10">
                    <div className="skeuo-panel p-2 rounded-[2.5rem] border-white/10 relative overflow-hidden h-[45vh] min-h-[400px] lg:h-[600px] group">
                        <div className="skeuo-inset h-full w-full rounded-[2.2rem] overflow-hidden flex items-center justify-center relative bg-deep/40 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(141,242,192,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(141,242,192,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-10 pointer-events-none" />
                            
                            {/* Status Indicators */}
                            <div className="absolute top-8 left-8 flex flex-col gap-4 z-20">
                                <div className="skeuo-panel bg-deep/80 px-5 py-2 border-primary/20 rounded-lg flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#8df2c0]" />
                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary text-tactical">ASSET_VERIFIED</span>
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 z-20">
                                <div className="skeuo-panel bg-secondary/10 border-secondary/20 text-secondary px-6 py-2 rounded-lg text-[10px] font-black tracking-[0.4em] uppercase text-tactical">
                                    PREMIUM_GRADE
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={mainImage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={mainImage}
                                    alt={product.name}
                                    className="max-w-[90%] max-h-[90%] object-contain relative z-10 drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                                />
                            </AnimatePresence>

                            <div className="absolute bottom-8 right-8 z-20 skeuo-inset bg-deep/60 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all border-white/5">
                                <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.3em] text-tactical">VISUAL_UPLINK_STABLE</span>
                            </div>
                        </div>
                    </div>

                    {/* Sequential Thumbnail Buffer */}
                    <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`w-28 shrink-0 aspect-square skeuo-panel p-1 rounded-2xl transition-all duration-500 ${mainImage === img ? 'border-primary/60 scale-105 shadow-[0_0_20px_rgba(141,242,192,0.2)]' : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'}`}
                            >
                                <div className="skeuo-inset h-full w-full rounded-xl overflow-hidden">
                                    <img src={img} className="w-full h-full object-cover" alt={`Buffer ${idx}`} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: Telemetry & Acquisition Console */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-8">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="skeuo-inset bg-primary/5 px-4 py-1.5 rounded-md border-primary/20">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-3 text-tactical">
                                    <Cpu size={14} /> CORE_MODULE
                                </span>
                            </div>
                            <div className="skeuo-inset bg-secondary/5 px-4 py-1.5 rounded-md border-secondary/20">
                                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] text-tactical">
                                    {product.category}
                                </span>
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white leading-none tracking-tighter uppercase">
                            {product.name}
                        </h1>

                        <div className="skeuo-panel p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-primary/20 bg-deep/40">
                            <div className="space-y-1 text-center md:text-left">
                                <p className="text-[10px] font-black text-primary/40 tracking-[0.4em] uppercase text-tactical">Acquisition_Cost</p>
                                <div className="flex items-end gap-4 justify-center md:justify-start">
                                    <span className="text-3xl sm:text-5xl font-display font-black text-white leading-none tracking-tighter">Rs.{product.price.toLocaleString()}</span>
                                    <span className="text-xl text-text-dim/30 line-through font-black mb-1">
                                        Rs.{Math.round(product.price * 1.4).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div className="skeuo-inset px-4 py-2 rounded-lg border-secondary/20 bg-secondary/5">
                                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] text-tactical">DISCOUNT_APPLIED</span>
                            </div>
                        </div>

                        <p className="text-base text-text-dim/80 leading-relaxed font-medium border-l-4 border-primary/20 pl-8 py-2">
                            {product.description || `Tactical high-fidelity software asset optimized for production pipelines. Features advanced PBR integration and seamless deployment readiness.`}
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Terminal size={14} className="text-primary/60" />
                                    <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] text-tactical">DATA_FORMATS</p>
                                </div>
                                <p className="font-black text-sm text-white tracking-[0.2em]">BLEND, FBX, OBJ</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Shield size={14} className="text-secondary/60" />
                                    <p className="text-[10px] font-black text-secondary/60 uppercase tracking-[0.3em] text-tactical">CLEARANCE</p>
                                </div>
                                <p className="font-black text-sm text-secondary tracking-[0.2em] text-tactical">COMMERCIAL_PRO</p>
                            </div>
                        </div>

                        {/* Transaction Interface */}
                        <div className="pt-6">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full h-24 skeuo-panel bg-primary text-deep font-black tracking-[0.6em] text-sm hover:scale-[1.02] transition-all duration-500 shadow-[0_0_40px_rgba(141,242,192,0.3)] flex items-center justify-center gap-6 group rounded-[2rem] text-tactical"
                            >
                                <ShoppingCart size={24} strokeWidth={2.5} />
                                INITIATE_ACQUISITION
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
                            <div className="flex items-center gap-3 text-[10px] font-black text-text-dim/40 uppercase tracking-[0.3em] text-tactical">
                                <Download size={16} className="text-primary/40" /> INSTANT_DL_AVAIL
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-black text-text-dim/40 uppercase tracking-[0.3em] text-tactical">
                                <Globe size={16} className="text-secondary/40" /> GLOBAL_CDN_SYNC
                            </div>
                        </div>
                    </div>

                    {/* Tactical Documentation System */}
                    <div className="space-y-6 pt-12">
                        <div className="flex flex-wrap gap-3 pb-2 overflow-x-auto no-scrollbar">
                            {tabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-8 py-4 text-[10px] font-black tracking-[0.3em] uppercase transition-all rounded-xl border ${activeTab === tab.key
                                        ? 'bg-primary text-deep border-primary shadow-[0_0_20px_rgba(141,242,192,0.2)] text-tactical'
                                        : 'skeuo-inset text-text-dim/60 hover:text-white border-transparent'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="skeuo-panel p-10 min-h-[400px] relative overflow-hidden bg-deep/40 border-white/5 rounded-[2rem]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-base uppercase tracking-widest leading-[1.8] text-text-dim font-medium"
                                >
                                    {activeTab === 'description' && (
                                        <div className="space-y-8">
                                            <div className="skeuo-inset p-8 rounded-2xl border-white/5">
                                                <p className="border-l-4 border-primary/40 pl-8">
                                                    {product.description || `This high-fidelity digital module has been engineered according to industrial PBR (Physically Based Rendering) standards. The architecture focuses on performance efficiency and visual fidelity across all major game engines and visualization platforms.`}
                                                </p>
                                            </div>
                                            <p className="px-8 text-text-dim/60">
                                                All meshes undergo rigorous topology validation. Non-overlapping UV maps ensure optimal lightmap density and texture resolution utilization. Verified for production in high-end pipelines.
                                            </p>
                                        </div>
                                    )}

                                    {activeTab === 'features' && (
                                        <ul className="space-y-6 px-4">
                                            {[
                                                '4K NEURAL PBR TEXTURE ARRAYS',
                                                'CLEAN TOPOLOGY: ENGINE_READY',
                                                'NON-OVERLAPPING UV PIPELINE',
                                                'MODULAR 1M GRID SNAP ALIGNMENT',
                                                'MULTI_LOD DYNAMIC SCALING',
                                                'UNITY & UNREAL PRESET MODULES',
                                            ].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-6 text-white group hover:text-primary transition-colors">
                                                    <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#8df2c0] shrink-0" />
                                                    <span className="font-black text-sm tracking-[0.2em]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {activeTab === 'compatibility' && (
                                        <div className="grid grid-cols-1 gap-6">
                                            {compatibilityTools.map((tool) => (
                                                <div
                                                    key={tool.name}
                                                    className={`skeuo-panel p-6 flex items-center justify-between rounded-2xl border ${tool.supported ? 'border-primary/20 bg-primary/5' : 'border-white/5 bg-deep/20'}`}
                                                >
                                                    <div className="space-y-1">
                                                        <p className="font-black text-white text-xs tracking-[0.3em] uppercase">{tool.name}</p>
                                                        <p className="text-[10px] font-black text-text-dim/40 tracking-[0.2em]">{tool.version}</p>
                                                    </div>
                                                    <div className={`px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-[0.3em] ${tool.supported ? 'bg-primary text-deep text-tactical' : 'skeuo-inset text-text-dim/40 border-white/10'}`}>
                                                        {tool.supported ? 'SUPPORTED' : 'LIMITED'}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'license' && (
                                        <div className="space-y-10">
                                            <div className="skeuo-panel p-10 space-y-10 bg-deep/40 border-white/10 rounded-[2rem]">
                                                <div className="flex items-center gap-4">
                                                    <Zap size={24} className="text-primary" />
                                                    <h3 className="font-black text-primary text-lg tracking-[0.4em] uppercase text-tactical">LICENSE_PROTOCOL::RF_COMMERCIAL</h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="skeuo-inset p-8 rounded-2xl border-primary/20 space-y-6 bg-primary/5">
                                                        <h4 className="font-black text-primary text-[10px] tracking-[0.4em] uppercase flex items-center gap-3 text-tactical">
                                                            <Check size={16} /> AUTHORIZED_ACTION
                                                        </h4>
                                                        <ul className="space-y-4 text-[10px] text-text-dim/80 font-black tracking-widest">
                                                            <li>+ COMMERCIAL_USE: UNLIMITED</li>
                                                            <li>+ GLOBAL_PROJECT_DEPLOY</li>
                                                            <li>+ COMPONENT_MODIFICATION</li>
                                                        </ul>
                                                    </div>
                                                    <div className="skeuo-inset p-8 rounded-2xl border-secondary/20 space-y-6 bg-secondary/5">
                                                        <h4 className="font-black text-secondary text-[10px] tracking-[0.4em] uppercase flex items-center gap-3 text-tactical">
                                                            <X size={16} /> RESTRICTED_ACTION
                                                        </h4>
                                                        <ul className="space-y-4 text-[10px] text-text-dim/80 font-black tracking-widest">
                                                            <li>- RAW_DATA_REDISTRIBUTION</li>
                                                            <li>- COPYRIGHT_CLAIM_ATTEMPT</li>
                                                            <li>- UNAUTHORIZED_SITELINK</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'faq' && (
                                        <div className="space-y-4">
                                            {faqs.map((faq, i) => (
                                                <div key={i} className="skeuo-panel border-white/5 bg-deep/20 rounded-2xl overflow-hidden">
                                                    <button
                                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                        className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-all"
                                                    >
                                                        <span className="font-black text-white text-xs pr-8 tracking-[0.2em] uppercase">{faq.q}</span>
                                                        <div className="skeuo-inset p-2 rounded-lg">
                                                            <ChevronDown
                                                                size={18}
                                                                className={`text-primary shrink-0 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`}
                                                            />
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {openFaq === i && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                                className="overflow-hidden border-t border-white/5"
                                                            >
                                                                <div className="p-10 text-text-dim/80 text-sm font-medium leading-relaxed italic border-l-4 border-primary/20 ml-8 my-4">
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

