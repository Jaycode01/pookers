import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pookers Literary & Editing World. Visit us at 5 Birrel Avenue, Sabo, Yaba, Lagos or reach us via email and phone.",
  alternates: {
    canonical: "https://pookers.com.ng/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
