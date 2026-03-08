import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, BookOpen } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const footerLinks = {
    marketplace: [
        { label: 'Browse Store', path: '/store' },
        { label: 'New Releases', path: '/store' },
        { label: 'Creator Program', path: '/about' },
        { label: 'Sell Your Assets', path: '/about' },
    ],
    resources: [
        { label: 'Creator & Buyer Guides', path: '/guides' },
        { label: 'How to Sell Assets', path: '/guides/how-to-sell-digital-assets-online' },
        { label: 'Using 3D Assets in Unity', path: '/guides/how-to-use-3d-assets-in-game-development' },
        { label: 'Beginner Game Art Guide', path: '/guides/beginner-guide-to-game-art-assets' },
    ],
    company: [
        { label: 'About DigiNepal', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'My Library', path: '/my-assets' },
    ],
    legal: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms' },
        { label: 'DMCA / Copyright', path: '/dmca' },
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
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-bg">
            {/* Global Animated Background Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-blob mix-blend-multiply" />
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] animate-blob animation-delay-4000 mix-blend-multiply" />
            </div>

            {/* Navbar: Premium Animated Glass Pill */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <motion.div
                    animate={{
                        width: scrolled ? '100%' : '100%',
                        maxWidth: scrolled ? '800px' : '900px',
                        paddingTop: scrolled ? '8px' : '12px',
                        paddingBottom: scrolled ? '8px' : '12px',
                        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.95)',
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="backdrop-blur-2xl border border-white/40 shadow-premium rounded-full px-4 md:px-6 flex items-center justify-between md:justify-start gap-4 md:gap-8 pointer-events-auto"
                >

                    {/* Logo */}
                    <Link to="/" className="font-display font-bold text-lg md:text-xl text-primary tracking-tight flex items-center gap-2 shrink-0 group">
                        <img src="/logo.png" alt="DigiNepal Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="hidden xs:block group-hover:text-accent transition-colors">Diginepal</span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-1 bg-secondary/20 p-1 rounded-full relative">
                        {/* Animated background pill for active state could go here, for now using pure CSS */}
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Store', path: '/store' },
                            { name: 'Guides', path: '/guides' },
                            { name: 'Library', path: '/my-assets' },
                        ].map((item) => {
                            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-bold transition-all whitespace-nowrap overflow-hidden ${isActive ? 'text-primary' : 'text-text-dim hover:text-text-main hover:bg-white/50'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-pill"
                                            className="absolute inset-0 bg-white shadow-soft rounded-full z-0"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 md:gap-3 ml-auto">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/cart" className="p-2 md:p-2.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors text-text-main relative flex items-center justify-center">
                                <ShoppingBag size={16} className="md:w-[18px] md:h-[18px]" />
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white"></span>
                            </Link>
                        </motion.div>

                        {isAuthenticated ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to={user?.role === 'admin' ? '/admin' : '/my-assets'} className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-all border-2 border-white shadow-soft shrink-0">
                                    <UserIcon size={16} />
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/login" className="px-5 py-2 md:py-2.5 rounded-full bg-primary text-white text-[10px] md:text-sm font-bold tracking-wide hover:shadow-glow hover:bg-accent transition-all duration-300">
                                    Sign In
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.nav>

            {/* Content with Page Transitions */}
            <main className="flex-1 pt-32 pb-20 px-6 max-w-[1600px] mx-auto w-full relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Rich Footer */}
            <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 relative z-10 mt-auto">
                <div className="max-w-[1400px] mx-auto">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
                        {/* Brand Column */}
                        <div className="lg:col-span-1 space-y-5">
                            <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-primary">
                                <img src="/logo.png" alt="DigiNepal" className="w-10 h-10 object-contain rounded-lg" />
                                DigiNepal
                            </Link>
                            <p className="text-sm text-text-dim leading-relaxed">
                                Nepal's premier digital asset marketplace for 3D models, textures, scripts, and creative resources.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-2 rounded-full w-fit">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                All systems operational
                            </div>
                        </div>

                        {/* Marketplace */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-text-dim">Marketplace</h4>
                            <ul className="space-y-3">
                                {footerLinks.marketplace.map(link => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-text-dim hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources / Guides */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-text-dim flex items-center gap-1.5">
                                <BookOpen size={12} /> Guides
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map(link => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-text-dim hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-text-dim">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map(link => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-text-dim hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-text-dim">Legal</h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map(link => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm text-text-dim hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-dim">
                        <div className="flex flex-wrap items-center gap-4">
                            <p>© {new Date().getFullYear()} DigiNepal. All rights reserved.</p>
                            <span className="hidden md:inline text-gray-200">|</span>
                            <p>Made with ♥ in Pokhara, Nepal 🇳🇵</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">🔒 SSL Secured</span>
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold">✓ DMCA Protected</span>
                            <Link to="/admin" className="hover:text-primary transition-colors">Admin</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
