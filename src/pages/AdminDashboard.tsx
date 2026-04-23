import React, { useEffect, useState } from 'react';
import {
    LayoutDashboard, Users,
    Package, Trash2, Plus, X, ImageIcon, FileText, ClipboardList, ExternalLink,
    CheckCircle as CheckCircleIcon, Activity, Shield, Zap, Database, ArrowRight,
    Filter, Settings, TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/useAuthStore';
import { supabase } from '../lib/supabase';
import { Helmet } from 'react-helmet-async';

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    additional_images: string[];
    download_url: string;
}

interface Order {
    id: string;
    status: string;
    total: number;
    customer_email: string;
    screenshot: string;
    items: any[];
    created_at: string;
}

interface UserListItem {
    id: number;
    email: string;
    role: string;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [products, setProducts] = useState<Product[]>([]);
    const [usersList, setUsersList] = useState<UserListItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '3D Model',
        image: '',
        description: '',
        additionalImages: [] as string[],
        downloadUrl: ''
    });

    const getFileAccept = () => {
        switch (newProduct.category) {
            case 'Software/App': return '.exe,.msi,.zip,.dmg';
            case '3D Model': return '.obj,.fbx,.glb,.gltf,.zip,.blend';
            case 'Books PDF': return '.pdf';
            default: return '*';
        }
    };

    const { user } = useAuthStore();

    useEffect(() => {
        const fetchData = async () => {
            const { data: pData } = await supabase.from('products').select('*').order('created_at', { ascending: false });
            setProducts(pData || []);

            const { data: oData } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
            setOrders(oData || []);

            const { data: profData } = await supabase.from('orders').select('customer_email');
            const uniqueEmails = Array.from(new Set((profData || []).map((o: any) => o.customer_email)));
            setUsersList(uniqueEmails.map((email, i) => ({ id: i + 1, email: email as string, role: 'user' })));
        };

        fetchData();
    }, []);

    const handleFileUpload = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            const { error: uploadError } = await supabase.storage
                .from('assets')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('assets')
                .getPublicUrl(filePath);

            return publicUrl;
        } catch (err: any) {
            console.error("Upload failed", err);
            return null;
        }
    };

    const handleMainImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setUploading(true);
            const url = await handleFileUpload(e.target.files[0]);
            if (url) {
                setNewProduct({ ...newProduct, image: url });
            }
            setUploading(false);
        }
    };

    const handleGalleryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUploading(true);
            const files = Array.from(e.target.files);
            const urls: string[] = [];
            for (const file of files) {
                const url = await handleFileUpload(file);
                if (url) urls.push(url);
            }
            setNewProduct(prev => ({ ...prev, additionalImages: [...prev.additionalImages, ...urls] }));
            setUploading(false);
        }
    };

    const handleDigitalFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setUploading(true);
            const url = await handleFileUpload(e.target.files[0]);
            if (url) {
                setNewProduct({ ...newProduct, downloadUrl: url });
            }
            setUploading(false);
        }
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newProduct.image || !newProduct.downloadUrl) {
            alert("Please wait for uploads to finish!");
            return;
        }

        const { data, error } = await supabase
            .from('products')
            .insert([{
                name: newProduct.name,
                price: parseFloat(newProduct.price),
                category: newProduct.category,
                image: newProduct.image,
                description: newProduct.description,
                additional_images: newProduct.additionalImages,
                download_url: newProduct.downloadUrl
            }])
            .select();

        if (error) {
            alert("Failed to publish: " + error.message);
        } else if (data) {
            setProducts([data[0], ...products]);
            setShowAddModal(false);
            setNewProduct({ name: '', price: '', category: '3D Model', image: '', description: '', additionalImages: [], downloadUrl: '' });
        }
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (!error) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleApproveOrder = async (orderId: string) => {
        const { error } = await supabase
            .from('orders')
            .update({ status: 'Approved' })
            .eq('id', orderId);

        if (!error) {
            setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Approved' } : o));
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <Helmet>
                <title>Command Center | DigiNepal Admin Portal</title>
            </Helmet>

            {/* Tactical Sidebar */}
            <aside className="fixed bottom-0 left-0 right-0 lg:left-0 lg:top-0 lg:bottom-0 lg:w-72 skeuo-panel rounded-none border-y lg:border-y-0 lg:border-r border-white/5 bg-deep/40 flex lg:flex-col items-center lg:items-start py-4 lg:py-10 px-6 gap-8 z-50 h-24 lg:h-full overflow-x-auto no-scrollbar">
                <div className="hidden lg:flex flex-col gap-6 w-full mb-8">
                    <div className="flex items-center gap-4 text-primary italic">
                        <div className="skeuo-inset p-3 rounded-xl border-primary/20">
                            <Zap size={24} className="animate-pulse" />
                        </div>
                        <div className="space-y-0.5">
                            <h1 className="text-xl font-black tracking-tighter uppercase leading-none">DIGINEPAL</h1>
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-tactical">CENTRAL_COMMAND</p>
                        </div>
                    </div>
                    <div className="skeuo-inset p-4 rounded-2xl bg-white/5 border-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[9px] font-black text-text-dim/40 uppercase tracking-widest text-tactical">SYSTEM_HEALTH</p>
                            <span className="text-[9px] font-black text-primary uppercase text-tactical">OPTIMAL</span>
                        </div>
                        <div className="h-1 w-full bg-deep/40 rounded-full overflow-hidden">
                            <div className="h-full w-[94%] bg-primary shadow-[0_0_10px_#8DF2C0]" />
                        </div>
                    </div>
                </div>

                <nav className="flex lg:flex-col items-center gap-3 w-full flex-1">
                    {[
                        { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
                        { label: 'Products', icon: <Package size={20} /> },
                        { label: 'Orders', icon: <ClipboardList size={20} /> },
                        { label: 'Customers', icon: <Users size={20} /> }
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveTab(item.label)}
                            className={`flex-1 lg:w-full flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl transition-all whitespace-nowrap group ${activeTab === item.label ? 'skeuo-panel bg-primary text-deep shadow-[0_0_30px_rgba(141,242,192,0.2)] text-tactical' : 'text-text-dim/60 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className={`${activeTab === item.label ? 'text-deep' : 'text-text-dim/40 group-hover:text-primary'} transition-colors`}>{item.icon}</span>
                            <span className="hidden sm:block lg:block font-black uppercase tracking-widest text-[11px] text-tactical">{item.label}</span>
                        </button>
                    ))}
                    <div className="hidden lg:block mt-auto w-full pt-8 border-t border-white/5">
                        <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-text-dim/40 hover:text-secondary hover:bg-secondary/5 transition-all group">
                            <Settings size={20} className="group-hover:rotate-90 transition-transform" />
                            <span className="font-black uppercase tracking-widest text-[11px] text-tactical">SYSTEM_CONFIG</span>
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-72 p-6 md:p-12 pb-40 lg:pb-12">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8 border-b border-white/5 pb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-secondary">
                            <Activity size={18} className="animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">UPLINK_ESTABLISHED_v4.2</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-none">{activeTab}</h2>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block space-y-1">
                            <p className="text-lg font-black text-white leading-none tracking-tighter uppercase">{user?.name || 'ADMIN_USER'}</p>
                            <div className="flex items-center justify-end gap-2 text-primary">
                                <Shield size={12} />
                                <p className="text-[9px] font-black uppercase tracking-widest text-tactical">ROOT_ACCESS_LEVEL_1</p>
                            </div>
                        </div>
                        <div className="skeuo-panel p-1 rounded-2xl bg-white/5 border-primary/20 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user?.email || 'admin'}`} className="w-14 h-14 bg-deep/40" />
                        </div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'Dashboard' && (
                            <div className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    {[
                                        { label: 'TOTAL_ASSETS', value: products.length, icon: <Package size={24} />, color: 'primary' },
                                        { label: 'NODAL_AGENTS', value: usersList.length, icon: <Users size={24} />, color: 'secondary' },
                                        { label: 'STREAM_LOGS', value: orders.length, icon: <ClipboardList size={24} />, color: 'primary' }
                                    ].map((stat, i) => (
                                        <div key={i} className="skeuo-panel p-10 rounded-[3rem] bg-deep/40 border-white/5 group hover:border-primary/20 transition-all">
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`skeuo-inset p-4 rounded-2xl border-${stat.color}/20 text-${stat.color}`}>
                                                    {stat.icon}
                                                </div>
                                                <TrendingUp size={20} className="text-primary/20" />
                                            </div>
                                            <p className="text-text-dim/40 text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-tactical">{stat.label}</p>
                                            <h3 className="text-6xl font-display font-black text-white tracking-tighter">{stat.value}</h3>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div className="skeuo-panel p-8 rounded-[3rem] bg-deep/40 border-white/5">
                                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                            <div className="flex items-center gap-4">
                                                <Activity size={20} className="text-primary" />
                                                <h3 className="font-black text-white uppercase tracking-tighter">NETWORK_ACTIVITY</h3>
                                            </div>
                                            <span className="text-[10px] font-black text-text-dim/20 uppercase tracking-widest text-tactical">REAL_TIME_DATA</span>
                                        </div>
                                        <div className="space-y-6">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="flex items-center gap-6 p-4 skeuo-inset rounded-2xl bg-white/5 border-white/5">
                                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                    <div className="flex-1">
                                                        <p className="text-[10px] font-black text-white tracking-widest uppercase mb-1">TRANSACTION_INITIATED</p>
                                                        <p className="text-[9px] font-medium text-text-dim/40 uppercase tracking-widest">AGENT_0x{Math.random().toString(16).slice(2, 6)} :: 12:45:0{i}</p>
                                                    </div>
                                                    <ArrowRight size={14} className="text-text-dim/20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="skeuo-panel p-8 rounded-[3rem] bg-deep/40 border-white/5 flex flex-col items-center justify-center text-center space-y-6">
                                        <div className="skeuo-inset w-32 h-32 rounded-full flex items-center justify-center border-secondary/20 bg-secondary/5 relative">
                                            <div className="absolute inset-0 rounded-full border border-secondary/40 animate-ping opacity-20" />
                                            <Database size={48} className="text-secondary" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">DATA_SYNCHRONIZATION</h3>
                                            <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] text-tactical">PKR_CENTRAL_UPLINK_STABLE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Products' && (
                            <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 bg-deep/40">
                                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-12 space-y-10">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 pb-8">
                                        <div className="flex items-center gap-6">
                                            <div className="skeuo-inset p-3 rounded-xl border-primary/20">
                                                <Package size={24} className="text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">ASSET_INVENTORY</h3>
                                        </div>
                                        <button onClick={() => setShowAddModal(true)} className="skeuo-panel bg-primary text-deep px-10 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.3)] flex items-center gap-3">
                                            <Plus size={20} strokeWidth={3} /> INITIALIZE_NEW_ASSET
                                        </button>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[700px]">
                                            <thead>
                                                <tr className="text-left text-text-dim/40 text-[10px] font-black uppercase tracking-[0.4em] border-b border-white/5 text-tactical">
                                                    <th className="pb-6 pl-4">DATA_PACKET</th>
                                                    <th className="pb-6">VALUATION</th>
                                                    <th className="pb-6">CLASSIFICATION</th>
                                                    <th className="pb-6 text-right pr-4">PROTOCOLS</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {products.map(p => (
                                                    <tr key={p.id} className="group hover:bg-white/5 transition-colors">
                                                        <td className="py-6 pl-4">
                                                            <div className="flex items-center gap-6">
                                                                <div className="skeuo-inset w-16 h-16 rounded-2xl overflow-hidden border-white/5 group-hover:border-primary/20 transition-all bg-deep/40">
                                                                    <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                                                </div>
                                                                <span className="font-black text-white tracking-tighter uppercase text-lg group-hover:text-primary transition-colors">{p.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-6 font-black text-primary tracking-widest text-sm">Rs. {p.price.toLocaleString()}</td>
                                                        <td className="py-6">
                                                            <span className="skeuo-inset px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-text-dim/60 bg-deep/40 border-white/5 text-tactical">{p.category}</span>
                                                        </td>
                                                        <td className="py-6 text-right pr-4">
                                                            <div className="flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                                <button className="skeuo-inset p-3 rounded-xl border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all text-text-dim/40 hover:text-primary">
                                                                    <Settings size={18} />
                                                                </button>
                                                                <button onClick={() => handleDelete(p.id)} className="skeuo-inset p-3 rounded-xl border-white/10 hover:border-secondary/40 hover:bg-secondary/5 transition-all text-text-dim/40 hover:text-secondary">
                                                                    <Trash2 size={18} />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Orders' && (
                            <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 bg-deep/40">
                                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-12 space-y-10">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                                        <div className="flex items-center gap-6">
                                            <div className="skeuo-inset p-3 rounded-xl border-secondary/20">
                                                <ClipboardList size={24} className="text-secondary" />
                                            </div>
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">TRANSACTION_STREAM</h3>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[900px]">
                                            <thead>
                                                <tr className="text-left text-text-dim/40 text-[10px] font-black uppercase tracking-[0.4em] border-b border-white/5 text-tactical">
                                                    <th className="pb-6 pl-4">STREAM_ID</th>
                                                    <th className="pb-6">AGENT_IDENTITY</th>
                                                    <th className="pb-6">VALUATION</th>
                                                    <th className="pb-6">TELEMETRY_SLIP</th>
                                                    <th className="pb-6">STATUS</th>
                                                    <th className="pb-6 text-right pr-4">OVERRIDE</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {orders.map(o => (
                                                    <tr key={o.id} className="group hover:bg-white/5 transition-colors">
                                                        <td className="py-6 pl-4 font-black text-white/40 text-xs tracking-widest">#{o.id.toString().slice(-8).toUpperCase()}</td>
                                                        <td className="py-6 font-black text-white text-xs tracking-widest italic">{o.customer_email}</td>
                                                        <td className="py-6 font-black text-secondary tracking-widest text-sm">Rs. {o.total?.toLocaleString()}</td>
                                                        <td className="py-6">
                                                            <a href={o.screenshot} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all text-tactical">
                                                                <ExternalLink size={14} /> VIEW_UPLINK
                                                            </a>
                                                        </td>
                                                        <td className="py-6">
                                                            <div className={`skeuo-inset px-4 py-1.5 rounded-lg inline-flex items-center gap-3 ${o.status === 'Approved' ? 'text-primary border-primary/20 bg-primary/5' : 'text-secondary border-secondary/20 bg-secondary/5 animate-pulse'}`}>
                                                                <div className={`w-1.5 h-1.5 rounded-full bg-current ${o.status !== 'Approved' && 'animate-pulse'}`} />
                                                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-tactical">{o.status}</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-6 text-right pr-4">
                                                            {o.status === 'Pending' && (
                                                                <button
                                                                    onClick={() => handleApproveOrder(o.id)}
                                                                    className="skeuo-panel bg-primary text-deep px-6 py-2.5 rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all text-tactical"
                                                                >
                                                                    AUTHORIZE_STREAM
                                                                </button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Customers' && (
                            <div className="skeuo-panel p-2 rounded-[3.5rem] border-white/10 bg-deep/40">
                                <div className="bg-deep/60 backdrop-blur-3xl rounded-[3.3rem] p-8 md:p-12 space-y-10">
                                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                                        <div className="flex items-center gap-6">
                                            <div className="skeuo-inset p-3 rounded-xl border-secondary/20">
                                                <Users size={24} className="text-secondary" />
                                            </div>
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">AGENT_DIRECTORY</h3>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[700px]">
                                            <thead>
                                                <tr className="text-left text-text-dim/40 text-[10px] font-black uppercase tracking-[0.4em] border-b border-white/5 text-tactical">
                                                    <th className="pb-6 pl-4">AGENT_SIGNATURE</th>
                                                    <th className="pb-6">ACCESS_EMAIL</th>
                                                    <th className="pb-6">TELEMETRY_LINK</th>
                                                    <th className="pb-6 text-right pr-4">CLEARANCE</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {usersList.map(u => (
                                                    <tr key={u.id} className="group hover:bg-white/5 transition-colors">
                                                        <td className="py-6 pl-4 font-black text-white/40 text-xs tracking-widest">AGENT_0x{u.id.toString(16).padStart(4, '0').toUpperCase()}</td>
                                                        <td className="py-6 font-black text-white text-xs tracking-widest italic">{u.email}</td>
                                                        <td className="py-6">
                                                            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest text-tactical">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                                                SYNCHRONIZED
                                                            </div>
                                                        </td>
                                                        <td className="py-6 text-right pr-4">
                                                            <span className={`skeuo-inset px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.4em] text-tactical ${u.role === 'admin' ? 'bg-primary text-deep border-primary/20 shadow-[0_0_15px_rgba(141,242,192,0.2)]' : 'bg-deep/40 text-text-dim/40 border-white/5'}`}>
                                                                {u.role}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Tactical Upload Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/80 backdrop-blur-xl p-4 overflow-y-auto pt-20 pb-20">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="skeuo-panel p-2 rounded-[4rem] border-white/10 bg-deep/60 max-w-4xl w-full relative my-auto shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                        >
                            <div className="bg-deep/80 backdrop-blur-3xl rounded-[3.8rem] p-10 md:p-16 space-y-12 relative overflow-hidden">
                                <button onClick={() => setShowAddModal(false)} className="absolute top-10 right-10 p-4 skeuo-inset rounded-2xl hover:bg-secondary/10 hover:text-secondary transition-all text-text-dim/40 group">
                                    <X className="group-hover:rotate-90 transition-transform" />
                                </button>
                                
                                <div className="space-y-4 text-center">
                                    <div className="flex items-center justify-center gap-4 text-primary">
                                        <Database size={24} className="animate-bounce" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">ASSET_INGESTION_PROTOCOL</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-none">UPLOAD_RESOURCE</h3>
                                </div>

                                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Left Column: Data Strings */}
                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.4em] ml-4 text-tactical">PARAM_LABEL</label>
                                            <input required className="w-full h-16 skeuo-inset px-8 rounded-2xl text-white font-black tracking-widest text-sm border-white/5 bg-deep/40 outline-none focus:border-primary/40 transition-all" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="ASSET_NAME_STR" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-secondary/40 tracking-[0.4em] ml-4 text-tactical">PARAM_VALUATION (Rs.)</label>
                                            <input required type="number" step="0.01" className="w-full h-16 skeuo-inset px-8 rounded-2xl text-white font-black tracking-widest text-sm border-white/5 bg-deep/40 outline-none focus:border-secondary/40 transition-all" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} placeholder="0.00" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.4em] ml-4 text-tactical">CLASSIFICATION_LEVEL</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full h-16 skeuo-inset px-8 rounded-2xl text-primary font-black tracking-widest text-sm border-white/5 bg-deep/40 outline-none focus:border-primary/40 transition-all appearance-none cursor-pointer"
                                                    value={newProduct.category}
                                                    onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                                                >
                                                    <option value="3D Model">3D_MODEL_ARRAY</option>
                                                    <option value="Software/App">LOGIC_EXECUTABLE</option>
                                                    <option value="Books PDF">DOCUMENTATION_PDF</option>
                                                </select>
                                                <Filter className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-text-dim/20 tracking-[0.4em] ml-4 text-tactical">METADATA_STRING</label>
                                            <textarea className="w-full h-40 skeuo-inset p-8 rounded-[2rem] text-white font-black tracking-widest text-xs border-white/5 bg-deep/40 outline-none focus:border-white/10 transition-all resize-none" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="INITIALIZE_DESCRIPTION_STRING..." />
                                        </div>
                                    </div>

                                    {/* Right Column: Binary Payloads */}
                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.4em] ml-4 text-tactical">PRIMARY_VISUAL_ID</label>
                                            <div className="relative h-44 skeuo-inset rounded-[2rem] border-white/5 bg-deep/40 flex flex-col items-center justify-center group overflow-hidden cursor-pointer hover:border-primary/20 transition-all">
                                                {newProduct.image ? (
                                                    <img src={newProduct.image} className="w-full h-full object-cover opacity-80" />
                                                ) : (
                                                    <div className="text-center space-y-3">
                                                        <ImageIcon className="text-primary/40 group-hover:scale-110 transition-transform mx-auto" size={40} />
                                                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-text-dim/20 text-tactical">UPLOAD_MAIN_IMAGE</p>
                                                    </div>
                                                )}
                                                <input type="file" accept="image/*" onChange={handleMainImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase text-secondary/40 tracking-[0.4em] ml-4 text-tactical">GALLERY_ARRAY</label>
                                            <div className="flex gap-4 mb-2 flex-wrap">
                                                {newProduct.additionalImages.map((img, i) => (
                                                    <div key={i} className="w-16 h-16 skeuo-inset rounded-xl overflow-hidden border-white/10">
                                                        <img src={img} className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                                <div className="w-16 h-16 skeuo-inset rounded-xl bg-white/5 flex items-center justify-center relative border-white/5 hover:border-secondary/20 transition-all cursor-pointer">
                                                    <Plus size={20} className="text-secondary/40" />
                                                    <input type="file" multiple accept="image/*" onChange={handleGalleryChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-4">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-primary/40 tracking-[0.4em] ml-4 text-tactical">DIGITAL_BINARY_ATTACHMENT</label>
                                                <div className={`relative h-24 skeuo-inset rounded-2xl border-white/5 flex items-center justify-center transition-all cursor-pointer group ${newProduct.downloadUrl ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-deep/40 text-text-dim/20 hover:border-primary/20'}`}>
                                                    <div className="flex items-center gap-4">
                                                        {newProduct.downloadUrl ? <CheckCircleIcon className="text-primary animate-pulse" /> : <FileText size={24} className="group-hover:scale-110 transition-transform" />}
                                                        <span className="text-xs font-black uppercase tracking-widest text-tactical">
                                                            {newProduct.downloadUrl ? 'BINARY_SYNC_SUCCESS' : `ATTACH_${newProduct.category.toUpperCase()}`}
                                                        </span>
                                                    </div>
                                                    <input type="file" accept={getFileAccept()} onChange={handleDigitalFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                </div>
                                                <p className="text-[8px] font-black text-text-dim/20 uppercase tracking-[0.4em] text-center text-tactical">ALLOWED_FORMATS: {getFileAccept().replace(/\./g, '').toUpperCase()}</p>
                                            </div>

                                            <div className="relative py-4">
                                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                                                <div className="relative flex justify-center text-[8px] font-black uppercase tracking-[0.6em] text-tactical"><span className="bg-deep px-4 text-text-dim/20">OR_REMOTE_UPLINK</span></div>
                                            </div>

                                            <input
                                                className="w-full h-14 skeuo-inset px-6 rounded-2xl text-white font-black tracking-widest text-[10px] border-white/5 bg-deep/40 outline-none focus:border-primary/40 transition-all text-tactical"
                                                placeholder="PASTE_EXTERNAL_REMOTE_URL..."
                                                value={newProduct.downloadUrl}
                                                onChange={e => setNewProduct({ ...newProduct, downloadUrl: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={uploading} className="md:col-span-2 skeuo-panel bg-primary text-deep py-8 rounded-[2.5rem] font-black text-2xl uppercase tracking-[0.4em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_50px_rgba(141,242,192,0.3)] mt-8 disabled:opacity-50 disabled:cursor-not-allowed text-tactical">
                                        {uploading ? 'SYNCHRONIZING_BINARY...' : 'COMMENCE_DISTRIBUTION'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
