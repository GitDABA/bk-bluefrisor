import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Blue Frisør i Oslo",
    template: "%s | Blue Frisør",
  },
  description:
    "Blue Frisør på Grønland i Oslo. Hårklipp, skinfade, skjegg og mer. Ring oss: +47 46 37 23 23.",
  keywords: [
    "frisør oslo",
    "herrfrisør oslo",
    "barber oslo",
    "skinfade oslo",
    "blue frisør",
    "grønland frisør",
    "herreklipp oslo",
  ],
  openGraph: {
    title: "Blue Frisør i Oslo",
    description:
      "Frisørsalong på Grønland i Oslo. Hårklipp, skinfade, skjegg og mer.",
    locale: "nb_NO",
    type: "website",
    siteName: "Blue Frisør",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Hopp til hovedinnhold
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
