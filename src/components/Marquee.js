"use client";
import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

export default function Marquee() {
    const text = "HANDMADE LUXURY   •   PREMIUM INGREDIENTS   •   BAKED WITH LOVE   •   ARTISANAL DESSERTS   •   ";

    return (
        <div className={styles.marqueeContainer}>
            <motion.div
                className={styles.track}
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                <span className={styles.text}>{text.repeat(4)}</span>
            </motion.div>
        </div>
    );
}
