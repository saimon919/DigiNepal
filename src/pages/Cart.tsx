import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Minus, Plus, ShoppingBag, Upload, Clock, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Cart() {
    const { cart, removeFromCart, addToCart, decrementQuantity, total, clearCart } = useCartStore();
    const { user } = useAuthStore();

    const [step, setStep] = useState<'cart' | 'payment' | 'completed'>('cart');
    const [uploading, setUploading] = useState(false);
    const [screenshotUrl, setScreenshotUrl] = useState('');

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setUploading(true);
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `receipt-${Date.now()}.${fileExt}`;

        try {
            const { error: uploadError } = await supabase.storage
                .from('assets')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('assets')
                .getPublicUrl(fileName);

            setScreenshotUrl(publicUrl);
        } catch (err: any) {
            alert("Upload failed: " + err.message);
        } finally {
            setUploading(false);
        }
    };

    const handleFinalSubmit = async () => {
        if (!screenshotUrl) {
            alert("Please upload your payment screenshot first!");
            return;
        }

        setUploading(true);
        try {
            const { error } = await supabase
                .from('orders')
                .insert([{
                    customer_email: user?.email || 'guest@example.com',
                    total: total(),
                    screenshot: screenshotUrl,
                    status: 'Pending',
                    items: cart // Saving items directly in orders table
                }]);

            if (error) throw error;

            setStep('completed');
            clearCart();
        } catch (err: any) {
            console.error("Submission Error:", err);
            alert("Failed to submit order: " + err.message);
        } finally {
            setUploading(false);
        }
    };

    if (step === 'completed') {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center space-y-10 animate-in zoom-in-95 duration-700 relative">
                <div className="scanline" />
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-none border border-primary/30 flex items-center justify-center mx-auto relative group">
                    <Clock size={48} className="animate-pulse" />
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-[0.2em] uppercase">
                        TRANSACTION_PENDING
                    </h1>
                    <p className="text-sm md:text-lg text-text-dim max-w-xl mx-auto font-mono uppercase tracking-widest leading-relaxed">
                        Your payment telemetry has been submitted for manual verification. 
                        Digital authorization will be granted once the eSewa receipt is cleared.
                    </p>
                </div>
                <div className="pt-10 flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/my-assets" className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-glow">
                        VIEW_DATA_LIBRARY
                    </Link>
                    <Link to="/store" className="px-10 py-5 bg-black/40 border border-primary/30 text-primary font-black uppercase tracking-widest text-xs hover:border-primary transition-all">
                        DEPLOY_MARKET_NODE
                    </Link>
                </div>
            </div>
        );
    }

    if (step === 'payment') {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4">
                <div className="glass-panel hud-border p-8 md:p-12 space-y-10 relative overflow-hidden">
                    <div className="scanline" />
                    
                    <div className="text-center space-y-4 relative z-10">
                        <div className="flex items-center justify-center gap-3 text-secondary mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Secure_Payment_Protocol</span>
                        </div>
                        <h2 className="text-4xl font-display font-black text-white tracking-widest uppercase">ESEWA_TERMINAL</h2>
                        <p className="text-xs font-mono text-text-dim uppercase tracking-widest">Execute transfer and upload receipt screenshot below.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center justify-center bg-black/60 p-8 md:p-12 border border-white/5 relative z-10">
                        <div className="w-full max-w-[280px] bg-white p-4 rounded-none border border-primary relative mx-auto group">
                            <img src="/esewa-qr.png" alt="eSewa QR" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
                        </div>

                        <div className="space-y-8 w-full">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black uppercase text-primary tracking-[0.3em]">Total_Payable_Value</p>
                                <p className="text-5xl font-black text-white tracking-tighter">Rs. {total().toLocaleString()}</p>
                            </div>
                            
                            <div className="space-y-4">
                                <label className="block text-[10px] font-black text-text-dim uppercase tracking-widest">Awaiting_Receipt_Upload</label>
                                <div className={`relative h-48 w-full rounded-none border border-dashed flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden ${screenshotUrl ? 'border-primary bg-primary/5' : 'border-white/10 bg-black/40 hover:border-primary/50'}`}>
                                    {screenshotUrl ? (
                                        <img src={screenshotUrl} className="w-full h-full object-cover opacity-60" />
                                    ) : (
                                        <div className="flex flex-col items-center gap-4">
                                            <Upload className="text-primary animate-bounce" size={32} />
                                            <span className="text-[10px] font-black text-text-dim uppercase tracking-widest leading-none">
                                                {uploading ? 'UPLOADING_DATA...' : 'SELECT_IMAGE_FILE'}
                                            </span>
                                        </div>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-6 relative z-10">
                        <button
                            disabled={!screenshotUrl || uploading}
                            onClick={handleFinalSubmit}
                            className={`flex-1 py-6 font-black uppercase tracking-[0.4em] text-sm transition-all ${!screenshotUrl || uploading
                                ? 'bg-white/5 text-white/20 border border-white/10 cursor-not-allowed'
                                : 'bg-primary text-black hover:bg-white hover:shadow-glow'
                                }`}
                        >
                            {uploading ? 'PROCESSING_AUTH...' : 'SUBMIT_TRANSACTION'}
                        </button>
                        <button 
                            onClick={() => setStep('cart')} 
                            className="px-10 py-6 bg-black/40 border border-white/10 text-text-dim font-black uppercase tracking-widest text-[10px] hover:text-white transition-all"
                        >
                            ABORT_PROCESS
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-32 text-center space-y-8 animate-in fade-in duration-1000">
                <div className="w-24 h-24 bg-black/40 rounded-none border border-white/5 flex items-center justify-center mx-auto text-text-dim relative">
                    <ShoppingBag size={48} className="opacity-20" />
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-display font-black text-white tracking-widest uppercase">CART_STATUS: EMPTY</h1>
                    <p className="text-sm font-mono text-text-dim uppercase tracking-widest max-w-xs mx-auto">No digital assets detected in local buffer storage.</p>
                </div>
                <Link to="/store" className="inline-block bg-primary text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-glow">
                    INITIATE_PROCUREMENT
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex items-end justify-between mb-12 gap-8 border-b border-white/5 pb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Terminal size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Module::User_Cart</span>
                    </div>
                    <h1 className="text-5xl font-display font-black text-white tracking-widest uppercase leading-none">ORDER_MANIFEST</h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[8px] font-mono text-text-dim uppercase mb-1">Items_Detected</p>
                    <p className="text-2xl font-black text-white tracking-widest uppercase">{cart.length} UNITS</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="glass-panel p-6 flex flex-col sm:flex-row items-center gap-8 relative group hover:border-primary/40 transition-all duration-500 overflow-hidden">
                            <div className="scanline" />
                            
                            <div className="w-full sm:w-32 h-32 overflow-hidden bg-black/60 border border-white/5 relative group-hover:border-primary/20 shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            
                            <div className="flex-1 space-y-4 text-center sm:text-left w-full">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center sm:justify-start gap-2">
                                        <span className="text-[8px] font-mono text-primary py-0.5 px-2 bg-primary/10 border border-primary/20 rounded-full">{item.category}</span>
                                    </div>
                                    <h3 className="font-black text-xl text-white tracking-widest uppercase group-hover:text-primary transition-colors">{item.name}</h3>
                                </div>
                                <p className="text-secondary font-black tracking-[0.2em] text-lg">Rs. {item.price.toLocaleString()}</p>
                            </div>

                            <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-6 w-full sm:w-auto pt-6 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/5 sm:pl-8">
                                <div className="flex items-center gap-4 bg-black/40 border border-white/5 p-2 px-3">
                                    <button onClick={() => decrementQuantity(item.id)} className="text-text-dim hover:text-white"><Minus size={14} /></button>
                                    <span className="font-mono font-black text-white text-sm w-4 text-center">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="text-text-dim hover:text-white"><Plus size={14} /></button>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="p-3 bg-red-500/10 text-red-500/40 hover:text-red-500 hover:bg-red-500/20 border border-red-500/20 transition-all text-xs font-black uppercase tracking-widest"
                                >
                                    REMOVE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="glass-panel hud-border p-8 py-10 space-y-10 sticky top-32 bg-black/40 text-center">
                        <div className="scanline" />
                        <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase relative z-10">SUMMARY</h2>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="flex justify-between items-center text-[10px] font-black font-mono text-text-dim uppercase tracking-[0.2em]">
                                <span>NET_VALUE</span>
                                <span>Rs. {total().toLocaleString()}</span>
                            </div>
                            <div className="h-[1px] w-full bg-white/5 mt-4" />
                            <div className="flex justify-between items-end pt-4 font-black">
                                <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-1">TOTAL_REQS</span>
                                <span className="text-3xl text-white tracking-widest">Rs. {total().toLocaleString()}</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => setStep('payment')} 
                            className="w-full bg-primary text-black py-6 font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all hover:shadow-glow relative z-10"
                        >
                            EXECUTE_CHECKOUT
                        </button>
                        
                        <div className="flex items-center justify-center gap-2 pt-4 opacity-30 relative z-10">
                            <Shield size={12} className="text-secondary" />
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest">Secure_Protocol_v2.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
