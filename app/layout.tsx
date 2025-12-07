import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLS Flooring - Professional Flooring Solutions for Enterprise Facilities",
  description: "Combining Advanced Project Management with Expert Installation for America's Leading Brands. Epoxy flooring, concrete polishing, and surface preparation services.",
  keywords: ["flooring", "epoxy flooring", "concrete polishing", "enterprise flooring", "industrial flooring"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
