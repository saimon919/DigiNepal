
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden">
            {/* Background Dotted Map Pattern (Simulated with radial gradient) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#3E517A 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center">
                <span className="text-secondary font-bold tracking-widest uppercase mb-4">Get in Touch</span>
                <h1 className="text-5xl font-display font-bold text-primary mb-16 text-center">CONTACT US</h1>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Form */}
                    <div className="p-10 md:p-14">
                        <h2 className="text-2xl font-bold mb-2">SEND US A MESSAGE</h2>
                        <p className="text-text-dim text-sm mb-8">Do you have a question or complaint? We're here to help.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-primary uppercase">First Name</label>
                                    <input className="w-full bg-bg border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Enter first name" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-primary uppercase">Last Name</label>
                                    <input className="w-full bg-bg border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Enter last name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-primary uppercase">Email</label>
                                    <input className="w-full bg-bg border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="Enter email" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-primary uppercase">Phone</label>
                                    <input className="w-full bg-bg border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none" placeholder="+977" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary uppercase">Message</label>
                                <textarea className="w-full bg-bg border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none h-32 resize-none" placeholder="Write your message..." />
                            </div>

                            <button className="bg-primary text-white py-4 px-8 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 w-full sm:w-auto">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Card */}
                    <div className="bg-primary text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div>
                            <h3 className="text-2xl font-bold mb-8">Hi! We are always here to help you.</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <Phone className="text-secondary shrink-0" />
                                    <div>
                                        <p className="text-xs text-white/60 mb-1 font-bold uppercase">Hotline</p>
                                        <p className="font-bold">+977 9812345678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <Mail className="text-secondary shrink-0" />
                                    <div>
                                        <p className="text-xs text-white/60 mb-1 font-bold uppercase">Email</p>
                                        <p className="font-bold">support@diginepal.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <MapPin className="text-secondary shrink-0" />
                                    <div>
                                        <p className="text-xs text-white/60 mb-1 font-bold uppercase">Location</p>
                                        <p className="font-bold">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
