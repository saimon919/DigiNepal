import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function Store() {
    const [products, setProducts] = useState<Product[]>([]);
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

    return (
        <div className="px-4 md:px-0">
            <h1 className="text-3xl md:text-5xl font-display font-black mb-10 tracking-tight">Digital Library</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-[2.5rem] p-4 shadow-soft border border-gray-50 hover:shadow-xl transition-all group active:scale-[0.98]">
                        <Link to={`/product/${product.id}`} className="aspect-square bg-bg rounded-[2rem] overflow-hidden mb-6 relative block border border-gray-50">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <button
                                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                className="absolute bottom-4 right-4 bg-white p-3.5 rounded-2xl shadow-xl text-primary hover:bg-primary hover:text-white transition-all active:scale-90 z-10 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <ShoppingBag size={20} strokeWidth={2.5} />
                            </button>
                        </Link>
                        <div className="px-2 pb-2">
                            <h3 className="font-black text-lg mb-1 truncate text-text-main pr-10">{product.name}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-[10px] bg-bg px-3 py-1 rounded-full font-black uppercase text-text-dim tracking-widest">{product.category}</p>
                                <p className="text-xl font-display font-black text-primary">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
