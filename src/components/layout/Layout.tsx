
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export default function Layout() {
    const location = useLocation();
    const { user, isAuthenticated } = useAuthStore();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar: Pill Style */}
            <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="bg-surface/90 backdrop-blur-xl border border-white/20 shadow-soft rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between md:justify-start gap-4 md:gap-8 pointer-events-auto transition-all w-full max-w-4xl">

                    {/* Logo */}
                    <Link to="/" className="font-display font-bold text-lg md:text-xl text-primary tracking-tight flex items-center gap-2 shrink-0">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg" />
                        <span className="hidden xs:block">Diginepal</span>
                    </Link>

                    {/* Links - Hidden on small mobile, scrollable on tablet */}
                    <div className="flex items-center gap-1 md:gap-1 bg-bg/50 p-1 rounded-full overflow-x-auto no-scrollbar max-w-[200px] sm:max-w-none">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Store', path: '/store' },
                            { name: 'Library', path: '/my-assets' },
                            { name: 'Contact', path: '/contact' }
                        ].map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${isActive ? 'bg-white shadow-sm text-primary' : 'text-text-dim hover:text-text-main'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 md:gap-3 ml-auto">
                        <Link to="/cart" className="p-2 md:p-2.5 rounded-full bg-bg hover:bg-gray-200 transition-colors text-text-main relative">
                            <ShoppingBag size={16} className="md:w-[18px] md:h-[18px]" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
                        </Link>

                        {isAuthenticated ? (
                            <Link to={user?.role === 'admin' ? '/admin' : '/my-assets'} className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-all border-2 border-white shadow-sm shrink-0">
                                <UserIcon size={16} />
                            </Link>
                        ) : (
                            <Link to="/login" className="px-4 py-2 rounded-full bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-colors">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="flex-1 pt-32 pb-20 px-6 max-w-[1600px] mx-auto w-full">
                <Outlet />
            </main>

            {/* Footer (Minimal) */}
            <footer className="py-12 text-center text-text-dim text-sm space-y-2">
                <p>© 2026 DigiNepal. Defy Limits.</p>
                <Link to="/admin" className="text-xs hover:text-primary transition-colors">Admin Access</Link>
            </footer>
        </div>
    );
}
