import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pookers | Essence",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
