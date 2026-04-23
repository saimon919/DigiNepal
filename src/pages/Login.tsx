import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { supabase } from '../lib/supabase';

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
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Ambient Effects */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="w-full max-w-[1000px] grid lg:grid-cols-2 glass-panel hud-border overflow-hidden shadow-2xl">
                <div className="scanline"></div>
                
                {/* Left: Form Content */}
                <div className="p-8 md:p-12 space-y-8 relative z-10 bg-black/40">
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:text-white transition-colors">
                            <span className="text-lg">←</span> RETURN_TO_HOME
                        </Link>
                        
                        <div className="space-y-2">
                            <h1 className="text-4xl font-display font-black text-white tracking-widest uppercase">
                                {isSignup ? 'Register_Agent' : 'Authorize_Session'}
                            </h1>
                            <p className="text-text-dim font-mono text-xs uppercase tracking-wider">
                                {isSignup ? 'Initialize your node on the DigiNepal grid.' : 'Establish secure connection to centralized marketplace.'}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded-lg text-[10px] font-mono flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                ERROR_CODE: {error.toUpperCase()}
                            </div>
                        )}

                        <div className="space-y-4">
                            {isSignup && (
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Agent_Alias</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-4 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/20"
                                        placeholder="INPUT_NAME.txt"
                                        required
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Comm_Channel</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/20"
                                    placeholder="agent@diginepal.net"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Access_Key</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/20"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-primary text-black py-4 rounded-lg font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all hover:shadow-glow active:scale-[0.98]"
                        >
                            {isSignup ? 'Register_Agent' : 'Initialize_Auth'}
                        </button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => { setIsSignup(!isSignup); setError(''); }}
                                className="text-[10px] font-black text-text-dim uppercase tracking-[0.2em] hover:text-primary transition-colors"
                            >
                                {isSignup ? 'ALREADY_HAVE_AUTH?_SIGN_IN' : "NO_CREDENTIALS?_REGISTER_NODE"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right: Telemetry Side */}
                <div className="hidden lg:flex flex-col justify-between p-12 bg-black/60 relative border-l border-white/5">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-secondary">
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-[10px] font-black tracking-widest uppercase">Encryption_Active: AES-256</span>
                        </div>
                        <h2 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                            Secure_Access<br />DigiNepal_Market
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-[8px] font-mono text-text-dim uppercase">
                                <span>Signal_Strength</span>
                                <span>100%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-full" />
                            </div>
                        </div>
                        <p className="text-[10px] text-text-dim font-mono leading-relaxed uppercase opacity-60">
                            By authenticating, you agree to follow grid protocols and comply with marketplace redistribution licenses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
