import { create } from "zustand";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  image?: string;
  toppings?: { name: string; price: number }[];
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: {
    name: string;
    price: number;
    quantity?: number;
    image?: string;
    toppings?: { name: string; price: number }[];
  }) => void;
  removeFromCart: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (itemName: string) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (item) => {
    set((state) => {
      const existing = state.cart.find(
        (i) =>
          i.name === item.name &&
          JSON.stringify(i.toppings) === JSON.stringify(item.toppings)
      );

      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.name === item.name &&
            JSON.stringify(i.toppings) === JSON.stringify(item.toppings)
              ? { ...i, quantity: i.quantity + (item.quantity || 1) }
              : i
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...item,
            quantity: item.quantity || 1,
            toppings: item.toppings || [],
          },
        ],
      };
    });
  },

  removeFromCart: (itemName) => {
    set((state) => ({
      cart: state.cart.filter((i) => i.name !== itemName),
    }));
  },

  updateQuantity: (itemName, quantity) => {
    set((state) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((i) => i.name !== itemName),
        };
      }
      return {
        cart: state.cart.map((i) =>
          i.name === itemName ? { ...i, quantity } : i
        ),
      };
    });
  },

  clearCart: () => set({ cart: [] }),

  getItemQuantity: (itemName) => {
    return get()
      .cart.filter((i) => i.name === itemName)
      .reduce((sum, i) => sum + i.quantity, 0);
  },

  getTotalItems: () => {
    return get().cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().cart.reduce((sum, item) => {
      const toppingsPrice =
        item.toppings?.reduce((t, topping) => t + topping.price, 0) || 0;
      return sum + (item.price + toppingsPrice) * item.quantity;
    }, 0);
  },
}));
