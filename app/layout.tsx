import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ContactProvider } from "./context/ContactContext";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Artemische — Portfolio',
  description: 'Full-stack JavaScript developer with 6+ years of experience. Portfolio includes production-ready apps in React, Next.js, SAPUI5, and AI-powered platforms.',
  openGraph: {
    title: 'Artemische — Portfolio',
    description: 'Проекты, UI-дизайн, Telegram WebApp и не только.',
    url: 'https://portfolionext-zeta.vercel.app/',
    siteName: 'Artemische',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/portfolio_preview.jpg', // путь к файлу в public/
        width: 1200,
        height: 630,
        alt: 'Artemische Portfolio Preview',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-[60px] lg:pl-[100px]`}
      >
        <ContactProvider>
          {children}
          <Analytics />
        </ContactProvider>
      </body>
    </html>
  );
}
