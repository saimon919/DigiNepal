export interface AffiliateProduct {
    id: string;
    slug: string;
    title: string;
    headline: string;
    hook: string;
    affiliateLink: string;
    category: string;
    features: string[];
    pros: string;
    cons: string;
    idealUser: string;
    image: string;
    disclosure: string;
}

export const affiliateProducts: AffiliateProduct[] = [
    {
        id: 'af-1',
        slug: 'goodthingsn-mini-fan',
        title: 'GOODTHINGSN Portable Mini Fan',
        headline: 'Stop Melting! This Foldable Mini-Fan is the Scented Cooling Hack You Didn\'t Know You Needed 🔥',
        hook: 'Heatwaves are becoming the new normal, but a stuffy commute shouldn\'t be your reality. Transform your personal space into a fragrant, breezy oasis with this 3-in-1 pocket powerhouse.',
        affiliateLink: 'https://amzn.to/4twH9y5',
        category: 'Personal Cooling',
        features: [
            '3-Speed Cooling: Personalized airflow from a gentle breeze to a powerful gust.',
            '180° Foldable Design: Wear it, hold it, or set it on your desk—true hands-free freedom.',
            'Digital Battery HUD: Never get caught with a dead fan again with real-time power tracking.',
            'Aromatherapy Slot: The only fan that chills you down AND smells like heaven.'
        ],
        pros: 'Ultra-quiet, lightweight, and incredibly versatile.',
        cons: 'Scent sachets need replacement after heavy use.',
        idealUser: 'Commuters, students, office workers, and travelers who refuse to sweat through their shirts.',
        image: 'https://m.media-amazon.com/images/I/51dr7K2jXfL._AC_SX679_.jpg',
        disclosure: 'As an Amazon Associate, I earn from qualifying purchases.'
    },
    {
        id: 'af-2',
        slug: 'tula-glow-eye-balm',
        title: 'TULA Skincare Glow & Get It Eye Balm',
        headline: 'Erase Dark Circles Instantly! This Cooling Eye Balm is Your "Fake 8 Hours of Sleep" Hack ✨',
        hook: 'Tired of looking exhausted? This probiotic-powered eye balm instantly cools, hydrates, and brightens your under-eye area, giving you that \'wide awake\' glow in seconds.',
        affiliateLink: 'https://amzn.to/4n8Tmqn',
        category: 'Skincare & Beauty',
        features: [
            'Probiotic Extracts: Soothes and deeply hydrates the delicate eye area.',
            'Instant Cooling Effect: Refreshing sensation that immediately depuffs tired eyes.',
            'Caffeine & Hyaluronic Acid: Firms, tightens, and plumps fine lines for a youthful look.',
            'On-The-Go Glow: Perfect to apply under or over makeup for midday touch-ups.'
        ],
        pros: 'Very refreshing, easy to apply, instant brightening effect.',
        cons: 'The cooling sensation might be strong for very sensitive skin.',
        idealUser: 'Busy professionals, parents, and anyone looking for a quick fix for tired, puffy eyes.',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
        disclosure: 'As an Amazon Associate, I earn from qualifying purchases.'
    }
];
