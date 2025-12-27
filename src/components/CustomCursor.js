"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'A' ||
                e.target.closest('button') ||
                e.target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                borderRadius: '50%',
                border: '1px solid var(--color-caramel)',
                mixBlendMode: 'difference',
            }}
            animate={{
                x: mousePosition.x - (isHovering ? 20 : 8),
                y: mousePosition.y - (isHovering ? 20 : 8),
                width: isHovering ? 40 : 16,
                height: isHovering ? 40 : 16,
                backgroundColor: isHovering ? 'rgba(193, 124, 61, 0.1)' : 'transparent',
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    );
}
