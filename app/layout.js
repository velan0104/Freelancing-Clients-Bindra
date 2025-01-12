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
  title: "Bindra - Affordable Flats at Mahakali",
  description:
    "Explore affordable 1BHK flats in Mahakali with Bindra Developers. Modern amenities, great location, and value for money. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="1BHK, Mahakali, Flats, Bindra Developers, Affordable Housing"
        />
        <meta name="author" content="Bindra Developers" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/bindra_logo.jpg" />
        <meta property="og:image:alt" content="Bindra developers" />
        <meta property="og:url" content="https://www.bindras.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/bindra_logo.jpg" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self'; script-src 'self' https://www.google.com https://maps.googleapis.com ; style-src 'unsafe-inline'; img-src 'self' https://maps.gstatic.com https://www.google.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; base-uri 'self';`}
        /> */}
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="no-referrer" />
        <meta http-equiv="Cross-Origin-Opener-Policy" content="origin" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Bindra Group",
              url: "https://www.bindras.com",
              logo: "https://www.bindras.com/images/bindra_logo.jpg",
              description:
                "Explore premium 1 BHK flats in Mahakali by Bindra Group. Modern amenities and prime locations designed for your lifestyle.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mahakali Caves Road",
                addressLocality: "Mumbai",
                postalCode: "400093",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={`${lora.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
