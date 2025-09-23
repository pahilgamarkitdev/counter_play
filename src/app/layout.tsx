import type { Metadata } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Counter Play - Mobile Legends Bang Bang",
  description: "Explore the complete list of Mobile Legends heroes and their roles. Check recommended builds, best counters, and tips to dominate your matches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
