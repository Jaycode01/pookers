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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pookers</title>
        <meta
          name="description"
          content="Professional writing and editing service in Yaba, Lagos, Nigeria. We help individuals, businesses and corporations improve their writing skills and create compelling content."
        />
        <meta
          name="keywords"
          content="writing services lagos, editing services Nigeria, professional writing, content writing, professional editors, business writing lagos, document editing, "
        />
        <link rel="canonical" href="https://pookers.com.ng" />
        <meta name="author" content="Joseph Lamidi - Nexon" />
      </Head>
      <body>
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
      </body>
    </>
  );
}
