import { create } from 'zustand';
import { CartItem, MenuItem, OrderItemOption } from '@/types';
import { INITIAL_MOCK_CART } from '@/data/mock/orders.mock';
import { APP_CONFIG } from '@/constants/app.constants';

interface CartState {
  cartItems: CartItem[];
  addToCart: (
    item: MenuItem,
    quantity: number,
    options: OrderItemOption,
    unitPrice: number
  ) => void;
  updateQuantity: (id: string, newQty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getVat: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: INITIAL_MOCK_CART,

  addToCart: (item, quantity, options, unitPrice) => {
    const itemKey = `${item.id}-${options.size || ''}-${options.sauceSeparately ? 'sep' : 'drench'}-${
      options.sauceVariant || ''
    }-${options.addons?.map((a) => a.name).join('-') || ''}`;

    set((state) => {
      const existingIndex = state.cartItems.findIndex((i) => i.id === itemKey);
      if (existingIndex > -1) {
        const updated = [...state.cartItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return { cartItems: updated };
      }
      return {
        cartItems: [
          ...state.cartItems,
          {
            id: itemKey,
            menuItem: item,
            quantity,
            unitPrice,
            options,
          },
        ],
      };
    });
  },

  updateQuantity: (id, newQty) => {
    if (newQty <= 0) {
      get().removeItem(id);
      return;
    }
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      ),
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => {
    set({ cartItems: [] });
  },

  getSubtotal: () => {
    return get().cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  },

  getVat: () => {
    return Math.round(get().getSubtotal() * APP_CONFIG.VAT_RATE);
  },

  getTotal: () => {
    return get().getSubtotal() + get().getVat();
  },

  getItemCount: () => {
    return get().cartItems.reduce((acc, item) => acc + item.quantity, 0);
  },
}));
