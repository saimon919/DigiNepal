// AdBanner.tsx – AdSense-safe ad placeholder component
// Place only in content areas: between guide sections, below product descriptions,
// sidebar on informational pages. NEVER on login/signup/checkout/dashboard.

interface AdBannerProps {
    slot?: 'horizontal' | 'sidebar' | 'in-article';
    className?: string;
}

export default function AdBanner({ slot = 'horizontal', className = '' }: AdBannerProps) {
    if (slot === 'sidebar') {
        return (
            <div className={`w-full bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 py-8 px-4 text-center ${className}`} style={{ minHeight: '250px' }}>
                <p className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Advertisement</p>
                <div className="w-full h-[200px] bg-bg rounded-xl flex items-center justify-center">
                    {/* Google AdSense unit will go here */}
                    <p className="text-xs text-text-dim">300 × 250 Ad Unit</p>
                </div>
            </div>
        );
    }

    if (slot === 'in-article') {
        return (
            <div className={`w-full my-8 bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 py-6 px-4 text-center ${className}`}>
                <p className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Advertisement</p>
                <div className="w-full max-w-2xl h-[100px] bg-bg rounded-xl flex items-center justify-center mx-auto">
                    {/* Google AdSense in-article unit will go here */}
                    <p className="text-xs text-text-dim">In-Article Ad Unit</p>
                </div>
            </div>
        );
    }

    // Default: horizontal banner
    return (
        <div className={`w-full bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 py-4 ${className}`}>
            <p className="text-[9px] font-bold uppercase tracking-widest text-text-dim">Advertisement</p>
            <div className="w-full max-w-4xl h-[90px] bg-bg rounded-xl flex items-center justify-center mx-auto">
                {/* Google AdSense horizontal banner will go here */}
                <p className="text-xs text-text-dim">728 × 90 Leaderboard Ad Unit</p>
            </div>
        </div>
    );
}
