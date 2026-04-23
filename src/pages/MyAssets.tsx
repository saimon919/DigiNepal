import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Download, ShoppingBag, Clock, CheckCircle, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function MyAssets() {
    const { user } = useAuthStore();
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAssets = async () => {
            if (!user?.email) return;

            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('customer_email', user.email)
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Failed to fetch assets", error);
            } else {
                setOrders(data || []);
            }
            setLoading(false);
        };

        fetchAssets();
    }, [user]);

    if (loading) return <div className="text-center py-20 font-bold text-primary animate-pulse">Loading your library...</div>;

    if (orders.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-bg rounded-full flex items-center justify-center mx-auto text-text-dim border">
                    <ShoppingBag size={40} />
                </div>
                <h1 className="text-3xl font-display font-bold">Your library is empty</h1>
                <p className="text-text-dim text-lg">You haven't purchased any digital assets yet.</p>
                <Link to="/store" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    Visit Store
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 border-b border-white/5 pb-8 relative">
                <div className="scanline" />
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Terminal size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Module::User_Library</span>
                    </div>
                    <h1 className="text-5xl font-display font-black text-white tracking-widest uppercase leading-none">DATA_VAULT</h1>
                    <p className="text-xs font-mono text-text-dim uppercase tracking-widest">Accessing authorized digital asset distributions for agent: {user?.email}</p>
                </div>
                <div className="text-left md:text-right">
                    <p className="text-[8px] font-mono text-text-dim uppercase mb-1">Total_Protocols</p>
                    <p className="text-2xl font-black text-white tracking-widest uppercase">{orders.length} OPERATIONS</p>
                </div>
            </div>

            <div className="space-y-12">
                {orders.map((order) => (
                    <div key={order.id} className="glass-panel hud-border p-8 md:p-10 relative overflow-hidden group">
                        <div className="scanline" />
                        
                        {/* Order Header Telemetry */}
                        <div className="flex flex-col lg:flex-row justify-between mb-10 pb-8 border-b border-white/5 gap-8">
                            <div className="flex gap-10">
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black uppercase text-primary tracking-[0.2em]">IDENTIFIER</p>
                                    <p className="font-mono text-xs text-white tracking-widest">OP_#{order.id.toString().slice(-8).toUpperCase()}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black uppercase text-primary tracking-[0.2em]">CLEARANCE_STATUS</p>
                                    <div className="flex items-center gap-2">
                                        {order.status === 'Approved' ? (
                                            <span className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                                                <CheckCircle size={14} /> AUTHORIZED_ACCESS
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest animate-pulse">
                                                <Clock size={14} /> VERIFICATION_IN_PROGRESS
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:text-right space-y-2">
                                <p className="text-[9px] font-black uppercase text-primary tracking-[0.2em]">TRANSACTION_VALUE</p>
                                <p className="font-black text-white text-xl tracking-widest">Rs. {order.total?.toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {order.items.map((item: any, idx: number) => (
                                <div key={idx} className="bg-black/60 border border-white/5 p-6 space-y-6 relative group hover:border-primary/40 transition-all duration-500">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 bg-black overflow-hidden border border-white/10 shrink-0 group-hover:border-primary/30 transition-all">
                                            <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        </div>
                                        <div className="flex-1 min-w-0 space-y-1">
                                            <p className="font-black text-sm text-white tracking-widest uppercase truncate">{item.name}</p>
                                            <p className="text-[9px] font-black uppercase text-primary tracking-widest bg-primary/5 border border-primary/10 inline-block px-2 py-0.5 rounded-full">{item.category}</p>
                                        </div>
                                    </div>

                                    {order.status === 'Approved' ? (
                                        <a
                                            href={item.download_url || item.downloadUrl}
                                            className="flex items-center justify-center gap-3 w-full bg-primary text-black py-4 px-6 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all shadow-glow active:scale-95"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download size={14} /> DOWNLOAD_ASSET.zip
                                        </a>
                                    ) : (
                                        <div className="flex items-center justify-center gap-3 w-full bg-white/5 text-white/20 border border-white/10 py-4 px-6 font-black uppercase tracking-[0.2em] text-[10px] cursor-not-allowed">
                                            <Shield size={14} /> ENCRYPTED_LOCK
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
