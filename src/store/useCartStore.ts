
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    download_url?: string; // Standardized to match Supabase snake_case
}

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    decrementQuantity: (productId: string) => void;
    clearCart: () => void;
    total: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => {
                const currentCart = get().cart;
                const existingItem = currentCart.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        cart: currentCart.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    });
                } else {
                    set({ cart: [...currentCart, { ...product, quantity: 1 }] });
                }
            },
            decrementQuantity: (productId) => {
                const currentCart = get().cart;
                const item = currentCart.find(i => i.id === productId);
                if (item && item.quantity > 1) {
                    set({
                        cart: currentCart.map(i => i.id === productId ? { ...i, quantity: i.quantity - 1 } : i)
                    });
                } else {
                    set({ cart: currentCart.filter(i => i.id !== productId) });
                }
            },
            removeFromCart: (productId) => {
                set({ cart: get().cart.filter((item) => item.id !== productId) });
            },
            clearCart: () => set({ cart: [] }),
            total: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
        {
            name: 'cart-storage',
        }
    )
);
