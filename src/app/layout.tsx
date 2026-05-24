import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTAs from "@/components/layout/FloatingCTAs";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "FRIEND'Z DEN Fitness Center | Gym in Gachibowli",
  description: "Train Strong. Transform Together. Your premium fitness destination in Gachibowli for strength, Zumba, and personal training.",
  keywords: ["Gym in Gachibowli", "Fitness center in Gachibowli", "Zumba classes in Gachibowli", "Personal trainer in Gachibowli", "Strength training Hyderabad", "Fat loss training Gachibowli"],
  openGraph: {
    title: "FRIEND'Z DEN Fitness Center | Gym in Gachibowli",
    description: "Your premium fitness destination in Gachibowli for strength, Zumba, and personal training.",
    url: "https://friendzdenfitness.com", // Placeholder
    siteName: "FRIEND'Z DEN Fitness Center",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#FF6A00] selection:text-white pb-16 md:pb-0`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
