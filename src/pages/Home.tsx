import { ArrowRight, Zap, Box, Users, Download, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdBanner from '../components/AdBanner';

const bentoItem = "bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-soft border border-white/40 hover:shadow-premium transition-all duration-500 overflow-hidden relative group";

const stats = [
    { value: 'Quality', label: 'Curated Assets', icon: <Box size={24} /> },
    { value: 'Local', label: 'Nepali Creators', icon: <Users size={24} /> },
    { value: 'Instant', label: 'Downloads', icon: <Download size={24} /> },
    { value: 'Global', label: 'Reach', icon: <Globe size={24} /> },
];

const tools = [
    { name: 'Unity', color: 'bg-[#222C37] text-white shadow-xl shadow-[#222C37]/20' },
    { name: 'Unreal', color: 'bg-[#404040] text-white shadow-xl shadow-[#404040]/20' },
    { name: 'Blender', color: 'bg-[#E18D31] text-white shadow-xl shadow-[#E18D31]/20' },
    { name: 'Godot', color: 'bg-[#4882B5] text-white shadow-xl shadow-[#4882B5]/20' },
    { name: 'Cinema 4D', color: 'bg-[#08154D] text-white shadow-xl shadow-[#08154D]/20' },
    { name: 'Maya', color: 'bg-[#31C3C6] text-white shadow-xl shadow-[#31C3C6]/20' },
    { name: '3ds Max', color: 'bg-[#2A829D] text-white shadow-xl shadow-[#2A829D]/20' },
    { name: 'Substance', color: 'bg-[#EC5334] text-white shadow-xl shadow-[#EC5334]/20' },
];

// Spring configuration for super smooth animations
const springConfig = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Home() {
    return (
        <div className="space-y-24 relative z-10 pb-10">
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-6 max-w-4xl mx-auto py-12 md:py-20 px-4 relative"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, ...springConfig }}
                >
                    <span className="inline-block bg-white/60 backdrop-blur-md shadow-soft border border-white/50 text-accent px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase">
                        DigiNepal 2.0 Is Live
                    </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-display font-black text-text-main tracking-tight leading-[0.95] md:leading-[1.05]">
                    Design <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-orange-400">
                        Defying Gravity.
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-lg md:text-xl text-text-dim px-4 max-w-2xl mx-auto font-medium"
                >
                    Premium 3D assets, textures, and scripts curated for the modern creator. Build your next masterpiece exactly how you imagined it.
                </motion.p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 px-4 md:px-0 max-w-[1200px] mx-auto">
                {/* Main Hero Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springConfig}
                    whileHover={{ scale: 1.01, y: -4 }}
                    className={`${bentoItem} md:col-span-2 md:row-span-2 !bg-gradient-to-br from-primary to-slate-800 text-white min-h-[450px] md:min-h-0 border-none shadow-premium`}
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent z-0"></div>

                    <div className="relative z-10 p-2 md:p-0">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                        >
                            Feature Asset
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-2 mt-4">Cyberpunk City</h2>
                        <p className="text-white/80 text-sm md:text-base max-w-[80%]">Comprehensive modular kit with 400+ neon-drenched props.</p>
                    </div>

                    <div className="relative z-10 mt-auto p-2 md:p-0 pt-40 md:pt-0">
                        <Link to="/store" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-sm font-black tracking-wide hover:shadow-glow hover:scale-105 transition-all duration-300">
                            Shop Collection <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Top Right - Feature */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`${bentoItem} md:col-span-1 bg-gradient-to-br from-accent to-orange-400 text-white !border-none flex flex-row md:flex-col items-center justify-center gap-6 h-auto md:h-auto text-center`}
                >
                    <motion.div whileHover={{ rotate: 15, scale: 1.1 }}>
                        <Zap size={48} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <div>
                        <h3 className="text-2xl font-display font-black mb-1">Instant</h3>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Digital Delivery</p>
                    </div>
                </motion.div>

                {/* Stat Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`${bentoItem} md:col-span-1 flex flex-col justify-center items-center text-center !bg-secondary/10 !border-secondary/20 gap-4`}
                >
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm">
                        <Users className="fill-current" size={28} />
                    </div>
                    <div>
                        <h3 className="text-4xl font-display font-black text-primary mb-1">Join</h3>
                        <p className="text-xs text-text-dim font-black uppercase tracking-widest">Our Community</p>
                    </div>
                </motion.div>

                {/* Bottom Right - Wide Categories */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                    className={`${bentoItem} md:col-span-2 flex flex-col justify-between`}
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3 text-accent bg-accent/10 w-fit px-3 py-1 rounded-full">
                                <Box size={14} />
                                <span className="font-black uppercase tracking-widest text-[10px]">Categories</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-1 text-text-main">Explore Library</h3>
                            <p className="text-text-dim text-sm">Everything you need, in one place.</p>
                        </div>
                        <Link to="/store" className="w-10 h-10 bg-bg rounded-full flex items-center justify-center text-text-main group-hover:bg-primary group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform" />
                        </Link>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth no-scrollbar mt-6">
                        {['3D Models', 'Textures', 'Scripts', 'Books PDF'].map((cat, i) => (
                            <div key={i} className="px-5 py-3 bg-white border border-gray-100 rounded-2xl shrink-0 font-bold text-sm text-text-main shadow-sm hover:border-primary/20 transition-colors">
                                {cat}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Ad Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="px-4 md:px-0 max-w-[1200px] mx-auto"
            >
                <AdBanner slot="horizontal" />
            </motion.div>

            {/* Platform Stats */}
            <section className="px-4 md:px-0 max-w-[1200px] mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <span className="text-accent font-black uppercase tracking-widest text-xs">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-text-main">Built for Creators</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, ...springConfig }}
                            whileHover={{ y: -5 }}
                            className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-soft border border-white/50 text-center flex flex-col items-center justify-center gap-4 hover:shadow-premium transition-all"
                        >
                            <div className="w-14 h-14 bg-bg text-primary rounded-2xl flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-2xl font-display font-black text-text-main">{stat.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-text-dim mt-1">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About DigiNepal - Rich Informational Content */}
            <section className="px-4 md:px-0 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[3rem] p-8 md:p-16 shadow-soft border border-gray-100 space-y-12 overflow-hidden relative"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />

                    <div className="max-w-3xl space-y-5 relative z-10">
                        <span className="bg-bg text-text-main px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase border border-gray-100">About DigiNepal</span>
                        <h2 className="text-3xl md:text-5xl font-display font-black text-text-main leading-tight">
                            Nepal's Premier Digital Asset Marketplace
                        </h2>
                        <p className="text-lg md:text-xl text-text-dim leading-relaxed font-medium">
                            DigiNepal is a specialized digital asset marketplace built for and by the creative community of Nepal. We connect talented Nepali artists, 3D modelers, game developers, and designers with a global audience of buyers who need high-quality digital assets for their projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-text-dim leading-relaxed space-y-0 relative z-10">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">1</span>
                                    What is DigiNepal?
                                </h3>
                                <p>
                                    DigiNepal is an online marketplace where digital creators sell ready-to-use assets including 3D models, textures, shaders, scripts, books PDF, sound effects, and design resources. Think of it as an app store — but for digital art assets used in games, films, visualizations, and interactive experiences.
                                </p>
                                <p className="mt-3">
                                    Founded in Pokhara, Nepal, DigiNepal was created to solve a gap in the market: while platforms like the Unity Asset Store or Fab exist globally, there was no dedicated space for Nepali and South Asian creators to sell their work and for regional buyers to find locally created content that matches the aesthetic and cultural sensibilities of the region.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">2</span>
                                    How Creators Sell
                                </h3>
                                <p>
                                    Becoming a seller on DigiNepal is straightforward. Creators register for a free account, set up their creator profile with a bio and portfolio links, and begin uploading their digital products. Each listing includes a title, description, preview images, file formats, compatibility information, and pricing.
                                </p>
                                <p className="mt-3">
                                    Once a product is published and approved by our curation team, it becomes instantly available to thousands of buyers. When a sale is made, the creator receives a percentage of the sale price directly to their preferred payment method, including eSewa.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">3</span>
                                    How Buyers Use DigiNepal
                                </h3>
                                <p>
                                    Buyers — game developers, indie studios, architects, filmmakers, educators, and hobbyists — browse the DigiNepal store by category, search for specific assets by name or keyword, and filter by software compatibility, price range, or file format.
                                </p>
                                <p className="mt-3">
                                    Once a buyer finds an asset they need, they can view detailed product pages with high-resolution preview images, a thorough description, technical specifications (polygon count, texture resolution, supported formats), and licensing terms. Products can be added to a cart and purchased securely.
                                </p>
                                <p className="mt-3">
                                    After purchase, assets are immediately available in the buyer's Library page for download — no waiting, no shipping, no physical media. Assets can be re-downloaded as many times as needed, and buyers retain access to their purchased assets indefinitely.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-main mb-3">Benefits of Digital Asset Marketplaces</h3>
                                <p>
                                    Digital asset marketplaces like DigiNepal offer transformative benefits for both creators and buyers. For developers working alone or in small teams, purchasing ready-made assets dramatically reduces the time from concept to playable prototype. A solo developer who might spend three weeks modeling a detailed environment can instead purchase a professional modular kit in minutes and focus their time on game mechanics, narrative, and code.
                                </p>
                                <p className="mt-3">
                                    For creators, digital marketplaces enable passive income at scale. A 3D model created once can be sold to thousands of buyers — each purchase generating revenue without any additional work. Many professional artists earn their primary income entirely through asset sales, working on their own schedule from anywhere in the world.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Supported Tools */}
                    <div className="space-y-6 pt-12 border-t border-gray-100 relative z-10">
                        <h3 className="text-2xl font-display font-black text-text-main">Supported Tools & Platforms</h3>
                        <p className="text-text-dim max-w-2xl text-lg">
                            DigiNepal assets are compatible with all major 3D and game development software. Our sellers are required to specify compatibility for each product, so you always know exactly what works where.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, i) => (
                                <motion.span
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, ...springConfig }}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className={`${tool.color} px-5 py-2.5 rounded-2xl text-sm font-black tracking-wide cursor-default transition-all duration-300 shadow-sm hover:shadow-lg`}
                                >
                                    {tool.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Why DigiNepal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 relative z-10">
                        {[
                            {
                                icon: <ShieldCheck size={28} />,
                                title: 'Curated Quality',
                                desc: 'Every asset on DigiNepal is reviewed by our team for quality, accuracy of description, and technical correctness before publication. No junk, no broken files.',
                            },
                            {
                                icon: <Download size={28} />,
                                title: 'Instant Downloads',
                                desc: 'The moment your payment is confirmed, your purchased assets are available in your Library. Download as many times as you need, on any device.',
                            },
                            {
                                icon: <Users size={28} />,
                                title: 'Community First',
                                desc: "DigiNepal is built on the belief that Nepal's creative talent deserves a world-class platform. We invest our growth back into the creator community.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, ...springConfig }}
                                className="bg-bg/50 backdrop-blur-sm rounded-[2rem] p-8 space-y-4 border border-gray-50 hover:bg-white hover:shadow-soft transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-white shadow-sm text-primary rounded-2xl flex items-center justify-center">{item.icon}</div>
                                <h4 className="text-xl font-display font-black text-text-main">{item.title}</h4>
                                <p className="text-text-dim leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 relative z-10">
                        <Link to="/about" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 select-none group">
                            Read Our Full Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-2 text-text-dim text-sm font-bold bg-secondary/10 px-4 py-2 rounded-full select-none cursor-default">
                            <ShieldCheck size={18} className="text-primary" /> Verified Nepal Enterprise
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Guides Teaser */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-4 md:px-0 max-w-[1200px] mx-auto"
            >
                <div className="bg-gradient-to-br from-primary to-slate-800 rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-premium relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"></div>
                    <div className="space-y-4 relative z-10">
                        <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-white/20">Learning Center</span>
                        <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">New to Digital Assets?</h2>
                        <p className="text-white/80 max-w-lg text-lg font-medium">
                            Read our free guides on how to sell assets, use 3D models in Unity and Unreal, and understand modular design systems.
                        </p>
                    </div>
                    <Link
                        to="/guides"
                        className="relative z-10 bg-white text-primary px-10 py-5 rounded-full font-black tracking-wide flex items-center gap-3 hover:scale-105 hover:shadow-glow transition-all duration-300 shrink-0"
                    >
                        Browse Guides <ArrowRight size={20} />
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}
