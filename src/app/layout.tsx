import type { Metadata } from "next";
import { Anton, Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";
import { SmoothScroller } from "@/components/ui/SmoothScroller";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas", // keeping variable name so we don't have to rename classes
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QYNT Creatives | Digital Experiences",
  description: "We don't build websites. We build digital experiences.",
  openGraph: {
    title: "QYNT Creatives",
    description: "Premium creative agency building digital experiences for modern brands.",
    url: "https://qyntcreatives.com",
    siteName: "QYNT Creatives",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} font-inter antialiased bg-black text-white selection:bg-primary selection:text-white`}
      >
        <SmoothScroller>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
