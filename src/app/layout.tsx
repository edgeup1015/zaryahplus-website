import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaryah+ | The World's First Islamic Super Agent",
  description:
    "Uniting the Ummah Through Faith-Centered Technology. One platform for your complete Islamic lifestyle - finance, education, spirituality, community, and more.",
  keywords: [
    "Islamic app",
    "Muslim super app",
    "Islamic AI",
    "Raya AI",
    "Shariah compliant",
    "Islamic finance",
    "Quran",
    "Zakat calculator",
    "Muslim community",
  ],
  openGraph: {
    title: "Zaryah+ | The World's First Islamic Super Agent",
    description:
      "One platform for your complete Islamic lifestyle - powered by AI that understands Islamic context.",
    type: "website",
    url: "https://zaryahplus.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
