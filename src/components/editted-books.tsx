import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const books = [
  { src: "/images/photo_editted_book_one.avif", alt: "Edited Book One" },
  { src: "/images/photo_editted_book_two.avif", alt: "Edited Book Two" },
  { src: "/images/photo_editted_book_three.avif", alt: "Edited Book Three" },
  { src: "/images/photo_editted_book_four.avif", alt: "Edited Book Four" },
];

export default function EdittedBooks() {
  return (
    <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]" id="editted-books">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Portfolio
          </p>
          <div className="flex items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug"
            >
              Recently edited books.
            </h2>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors duration-150 whitespace-nowrap"
            >
              View more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-6 h-px bg-gray-200 w-full" />
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books.map((book, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group overflow-hidden rounded-2xl bg-gray-200 aspect-[3/4]"
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={400}
                height={560}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
