import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// export const metadata = {
//   title: {
//     default: "Bindra",
//     template: "%s - Bindra",
//   },
//   description:
//     "Explore affordable 1BHK flats in Mahakali with Bindra Developers. Modern amenities, great location, and value for money. Contact us today!",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self'; script-src 'self' https://www.google.com https://maps.googleapis.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' https://maps.gstatic.com https://www.google.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; base-uri 'self';`}
        />
      </head> */}
      <body className={`${lora.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
