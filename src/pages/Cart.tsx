import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Minus, Plus, ShoppingBag, Upload, Clock, Terminal, Shield, Check, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

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
                    items: cart 
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
            <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="skeuo-panel p-16 space-y-10 border-primary/20 bg-deep/40 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(141,242,192,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(141,242,192,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                    
                    <div className="relative z-10 space-y-10">
                        <div className="skeuo-inset w-32 h-32 rounded-full flex items-center justify-center mx-auto border-primary/20 bg-primary/5">
                            <Clock size={56} className="text-primary animate-pulse" />
                        </div>
                        
                        <div className="space-y-6">
                            <h1 className="text-2xl sm:text-4xl md:text-7xl font-display font-black text-white tracking-tighter uppercase leading-none">
                                TRANSACTION_PENDING
                            </h1>
                            <p className="text-lg md:text-xl text-text-dim/80 max-w-2xl mx-auto font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                Your payment telemetry has been submitted for manual verification. 
                                Digital authorization will be granted once the receipt is cleared by our neural grid nodes.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
                            <Link to="/my-assets" className="skeuo-panel bg-primary text-deep px-12 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.3)]">
                                VIEW_DATA_LIBRARY
                            </Link>
                            <Link to="/store" className="skeuo-inset px-12 py-5 rounded-2xl text-primary/60 border-white/5 font-black uppercase tracking-[0.4em] text-xs hover:text-primary transition-all text-tactical">
                                RETURN_TO_GRID
                            </Link>
                        </div>
                    </div>
                </motion.div>
                
                <div className="flex items-center justify-center gap-4 text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] text-tactical">
                    <Activity size={14} className="animate-pulse" /> SYSTEM_STATUS: MONITORING_VERIFICATION
                </div>
            </div>
        );
    }

    if (step === 'payment') {
        return (
            <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-8">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 text-secondary">
                            <Zap size={16} className="animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">SECURE_PAYMENT_PROTOCOL</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-none">ESEWA_TERMINAL</h2>
                    </div>
                    <div className="skeuo-panel bg-primary/5 px-8 py-4 rounded-2xl border-primary/20 shrink-0">
                        <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] mb-1 text-tactical">Total_Payable</p>
                        <p className="text-3xl font-black text-white tracking-tighter">Rs.{total().toLocaleString()}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* QR Node */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="skeuo-panel p-4 rounded-[3rem] border-white/10 bg-white/5">
                            <div className="skeuo-inset bg-white p-8 rounded-[2.5rem] relative group overflow-hidden">
                                <img src="/esewa-qr.png" alt="eSewa QR" className="w-full h-auto mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        </div>
                        <div className="skeuo-panel p-8 rounded-[2rem] border-white/10 bg-deep/40 space-y-4">
                            <div className="flex items-center gap-4 text-primary">
                                <Terminal size={20} />
                                <h4 className="font-black text-xs uppercase tracking-[0.3em] text-tactical">TRANSFER_INSTRUCTIONS</h4>
                            </div>
                            <p className="text-sm text-text-dim/80 font-medium leading-relaxed italic">
                                1. Scan the QR code above using your eSewa mobile application.<br/>
                                2. Execute the total amount shown in the readout.<br/>
                                3. Capture a clear screenshot of the transaction receipt.<br/>
                                4. Upload the packet using the interface on the right.
                            </p>
                        </div>
                    </div>

                    {/* Upload & Submission Node */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="skeuo-panel p-10 rounded-[2.5rem] border-white/10 bg-deep/40 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xs font-black text-white uppercase tracking-[0.4em] text-tactical">RECEIPT_DATA_UPLINK</h3>
                                <div className={`relative h-72 w-full rounded-[2rem] skeuo-inset flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden group ${screenshotUrl ? 'border-primary/40' : 'border-white/5 hover:border-primary/30'}`}>
                                    <AnimatePresence mode="wait">
                                        {screenshotUrl ? (
                                            <motion.img 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                src={screenshotUrl} 
                                                className="w-full h-full object-cover opacity-80" 
                                            />
                                        ) : (
                                            <motion.div 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex flex-col items-center gap-6"
                                            >
                                                <div className="skeuo-panel p-6 rounded-2xl bg-primary/5 border-primary/20 group-hover:scale-110 transition-transform">
                                                    <Upload className="text-primary" size={32} />
                                                </div>
                                                <span className="text-[10px] font-black text-text-dim uppercase tracking-[0.4em] leading-none text-tactical">
                                                    {uploading ? 'SYNCHRONIZING_DATA...' : 'SELECT_IMAGE_FILE'}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <button
                                    disabled={!screenshotUrl || uploading}
                                    onClick={handleFinalSubmit}
                                    className={`flex-1 h-20 rounded-2xl font-black uppercase tracking-[0.5em] text-xs transition-all shadow-[0_0_30px_rgba(141,242,192,0.2)] text-tactical ${!screenshotUrl || uploading
                                        ? 'skeuo-inset text-white/20 border-white/5 cursor-not-allowed opacity-50'
                                        : 'skeuo-panel bg-primary text-deep hover:scale-[1.02]'
                                        }`}
                                >
                                    {uploading ? 'PROCESSING_AUTH...' : 'SUBMIT_TRANSACTION'}
                                </button>
                                <button 
                                    onClick={() => setStep('cart')} 
                                    className="px-10 h-20 skeuo-inset rounded-2xl text-text-dim/40 font-black uppercase tracking-[0.4em] text-[10px] hover:text-white transition-all text-tactical border-white/5"
                                >
                                    ABORT_CORE
                                </button>
                            </div>
                        </div>

                        <div className="skeuo-inset p-6 rounded-2xl border-secondary/20 bg-secondary/5 flex items-center gap-4">
                            <Shield size={20} className="text-secondary" />
                            <p className="text-[10px] font-black text-secondary/60 uppercase tracking-[0.3em] text-tactical">
                                DATA_ENCRYPTION_ACTIVE :: RSA_4096_VALIDATED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-32 px-4 text-center space-y-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="skeuo-panel p-16 border-white/10 space-y-8 bg-deep/40 rounded-[3rem]"
                >
                    <div className="skeuo-inset w-24 h-24 rounded-full flex items-center justify-center mx-auto border-white/5 bg-white/5">
                        <ShoppingBag size={40} className="text-text-dim/20" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">BUFFER_STATUS: EMPTY</h1>
                        <p className="text-base font-medium text-text-dim/60 uppercase tracking-[0.2em] italic">No digital assets detected in local procurement queue.</p>
                    </div>
                    <Link to="/store" className="inline-block bg-primary text-deep px-14 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.2)]">
                        INITIALIZE_PROCUREMENT
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-10">
                <div className="space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-primary">
                        <Terminal size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">USER_PROCUREMENT_QUEUE</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-7xl font-display font-black text-white tracking-tighter uppercase leading-none">ORDER_MANIFEST</h1>
                </div>
                <div className="skeuo-inset px-8 py-3 rounded-xl border-white/5 bg-deep/40 shrink-0">
                    <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.3em] mb-1 text-tactical text-right">ACTIVE_UNITS</p>
                    <p className="text-2xl font-black text-white tracking-tighter uppercase text-right">{cart.length} DETECTED</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-8 space-y-8">
                    {cart.map((item) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="skeuo-panel p-2 rounded-[2.5rem] border-white/10 group overflow-hidden"
                        >
                            <div className="bg-deep/40 backdrop-blur-xl rounded-[2.2rem] p-6 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
                                <div className="skeuo-inset w-full sm:w-40 h-40 rounded-[1.8rem] overflow-hidden shrink-0 border-white/5">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100" />
                                </div>
                                
                                <div className="flex-1 space-y-6 text-center sm:text-left w-full">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center sm:justify-start gap-3">
                                            <div className="skeuo-inset px-3 py-1 rounded-md bg-primary/5 border-primary/20">
                                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] text-tactical">{item.category}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-black text-2xl md:text-3xl text-white tracking-tighter uppercase leading-tight">{item.name}</h3>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-start gap-4">
                                        <span className="text-2xl font-black text-white tracking-tighter">Rs.{item.price.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-8 w-full sm:w-auto pt-6 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/5 sm:pl-10">
                                    <div className="skeuo-inset flex items-center gap-6 p-3 rounded-2xl border-white/5 bg-deep/60">
                                        <button onClick={() => decrementQuantity(item.id)} className="text-text-dim/60 hover:text-primary transition-colors p-1"><Minus size={16} /></button>
                                        <span className="font-black text-white text-lg min-w-[20px] text-center">{item.quantity}</span>
                                        <button onClick={() => addToCart(item)} className="text-text-dim/60 hover:text-primary transition-colors p-1"><Plus size={16} /></button>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.id)} 
                                        className="skeuo-inset px-6 py-3 rounded-xl bg-red-500/5 text-red-500/40 hover:text-red-500 hover:border-red-500/30 border border-white/5 transition-all text-[10px] font-black uppercase tracking-[0.3em] text-tactical"
                                    >
                                        REMOVE_NODE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="lg:col-span-4 sticky top-32 space-y-8">
                    <div className="skeuo-panel p-1 rounded-[3rem] border-primary/20 bg-primary/5">
                        <div className="bg-deep/80 backdrop-blur-2xl rounded-[3rem] p-10 space-y-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full" />
                            
                            <div className="flex items-center gap-4 text-primary">
                                <Activity size={24} className="animate-pulse" />
                                <h2 className="text-xl font-black text-white tracking-[0.4em] uppercase text-tactical">MANIFEST_SUMMARY</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-[11px] font-black text-text-dim/40 uppercase tracking-[0.3em] text-tactical">
                                    <span>SUBTOTAL_UNITS</span>
                                    <span>Rs.{total().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px] font-black text-text-dim/40 uppercase tracking-[0.3em] text-tactical">
                                    <span>TAX_CALCULATION</span>
                                    <span className="text-secondary">0.00%</span>
                                </div>
                                <div className="h-[1px] w-full bg-white/5" />
                                <div className="flex justify-between items-end pt-2">
                                    <span className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] mb-1 text-tactical">TOTAL_PAYABLE</span>
                                    <span className="text-4xl font-black text-white tracking-tighter leading-none">Rs.{total().toLocaleString()}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setStep('payment')} 
                                className="w-full h-20 skeuo-panel bg-primary text-deep rounded-2xl font-black uppercase tracking-[0.5em] text-xs hover:scale-[1.02] transition-all text-tactical shadow-[0_0_30px_rgba(141,242,192,0.3)]"
                            >
                                EXECUTE_CHECKOUT
                            </button>
                            
                            <div className="flex items-center justify-center gap-3 opacity-30">
                                <Shield size={14} className="text-secondary" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-tactical">SECURE_GRID_V4.2</span>
                            </div>
                        </div>
                    </div>

                    <div className="skeuo-inset p-8 rounded-[2.5rem] border-white/5 bg-deep/20 space-y-6">
                        <div className="flex items-center gap-3 text-text-dim/40">
                            <Check size={16} />
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-tactical">GUARANTEED_UPLINK_STABILITY</p>
                        </div>
                        <div className="flex items-center gap-3 text-text-dim/40">
                            <Check size={16} />
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-tactical">24/7_TECHNICAL_SUPPORT_ACCESS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
