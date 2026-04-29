import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Essence",
  description:
    "Discover the vision and mission of Pookers Literary & Editing World — committed to error-free, original writing and editing services in Lagos, Nigeria.",
  alternates: {
    canonical: "https://pookers.com.ng/essence",
  },
};

export default function EssenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
