import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactProvider } from "./context/ContactContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Artemische — Portfolio',
  description: 'Full-stack JavaScript developer with 6+ years of experience. Portfolio includes production-ready apps in React, Next.js, SAPUI5, and AI-powered platforms.',
  openGraph: {
    title: 'Artemische — Portfolio',
    description: ', UI-дизайн, Telegram WebApp и не только.',
    url: 'https://yourdomain.com',
    siteName: 'Artemische',
    locale: 'en_US',
    type: 'website',
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
        </ContactProvider>
      </body>
    </html>
  );
}
