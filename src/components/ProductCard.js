"use client";
import { useState } from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function ProductCard({ image, title, description, price, packSize, variants }) {
    const { addToCart } = useCart();

    // Initialize with the first variant if available
    const [selectedVariant, setSelectedVariant] = useState(variants ? variants[0] : null);

    // Sync state if variants prop changes (safety fallback even with key change)
    const [prevVariants, setPrevVariants] = useState(variants);
    if (variants !== prevVariants) {
        setPrevVariants(variants);
        setSelectedVariant(variants ? variants[0] : null);
    }

    // Helper to get current display values
    const currentPrice = selectedVariant ? selectedVariant.price : price;
    const currentPackSize = selectedVariant ? selectedVariant.size : packSize;

    const isCustom = price === "Custom" || (typeof price === 'string' && price.toLowerCase().includes('custom'));

    const handleVariantChange = (e) => {
        const size = e.target.value;
        const variant = variants.find(v => v.size === size);
        setSelectedVariant(variant);
    };

    const handleAdd = () => {
        if (isCustom) {
            window.open('https://wa.me/918087709790?text=Hi! I want to customize a order.', '_blank');
            return;
        }

        addToCart({
            title,
            price: currentPrice,
            packSize: currentPackSize,
            image
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                {/* Dropdown Selector */}
                {variants ? (
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '0.3rem' }}>Select Size:</label>
                        <select
                            value={selectedVariant.size}
                            onChange={handleVariantChange}
                            style={{
                                width: '100%',
                                padding: '0.6rem',
                                fontSize: '0.9rem',
                                borderRadius: '8px',
                                border: '1px solid var(--color-caramel)',
                                backgroundColor: '#fff',
                                fontFamily: 'var(--font-body)',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            {variants.map((variant) => (
                                <option key={variant.size} value={variant.size}>
                                    {variant.size} - ₹{variant.price}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className={styles.meta} style={{ minHeight: '10px' }}></div>
                )}

                <div className={styles.meta}>
                    {/* If variants exist, price is shown in dropdown, but we can show it here too for clarity or hide it */}
                    {variants ? (
                        <span className={styles.price} style={{ fontSize: '1.4rem' }}>₹{currentPrice}</span>
                    ) : (
                        <span className={styles.price}>{isCustom ? "Price Varies" : `₹${currentPrice}`}</span>
                    )}

                    {!variants && <span className={styles.packSize}>{currentPackSize}</span>}
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <Button onClick={handleAdd} style={{ width: '100%', fontSize: '0.9rem', padding: '0.8rem' }}>
                        {isCustom ? 'Contact to Customize' : 'Add to Basket'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
