import { create } from "zustand"

const useStore = create((set) => ({
  product: [],
  
  // Add item or increment count if already exists
  updatePro: (newPro) =>
    set((state) => {
      const existing = state.product.find((p) => p.id === newPro.id);
      if (existing) {
        return {
          product: state.product.map((p) =>
            p.id === newPro.id ? { ...p, count: p.count + 1 } : p
          ),
        };
      }
      return { product: [...state.product, newPro] };
    }),

  // Remove item by id
  removeFromCart: (id) =>
    set((state) => ({ product: state.product.filter((p) => p.id !== id) })),

  // Update item count
  updateCount: (id, count) =>
    set((state) => ({
      product: state.product.map((p) => (p.id === id ? { ...p, count } : p)),
    })),

  user: null,
  updateUser: (newUser) => set({ user: newUser }),
}))

export default useStore
