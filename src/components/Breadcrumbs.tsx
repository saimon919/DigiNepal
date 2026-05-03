import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-text-dim/40 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Home size={12} />
                Home
            </Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                
                // Format the name: replace hyphens with spaces
                const displayName = name.replace(/-/g, ' ');

                return (
                    <div key={name} className="flex items-center space-x-2">
                        <ChevronRight size={10} className="text-white/10" />
                        {isLast ? (
                            <span className="text-primary/60">{displayName}</span>
                        ) : (
                            <Link to={routeTo} className="hover:text-primary transition-colors">
                                {displayName}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
