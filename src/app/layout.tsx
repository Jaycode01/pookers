import type { Metadata } from "next";
import { Original_Surfer } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const original_surfer = Original_Surfer({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pookers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${original_surfer.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
