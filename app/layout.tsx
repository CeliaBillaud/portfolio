import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Telugu } from 'next/font/google';
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //génère automatiquement une variable CSS personnalisée pour cette police
        className={`${geistSans.variable} ${geistMono.variable} ${anekTelugu.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
