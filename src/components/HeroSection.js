"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';
import Button from './Button';
import { getBasePath } from '../utils/path';

const IMAGES = [
    getBasePath('/images/hero-cake.jpg'),
    getBasePath('/images/cheesecake-caramel.jpg'),
    getBasePath('/images/cupcakes-choc.jpg'),
    getBasePath('/images/cookies-double-choc.jpg')
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className={styles.bgImage}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ backgroundImage: `url(${IMAGES[index]})` }}
                />
            </AnimatePresence>

            <div className={styles.overlay}></div>

            <div className={`${styles.content} animate-reveal`}>
                <motion.h1
                    className={styles.logo}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Lily's Bakehouse
                </motion.h1>

                <motion.p
                    className={styles.tagline}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Thoughtfully baked. Beautifully served.
                </motion.p>

                <div className={styles.divider}>~</div>

                <motion.p
                    className={styles.subtext}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Every bake is prepared with premium ingredients, crafted in a clean, hygienic kitchen, and finished with love in every detail.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>View Menu</Button>
                    <a href="https://instagram.com/lilys.bakehouse" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary">Order on Instagram</Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
