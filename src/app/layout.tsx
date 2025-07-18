import type { Metadata } from "next";
import { Original_Surfer, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const original_surfer = Original_Surfer({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins-hero",
  weight: "400",
  subsets: ["latin"],
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
      <body
        className={`${original_surfer.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
