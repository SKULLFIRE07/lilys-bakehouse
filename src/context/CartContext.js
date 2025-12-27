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
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lilys-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.title === item.title && i.price === item.price);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.title === item.title && i.price === item.price
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (title, price) => {
        setCart((prevCart) => prevCart.filter((i) => !(i.title === title && i.price === price)));
    };

    const updateQuantity = (title, price, delta) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.title === title && item.price === price) {
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
        const priceValue = parseInt(item.price.toString().replace(/[^0-9]/g, '')) || 0;
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
