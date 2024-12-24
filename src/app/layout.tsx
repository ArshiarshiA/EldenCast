import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Elder Cast",
  description: "An Elden Ring Reference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-NX67RMKRR8" />
      </body>
    </html>
  );
}
