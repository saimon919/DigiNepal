
// import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';

export default function About() {
    return (
        <div className="space-y-20">
            {/* Hero */}
            <section className="text-center max-w-4xl mx-auto space-y-6 py-20">
                <h1 className="text-5xl md:text-7xl font-display font-black text-primary leading-tight">
                    Empowering Nepal's <br /> Digital Future.
                </h1>
                <p className="text-xl text-text-dim max-w-2xl mx-auto">
                    DigiNepal is more than a marketplace. It's a movement to bring world-class digital assets to local creators.
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
                        <p className="text-white/80 max-w-lg">Born in the heart of the Himalayas, we blend traditional artistry with cutting-edge digital innovation.</p>
                    </div>
                </div>

                <div className="bg-primary text-white rounded-4xl p-10 shadow-soft flex flex-col justify-center gap-8">
                    <Target size={48} className="text-accent" />
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                        <p className="text-white/70">To democratize access to high-fidelity 3D assets for every Nepali developer and artist.</p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Zap size={32} />, title: "Speed", desc: "Instant downloads, zero friction." },
                    { icon: <Heart size={32} />, title: "Community", desc: "Built by creators, for creators." },
                    { icon: <Target size={32} />, title: "Quality", desc: "Curated assets only. No junk." },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                        <div className="w-14 h-14 bg-bg rounded-2xl flex items-center justify-center text-primary mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-text-dim">{item.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
