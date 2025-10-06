import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ucok Isa Lubis — Software Developer",
    template: "%s | Ucok Isa Lubis",
  },
  description:
    "I build websites and desktop applications for businesses — clear, practical solutions that help you reach customers and run operations efficiently.",
  openGraph: {
    title: "Your Name — Software Developer",
    description:
      "I build websites and desktop applications for businesses — clear, practical solutions that help you reach customers and run operations efficiently.",
    url: siteUrl,
    siteName: "UIL",
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Ucok Isa Lubis — Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Software Developer",
    description:
      "I build websites and desktop applications for businesses — clear, practical solutions that help you reach customers and run operations efficiently.",
    images: [`${siteUrl}/og-image.svg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
