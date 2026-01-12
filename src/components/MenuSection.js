"use client";
import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './MenuSection.module.css';
import { getBasePath } from '../utils/path';

const MENU_DATA = {
    "Cookies & Brownies": [
        { title: "Classic Chocochip Cookies", description: "Golden edges, gooey centers, loaded with chocolate chips.", price: 360, packSize: "Pack of 6", image: getBasePath("/images/cookies-choc-chip.jpg") },
        { title: "Double Chocochip Cookies", description: "Rich dark cocoa dough studded with milk and dark chocolate chunks.", price: 380, packSize: "Pack of 6", image: getBasePath("/images/cookies-double-choc.jpg") },
        { title: "Midnight Fudgy Brownies", description: "Intensely chocolatey, dense, and fudgy perfection.", price: 350, packSize: "Pack of 4", image: getBasePath("/images/brownie-stack.jpg") },
        { title: "Pookie Brookie", description: "The ultimate hybrid: Fudgy brownie meets chewy cookie.", price: 370, packSize: "Pack of 4", image: getBasePath("/images/brookies.jpg") },
        { title: "Nutella Centre-Filled Cookies", description: "A classic cookie with a molten Nutella heart.", price: 500, packSize: "Pack of 6", image: getBasePath("/images/cookies-melted-choc.jpg") },
        { title: "Oreo & Cream Cookies", description: "Crunchy Oreo bits folded into a creamy vanilla dough.", price: 450, packSize: "Pack of 6", image: getBasePath("/images/cookies-oreo.jpg") },
        { title: "Triple Chocolate Cookies", description: "White, milk, and dark chocolate in every bite.", price: 450, packSize: "Pack of 6", image: getBasePath("/images/cookies-triple-choc.jpg") },
        { title: "Red Velvet Hearts", description: "Soft red velvet cookies with a cream cheese frosting swirl.", price: 450, packSize: "Pack of 6", image: getBasePath("/images/cookies-red-velvet.jpg") },
    ],
    "Cupcakes": [
        { title: "Vanilla Cupcakes", description: "Fluffy vanilla sponge with clouds of buttercream.", price: 360, packSize: "Pack of 6", image: getBasePath("/images/cupcakes-vanilla.jpg") },
        { title: "Chocolate Cupcakes", description: "Decadent chocolate sponge with rich ganache frosting.", price: 420, packSize: "Pack of 6", image: getBasePath("/images/cupcakes-choc.jpg") },
        { title: "Nutella Centre-Filled Cupcakes", description: "Hazelnut praline topping with a liquid Nutella core.", price: 400, packSize: "Pack of 4", image: getBasePath("/images/cupcakes-hazelnut.jpg") },
        { title: "Customize Your Cupcake", description: "Pick your base, frosting, and toppings. Create your dream treat.", price: "Custom", packSize: "Pack of 6", image: getBasePath("/images/cupcakes-vanilla.jpg") },
    ],
    "Cheesecakes": [
        {
            title: "Salted Caramel Cheesecake",
            description: "Creamy cheesecake topped with house-made salted caramel sauce.",
            image: getBasePath("/images/cheesecake-caramel.jpg"),
            variants: [
                { size: "Bento", price: 400 },
                { size: "Half Kg", price: 700 },
                { size: "1 Kg", price: 1000 }
            ]
        },
        {
            title: "Biscoff Cheesecake",
            description: "Spiced cookie crust with creamy Biscoff spread.",
            image: getBasePath("/images/cheesecake-biscoff.jpg"),
            variants: [
                { size: "Bento", price: 450 },
                { size: "Half Kg", price: 750 },
                { size: "1 Kg", price: 1100 }
            ]
        },
        {
            title: "Nutella Cheesecake",
            description: "Smooth chocolate hazelnut cheesecake with a roasted nut crust.",
            image: getBasePath("/images/cheesecake-nutella.jpg"),
            variants: [
                { size: "Bento", price: 400 },
                { size: "Half Kg", price: 700 },
                { size: "1 Kg", price: 1000 }
            ]
        },
    ],
    "Cakes & Buns": [
        {
            title: "Truffle Cake",
            description: "Layers of moist chocolate cake and silky ganache.",
            image: getBasePath("/images/hero-cake.jpg"),
            variants: [
                { size: "Bento", price: 350 },
                { size: "Half Kg", price: 600 },
                { size: "1 Kg", price: 850 }
            ]
        },
        { title: "Korean Cream Cheese Buns", description: "Soft garlic butter buns filled with sweet and savory cream cheese.", price: 220, packSize: "Pack of 2", image: getBasePath("/images/buns-garlic.jpg") },
    ]
};

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("Cookies & Brownies");

    return (
        <section id="menu" className="container section-padding">
            <h2 className="text-center" style={{ marginBottom: '2rem', fontSize: '3rem' }}>Signature Menu</h2>

            <div className={styles.tabs}>
                {Object.keys(MENU_DATA).map(category => (
                    <button
                        key={category}
                        className={`${styles.tab} ${activeCategory === category ? styles.activeTab : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {MENU_DATA[activeCategory].map((item, index) => (
                    <ProductCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
