import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Service from "@/components/service";
import Value from "@/components/value";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Service />
      <Value />
    </div>
  );
}
