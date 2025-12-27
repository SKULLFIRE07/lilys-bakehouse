"use client";
import { useState } from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function ProductCard({ image, title, description, price, packSize, variants }) {
    const { addToCart } = useCart();
    const [selectedVariant, setSelectedVariant] = useState(variants ? variants[0] : null);

    // Determine current display values based on variant selection or props
    const currentPrice = selectedVariant ? selectedVariant.price : price;
    const currentPackSize = selectedVariant ? selectedVariant.size : packSize;
    const isCustom = price === "Custom" || (typeof price === 'string' && price.toLowerCase().includes('custom'));

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant);
    };

    const handleAdd = () => {
        if (isCustom) {
            window.open('https://wa.me/918087709790?text=Hi! I want to customize a order.', '_blank');
            return;
        }

        addToCart({
            title,
            price: currentPrice, // Always passes a number now for variants
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

                {/* Variant Selector */}
                {variants ? (
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {variants.map((variant) => (
                                <button
                                    key={variant.size}
                                    onClick={() => handleVariantChange(variant)}
                                    style={{
                                        padding: '0.4rem 0.8rem',
                                        fontSize: '0.8rem',
                                        borderRadius: '20px',
                                        border: '1px solid var(--color-caramel)',
                                        background: selectedVariant.size === variant.size ? 'var(--color-caramel)' : 'transparent',
                                        color: selectedVariant.size === variant.size ? '#fff' : 'var(--color-caramel)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {variant.size}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.meta} style={{ minHeight: '24px' }}>
                        {/* Spacing placeholder if no variants, or just normal meta */}
                    </div>
                )}

                <div className={styles.meta}>
                    <span className={styles.price}>{isCustom ? "Price Varies" : `₹${currentPrice}`}</span>
                    <span className={styles.packSize}>{currentPackSize}</span>
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
