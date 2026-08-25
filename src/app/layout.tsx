import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Realizzare Viagens | Perca-se. Descubra-se.",
    template: "%s | Realizzare Viagens",
  },
  description: siteConfig.description,
  keywords: [
    "agência de viagens",
    "Realizzare Viagens",
    "pacotes de viagem",
    "Nordeste",
    "Europa",
    "Disney",
    "Porto Alegre",
    "Balneário Camboriú",
    "Porto Portugal",
  ],
  openGraph: {
    title: "Realizzare Viagens",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-rv-cream text-rv-navy">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
