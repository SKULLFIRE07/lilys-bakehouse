export default function AboutSection() {
    return (
        <section className="container section-padding text-center animate-reveal" style={{ maxWidth: '800px', animationDelay: '0.2s' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-caramel)' }}>Freshly Baked. Honest Ingredients.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                At Lily's Bakehouse, we believe that the secret to the perfect bite lies in the warmth of home baking.
                Every creation that leaves our kitchen is a labor of love, crafted with the finest ingredients and a passion for perfection.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                From the rich aroma of melted chocolate to the comforting scent of vanilla, we bring you desserts that feel like a hug.
                Clean, hygienic, and authentically handcrafted—because you deserve nothing less than pure indulgence.
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-muted-gold)', marginTop: '2rem' }}>
                Where quality meets comfort.
            </p>
        </section>
    );
}
