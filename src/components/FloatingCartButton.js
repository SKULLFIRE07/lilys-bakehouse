"use client";
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCartButton() {
    const { toggleCart, cart } = useCart();
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AnimatePresence>
            {count > 0 && (
                <motion.button
                    onClick={toggleCart}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-caramel)',
                        color: '#fff',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        cursor: 'pointer',
                        zIndex: 9990,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                    }}
                >
                    🛒
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        backgroundColor: 'var(--color-muted-gold)',
                        color: 'var(--color-cocoa)',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #fff'
                    }}>
                        {count}
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
