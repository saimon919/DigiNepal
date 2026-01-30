
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Download, ShoppingBag, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MyAssets() {
    const { user } = useAuthStore();
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3001/api/orders/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
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
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-display font-bold mb-10 tracking-tight">My Digital Assets</h1>

            <div className="space-y-12">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-gray-50 relative overflow-hidden">
                        {/* Order Header */}
                        <div className="flex flex-col md:flex-row justify-between mb-8 pb-6 border-b border-dashed gap-4">
                            <div>
                                <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Order ID</p>
                                <p className="font-mono text-sm">#{order.id.toString().slice(-6)}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Status</p>
                                <div className="flex items-center gap-2">
                                    {order.status === 'Approved' ? (
                                        <span className="flex items-center gap-1.5 text-green-500 font-bold text-xs">
                                            <CheckCircle size={14} /> Payment Verified
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-orange-400 font-bold text-xs uppercase tracking-tighter">
                                            <Clock size={14} /> Verification Pending...
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="md:text-right">
                                <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Total Paid</p>
                                <p className="font-bold text-primary">${order.total?.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {order.items.map((item: any, idx: number) => (
                                <div key={idx} className="bg-bg rounded-3xl p-5 group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md">
                                            <img src={item.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-sm truncate">{item.name}</p>
                                            <p className="text-[10px] font-black uppercase text-text-dim">{item.category}</p>
                                        </div>
                                    </div>

                                    {order.status === 'Approved' ? (
                                        <a
                                            href={item.downloadUrl}
                                            className="flex items-center justify-center gap-3 w-full bg-primary text-white py-3 px-4 rounded-xl font-bold text-xs shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download size={16} /> Download Asset
                                        </a>
                                    ) : (
                                        <button disabled className="flex items-center justify-center gap-3 w-full bg-gray-200 text-gray-400 py-3 px-4 rounded-xl font-bold text-xs cursor-not-allowed">
                                            <Clock size={16} /> Locked (Pending)
                                        </button>
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
