import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";
import { Navbar } from "@/src/components/Navbar";
import { FinalCTAAndFooter } from "@/src/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "ANTERA - Advanced Neural Technologies & Engineering Research Agency",
  description: "Frontier AI. In your hands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
            <Navbar />
            <main>
              {children}
            </main>
            <FinalCTAAndFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
