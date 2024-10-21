import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Telugu } from 'next/font/google';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  variable: '--font-anek-telugu',
});

export const metadata: Metadata = {
  title: "Célia Billaud • Développeuse Web",
  description: "Développeuse web joyeuse et dynamique, passionnée par Symfony et React, à la recherche d'une alternance pour créer des expériences web innovantes.",
  openGraph: {
    description:"Développeuse web joyeuse et dynamique, passionnée par Symfony et React, à la recherche d'une alternance pour créer des expériences web innovantes.",
    images: [
      {
        url: "/diving.jpg",
        width: 1200,
        height: 630,
        alt: "Célia Billaud • Développeuse Web",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
      //génère automatiquement une variable CSS personnalisée pour cette police
        className={`${geistSans.variable} ${geistMono.variable} ${anekTelugu.variable}  antialiased h-full bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
