import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Download, Zap } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { supabase } from '../lib/supabase';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [mainImage, setMainImage] = useState('');
    const [loading, setLoading] = useState(true);
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

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            {/* Breadcrumb / Back */}
            <Link to="/store" className="inline-flex items-center gap-2 text-text-dim hover:text-primary transition-colors mb-8 font-medium">
                <ChevronLeft size={20} />
                Back to Store
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Gallery (5 cols) */}
                <div className="lg:col-span-1 space-y-4">
                    {gallery.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setMainImage(img)}
                            className={`w-full aspect-square rounded-2xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                            <img src={img} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>

                {/* Center: Main Image (6 cols) */}
                <div className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 shadow-soft flex items-center justify-center relative overflow-hidden h-[600px]">
                    {/* Decorative Badges like in reference */}
                    <div className="absolute top-10 left-10 flex flex-col gap-3">
                        <div className="bg-bg w-10 h-10 rounded-full flex items-center justify-center border border-gray-100 text-xs font-bold">IG</div>
                        <div className="bg-bg w-10 h-10 rounded-full flex items-center justify-center border border-gray-100 text-xs font-bold">FB</div>
                    </div>

                    <div className="absolute top-10 right-10">
                        <div className="bg-accent text-white px-5 py-2 rounded-full text-xs font-black tracking-widest animate-pulse">
                            HIT
                        </div>
                    </div>

                    <img
                        src={mainImage}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain transition-all duration-700"
                    />

                    <div className="absolute bottom-10 right-10">
                        <button className="bg-white border w-12 h-12 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                            <span className="text-[10px] font-bold">360°</span>
                        </button>
                    </div>

                    {/* Info Tooltip Mockup */}
                    <div className="absolute top-1/2 right-20 -translate-y-1/2 p-6 bg-accent/90 backdrop-blur-md rounded-3xl text-white max-w-[200px] shadow-xl animate-bounce-slow">
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rotate-45" />
                        <p className="text-xs font-bold leading-relaxed">
                            Instantly download the HQ source files after purchase.
                        </p>
                    </div>
                </div>

                {/* Right: Info (5 cols) - adjusted grid spans to make it total 12 if needed, but flex/grid works */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    <div>
                        <h1 className="text-6xl font-display font-black text-primary leading-none uppercase mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-6 text-2xl font-bold">
                            <span className="text-primary">Rs. {product.price}</span>
                            <span className="text-text-dim line-through opacity-50">Rs. {Math.round(product.price * 1.5)}</span>
                        </div>
                    </div>

                    <p className="text-lg text-text-dim leading-relaxed">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Type</p>
                            <p className="font-bold">{product.category}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Format</p>
                            <p className="font-bold">BLEND, FBX, OBJ</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="h-16 flex-1 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                            FAV
                        </button>
                        <button
                            onClick={() => addToCart(product)}
                            className="h-16 flex-[3] bg-black text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                        >
                            ADD TO CART
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-text-dim uppercase tracking-widest">
                            <Download size={14} className="text-green-500" /> Instant Download
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-text-dim uppercase tracking-widest">
                            <Zap size={14} className="text-accent" /> 24/7 Support
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
