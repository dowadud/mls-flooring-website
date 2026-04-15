import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLS Flooring | Commercial Concrete Polishing & Epoxy Floors",
  description:
    "Enterprise-grade commercial concrete polishing, epoxy coatings, and surface preparation for airports, warehouses, and big-box retail. Trusted by Amazon, Charlotte Airport, and Fortune 500 companies. Licensed & insured.",
  keywords:
    "commercial concrete polishing,epoxy flooring,warehouse flooring,airport flooring,distribution center flooring,big box retail flooring,industrial flooring contractor,concrete floor coating,polished concrete,commercial flooring Charlotte NC",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
