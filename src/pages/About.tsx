import { Target, Heart, Zap, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamValues = [
    {
        icon: <Zap size={32} />,
        title: 'Speed',
        desc: 'Instant downloads, zero friction. We believe that when a creator has found the perfect asset, nothing should stand between them and building their vision. Our infrastructure is optimized to deliver files the moment a purchase is confirmed.',
    },
    {
        icon: <Heart size={32} />,
        title: 'Community',
        desc: 'Built by creators, for creators. DigiNepal grew out of a Pokhara-based collective of game developers and 3D artists who were frustrated by the lack of a regional platform that understood their needs, their pricing realities, and their culture.',
    },
    {
        icon: <Target size={32} />,
        title: 'Quality',
        desc: 'Curated, not crowded. We manually review every asset before it goes live. Our curation team checks for clean topology, proper UV mapping, accurate description, and real software compatibility — so you never waste money on a broken file.',
    },
];

const milestones = [
    { year: 'Vision', title: 'Why We Started', desc: 'The platform was conceived in Pokhara by a small group of Nepali game developers struggling to find local digital assets without international fees.' },
    { year: 'Action', title: 'Building the Platform', desc: 'We set out to build a platform that connects talented Nepali 3D artists and developers directly with a global audience.' },
    { year: 'Launch', title: 'Going Live', desc: 'DigiNepal launches with integrated local payment gateways, making it easy for Nepali creators and buyers to transact.' },
    { year: 'Future', title: 'Global Reach', desc: 'Our ongoing mission is to expand the reach of Nepal\'s creative class, providing world-class assets to developers worldwide.' },
];

export default function About() {
    return (
        <div className="space-y-20">
            {/* Hero */}
            <section className="text-center max-w-4xl mx-auto space-y-6 py-20">
                <span className="bg-secondary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">Our Story</span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-primary leading-tight">
                    Empowering Nepal's <br /> Digital Future.
                </h1>
                <p className="text-xl text-text-dim max-w-2xl mx-auto">
                    DigiNepal is more than a marketplace. It's a movement to bring world-class digital assets to local creators — and to bring Nepali creativity to the world.
                </p>
            </section>

            {/* Grid Story */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white rounded-4xl p-10 shadow-soft h-[500px] flex items-end relative overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                        alt="Nepal Landscape"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="relative z-10 text-white">
                        <h3 className="text-3xl font-bold mb-2">Our Roots</h3>
                        <p className="text-white/80 max-w-lg">
                            Born in the shadow of the Himalayas, DigiNepal was built by artists who believed that geography should never limit creative opportunity. Nepali talent is world-class — it just needed a platform worthy of it.
                        </p>
                    </div>
                </div>

                <div className="bg-primary text-white rounded-4xl p-10 shadow-soft flex flex-col justify-center gap-8">
                    <Target size={48} className="text-accent" />
                    <div>
                        <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                        <p className="text-white/70 leading-relaxed">
                            To democratize access to high-fidelity 3D assets for every Nepali developer and artist — while creating sustainable, passive income streams for the country's rapidly growing creative class.
                        </p>
                    </div>
                    <Link to="/store" className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all">
                        Browse the Store <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* Long-form Story */}
            <section className="bg-white rounded-3xl p-8 md:p-14 shadow-soft border border-gray-100 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-display font-black text-text-main">Why We Built DigiNepal</h2>
                        <p className="text-text-dim leading-relaxed">
                            It started with frustration. In 2023, a group of indie game developers based in Pokhara were working on their first commercial game. They needed 3D assets — modular dungeon kits, character rigs, particle effects. The global marketplaces had plenty of options, but paying in USD meant 30–40% effective price increases due to conversion rates and international transaction fees. Selling internationally meant navigating complex tax structures and payment systems that weren't designed for Nepalese bank accounts.
                        </p>
                        <p className="text-text-dim leading-relaxed">
                            Meanwhile, skilled Nepali 3D artists were sitting on incredible portfolios with no way to monetize them locally. They were selling through international platforms, taking currency hits, and watching their earnings diminish through layers of fees. The talent was there. The demand was there. What was missing was the platform.
                        </p>
                        <p className="text-text-dim leading-relaxed">
                            DigiNepal was built to close that gap. By integrating eSewa for seamless NPR transactions, building a curation team that understands the Nepali game development ecosystem, and creating pricing guidelines appropriate to local markets — we created a platform where both buyers and sellers can thrive.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <h2 className="text-3xl font-display font-black text-text-main">Our Vision for the Future</h2>
                        <p className="text-text-dim leading-relaxed">
                            DigiNepal's long-term vision extends far beyond a simple marketplace. We are building the infrastructure for a thriving Nepali digital economy in the creative sector. This means investing in creator education through our Guides section, building mentorship programs that connect experienced artists with newcomers, and establishing partnerships with Nepali game studios, architecture firms, and educational institutions.
                        </p>
                        <p className="text-text-dim leading-relaxed">
                            We believe that Nepal's unique cultural and geographic heritage — from the intricately carved temples of Kathmandu Valley to the dramatic landscape of the Himalayas — provides an unparalleled source of artistic inspiration that the global game development community hasn't fully discovered yet. DigiNepal wants to be the platform that introduces Nepali aesthetics to game worlds, films, and virtual experiences worldwide.
                        </p>
                        <p className="text-text-dim leading-relaxed">
                            Every purchase made on DigiNepal directly funds a Nepali creator's livelihood. Every asset downloaded by a game studio in Germany, a indie developer in Brazil, or an architect in Japan is a vote of confidence in Nepali creativity. That's what motivates us to keep building, curating, and growing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="space-y-8">
                <h2 className="text-3xl font-display font-black text-text-main text-center">Our Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((m, i) => (
                        <div key={i} className="bg-white rounded-3xl p-7 shadow-soft border border-gray-100 space-y-3 hover:shadow-lg transition-all">
                            <span className="text-4xl font-display font-black text-primary/20">{m.year}</span>
                            <h3 className="text-lg font-bold text-text-main">{m.title}</h3>
                            <p className="text-sm text-text-dim leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="space-y-8">
                <h2 className="text-3xl font-display font-black text-text-main text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamValues.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                            <div className="w-14 h-14 bg-bg rounded-2xl flex items-center justify-center text-primary mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-text-dim leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-primary rounded-3xl p-10 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                {[
                    { icon: <Users size={28} />, value: 'Community', label: 'Driven Platform' },
                    { icon: <Globe size={28} />, value: 'Global', label: 'Availability' },
                    { icon: <Award size={28} />, value: 'Curated', label: 'Quality Assets' },
                    { icon: <Heart size={28} />, value: 'Supportive', label: 'Creator Ecosystem' },
                ].map((s, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex justify-center text-accent">{s.icon}</div>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-display font-black">{s.value}</p>
                        <p className="text-white/60 text-xs uppercase tracking-widest font-bold">{s.label}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
