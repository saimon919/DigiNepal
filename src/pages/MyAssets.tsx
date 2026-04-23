import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Download, ShoppingBag, Terminal, Shield, Activity, Cpu, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
            <div className="skeuo-inset w-16 h-16 rounded-full flex items-center justify-center border-primary/20">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
            </div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] animate-pulse text-tactical">LOCALIZING_VAULT_DATA...</span>
        </div>
    );

    if (orders.length === 0) {
        return (
            <div className="max-w-3xl mx-auto py-32 px-4 text-center space-y-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="skeuo-panel p-20 border-white/10 space-y-10 bg-deep/40 rounded-[4rem]"
                >
                    <div className="skeuo-inset w-24 h-24 rounded-full flex items-center justify-center mx-auto border-white/5 bg-white/5">
                        <ShoppingBag size={40} className="text-text-dim/20" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">VAULT_EMPTY</h1>
                        <p className="text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] italic border-l-4 border-primary/20 pl-8 inline-block">No authorized digital asset distributions detected for your agent signature.</p>
                    </div>
                    <Link to="/store" className="inline-block bg-primary text-deep px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_40px_rgba(141,242,192,0.3)]">
                        INITIALIZE_ACQUISITION
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
            <Helmet>
                <title>My Data Vault | DigiNepal Tactical Console</title>
            </Helmet>

            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-primary">
                        <Terminal size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">VAULT_ACCESS_PROTOCOL :: {user?.email?.split('@')[0].toUpperCase()}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">DATA_VAULT</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-primary/20 pl-8">
                        Authorized digital asset repository for secure distribution and local neural storage.
                    </p>
                </div>
                <div className="skeuo-panel bg-primary/5 px-10 py-6 rounded-[2rem] border-primary/20 shrink-0 text-center lg:text-right">
                    <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.4em] mb-2 text-tactical">ACTIVE_MODULES</p>
                    <p className="text-4xl font-black text-white tracking-tighter leading-none">{orders.reduce((acc, order) => acc + order.items.length, 0)} UNITS</p>
                </div>
            </div>

            <div className="space-y-20">
                {orders.map((order) => (
                    <motion.div 
                        key={order.id} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 group"
                    >
                        <div className="bg-deep/40 backdrop-blur-2xl rounded-[3.3rem] p-8 md:p-12 space-y-12 overflow-hidden relative">
                            {/* Order Header Telemetry */}
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-10 border-b border-white/5 gap-8">
                                <div className="flex flex-wrap gap-12">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-primary/40">
                                            <Cpu size={14} />
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-tactical">IDENTIFIER</p>
                                        </div>
                                        <p className="font-black text-lg text-white tracking-widest">OP_#{order.id.toString().slice(-8).toUpperCase()}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-secondary/40">
                                            <Shield size={14} />
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-tactical">CLEARANCE</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {order.status === 'Approved' ? (
                                                <div className="skeuo-panel bg-primary/5 px-4 py-1.5 rounded-lg border-primary/30 flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#8df2c0]" />
                                                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] text-tactical">AUTHORIZED</span>
                                                </div>
                                            ) : (
                                                <div className="skeuo-panel bg-secondary/5 px-4 py-1.5 rounded-lg border-secondary/30 flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#f28dbd]" />
                                                    <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] text-tactical">VERIFYING</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 lg:text-right">
                                    <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] text-tactical text-right">CREDIT_VALUATION</p>
                                    <p className="font-black text-white text-3xl tracking-tighter">Rs.{order.total?.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {order.items.map((item: any, idx: number) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ y: -5 }}
                                        className="skeuo-panel p-1 rounded-[2.5rem] border-white/5 bg-deep/60 group/item transition-all"
                                    >
                                        <div className="p-6 space-y-8 h-full flex flex-col">
                                            <div className="flex items-center gap-6">
                                                <div className="skeuo-inset w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-white/10">
                                                    <img src={item.image} className="w-full h-full object-cover opacity-70 group-hover/item:opacity-100 transition-all duration-700 group-hover/item:scale-110" />
                                                </div>
                                                <div className="flex-1 min-w-0 space-y-3">
                                                    <p className="font-black text-lg text-white tracking-tighter uppercase line-clamp-1 leading-tight">{item.name}</p>
                                                    <div className="skeuo-inset bg-primary/5 px-3 py-1 rounded-md border-primary/20 inline-block">
                                                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] text-tactical">{item.category}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-6">
                                                {order.status === 'Approved' ? (
                                                    <a
                                                        href={item.download_url || item.downloadUrl}
                                                        className="skeuo-panel bg-primary text-deep w-full py-5 rounded-2xl flex items-center justify-center gap-4 font-black uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] transition-all text-tactical shadow-[0_0_20px_rgba(141,242,192,0.2)]"
                                                        download
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Download size={16} strokeWidth={2.5} /> DOWNLOAD_ASSET.zip
                                                    </a>
                                                ) : (
                                                    <div className="skeuo-inset w-full py-5 rounded-2xl flex items-center justify-center gap-4 text-text-dim/40 font-black uppercase tracking-[0.4em] text-[10px] text-tactical border-white/5">
                                                        <Lock size={16} /> DATA_ENCRYPTED
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Support Callout */}
            <div className="skeuo-panel p-1 rounded-[3rem] border-white/10 bg-deep/40 mt-20">
                <div className="bg-deep/60 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="skeuo-inset p-4 rounded-2xl border-secondary/20">
                                <Activity size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase leading-none">TECHNICAL_STABILITY</h3>
                        </div>
                        <p className="text-lg md:text-xl text-text-dim/60 font-medium max-w-2xl leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                            Encountering uplink disruptions or authorization delays? Initialize a support protocol for manual verification override.
                        </p>
                    </div>
                    <Link to="/contact" className="skeuo-panel bg-secondary text-deep px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_40px_rgba(242,141,189,0.2)]">
                        UPLINK_SUPPORT
                    </Link>
                </div>
            </div>
        </div>
    );
}
