import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: {
    default: "Professional Writing & Editing Services in Lagos | Pookers",
    template: "%s | Pookers",
  },
  description:
    "Professional writing, editing, proofreading, ghostwriting and SOP services in Lagos, Nigeria. Clear, original content for students, authors and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={``}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vxoriuwrvj");
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pookers Literary & Editing World",
              image: "https://pookers.com.ng/images/pooker.png",
              url: "https://pookers.com.ng",
              telephone: "+2347030094966",
              email: "pookerseditorial@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 Birrel Avenue, Sabo, Yaba",
                addressLocality: "Lagos",
                addressRegion: "Lagos State",
                addressCountry: "NG",
              },
              sameAs: [
                "https://www.instagram.com/pookersworld",
                "https://x.com/pookersworld",
                "https://facebook.com/pookerseditorial",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Writing and Editing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ghostwriting Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Proofreading and Editing Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SOP Writing Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Copywriting Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Content Writing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className=" antialiased">
        <Navbar />
        <AOSWrapper />
        {children}
      </body>
    </html>
  );
}
