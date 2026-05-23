import { Cormorant_Garamond, Montserrat, Parisienne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsApp } from "@/components/Icons";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sinmisolaasaolu.com"),
  title: {
    default: "Firstlady Sinmisola Juliet Asaolu",
    template: "%s | Sinmisola Asaolu",
  },
  description:
    "Official website of Firstlady Sinmisola Juliet Asaolu. Wife, mother, leader and philanthropist. Founder of the Sinmisola Asaolu Foundation and CEO of Firstlady Collections, Ile Ife, Osun State, Nigeria.",
  keywords: [
    "Sinmisola Asaolu",
    "Firstlady Sinmisola Juliet Asaolu",
    "Firstlady Collections",
    "philanthropy Nigeria",
    "women leadership Osun State",
  ],
  openGraph: {
    title: "Firstlady Sinmisola Juliet Asaolu",
    description:
      "A life of purpose and a heart of service. Wife, mother, leader and philanthropist.",
    url: "https://sinmisolaasaolu.com",
    siteName: "Sinmisola Asaolu",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${parisienne.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a
          href="https://wa.me/2348033448408?text=Hello%2C%20I%20came%20across%20your%20website%20and%20would%20like%20to%20get%20in%20touch."
          className="whatsapp-float"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsApp width={28} height={28} />
        </a>
      </body>
    </html>
  );
}
