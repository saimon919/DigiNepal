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
    }
];
