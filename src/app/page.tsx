import Books from "@/components/books";
import CTA from "@/components/cta";
import Essence from "@/components/essence";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import ScrollToTop from "@/components/scroll-to-top";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Value from "@/components/value";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Service />
      <Value />
      <Essence />
      <Books />
      <Testimonial />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
