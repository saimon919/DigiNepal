import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, Terminal, Shield, Zap, Globe, Activity, LayoutDashboard, Database, BookOpen, FolderArchive } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';

const footerLinks = {
    MARKETPLACE: [
        { label: 'Browse Store', path: '/store' },
        { label: 'Free Resources', path: '/free-resources' },
        { label: 'Affiliate Deals', path: '/deals' },
        { label: 'Asset Library', path: '/store' },
    ],
    RESOURCES: [
        { label: 'Developer Guides', path: '/guides' },
        { label: 'Unity Tutorials', path: '/guides' },
        { label: 'AI in Game Dev', path: '/guides' },
        { label: 'Asset Optimization', path: '/guides' },
    ],
    COMPANY: [
        { label: 'About Us', path: '/about' },
        { label: 'Contact Support', path: '/contact' },
        { label: 'My Dashboard', path: '/my-assets' },
    ],
    LEGAL: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'DMCA Notice', path: '/dmca' },
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

    const mobileNavItems = [
        { name: 'HOME', path: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'STORE', path: '/store', icon: <ShoppingBag size={20} /> },
        { name: 'LIBRARY', path: '/my-assets', icon: <Database size={20} /> },
        { name: 'GUIDES', path: '/guides', icon: <BookOpen size={20} /> },
        { name: 'FREE', path: '/free-resources', icon: <FolderArchive size={20} /> },
        { name: 'DEALS', path: '/deals', icon: <Zap size={20} /> },
    ];

    return (
        <div className="min-h-screen flex flex-col relative bg-deep text-text-main scanline-container overflow-x-hidden selection:bg-primary selection:text-deep">
            {/* HUD Scanline & Noise Overlays */}
            <div className="scanline-moving pointer-events-none" />
            
            {/* Global HUD Ambient Effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Navbar: Tactical Command Console */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 md:pt-8 pointer-events-none"
            >
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`skeuo-panel p-1 rounded-[2rem] transition-all duration-700 pointer-events-auto overflow-hidden ${scrolled ? 'scale-[0.98] shadow-[0_30px_60px_rgba(0,0,0,0.5)]' : ''}`}
                    >
                        <div className="bg-deep/40 backdrop-blur-3xl rounded-[1.9rem] px-4 md:px-10 py-3 flex items-center justify-between border border-white/5">
                            {/* Left: System Status (Hidden on Mobile) */}
                            <div className="hidden xl:flex items-center gap-6">
                                <div className="skeuo-inset px-4 py-2 rounded-xl flex items-center gap-3 bg-deep/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#8df2c0] animate-pulse" />
                                    <span className="text-[9px] font-black font-mono text-primary/80 tracking-[0.4em] uppercase text-tactical">GRID_STABLE</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-dim/20">
                                    <Activity size={14} className="animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-tactical">0.04ms_LATENCY</span>
                                </div>
                            </div>

                            {/* Center: Branding */}
                            <Link to="/" className="flex items-center gap-4 group shrink-0">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 skeuo-panel rounded-2xl flex items-center justify-center border-primary/20 bg-deep/40 group-hover:border-primary/50 transition-all overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    <Terminal size={24} className="relative text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display font-black text-xl md:text-3xl tracking-tighter text-white group-hover:text-primary transition-colors leading-none">DIGINEPAL</span>
                                    <span className="text-[9px] font-black text-primary/40 tracking-[0.5em] uppercase text-tactical">CORE_TERMINAL</span>
                                </div>
                            </Link>

                            {/* Right: Actions (Simplified for Mobile) */}
                            <div className="flex items-center gap-6">
                                {/* Desktop Nav */}
                                <nav className="hidden md:flex items-center gap-2 skeuo-inset p-1.5 rounded-2xl bg-deep/40">
                                    {[
                                        { name: 'DASHBOARD', path: '/' },
                                        { name: 'STORE', path: '/store' },
                                        { name: 'RESOURCES', path: '/free-resources' },
                                        { name: 'DEALS', path: '/deals' },
                                        { name: 'GUIDES', path: '/guides' },
                                    ].map((item) => {
                                        const isActive = location.pathname === item.path;
                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className={`relative px-6 py-2.5 rounded-xl text-[10px] font-black tracking-[0.3em] transition-all text-tactical ${isActive ? 'text-primary' : 'text-text-dim/60 hover:text-white'}`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="nav-active-pill"
                                                        className="absolute inset-0 skeuo-panel bg-primary/10 border-primary/30 rounded-xl z-0"
                                                    />
                                                )}
                                                <span className="relative z-10">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="flex items-center gap-2 md:gap-4">
                                    <Link to="/cart" className="relative skeuo-panel p-2.5 md:p-3.5 rounded-xl border-white/5 hover:border-primary/40 transition-all group hover:scale-105 active:scale-95 bg-deep/40 shadow-xl">
                                        <ShoppingBag size={18} className="text-text-dim/60 group-hover:text-primary transition-colors" />
                                        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary text-deep text-[8px] md:text-[10px] font-black rounded-full flex items-center justify-center border-2 border-deep shadow-[0_0_15px_var(--neon-glow)]">2</span>
                                    </Link>

                                    {isAuthenticated ? (
                                        <Link 
                                            to={user?.role === 'admin' ? '/admin' : '/my-assets'} 
                                            className="w-10 h-10 md:w-12 md:h-12 skeuo-panel rounded-xl flex items-center justify-center border-secondary/20 bg-deep/40 text-secondary hover:bg-secondary hover:text-deep transition-all hover:scale-105 active:scale-95 shadow-xl"
                                        >
                                            <UserIcon size={18} strokeWidth={2.5} />
                                        </Link>
                                    ) : (
                                        <Link to="/login" className="skeuo-panel bg-primary text-deep px-5 md:px-8 py-2.5 md:py-3.5 rounded-xl text-[9px] md:text-[10px] font-black tracking-[0.4em] hover:shadow-[0_0_30px_var(--neon-glow)] hover:scale-105 transition-all active:scale-95 text-tactical">
                                            <span className="hidden sm:inline">INITIALIZE</span>
                                            <span className="sm:hidden">GO</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Dock (Bottom) */}
            <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
            >
                <div className="skeuo-panel p-1 rounded-[2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                    <div className="bg-deep/60 backdrop-blur-3xl rounded-[1.9rem] px-2 py-2 flex items-center justify-around border border-white/5">
                        {mobileNavItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link 
                                    key={item.name}
                                    to={item.path}
                                    className={`relative flex flex-col items-center gap-1 p-3 transition-all ${isActive ? 'text-primary' : 'text-text-dim/40'}`}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="mobile-nav-active"
                                            className="absolute inset-0 bg-primary/5 rounded-2xl border border-primary/20"
                                        />
                                    )}
                                    <div className={`relative z-10 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(141,242,192,0.5)]' : ''}`}>
                                        {item.icon}
                                    </div>
                                    <span className="relative z-10 text-[7px] font-black tracking-[0.2em] text-tactical">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Main Application Interface */}
            <main className="flex-1 w-full max-w-[1440px] mx-auto pt-32 pb-32 md:pt-44 md:pb-32 relative z-10 px-4 md:px-0 overflow-x-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Breadcrumbs />
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Tactical Information Console (Footer) */}
            <footer className="relative mt-auto border-t border-white/5 bg-deep/40 backdrop-blur-3xl pt-24 pb-24 md:pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="responsive-grid mb-24 gap-16">
                        {/* Core Brand Readout */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="space-y-6">
                                <Link to="/" className="flex items-center gap-5 group">
                                    <div className="w-16 h-16 skeuo-panel rounded-2xl flex items-center justify-center border-primary/30 bg-deep/60 group-hover:scale-105 transition-all">
                                        <Terminal size={32} className="text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-display font-black text-3xl md:text-4xl tracking-tighter text-white group-hover:text-primary transition-colors">DIGINEPAL_CORE</span>
                                        <span className="text-[10px] font-black text-primary/60 tracking-[0.5em] uppercase text-tactical">ASSET_DISTRIBUTION_NODE</span>
                                    </div>
                                </Link>
                                <p className="text-text-dim/60 text-lg leading-relaxed max-w-sm italic border-l-4 border-white/5 pl-8 font-medium">
                                    Nepal's elite high-fidelity digital infrastructure. Engineering premium assets for the global creation grid since 2024.
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: <Shield size={16} />, label: 'SECURE_P2P', color: 'text-primary' },
                                    { icon: <Zap size={16} />, label: 'SYNC_14ms', color: 'text-secondary' },
                                    { icon: <Globe size={16} />, label: 'NP-OPS_01', color: 'text-white/40' }
                                ].map((badge, i) => (
                                    <div key={i} className="skeuo-inset px-5 py-2.5 rounded-xl flex items-center gap-3 bg-deep/60 border-white/5">
                                        <span className={badge.color}>{badge.icon}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-text-dim/40 text-tactical">{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Modules */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="space-y-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 text-tactical flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    {title}
                                </h4>
                                <ul className="space-y-5">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.path} className="text-sm font-black uppercase tracking-widest text-text-dim/40 hover:text-white transition-all flex items-center gap-4 group">
                                                <div className="w-1.5 h-1.5 bg-white/5 rounded-full group-hover:bg-primary group-hover:shadow-[0_0_8px_#8df2c0] transition-all" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Meta Data Bar */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="space-y-2 text-center md:text-left">
                            <p className="text-[10px] font-black text-text-dim/20 uppercase tracking-[0.4em] leading-none text-tactical">© 2024_DIGINEPAL_OPERATIONS_UNIT_779</p>
                            <p className="text-[9px] font-black text-text-dim/10 tracking-[0.2em] uppercase">SYSTEM_LOCATION :: KATHMANDU_NEPAL_H01</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-8">
                             <div className="skeuo-inset px-6 py-3 rounded-2xl flex items-center gap-4 bg-deep/60 border-white/5">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_#8df2c0] animate-pulse" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] text-tactical">SYSTEM_NOMINAL_100%</span>
                             </div>
                             <div className="flex items-center gap-8">
                                <a href="#" className="text-text-dim/40 hover:text-primary transition-all font-black text-[10px] tracking-[0.4em] text-tactical">X_UPLINK</a>
                                <a href="#" className="text-text-dim/40 hover:text-secondary transition-all font-black text-[10px] tracking-[0.4em] text-tactical">DISCORD_GRID</a>
                             </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
