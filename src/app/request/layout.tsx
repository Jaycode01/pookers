import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Service",
  description:
    "Request professional writing or editing services from Pookers Literary & Editing World in Lagos, Nigeria. Submit your project details and deadline.",
  alternates: {
    canonical: "https://pookers.com.ng/request",
  },
};

export default function RequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
