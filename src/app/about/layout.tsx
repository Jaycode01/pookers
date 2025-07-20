import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutLayout({
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
