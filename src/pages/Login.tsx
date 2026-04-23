import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Terminal, Activity, ArrowRight, UserPlus, LogIn, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const setAuth = useAuthStore((state) => state.setAuth);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (isSignup) {
                const { data, error: signupError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: { name }
                    }
                });

                if (signupError) throw signupError;
                if (data.user) {
                    const isAdmin = data.user.email === 'admin@diginepal.com';
                    setAuth({
                        id: data.user.id,
                        email: data.user.email || '',
                        role: isAdmin ? 'admin' : 'user',
                        name: name
                    });
                    navigate(isAdmin ? '/admin' : '/');
                }
            } else {
                const { data, error: loginError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (loginError) throw loginError;
                if (data.user) {
                    const isAdmin = data.user.email === 'admin@diginepal.com';
                    setAuth({
                        id: data.user.id,
                        email: data.user.email || '',
                        role: isAdmin ? 'admin' : 'user',
                        name: data.user.user_metadata?.name || data.user.email?.split('@')[0] || 'User'
                    });
                    navigate(isAdmin ? '/admin' : '/');
                }
            }
        } catch (err: any) {
            setError(err.message || 'Authentication failed');
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 py-20 overflow-hidden">
            <Helmet>
                <title>{isSignup ? 'Register Agent' : 'Authorize Session'} | DigiNepal</title>
            </Helmet>

            {/* Background Ambient HUD Elements */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(141,242,192,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(141,242,192,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[1100px] skeuo-panel p-2 rounded-[4rem] border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                <div className="grid lg:grid-cols-12 bg-deep/60 backdrop-blur-3xl rounded-[3.8rem] overflow-hidden">
                    
                    {/* Left: Tactical Form Node */}
                    <div className="lg:col-span-7 p-8 md:p-16 space-y-12 relative z-10">
                        <div className="space-y-8">
                            <Link to="/" className="skeuo-inset inline-flex items-center gap-4 px-5 py-2.5 rounded-xl text-primary/60 hover:text-primary transition-all font-black uppercase tracking-[0.4em] text-[10px] group text-tactical border-white/5">
                                <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                                RETURN_TO_HOME_GRID
                            </Link>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <Shield size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-tactical">AUTHORIZATION_REQUIRED</span>
                                </div>
                                <h1 className="text-2xl sm:text-4xl md:text-7xl font-display font-black text-white tracking-tighter uppercase leading-none">
                                    {isSignup ? 'REGISTER_AGENT' : 'SECURE_LOGIN'}
                                </h1>
                                <p className="text-lg text-text-dim/60 font-medium uppercase tracking-widest italic border-l-4 border-primary/20 pl-8">
                                    {isSignup ? 'Initialize your unique node signature on the DigiNepal grid.' : 'Establish secure uplink to the tactical asset marketplace.'}
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <AnimatePresence mode="wait">
                                {error && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="skeuo-panel p-6 bg-secondary/5 border-secondary/30 rounded-2xl flex items-center gap-4"
                                    >
                                        <div className="skeuo-inset p-2 rounded-lg bg-secondary/10">
                                            <X size={18} className="text-secondary" />
                                        </div>
                                        <div className="space-y-1 min-w-0">
                                            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] text-tactical">ERROR_CODE_DETECTED</p>
                                            <p className="text-sm font-medium text-white/80 truncate">{error.toUpperCase()}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-6">
                                {isSignup && (
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] ml-4 text-tactical">Agent_Alias</label>
                                        <div className="relative">
                                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40">
                                                <UserPlus size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full h-16 skeuo-inset pl-16 pr-8 rounded-2xl text-white font-black tracking-widest text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40"
                                                placeholder="IDENTIFIER_NAME"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] ml-4 text-tactical">Comm_Channel</label>
                                    <div className="relative">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40">
                                            <Terminal size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full h-16 skeuo-inset pl-16 pr-8 rounded-2xl text-white font-black tracking-widest text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40"
                                            placeholder="AGENT@GRID.NODAL"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em] ml-4 text-tactical">Access_Key</label>
                                    <div className="relative">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full h-16 skeuo-inset pl-16 pr-8 rounded-2xl text-white font-black tracking-widest text-sm focus:border-primary/40 transition-all outline-none border-white/5 bg-deep/40"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <button 
                                    type="submit" 
                                    className="w-full h-20 skeuo-panel bg-primary text-deep rounded-2xl font-black uppercase tracking-[0.6em] text-xs hover:scale-[1.02] transition-all text-tactical shadow-[0_0_40px_rgba(141,242,192,0.3)] flex items-center justify-center gap-4"
                                >
                                    {isSignup ? <UserPlus size={20} /> : <LogIn size={20} />}
                                    {isSignup ? 'INITIALIZE_REGISTER' : 'AUTHORIZE_UPLINK'}
                                </button>

                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() => { setIsSignup(!isSignup); setError(''); }}
                                        className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.4em] hover:text-primary transition-colors text-tactical"
                                    >
                                        {isSignup ? 'ALREADY_AUTHORIZED?_SIGN_IN' : "NO_CREDENTIALS?_REQUEST_CLEARANCE"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right: Telemetry Sidebar */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-16 bg-black/40 relative border-l border-white/5">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-secondary">
                                <div className="skeuo-panel p-3 rounded-xl bg-secondary/5 border-secondary/20">
                                    <Activity size={24} className="animate-pulse" />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-tactical">Encryption_Core: ACTIVE</span>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-white leading-none uppercase tracking-tighter">
                                    DIGINEPAL<br /><span className="text-primary">NEURAL_GRID</span>
                                </h2>
                                <p className="text-sm text-text-dim/60 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                    Maintaining absolute integrity across all distributed asset modules and cryptographic transaction signatures.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="skeuo-panel p-8 rounded-3xl bg-deep/40 border-white/5 space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[9px] font-black text-primary/40 uppercase tracking-[0.3em] text-tactical">
                                        <span>Signal_Stability</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="skeuo-inset h-3 w-full rounded-full overflow-hidden p-[2px]">
                                        <div className="h-full bg-primary rounded-full shadow-[0_0_10px_#8df2c0]" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[9px] font-black text-secondary/40 uppercase tracking-[0.3em] text-tactical">
                                        <span>Core_Load</span>
                                        <span>12.4%</span>
                                    </div>
                                    <div className="skeuo-inset h-3 w-full rounded-full overflow-hidden p-[2px]">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: '12.4%' }}
                                            className="h-full bg-secondary rounded-full shadow-[0_0_10px_#f28dbd]" 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-[9px] text-text-dim/30 font-black leading-relaxed uppercase tracking-[0.3em] text-tactical">
                                By authenticating, you agree to comply with marketplace redistribution protocols and individual asset licensing agreements.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
