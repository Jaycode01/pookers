import CTA from "@/components/cta";
import Essence from "@/components/essence";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Value from "@/components/value";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Service />
      <Value />
      <Essence />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
