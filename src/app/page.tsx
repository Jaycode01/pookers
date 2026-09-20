import Books from "@/components/books";
import CTA from "@/components/cta";
import EdittedBooks from "@/components/editted-books";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import ScrollToTop from "@/components/scroll-to-top";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Value from "@/components/value";
import WorkSamples from "@/components/work-samples";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Writing & Editing Services in Lagos | Pookers",
  description:
    "Professional proofreading, editing, ghostwriting, SOP writing and content services in Lagos. Helping students, authors and businesses across Nigeria communicate with clarity.",
  alternates: {
    canonical: "https://pookers.com.ng/",
  },
  openGraph: {
    title: "Professional Writing & Editing Services in Lagos | Pookers",
    description:
      "Professional proofreading, editing, ghostwriting and SOP services in Lagos, Nigeria.",
    type: "website",
    url: "https://pookers.com.ng",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Service />
      <Value />
      <Books />
      <WorkSamples />
      <EdittedBooks />
      <Testimonial />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
