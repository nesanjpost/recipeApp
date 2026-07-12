import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (recipe) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === recipe.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === recipe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...recipe, quantity: 1 }];
    });
  };

  const increaseQuantity = (recipeId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === recipeId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (recipeId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === recipeId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
