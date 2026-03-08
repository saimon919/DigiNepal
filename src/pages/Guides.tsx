import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const guides = [
    {
        slug: 'how-to-sell-digital-assets-online',
        title: 'How to Sell Digital Assets Online',
        summary: 'Everything you need to know to start earning money by selling your 3D models, textures, scripts, and creative digital work on platforms like DigiNepal.',
        readTime: '8 min read',
        category: 'Creator Guide',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
        slug: 'how-to-use-3d-assets-in-game-development',
        title: 'How to Use 3D Assets in Game Development',
        summary: 'A practical guide to importing, optimizing, and integrating 3D assets into Unity, Unreal Engine, Godot, and other popular game engines.',
        readTime: '10 min read',
        category: 'Developer Guide',
        image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
    },
    {
        slug: 'beginner-guide-to-game-art-assets',
        title: 'Beginner Guide to Game Art Assets',
        summary: 'Starting your journey with game art? Learn the different types of art assets, what makes a great asset, and how to choose the right ones for your project.',
        readTime: '7 min read',
        category: 'Beginner',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    },
    {
        slug: 'how-modular-asset-packs-work',
        title: 'How Modular Asset Packs Work',
        summary: 'Modular asset packs let you build infinite scenes from reusable pieces. Learn how they work, why game studios love them, and how to leverage them in your projects.',
        readTime: '9 min read',
        category: 'Design System',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    },
];

export default function Guides() {
    return (
        <div className="space-y-16 px-4 md:px-0">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 py-8">
                <span className="bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                    Knowledge Base
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-text-main tracking-tight leading-[0.9]">
                    Creator &amp; <span className="text-primary">Buyer Guides</span>
                </h1>
                <p className="text-lg text-text-dim max-w-xl mx-auto">
                    Expert articles to help you create, sell, and use digital assets more effectively. From beginner tips to advanced game development workflows.
                </p>
            </div>

            {/* Featured Guide */}
            <Link
                to={`/guides/${guides[0].slug}`}
                className="block bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all group"
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="overflow-hidden aspect-video md:aspect-auto">
                        <img
                            src={guides[1].image}
                            alt={guides[1].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">Featured</span>
                            <span className="text-xs text-text-dim font-bold">{guides[1].category}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-text-main leading-tight">{guides[1].title}</h2>
                        <p className="text-text-dim leading-relaxed">{guides[1].summary}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-text-dim">
                                <Clock size={14} />
                                {guides[1].readTime}
                            </div>
                            <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <ArrowRight size={14} />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Guide Cards Grid */}
            <div>
                <h2 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-3">
                    <BookOpen size={24} className="text-primary" />
                    All Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                        <Link
                            key={guide.slug}
                            to={`/guides/${guide.slug}`}
                            className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all group flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="bg-secondary/20 text-primary px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        {guide.category}
                                    </span>
                                    <span className="text-[10px] text-text-dim flex items-center gap-1">
                                        <Clock size={10} /> {guide.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main leading-snug group-hover:text-primary transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-sm text-text-dim leading-relaxed flex-1">{guide.summary}</p>
                                <span className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                    Read Article <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-black">Ready to Start Creating?</h2>
                <p className="text-white/70 max-w-xl mx-auto">
                    Join thousands of creators on DigiNepal. Sell your 3D assets, textures, and scripts to a global community of developers and artists.
                </p>
                <Link
                    to="/store"
                    className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all"
                >
                    Browse the Store <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}
