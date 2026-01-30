// import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const bentoItem = "bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100";

export default function Home() {
    return (
        <div className="space-y-12">
            {/* Hero Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto py-6 md:py-10 px-4">
                <span className="bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold tracking-wide uppercase">
                    New Collection 2026
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-text-main tracking-tight leading-[1] md:leading-[0.9]">
                    Design <br className="hidden md:block" /> <span className="text-primary">Defying Gravity.</span>
                </h1>
                <p className="text-base md:text-lg text-text-dim px-4">
                    Premium 3D assets, curated for the modern creator.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 px-4 md:px-0">
                {/* Main Hero Card */}
                <div className={`${bentoItem} md:col-span-2 md:row-span-2 relative overflow-hidden group flex flex-col justify-between min-h-[400px] md:min-h-0`}>
                    <div className="absolute inset-0 bg-primary/5 z-0 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="relative z-10 p-2 md:p-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Cyberpunk City</h2>
                        <p className="text-text-dim text-sm md:text-base">Complete modular kit.</p>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                        className="absolute right-0 bottom-0 w-[80%] md:w-[80%] shadow-2xl rounded-tl-3xl translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"
                        alt="Hero"
                    />

                    <div className="relative z-10 mt-auto p-2 md:p-0">
                        <Link to="/store" className="inline-flex items-center gap-2 bg-text-main text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black transition-colors">
                            Shop Now <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Top Right - Feature (Swapped order for mobile) */}
                <div className={`${bentoItem} md:col-span-1 bg-gradient-to-br from-accent to-orange-400 text-white !border-none flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 h-auto md:h-auto`}>
                    <Zap size={40} className="text-white/80 shrink-0" />
                    <h3 className="text-xl md:text-2xl font-bold">Instant Access</h3>
                </div>

                {/* Stat Box */}
                <div className={`${bentoItem} md:col-span-1 flex md:flex-col justify-center items-center text-center bg-secondary/10 !border-secondary/20 gap-4 md:gap-0`}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center md:mb-4 text-primary shadow-sm shrink-0">
                        <Star className="fill-current" size={24} />
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-primary">4.9/5</h3>
                        <p className="text-[10px] md:text-sm text-text-dim font-black uppercase tracking-widest">Creator Rating</p>
                    </div>
                </div>

                {/* Bottom Right - Wide */}
                <div className={`${bentoItem} md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <Box size={20} />
                            <span className="font-bold uppercase tracking-wider text-[10px]">Categories</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">Browse Collections</h3>
                        <p className="text-text-dim text-xs md:text-sm">Models, Textures, Scripts & More.</p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scroll-smooth no-scrollbar">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-14 h-14 md:w-16 md:h-16 bg-bg rounded-2xl shrink-0" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
