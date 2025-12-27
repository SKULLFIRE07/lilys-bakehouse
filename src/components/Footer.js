import Button from './Button';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container section-padding text-center">

                {/* Social Proof */}
                <div className={styles.trustBadges}>
                    <span className={styles.badge}>🏠 Home-Baked</span>
                    <span className={styles.badge}>🌿 Freshly Made</span>
                    <span className={styles.badge}>📜 FSSAI: 21525083009678</span>
                </div>

                <div className={styles.instagramMock}>
                    <p>Follow us on Instagram <a href="#" className={styles.link}>@lilys.bakehouse</a></p>
                    {/* Placeholder for Instagram feed if implemented */}
                </div>

                <h2 className={styles.thankYou}>
                    Thank you for supporting a home-baked brand.
                    <br />
                    <span className={styles.subThankYou}>Every order is freshly baked with care, passion, and lots of love ❤️</span>
                </h2>

                <div className={styles.actions}>
                    <a href="https://instagram.com/lilys.bakehouse" target="_blank" rel="noopener noreferrer">
                        <Button>Order via Instagram</Button>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary">Message on WhatsApp</Button>
                    </a>
                </div>

                <p className={styles.copyright}>© {new Date().getFullYear()} Lily's Bakehouse. All rights reserved.</p>
            </div>

            {/* Sticky Bottom CTA for Mobile */}
            <div className={styles.stickyCTA}>
                <a href="https://instagram.com/lilys.bakehouse" style={{ width: '100%' }}>
                    <button className={styles.stickyButton}>Order on Instagram</button>
                </a>
            </div>
        </footer>
    );
}
