import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: "Pookers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={``}>
      <body className=" antialiased">
        <Navbar />
        <AOSWrapper />
        {children}
      </body>
    </html>
  );
}
