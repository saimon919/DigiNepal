import { Download, FolderArchive, Terminal } from 'lucide-react';
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
        <div className="px-4 md:px-0 space-y-10 pb-10 relative font-mono text-white">
            <Helmet>
                <title>Free Game Dev Assets & Resources | DigiNepal</title>
                <meta name="description" content="Download free 3D models, UI SFX, textures, and Unity scripts provided by the DigiNepal community. Perfect for prototyping and game jams." />
                <link rel="canonical" href="https://diginepal.vercel.app/free-resources" />
            </Helmet>
            {/* Background Ambient */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            {/* Header / Intro */}
            <div className="glass-panel hud-border p-8 md:p-12 relative overflow-hidden group">
                <div className="scanline"></div>
                <div className="relative z-10 w-full max-w-3xl space-y-6">
                    <div className="flex items-center gap-3 text-secondary mb-2">
                        <Terminal size={16} className="animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black">OPEN_SOURCE_CACHE</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-widest uppercase">
                        Free_Resources
                    </h1>
                    
                    <p className="text-text-dim text-sm leading-relaxed font-mono">
                        Access community-contributed and promotional assets. These files are licensed under CC-0 or standard Royalty-Free licenses unless otherwise stated. Perfect for prototyping, learning, and jam projects.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <div className="bg-black/40 border border-primary/20 px-4 py-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs text-primary uppercase font-bold tracking-widest">{freeAssets.length} TARGETS ACQUIRED</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {freeAssets.map((asset, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, ease: 'easeOut' }}
                        key={asset.id}
                        className="glass-panel group relative border border-white/5 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
                    >
                        {/* Decorative HUD Corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                        
                        <div className="relative h-48 w-full overflow-hidden bg-black/50 border-b border-white/5">
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                src={asset.image} 
                                alt={asset.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute top-3 right-3 bg-black/80 px-2 py-1 text-[9px] uppercase tracking-widest border border-secondary/30 text-secondary">
                                FREE
                            </div>
                        </div>

                        <div className="p-5 space-y-4 relative">
                            <div className="space-y-1">
                                <h3 className="font-bold text-sm uppercase tracking-wider truncate group-hover:text-primary transition-colors">{asset.title}</h3>
                                <p className="text-xs text-text-dim">{asset.type}</p>
                            </div>

                            <div className="flex items-center justify-between text-[10px] text-text-dim border-t border-white/10 pt-3">
                                <div className="flex items-center gap-1.5">
                                    <FolderArchive size={12} className="text-secondary" />
                                    <span>{asset.size}</span>
                                </div>
                                <span>{asset.downloads.toLocaleString()} DLs</span>
                            </div>

                            <button className="w-full mt-2 py-2 flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 text-primary uppercase text-xs tracking-widest font-bold group-hover:bg-primary group-hover:text-black transition-all">
                                <Download size={14} />
                                Download_File
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Bottom HUD decoration */}
            <div className="w-full border-t border-white/10 pt-6 flex justify-center">
                <div className="flex items-center gap-4 text-text-dim text-[10px] uppercase font-mono tracking-widest">
                    <span className="w-[100px] h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
                    END_OF_CACHE
                    <span className="w-[100px] h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
                </div>
            </div>
        </div>
    );
}
