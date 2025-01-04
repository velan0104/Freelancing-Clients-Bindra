import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: {
    default: "Bindra",
    template: "%s - Bindra",
  },
  description:
    "Explore affordable 1BHK flats in Mahakali with Bindra Developers. Modern amenities, great location, and value for money. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
