import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, Terminal, Shield, Zap, Globe } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const footerLinks = {
    marketplace: [
        { label: 'Browse Store', path: '/store' },
        { label: 'Free Resources', path: '/free-resources' },
        { label: 'Creator Program', path: '/about' },
        { label: '3D Models', path: '/store?category=3D' },
    ],
    resources: [
        { label: 'Education Center', path: '/guides' },
        { label: 'Unity Tutorials', path: '/guides?filter=unity' },
        { label: 'AI Tools Guide', path: '/guides?filter=ai' },
        { label: 'Digital Assets 101', path: '/guides' },
    ],
    company: [
        { label: 'Our Mission', path: '/about' },
        { label: 'Contact Support', path: '/contact' },
        { label: 'User Dashboard', path: '/my-assets' },
    ],
    legal: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Use', path: '/terms' },
        { label: 'Copyright / DMCA', path: '/dmca' },
    ],
};

export default function Layout() {
    const location = useLocation();
    const { user, isAuthenticated } = useAuthStore();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative bg-bg text-text-main scanline-container">
            {/* HUD Scanline Overlay */}
            <div className="scanline-moving" />
            
            {/* Global HUD Ambient Effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
            </div>

            {/* Navbar: HUD Interface Bar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none"
            >
                <div className="max-w-7xl mx-auto flex justify-center">
                    <motion.div
                        animate={{
                            width: '100%',
                            backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.7)',
                            borderColor: scrolled ? 'rgba(34, 197, 94, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                        }}
                        className="backdrop-blur-xl border rounded-[2rem] px-4 md:px-8 py-3 flex items-center justify-between shadow-glass pointer-events-auto transition-colors duration-500"
                    >
                        {/* Status Readout Left */}
                        <div className="hidden lg:flex items-center gap-4 mr-6">
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary/60">System.Status</span>
                                <span className="text-[10px] font-mono font-bold text-primary animate-pulse">ACTIVE_ONLINE</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10" />
                        </div>

                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center gap-3 group shrink-0">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all" />
                                <img src="/logo.png" alt="DigiNepal" className="relative w-8 h-8 md:w-10 md:h-10 object-contain rounded-xl invert brightness-200" />
                            </div>
                            <span className="font-display font-black text-lg md:text-xl tracking-tighter text-white group-hover:text-primary transition-colors">DIGINEPAL</span>
                        </Link>

                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-1 mx-8 bg-white/5 p-1 rounded-2xl border border-white/5">
                            {[
                                { name: 'DASHBOARD', path: '/' },
                                { name: 'STORE', path: '/store' },
                                { name: 'RESOURCES', path: '/free-resources' },
                                { name: 'GUIDES', path: '/guides' },
                            ].map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`relative px-5 py-2 rounded-xl text-[11px] font-black tracking-widest transition-all ${isActive ? 'text-primary' : 'text-text-dim hover:text-white'}`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active"
                                                className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl z-0"
                                            />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <Link to="/cart" className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                                <ShoppingBag size={18} className="text-text-dim group-hover:text-primary transition-colors" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-bg text-[8px] font-black rounded-full flex items-center justify-center border border-bg shadow-glow-strong">2</span>
                            </Link>

                            {isAuthenticated ? (
                                <Link to={user?.role === 'admin' ? '/admin' : '/my-assets'} className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-bg transition-all">
                                    <UserIcon size={18} />
                                </Link>
                            ) : (
                                <Link to="/login" className="px-6 py-2.5 rounded-xl bg-primary text-bg text-xs font-black tracking-widest hover:shadow-glow-strong hover:scale-105 transition-all active:scale-95">
                                    INITIALIZE
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Main Application Interface */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 pt-32 pb-20 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* HUD Information Terminal (Footer) */}
            <footer className="relative mt-auto border-t border-white/5 bg-surface/50 backdrop-blur-xl pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        {/* Brand Interface */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <Link to="/" className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                                        <Terminal size={20} className="text-primary" />
                                    </div>
                                    <span className="font-display font-black text-2xl tracking-tighter text-white">DIGINEPAL_CORE</span>
                                </Link>
                                <p className="text-text-dim text-sm leading-relaxed max-w-sm">
                                    Nepal's advanced digital asset distribution nodes. Providing high-fidelity 3D models, AI-optimized tools, and creative scripts for the global development grid.
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                                    <Shield size={14} className="text-primary" />
                                    <span className="text-[10px] font-mono font-bold uppercase text-text-dim">Secured.v4</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                                    <Zap size={14} className="text-secondary" />
                                    <span className="text-[10px] font-mono font-bold uppercase text-text-dim">Latency: 14ms</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                                    <Globe size={14} className="text-accent" />
                                    <span className="text-[10px] font-mono font-bold uppercase text-text-dim">Region: NP-KTM</span>
                                </div>
                            </div>
                        </div>

                        {/* Link Terminals */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="space-y-6">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{title}</h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="text-sm text-text-dim hover:text-white transition-colors flex items-center gap-2 group">
                                                <span className="w-1.5 h-[1px] bg-white/20 group-hover:w-3 group-hover:bg-primary transition-all" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Meta Readout */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-mono text-text-light uppercase tracking-widest leading-none">© {new Date().getFullYear()} DIGINEPAL OPS. ALL PARAMETERS RESERVED.</p>
                            <p className="text-[9px] font-mono text-text-light/50 tracking-tighter">PROJECT_ID: DN-779-ALPHA | BUILT_IN_POKHARA_NP</p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                             <div className="flex items-center gap-2 text-[10px] font-bold text-primary px-4 py-2 border border-primary/20 rounded-full bg-primary/5">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                NODES_OPERATIONAL
                             </div>
                             <div className="hidden md:flex items-center gap-4">
                                <a href="#" className="text-text-dim hover:text-primary transition-colors font-mono text-[10px]">X.COM</a>
                                <a href="#" className="text-text-dim hover:text-primary transition-colors font-mono text-[10px]">DISCORD</a>
                             </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

