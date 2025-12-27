"use client";
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function ProductCard({ image, title, description, price, packSize }) {
    const { addToCart } = useCart();

    // Clean price calculation logic
    const isCustom = price === "Custom" || typeof price === 'string' && price.toLowerCase().includes('custom');

    const handleAdd = () => {
        if (isCustom) {
            window.open('https://wa.me/918087709790?text=Hi! I want to customize a order.', '_blank');
            return;
        }

        // For range prices like "350 - 1800" or "400 / 700", we will add the lowest price to cart by default 
        // or just pass the string. The CartContext currently sorts out numbers for total.
        // Ideally we would want a selector, but per user request for "Add to Cart to all things", 
        // we'll just add the item to cart. The context will try to parse price.
        // Let's ensure we pass a usable price if possible, or just the string.

        // Simple robust approach for now:
        addToCart({ title, price, packSize, image });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.meta}>
                    <span className={styles.price}>{isCustom ? "Price Varies" : `₹${price}`}</span>
                    <span className={styles.packSize}>{packSize}</span>
                </div>
                <div style={{ marginTop: '1.2rem' }}>
                    <Button onClick={handleAdd} style={{ width: '100%', fontSize: '0.9rem', padding: '0.8rem' }}>
                        {isCustom ? 'Contact to Customize' : 'Add to Basket'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
