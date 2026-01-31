import React, { useEffect, useState } from 'react';
import {
    LayoutDashboard, Users,
    Package, Trash2, Plus, X, ImageIcon, FileText, ClipboardList, Check, ExternalLink,
    CheckCircle as CheckCircleIcon
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { supabase } from '../lib/supabase';

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
            case 'AI Thumbnail': return '.png,.jpg,.jpeg';
            default: return '*';
        }
    };

    const { user } = useAuthStore();

    useEffect(() => {
        const fetchData = async () => {
            // Fetch Products
            const { data: pData } = await supabase.from('products').select('*').order('created_at', { ascending: false });
            setProducts(pData || []);

            // Fetch Orders
            const { data: oData } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
            setOrders(oData || []);

            // Fetch Users (Actually Supabase doesn't let you list users from the client for security)
            // We would need a custom profile table for this. 
            // For now, let's look at unique emails in orders as a mock.
            const { data: profData } = await supabase.from('orders').select('customer_email');
            const uniqueEmails = Array.from(new Set((profData || []).map((o: any) => o.customer_email)));
            setUsersList(uniqueEmails.map((email, i) => ({ id: i + 1, email: email as string, role: 'user' })));
        };

        fetchData();
    }, []);

    // File Upload Handler (Supabase Storage)
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
            alert("Upload failed: " + err.message);
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
        } else {
            alert("Delete failed: " + error.message);
        }
    };

    const handleApproveOrder = async (orderId: string) => {
        const { error } = await supabase
            .from('orders')
            .update({ status: 'Approved' })
            .eq('id', orderId);

        if (!error) {
            setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Approved' } : o));
        } else {
            alert("Approval failed: " + error.message);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#F8F9FE]">
            {/* Sidebar / Bottom Nav on Mobile */}
            <aside className="fixed bottom-0 left-0 right-0 lg:left-0 lg:top-0 lg:bottom-0 lg:w-64 bg-white border-t lg:border-r border-gray-100 flex lg:flex-col items-center lg:items-start py-4 lg:py-8 px-6 lg:px-6 gap-8 z-50 h-20 lg:h-full overflow-x-auto no-scrollbar">
                <div className="hidden lg:flex items-center gap-3 text-primary font-black text-2xl mb-4 italic">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    DIGINEPAL
                </div>
                <nav className="flex lg:flex-col items-center gap-2 w-full flex-1">
                    {[
                        { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
                        { label: 'Products', icon: <Package size={20} /> },
                        { label: 'Orders', icon: <ClipboardList size={20} /> },
                        { label: 'Customers', icon: <Users size={20} /> }
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setActiveTab(item.label)}
                            className={`flex-1 lg:w-full flex items-center justify-center lg:justify-start gap-3 p-3 lg:p-4 rounded-2xl transition-all whitespace-nowrap ${activeTab === item.label ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-text-dim hover:bg-gray-50'}`}
                        >
                            {item.icon}
                            <span className="hidden sm:block lg:block font-bold text-xs md:text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 p-4 md:p-10 pb-32 lg:pb-10">
                <header className="flex justify-between items-center mb-10">
                    <div className="space-y-1">
                        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tight">{activeTab}</h2>
                        <p className="text-[10px] md:text-xs text-text-dim font-black uppercase tracking-widest hidden sm:block">Admin Management Portal</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-black text-text-main leading-none">{user?.name}</p>
                            <p className="text-[10px] font-bold text-accent uppercase tracking-tighter">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-2xl overflow-hidden border-2 border-white shadow-soft">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" />
                        </div>
                    </div>
                </header>

                {activeTab === 'Dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-gray-50 group hover:scale-[1.02] transition-all">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                                <Package size={24} />
                            </div>
                            <p className="text-text-dim text-sm font-bold uppercase tracking-widest mb-1">Total Assets</p>
                            <h3 className="text-4xl font-display font-black text-primary">{products.length}</h3>
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-gray-50 group hover:scale-[1.02] transition-all">
                            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <p className="text-text-dim text-sm font-bold uppercase tracking-widest mb-1">Customers</p>
                            <h3 className="text-4xl font-display font-black text-accent">{usersList.length}</h3>
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-gray-50 group hover:scale-[1.02] transition-all">
                            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6">
                                <FileText size={24} />
                            </div>
                            <p className="text-text-dim text-sm font-bold uppercase tracking-widest mb-1">Total Orders</p>
                            <h3 className="text-4xl font-display font-black text-green-500">{orders.length}</h3>
                        </div>
                    </div>
                )}

                {activeTab === 'Products' && (
                    <div className="bg-white rounded-3xl shadow-soft p-8 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                            <h3 className="font-bold text-primary tracking-widest uppercase text-sm">Inventory</h3>
                            <button onClick={() => setShowAddModal(true)} className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                <Plus size={20} /> Add From PC
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px]">
                                <thead>
                                    <tr className="text-left text-text-dim text-[10px] uppercase font-black border-b tracking-widest">
                                        <th className="pb-4 pl-4">Asset</th>
                                        <th className="pb-4">Price</th>
                                        <th className="pb-4">Category</th>
                                        <th className="pb-4 text-right pr-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(p => (
                                        <tr key={p.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors group">
                                            <td className="py-4 pl-4">
                                                <div className="flex items-center gap-4">
                                                    <img src={p.image} className="w-14 h-14 rounded-2xl object-cover bg-bg" />
                                                    <span className="font-bold text-text-main">{p.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 font-bold text-primary">Rs. {p.price}</td>
                                            <td className="py-4"><span className="text-[10px] bg-bg px-3 py-1 rounded-full font-black uppercase text-text-dim">{p.category}</span></td>
                                            <td className="py-4 text-right pr-4">
                                                <button onClick={() => handleDelete(p.id)} className="text-gray-300 hover:text-red-500 p-2 hover:bg-red-50 rounded-xl transition-all">
                                                    <Trash2 size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'Orders' && (
                    <div className="bg-white rounded-3xl shadow-soft p-8 text-center sm:text-left">
                        <h3 className="font-bold text-primary tracking-widest uppercase text-sm mb-8 px-2">Pending Payments</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead>
                                    <tr className="text-left text-text-dim text-[10px] uppercase font-black border-b tracking-widest">
                                        <th className="pb-4">Order ID</th>
                                        <th className="pb-4">Customer</th>
                                        <th className="pb-4">Total</th>
                                        <th className="pb-4">Screenshot</th>
                                        <th className="pb-4">Status</th>
                                        <th className="pb-4 text-right pr-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(o => (
                                        <tr key={o.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                            <td className="py-6 font-mono text-sm pl-2">#{o.id.toString().slice(-6)}</td>
                                            <td className="py-6 italic">{o.customer_email}</td>
                                            <td className="py-6 font-bold text-primary">Rs. {o.total?.toLocaleString()}</td>
                                            <td className="py-6">
                                                <a href={o.screenshot} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent font-bold hover:underline">
                                                    <ExternalLink size={14} /> View Slip
                                                </a>
                                            </td>
                                            <td className="py-6">
                                                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${o.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                                    {o.status}
                                                </span>
                                            </td>
                                            <td className="py-6 text-right pr-4">
                                                {o.status === 'Pending' && (
                                                    <button
                                                        onClick={() => handleApproveOrder(o.id)}
                                                        className="bg-green-500 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-600 transition-all flex items-center gap-2 ml-auto"
                                                    >
                                                        <Check size={14} /> Approve
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'Customers' && (
                    <div className="bg-white rounded-3xl shadow-soft p-8 text-center sm:text-left">
                        <h3 className="font-bold text-primary tracking-widest uppercase text-sm mb-8 px-2">Customer List</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px]">
                                <thead>
                                    <tr className="text-left text-text-dim text-[10px] uppercase font-black border-b tracking-widest">
                                        <th className="pb-4 pl-4">Customer ID</th>
                                        <th className="pb-4">Email Address</th>
                                        <th className="pb-4">Status</th>
                                        <th className="pb-4 text-right pr-4">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersList.map(u => (
                                        <tr key={u.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                            <td className="py-6 pl-4 font-mono text-xs">USER-{u.id}</td>
                                            <td className="py-6 font-bold text-text-main">{u.email}</td>
                                            <td className="py-6">
                                                <span className="flex items-center gap-2 text-[10px] font-black uppercase text-green-500">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                    Active
                                                </span>
                                            </td>
                                            <td className="py-6 text-right pr-4">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${u.role === 'admin' ? 'bg-primary text-white shadow-md' : 'bg-bg text-text-dim'}`}>
                                                    {u.role}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            {/* Modal */}
            {
                showAddModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-md p-4 overflow-y-auto">
                        <div className="bg-white rounded-[2.5rem] p-10 max-w-3xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 my-auto">
                            <button onClick={() => setShowAddModal(false)} className="absolute top-8 right-8 p-3 hover:bg-bg rounded-full transition-colors"><X /></button>
                            <h3 className="text-3xl font-display font-black mb-8 text-primary">Upload New Asset</h3>

                            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Basics */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Name</label>
                                        <input className="w-full bg-bg rounded-2xl p-5 border-none outline-none focus:ring-4 focus:ring-primary/5 transition-all" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required placeholder="High-End Boots Pack..." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Price (Rs.)</label>
                                        <input type="number" step="0.01" className="w-full bg-bg rounded-2xl p-5 border-none outline-none focus:ring-4 focus:ring-primary/5 transition-all" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} required placeholder="49.99" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Category / Type</label>
                                        <select
                                            className="w-full bg-bg rounded-2xl p-5 border-none outline-none focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer font-bold text-primary"
                                            value={newProduct.category}
                                            onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                                        >
                                            <option value="3D Model">3D Model (.obj, .fbx, .glb)</option>
                                            <option value="Software/App">Software (.exe, .app)</option>
                                            <option value="AI Thumbnail">AI Thumbnail (.png, .jpg)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Description</label>
                                        <textarea className="w-full bg-bg rounded-2xl p-5 border-none outline-none focus:ring-4 focus:ring-primary/5 transition-all h-32 resize-none" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="Describe your digital product..." />
                                    </div>
                                </div>

                                {/* Files */}
                                <div className="space-y-6">
                                    {/* Main Image */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Main Image (PNG/JPG)</label>
                                        <div className="relative h-32 bg-bg rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center hover:border-primary/30 transition-all cursor-pointer overflow-hidden group">
                                            {newProduct.image ? (
                                                <img src={newProduct.image} className="w-full h-full object-cover" />
                                            ) : (
                                                <>
                                                    <ImageIcon className="text-text-dim group-hover:text-primary transition-colors" size={32} />
                                                    <span className="text-xs text-text-dim mt-2 group-hover:text-primary transition-colors">Choose Main Image</span>
                                                </>
                                            )}
                                            <input type="file" accept="image/*" onChange={handleMainImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        </div>
                                    </div>

                                    {/* Gallery */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Gallery (Multiple Images)</label>
                                        <div className="flex gap-2 mb-2 flex-wrap">
                                            {newProduct.additionalImages.map((img, i) => (
                                                <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border">
                                                    <img src={img} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            <div className="w-12 h-12 rounded-lg bg-bg flex items-center justify-center relative border border-dashed border-gray-200">
                                                <Plus size={16} className="text-text-dim" />
                                                <input type="file" multiple accept="image/*" onChange={handleGalleryChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Digital File Slot */}
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-text-dim pl-1">Digital Asset Slot (ZIP/BLEND/FBX)</label>
                                            <div className={`relative h-20 rounded-2xl border-2 border-dashed flex items-center justify-center transition-all cursor-pointer ${newProduct.downloadUrl ? 'bg-green-50 border-green-200 text-green-600' : 'bg-bg border-gray-200 text-text-dim hover:border-primary/30'}`}>
                                                <div className="flex items-center gap-3">
                                                    {newProduct.downloadUrl ? <CheckCircleIcon className="text-green-500" /> : <FileText size={20} />}
                                                    <span className="text-sm font-bold">
                                                        {newProduct.downloadUrl ? 'Asset Attached Successfully!' : `Choose ${newProduct.category} File`}
                                                    </span>
                                                </div>
                                                <input type="file" accept={getFileAccept()} onChange={handleDigitalFileChange} className="absolute inset-0 opacity-0 cursor-pointer" title={`Upload ${newProduct.category}`} />
                                            </div>
                                            <p className="text-[9px] text-text-dim italic px-2 text-center">Allowed: {getFileAccept().replace(/,/g, ', ')} (Limit 50MB)</p>
                                        </div>

                                        <div className="relative py-2">
                                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                                            <div className="relative flex justify-center text-[10px] uppercase font-black text-text-dim"><span className="bg-white px-4">OR use external link</span></div>
                                        </div>

                                        <div className="space-y-2">
                                            <input
                                                className="w-full bg-bg rounded-2xl p-4 border-none outline-none focus:ring-4 focus:ring-primary/5 transition-all text-xs"
                                                placeholder="Paste Google Drive / Dropbox link here..."
                                                value={newProduct.downloadUrl}
                                                onChange={e => setNewProduct({ ...newProduct, downloadUrl: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" disabled={uploading} className="md:col-span-2 bg-primary text-white py-6 rounded-[2rem] font-black text-xl hover:bg-primary/95 transition-all shadow-2xl shadow-primary/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {uploading ? 'Processing Files...' : 'Publish to Store'}
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    );
}


