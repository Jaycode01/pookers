import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Books() {
  return (
    <div className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Our books
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
            >
              Explore our books.
            </h2>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-400 max-w-xs leading-relaxed italic font-playfair"
            >
              Carefully curated books to help you grow and succeed.
            </p>
          </div>
          <div className="mt-6 h-px bg-gray-200 w-full" />
        </div>

        {/* Book Card */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-start">
          {/* Cover */}
          <div
            data-aos="zoom-in"
            className="w-full md:w-[300px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src="/images/photo_books_one.avif"
              alt="Learning the Art of Writing in 24hrs"
              width={600}
              height={600}
              className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details */}
          <div data-aos="fade-up" className="flex flex-col gap-5 max-w-lg pt-2">
            <span className="self-start text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-900">
              Writing
            </span>
            <h3 className="font-playfair text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
              Learning the Art of Writing in 24hrs
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              An invaluable, experience-based resource that teaches you how to
              write, scales up your artistry, and takes your writing skill to
              the next level. A timely solution to your writing problems.
            </p>
            <div className="h-px bg-gray-200 w-full" />
            <div className="flex flex-row gap-4 items-center">
              <Link
                href="https://selar.com/u22241"
                target="_blank"
                className="bg-blue-600 text-white text-sm font-medium px-7 py-3 rounded-lg hover:opacity-85 transition-opacity"
              >
                Buy now
              </Link>
              <p className="text-xs text-gray-400">Available on Selar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
