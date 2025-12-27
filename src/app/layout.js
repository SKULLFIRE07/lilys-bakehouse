import { Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import FloatingCartButton from "../components/FloatingCartButton";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Lily's Bakehouse | Thoughtfully Baked. Beautifully Served.",
  description: "Every bake is prepared with premium ingredients, crafted in a clean, hygienic kitchen, and finished with love in every detail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${playfairDisplay.variable}`}>
        <CartProvider>
          <SmoothScroll>
            <CustomCursor />
            <CartDrawer />
            <FloatingCartButton />
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
