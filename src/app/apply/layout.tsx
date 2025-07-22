import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Pookers Team",
};

export default function ApplyLayout({
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
