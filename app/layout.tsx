import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final Year Project",
  description: "Final Year Project - BSE25-16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
