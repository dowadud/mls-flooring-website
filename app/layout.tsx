import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MLS Flooring | Commercial Concrete Polishing & Epoxy Floors",
  description: "Enterprise-grade commercial concrete polishing, epoxy coatings, and surface preparation for airports, warehouses, and big-box retail. Trusted by Amazon, Charlotte Airport, and Fortune 500 companies. Licensed & insured.",
  keywords: [
    "commercial concrete polishing",
    "epoxy flooring",
    "warehouse flooring",
    "airport flooring",
    "distribution center flooring",
    "big box retail flooring",
    "industrial flooring contractor",
    "concrete floor coating",
    "polished concrete",
    "commercial flooring Charlotte NC",
    "enterprise flooring solutions"
  ],
  openGraph: {
    title: "MLS Flooring | Commercial Concrete Polishing & Epoxy Floors",
    description: "Enterprise-grade flooring solutions for commercial facilities nationwide",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
