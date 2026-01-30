
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const endpoint = isSignup ? '/api/signup' : '/api/login';
        const payload = isSignup ? { name, email, password } : { email, password };

        try {
            const res = await fetch(`http://localhost:3001${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                login(data.user);
                // Correct redirection based on role
                if (data.user.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                setError(data.message || 'Authentication failed');
            }
        } catch (err) {
            setError('Connection error. Is the server running?');
        }
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left: Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-2">
                        <Link to="/" className="text-sm font-bold text-primary uppercase tracking-wide">← Back to Home</Link>
                        <h1 className="text-4xl font-display font-bold">
                            {isSignup ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-text-dim">
                            {isSignup ? 'Join DigiNepal today.' : 'Sign in to access your account.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && <div className="p-3 bg-red-50 text-red-500 rounded-lg text-sm">{error}</div>}

                        {isSignup && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-4 rounded-xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 rounded-xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-4 rounded-xl bg-bg border-none focus:ring-2 focus:ring-primary/20 outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                            {isSignup ? 'Create Account' : 'Sign In'}
                        </button>

                        <div className="text-center mt-6">
                            <button
                                type="button"
                                onClick={() => { setIsSignup(!isSignup); setError(''); }}
                                className="text-primary font-medium hover:underline"
                            >
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block relative overflow-hidden bg-bg">
                <img
                    src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1600&q=80"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Art"
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>
        </div>
    );
}
