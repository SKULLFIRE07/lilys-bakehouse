"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';
import Button from './Button';

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const DELIVERY_FEE = 100;
    const grandTotal = cartTotal + (cart.length > 0 ? DELIVERY_FEE : 0);

    const checkoutMessage = `Hi Lily's Bakehouse! 🍪\n\nI'd like to place an order:\n\n${cart
        .map((item) => `- ${item.title} (${item.packSize}) x${item.quantity} = ₹${item.price * item.quantity}`)
        .join('\n')}\n\nDelivery Fee: ₹100\n*Total: ₹${grandTotal}*\n\nPlease confirm my order! ✨`;

    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(checkoutMessage)}`; // Replace with actual number if provided
    const instaLink = `https://ig.me/m/lilys.bakehouse?text=${encodeURIComponent(checkoutMessage)}`; // Direct message link often works, or just profile

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                    />
                    <motion.div
                        className={styles.drawer}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.header}>
                            <h2>Your Basket</h2>
                            <button onClick={toggleCart} className={styles.closeBtn}>&times;</button>
                        </div>

                        <div className={styles.items}>
                            {cart.length === 0 ? (
                                <p className={styles.empty}>Your basket feels a bit light... 🍪</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={`${item.title}-${index}`} className={styles.item}>
                                        <img src={item.image} alt={item.title} className={styles.itemImage} />
                                        <div className={styles.itemDetails}>
                                            <h4>{item.title}</h4>
                                            <p>{item.packSize}</p>
                                            <div className={styles.controls}>
                                                <button onClick={() => updateQuantity(item.title, item.price, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.title, item.price, 1)}>+</button>
                                            </div>
                                        </div>
                                        <div className={styles.itemPrice}>
                                            <span>₹{item.price * item.quantity}</span>
                                            <button onClick={() => removeFromCart(item.title, item.price)} className={styles.remove}>Remove</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className={styles.footer}>
                                <div className={styles.summary}>
                                    <div className={styles.row}><span>Subtotal</span><span>₹{cartTotal}</span></div>
                                    <div className={styles.row}><span>Delivery</span><span>₹{DELIVERY_FEE}</span></div>
                                    <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>₹{grandTotal}</span></div>
                                </div>

                                <p className={styles.note}>Choose checkout method:</p>
                                <div className={styles.actions}>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.fullWidth}>
                                        <Button style={{ width: '100%', backgroundColor: '#25D366', borderColor: '#25D366', color: '#fff' }}>
                                            Checkout on WhatsApp
                                        </Button>
                                    </a>
                                    <a href="https://instagram.com/lilys.bakehouse" target="_blank" rel="noopener noreferrer" className={styles.fullWidth}>
                                        <Button variant="secondary" style={{ width: '100%' }}>
                                            Checkout on Instagram
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
