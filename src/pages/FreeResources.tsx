import { Download, FolderArchive, Zap, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const freeAssets = [
    {
        id: 'fr-1',
        title: 'Cyberpunk Neon Signs Pack',
        type: '3D Models + Textures',
        size: '145 MB',
        downloads: 1205,
        image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80',
    },
    {
        id: 'fr-2',
        title: 'UI SFX Library',
        type: 'Audio',
        size: '12 MB',
        downloads: 3450,
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
    },
    {
        id: 'fr-3',
        title: 'Sci-Fi Metal Trim Sheet',
        type: 'Texture Maps (4K PBR)',
        size: '220 MB',
        downloads: 890,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    },
    {
        id: 'fr-4',
        title: 'First Person Controller',
        type: 'Unity C# Script',
        size: '1.2 MB',
        downloads: 5600,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    }
];

export default function FreeResources() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16 pb-32">
            <Helmet>
                <title>Free Game Dev Assets | DigiNepal Public Cache</title>
                <meta name="description" content="Download free 3D models, UI SFX, textures, and Unity scripts provided by the DigiNepal community. Perfect for prototyping and game jams." />
                <link rel="canonical" href="https://diginepal.vercel.app/free-resources" />
            </Helmet>

            {/* Tactical Header: Public Cache */}
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-white/5 pb-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                        <Zap size={20} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-tactical">PUBLIC_CACHE_ACCESS :: UNRESTRICTED</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none">FREE_RESOURCES</h1>
                    <p className="text-base md:text-lg font-medium text-text-dim/60 uppercase tracking-[0.2em] max-w-2xl italic border-l-4 border-secondary/20 pl-8">
                        Access community-contributed and promotional data packets. Licensed for prototyping, learning, and local neural grid testing.
                    </p>
                </div>
                <div className="skeuo-panel bg-secondary/5 px-8 py-4 rounded-2xl border-secondary/20 shrink-0 text-center lg:text-right">
                    <p className="text-[10px] font-black text-secondary/60 uppercase tracking-[0.4em] mb-1 text-tactical">CACHE_SIZE</p>
                    <p className="text-3xl font-black text-white tracking-tighter uppercase">{freeAssets.length} DATA_PACKS</p>
                </div>
            </div>

            {/* Resources Grid: Tactical Data Cartridges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {freeAssets.map((asset, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={asset.id}
                        className="skeuo-panel p-1 rounded-[2.5rem] border-white/5 bg-deep/40 group overflow-hidden"
                    >
                        <div className="bg-deep/60 backdrop-blur-xl rounded-[2.3rem] p-6 space-y-8 h-full flex flex-col">
                            <div className="skeuo-inset h-48 w-full rounded-2xl overflow-hidden relative">
                                <img 
                                    src={asset.image} 
                                    alt={asset.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-4 right-4 skeuo-panel bg-secondary text-deep px-3 py-1 text-[9px] font-black uppercase tracking-widest border-secondary/40 text-tactical">
                                    FREE
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div className="space-y-2">
                                    <h3 className="font-black text-xl text-white tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">{asset.title}</h3>
                                    <div className="skeuo-inset bg-white/5 px-3 py-1 rounded-md border-white/5 inline-block">
                                        <span className="text-[9px] font-black text-text-dim/60 uppercase tracking-[0.2em] text-tactical">{asset.type}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-text-dim/40 border-t border-white/5 pt-4 text-tactical">
                                    <div className="flex items-center gap-2">
                                        <FolderArchive size={14} className="text-secondary" />
                                        <span>{asset.size}</span>
                                    </div>
                                    <span>{asset.downloads.toLocaleString()} DLs</span>
                                </div>
                            </div>

                            <button className="skeuo-panel bg-primary text-deep w-full py-4 rounded-xl flex items-center justify-center gap-4 font-black uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] transition-all text-tactical shadow-[0_0_20px_rgba(141,242,192,0.2)]">
                                <Download size={16} strokeWidth={2.5} /> DOWNLOAD_PACKET
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* End of Stream Telemetry */}
            <div className="pt-20 text-center">
                <div className="inline-flex flex-col items-center gap-6">
                    <div className="flex items-center gap-8 text-text-dim/20">
                        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-white/10" />
                        <Activity size={24} className="animate-pulse" />
                        <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-black text-text-dim/40 uppercase tracking-[0.6em] text-tactical">END_OF_PUBLIC_STREAM</p>
                        <p className="text-[8px] font-black text-primary/20 uppercase tracking-[0.8em] text-tactical">SYNCHRONIZING_NEXT_ARRAY...</p>
                    </div>
                </div>
            </div>

            {/* Support Callout */}
            <div className="skeuo-panel p-1 rounded-[3rem] border-white/10 bg-deep/40 mt-12">
                <div className="bg-deep/60 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="skeuo-inset p-4 rounded-2xl border-primary/20">
                                <Globe size={32} className="text-primary" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase leading-none">COMMUNITY_UPLINK</h3>
                        </div>
                        <p className="text-lg md:text-xl text-text-dim/60 font-medium max-w-2xl leading-relaxed italic border-l-4 border-primary/20 pl-8">
                            Have a digital asset packet you'd like to contribute to the public cache? Initiate a submission protocol via our administrator uplink.
                        </p>
                    </div>
                    <button className="skeuo-panel bg-primary text-deep px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all text-tactical shadow-[0_0_40px_rgba(141,242,192,0.2)]">
                        CONTRIBUTE_DATA
                    </button>
                </div>
            </div>
        </div>
    );
}
