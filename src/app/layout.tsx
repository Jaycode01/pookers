import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
  title: "Pookers",
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
      </head>
      <body className=" antialiased">
        <Navbar />
        <AOSWrapper />
        {children}
      </body>
    </html>
  );
}
