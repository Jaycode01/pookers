import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Apply to join the Pookers Literary & Editing World team. We're looking for talented writers and editors in Nigeria.",
  alternates: {
    canonical: "https://pookers.com.ng/apply",
  },
};

export default function ApplyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
