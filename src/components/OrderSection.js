import styles from './OrderSection.module.css';

const STEPS = [
    "Orders must be placed minimum 2 days in advance.",
    "50% advance payment mandatory to confirm.",
    "Remaining balance before or at delivery/pick-up.",
    "Delivery charges calculated separately.",
    "No cancellation or refunds after confirmation.",
    "Handmade products → slight design variations add charm."
];

export default function OrderSection() {
    return (
        <section className="container section-padding">
            <h2 className="text-center" style={{ marginBottom: '3rem' }}>How to Order</h2>
            <div className={styles.steps}>
                {STEPS.map((step, index) => (
                    <div key={index} className={styles.stepCard}>
                        <span className={styles.number}>{index + 1}</span>
                        <p className={styles.text}>{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
