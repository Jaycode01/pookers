import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pookers Literary & Editing World — established in 2018 to provide professional writing and editing services in Lagos, Nigeria.",
  alternates: {
    canonical: "https://pookers.com.ng/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
