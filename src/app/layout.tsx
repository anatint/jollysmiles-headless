import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jollysmiles.com"),
  ...buildPageMetadata('/'),
};

import { getSingleItem, getCollectionItems } from "@/lib/wix";

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSingleItem('SiteSettings') || {};
  const navigation = await getCollectionItems('Navigation') || [];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ModalProvider>
          <TopBar settings={siteSettings} />
          <Header settings={siteSettings} navigation={navigation} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer settings={siteSettings} navigation={navigation} />
        </ModalProvider>
      </body>
    </html>
  );
}
