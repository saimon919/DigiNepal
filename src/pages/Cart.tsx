import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Trash2, Minus, Plus, ShoppingBag, Upload, Clock } from 'lucide-react';
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
            <div className="max-w-4xl mx-auto py-12 px-4 md:py-20 text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <Clock size={40} className="md:w-12 md:h-12" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-display font-black text-primary leading-tight">ORDER PENDING</h1>
                    <p className="text-sm md:text-xl text-text-dim max-w-lg mx-auto px-4">
                        Your payment screenshot has been submitted! We are verifying it manually.
                        Once verified, your digital assets will be available in your library.
                    </p>
                </div>
                <div className="flex justify-center gap-4 px-4">
                    <Link to="/store" className="w-full sm:w-auto bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-sm md:text-lg hover:gradient-blue transition-all shadow-xl shadow-primary/20">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (step === 'payment') {
        return (
            <div className="max-w-3xl mx-auto py-6 md:py-12 px-4">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-soft border border-gray-100 space-y-6 md:space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl md:text-3xl font-display font-black">Scan & Pay with eSewa</h2>
                        <p className="text-xs md:text-sm text-text-dim">Pay the total amount and upload the screenshot below.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center justify-center bg-bg p-4 md:p-8 rounded-[2rem]">
                        <div className="w-full max-w-[240px] md:w-64 bg-white p-3 md:p-4 rounded-3xl shadow-lg border-2 border-primary/10">
                            <img src="/esewa-qr.png" alt="eSewa QR" className="w-full h-auto rounded-xl" />
                        </div>
                        <div className="space-y-4 text-center md:text-left w-full">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-text-dim tracking-widest">Payable Amount</p>
                                <p className="text-3xl md:text-4xl font-black text-primary">${total().toFixed(2)}</p>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-xs md:text-sm font-bold text-text-main">Upload Payment Screenshot</label>
                                <div className={`relative h-32 md:h-40 w-full max-w-[320px] mx-auto md:mx-0 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden ${screenshotUrl ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:border-primary/40'}`}>
                                    {screenshotUrl ? (
                                        <img src={screenshotUrl} className="w-full h-full object-cover" />
                                    ) : (
                                        <>
                                            <Upload className="text-text-dim mb-2" size={28} />
                                            <span className="text-[10px] md:text-xs font-bold text-text-dim">{uploading ? 'Uploading...' : 'Click to Upload Screenshot'}</span>
                                        </>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            disabled={!screenshotUrl || uploading}
                            onClick={handleFinalSubmit}
                            title={!screenshotUrl ? "Please upload your payment screenshot first" : ""}
                            className={`w-full py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl transition-all shadow-xl ${!screenshotUrl || uploading
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-primary text-white shadow-primary/20 hover:scale-[1.02]'
                                }`}
                        >
                            {uploading ? 'Processing...' : 'Submit Order'}
                        </button>
                        <button onClick={() => setStep('cart')} className="text-xs md:text-sm text-text-dim font-bold hover:text-primary transition-colors py-2">Go Back to Cart</button>
                    </div>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-bg rounded-full flex items-center justify-center mx-auto text-text-dim border">
                    <ShoppingBag size={40} />
                </div>
                <h1 className="text-3xl font-display font-bold">Your cart is empty</h1>
                <p className="text-text-dim text-lg">Looks like you haven't added any digital assets yet.</p>
                <Link to="/store" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 hover:bg-primary/90 transition-all">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-display font-bold mb-10 tracking-tight">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm flex items-center gap-6 border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="w-28 h-28 rounded-2xl overflow-hidden bg-bg shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                                <p className="text-text-dim text-sm mb-3 uppercase tracking-wider font-semibold">{item.category}</p>
                                <p className="text-primary font-bold text-lg">${item.price}</p>
                            </div>
                            <div className="flex flex-col items-end gap-6">
                                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 p-2 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={20} /></button>
                                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-1 border">
                                    <button onClick={() => decrementQuantity(item.id)} className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white text-text-dim"><Minus size={16} /></button>
                                    <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white text-text-dim"><Plus size={16} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-gray-100 sticky top-30 text-center">
                        <h2 className="text-2xl font-bold mb-8 font-display">Summary</h2>
                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between text-text-dim font-medium"><span>Subtotal</span><span>${total().toFixed(2)}</span></div>
                            <div className="pt-6 border-t border-dashed flex justify-between font-bold text-2xl text-primary"><span>Total</span><span>${total().toFixed(2)}</span></div>
                        </div>
                        <button onClick={() => setStep('payment')} className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                            Complete Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
