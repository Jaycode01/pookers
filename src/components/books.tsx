import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Books() {
  return (
    <>
      <div className="relative w-full mt-10">
        <h1
          data-aos="fade-right"
          className="absolute text-gray-300 text-[27px] md:text-[40px] -z-20 font-poppins"
        >
          Our Books
        </h1>
        <h2
          data-aos="fade-up"
          className="text-[20px] md:text-[35px] ml-14 md:ml-24 pt-7 font-poppins"
        >
          Explore Our Books
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="italic pl-[2%] mt-5 text-[10px]"
        >
          Carefully curated books to help you grow and succeeds
        </p>
      </div>
      <div className="grid gric-cols-4 px-[5%] py-12">
        <div
          data-aos="fade-up"
          className="w-[95%] mx-auto md:mx-0 md:w-[400px] border py-5 px-3.5 border-gray-300 flex flex-col gap-3 rounded-md"
        >
          <Image
            src={`/images/photo_books_one.avif`}
            alt="book image"
            width={200}
            height={200}
            className="mx-auto w-full h-[300px]"
          />
          <h2 className="font-semibold text-[18px] md:text-xl">
            Learning the Art of Writing in 24hrs
          </h2>
          <p className="text-[12px] md:text-sm">
            An invaluable, experienced-based resource that teaches you how to
            write, scales up your waning artistry and takes your writing skill
            to the next level. Learning the Art of Writing in 24hrs is a timely
            solution to your writing problems.
          </p>
          <Link
            href="https://selar.com/u22241"
            target="_blank"
            className="w-full bg-blue-600 text-white text-sm text-center py-3 cursor-pointer hover:bg-blue-500"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}
