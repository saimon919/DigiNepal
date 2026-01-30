import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface User {
    id: string;
    email: string;
    role: 'admin' | 'user';
    name: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    setAuth: (user: User | null) => void;
    logout: () => Promise<void>;
    checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    loading: true,
    setAuth: (user) => set({ user, isAuthenticated: !!user, loading: false }),
    logout: async () => {
        await supabase.auth.signOut();
        set({ user: null, isAuthenticated: false });
    },
    checkSession: async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                // In a real app, you'd fetch the role from a 'profiles' table.
                // For now, we'll check if email is admin.
                const isAdmin = session.user.email === 'admin@diginepal.com';
                set({
                    user: {
                        id: session.user.id,
                        email: session.user.email || '',
                        role: isAdmin ? 'admin' : 'user',
                        name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'User'
                    },
                    isAuthenticated: true,
                    loading: false
                });
            } else {
                set({ user: null, isAuthenticated: false, loading: false });
            }
        } catch (error) {
            set({ user: null, isAuthenticated: false, loading: false });
        }
    }
}));

