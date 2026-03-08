import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Download, Zap, ChevronDown, Check } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { supabase } from '../lib/supabase';
import AdBanner from '../components/AdBanner';
import { motion, AnimatePresence } from 'framer-motion';

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
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto py-12 px-4 space-y-8 pb-32"
        >
            {/* Breadcrumb / Back */}
            <Link to="/store" className="inline-flex items-center gap-2 text-text-dim hover:text-primary transition-colors mb-4 font-bold uppercase tracking-widest text-xs">
                <ChevronLeft size={16} />
                Back to Library
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* LEFT SIDE: Sticky Interactive Gallery */}
                <div className="lg:col-span-7 sticky top-28 space-y-6">
                    {/* Main Image Container */}
                    <div className="bg-bg/50 backdrop-blur-3xl rounded-[3rem] p-4 md:p-12 border border-gray-100/50 flex items-center justify-center relative overflow-hidden h-[50vh] min-h-[400px] lg:h-[600px] shadow-soft group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-white/80 to-transparent pointer-events-none" />

                        <div className="absolute top-8 left-8 flex flex-col gap-3 z-20">
                            <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border border-white flex items-center gap-2 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> High Quality
                            </span>
                        </div>

                        <div className="absolute top-8 right-8 z-20">
                            <div className="bg-accent text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest shadow-xl shadow-accent/20">
                                HOT
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={mainImage}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.4 }}
                                src={mainImage}
                                alt={product.name}
                                className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl"
                            />
                        </AnimatePresence>

                        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-white/90 backdrop-blur-md border border-white/50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-primary">
                                <span className="text-[10px] font-black">ZOOM</span>
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
                        {gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`w-24 shrink-0 aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img ? 'border-primary ring-4 ring-primary/20 scale-105' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-95 bg-bg'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: Info, Pricing & Tabs */}
                <div className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                                <Check size={12} strokeWidth={3} /> Curated Asset
                            </span>
                            <span className="bg-gray-100 text-text-dim px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-main leading-[1.1] tracking-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-end gap-4">
                            <span className="text-4xl font-display font-black text-primary">Rs. {product.price}</span>
                            <span className="text-xl text-text-dim line-through opacity-50 font-bold mb-1">
                                Rs. {Math.round(product.price * 1.5)}
                            </span>
                        </div>

                        <p className="text-lg text-text-dim leading-relaxed font-medium">
                            {product.description || `A premium, professionally crafted digital asset pack, meticulously designed for game developers, 3D artists, and interactive media creators.`}
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                            <div className="space-y-1.5">
                                <p className="text-[10px] font-black text-text-dim uppercase tracking-widest">Included Formats</p>
                                <p className="font-bold text-sm">BLEND, FBX, OBJ</p>
                            </div>
                            <div className="space-y-1.5">
                                <p className="text-[10px] font-black text-text-dim uppercase tracking-widest">License Type</p>
                                <p className="font-bold text-sm">Commercial / Royalty-Free</p>
                            </div>
                        </div>

                        {/* Sticky Buy Box (Mobile) / Standard (Desktop) */}
                        <div className="flex gap-4 fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-200 z-50 lg:relative lg:bg-transparent lg:border-none lg:p-0 lg:z-auto">
                            <button className="h-16 aspect-square bg-bg text-text-main rounded-2xl font-black text-sm hover:bg-gray-200 transition-all active:scale-[0.98] shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                                FAV
                            </button>
                            <button
                                onClick={() => addToCart(product)}
                                className="h-16 flex-1 bg-text-main text-white rounded-2xl font-black tracking-wide text-lg hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-black/10"
                            >
                                ADD TO CART
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-dim uppercase tracking-widest">
                                <Download size={14} className="text-green-500" /> Instant Download
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-dim uppercase tracking-widest">
                                <Zap size={14} className="text-accent" /> 24/7 Support
                            </div>
                        </div>
                    </div>

                    {/* AdBanner in Sidebar */}
                    <div className="py-4">
                        <AdBanner slot="in-article" />
                    </div>

                    {/* Rich Content Tabs */}
                    <div className="space-y-6 pt-4" id="product-details">
                        {/* Tab Headers */}
                        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-0">
                            {tabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-5 py-3 text-sm font-black transition-all -mb-px border-b-2 ${activeTab === tab.key
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-text-dim hover:text-text-main hover:border-gray-200'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content with AnimatePresence */}
                        <div className="bg-bg/30 rounded-[2rem] p-6 md:p-8 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === 'description' && (
                                        <div className="space-y-6">
                                            <div className="space-y-4 text-text-main leading-relaxed font-medium">
                                                <p>
                                                    {product.description || `This is a premium, studio-quality digital asset pack designed for professional game developers, 3D artists, and interactive experience creators. Every element has been crafted with meticulous attention to detail, following Physically Based Rendering (PBR) standards to ensure realistic and visually stunning results across all supported rendering environments.`}
                                                </p>
                                                <p>
                                                    This pack is the result of extensive research into real-world references and modern game design trends. All meshes feature clean topology with proper flow for deformation (where applicable), and all UV maps are non-overlapping with efficient texture space utilization. The included PBR textures are provided at 4K resolution, with downscaled 2K and 1K versions also included for mobile or performance-sensitive projects.
                                                </p>
                                                <p>
                                                    Whether you are building an open-world game, a first-person shooter, an architectural visualization, or a cinematic sequence, this asset pack provides the visual foundation you need. The modular design philosophy applied to this pack means components snap together perfectly on a 1-meter grid, enabling rapid scene construction without gaps or misalignments.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'features' && (
                                        <div className="space-y-6">
                                            <ul className="grid grid-cols-1 gap-4">
                                                {[
                                                    'PBR textures at 4K resolution (Albedo, Normal, Roughness, Metallic, AO)',
                                                    'Clean, optimized mesh topology — game-ready polygon counts',
                                                    'Non-overlapping UV maps with efficient texture space',
                                                    'Modular components — snap together on a 1m grid',
                                                    'FBX, OBJ, and BLEND formats included',
                                                    'Multiple LOD levels for dynamic performance scaling',
                                                    'Pre-configured materials for Unity (URP/HDRP) and Unreal Engine (UE5)',
                                                    'Commercial license included — use in unlimited personal and commercial projects',
                                                ].map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-text-main font-medium">
                                                        <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-px">
                                                            <Check size={14} strokeWidth={3} />
                                                        </div>
                                                        <span className="leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'compatibility' && (
                                        <div className="space-y-6">
                                            <p className="text-text-main font-medium leading-relaxed">
                                                This asset has been tested and verified to work correctly with the following platforms and software versions.
                                            </p>
                                            <div className="grid grid-cols-1 gap-3">
                                                {compatibilityTools.map((tool) => (
                                                    <div
                                                        key={tool.name}
                                                        className={`flex items-center justify-between p-4 rounded-2xl border ${tool.supported ? 'border-primary/20 bg-primary/5' : 'border-gray-200 bg-white'
                                                            }`}
                                                    >
                                                        <div>
                                                            <p className="font-black text-text-main">{tool.name}</p>
                                                            <p className="text-xs font-bold text-text-dim mt-0.5">{tool.version}</p>
                                                        </div>
                                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${tool.supported ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-text-dim'
                                                            }`}>
                                                            {tool.supported ? 'Supported' : 'Untested'}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'license' && (
                                        <div className="space-y-6">
                                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
                                                <h3 className="font-display font-black text-text-main text-2xl">Royalty-Free Commercial License</h3>
                                                <p className="text-text-main font-medium leading-relaxed">
                                                    Upon purchase, you are granted a non-exclusive, perpetual, worldwide license to use this digital asset in personal and commercial projects. This includes games, applications, films, visualizations, and any other interactive or non-interactive media.
                                                </p>
                                                <div className="space-y-4 p-4 bg-green-50/50 rounded-2xl border border-green-100">
                                                    <h4 className="font-black text-green-800 flex items-center gap-2 uppercase tracking-wide text-xs">
                                                        <Check size={16} /> Permitted Uses
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-green-900 list-disc list-inside font-medium">
                                                        <li>Use in unlimited personal and commercial projects</li>
                                                        <li>Use in games sold on Steam, App Store, Google Play, etc.</li>
                                                        <li>Modify the asset to fit your project</li>
                                                        <li>Use in client work and freelance projects</li>
                                                    </ul>
                                                </div>
                                                <div className="space-y-4 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                                                    <h4 className="font-black text-red-800 flex items-center gap-2 uppercase tracking-wide text-xs">
                                                        <span className="text-lg">×</span> Restricted Uses
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-red-900 list-disc list-inside font-medium">
                                                        <li>Resell, redistribute, or sublicense original asset files</li>
                                                        <li>Include raw files in a product sold to end users</li>
                                                        <li>Claim original authorship or copyright</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'faq' && (
                                        <div className="space-y-4">
                                            <div className="space-y-3">
                                                {faqs.map((faq, i) => (
                                                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                                        <button
                                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                                        >
                                                            <span className="font-black text-text-main pr-4">{faq.q}</span>
                                                            <ChevronDown
                                                                size={18}
                                                                className={`text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                                                            />
                                                        </button>
                                                        <AnimatePresence>
                                                            {openFaq === i && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="px-5 pb-5 text-text-dim text-sm font-medium leading-relaxed border-t border-gray-100 pt-4">
                                                                        {faq.a}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
