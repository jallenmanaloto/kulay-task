import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem, Product } from "../lib/types";

type ICartContext = {
  cart: CartItem[];
  cartCount: number;
  total: number;
  addToCart: (product: Product) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  // Memoize total and cart counts
  const total = useMemo(
    () => cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cart]
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, product) => sum + product.quantity, 0),
    [cart]
  );

  // Methods for altering cart and quantity state
  const addToCart = (product: Product) => {
    // Prevents add to cart spamming
    if (isAdding) return;

    setIsAdding(true);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Resets `isAdding` state which handles the add to cart spamming
  useEffect(() => {
    if (isAdding) {
      const cd = setTimeout(() => setIsAdding(false), 1000);
      return () => clearTimeout(cd);
    }
  }, [isAdding]);

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      addToCart,
      decreaseQuantity,
      increaseQuantity,
      removeFromCart,
      total
    }
    }>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
