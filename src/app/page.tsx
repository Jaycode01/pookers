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
        <title>
          Professional Writing & Editing Services in Lagos | Pookers
        </title>

        <meta
          name="description"
          content="Professional writing and editing services in Lagos, Nigeria. We help individuals, businesses and organizations improve their writing, editing and content quality."
        />

        <meta
          name="keywords"
          content="writing services Lagos, editing services Nigeria, professional editors Lagos, content writing Nigeria, business writing Lagos, document editing services"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Professional Writing & Editing Services | Pookers"
        />
        <meta
          property="og:description"
          content="Professional writing and editing services in Lagos, Nigeria for businesses, students and organizations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pookers.com.ng" />

        <link rel="canonical" href="https://pookers.com.ng/" />

        <meta name="author" content="Joseph Lamidi - Nexon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Pookers Writing and Editing Services",
              url: "https://pookers.com.ng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yaba",
                addressRegion: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-TZN89V2CP7`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; 
              function gtag()
              {dataLayer push(arguments);}
                gtag('js', new Date())'
                gtag('config', 'G-TZN89V2CP7')
            `,
          }}
        />
      </Head>
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
    </>
  );
}
