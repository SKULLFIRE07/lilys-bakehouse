import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SectionDivider from '../components/SectionDivider';
import MenuSection from '../components/MenuSection';
import OrderSection from '../components/OrderSection';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Marquee />

      <div style={{ marginTop: '4rem' }}>
        <AboutSection />
      </div>

      <SectionDivider />

      <MenuSection />

      <SectionDivider />

      <OrderSection />

      <Footer />
    </main>
  );
}
