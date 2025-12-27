"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('lilys-cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to load cart", e);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lilys-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            // Ensure price is stored accurately as a number if possible
            // This protects against legacy string prices like "400 / 700" being treated as identifiers
            const safePrice = typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0;
            const cleanItem = { ...item, price: safePrice };

            // Check if item already exists (matching Title, Price AND PackSize)
            const existingItem = prevCart.find((i) =>
                i.title === cleanItem.title &&
                i.price === cleanItem.price &&
                i.packSize === cleanItem.packSize
            );

            if (existingItem) {
                return prevCart.map((i) =>
                    i.title === cleanItem.title && i.price === cleanItem.price && i.packSize === cleanItem.packSize
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevCart, { ...cleanItem, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (title, price, packSize) => {
        // Filter out specific variant
        setCart((prevCart) => prevCart.filter((i) => !(i.title === title && i.price === price && i.packSize === packSize)));
    };

    const updateQuantity = (title, price, packSize, delta) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.title === title && item.price === price && item.packSize === packSize) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const clearCart = () => setCart([]);

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const cartTotal = cart.reduce((total, item) => {
        // Robust Parsing Logic:
        // 1. If number, use it.
        // 2. If string (e.g., "400"), parseFloat handles it.
        // 3. If mixed string "400 / 700", parseFloat returns 400 (first number), avoiding concatenation.
        const priceValue = typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0;
        return total + priceValue * item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                isCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                toggleCart,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
