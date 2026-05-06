import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EdittedBooks() {
  return (
    <>
      <div
        className="py-14 flex flex-col gap-7 md:gap-10 bg-white"
        id="editted-books"
      >
        <div className="flex flex-row justify-between px-[2%]">
          <h2 data-aos="fade-right" className=" text-[20px] md:text-[30px]">
            <span className="border-b-2 border-blue-600">Recent</span>ly edited
            books
          </h2>
          <Link
            href="/"
            data-aos="fade-right"
            className="flex items-center gap-1.5 text-[12px] md:text-sm text-gray-700 hover:text-blue-600 hover:underline"
          >
            View more <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 w-full gap-5 px-[5%]">
          <Image
            src={`/images/photo_editted_book_one.avif`}
            alt="Editted Book"
            width={100}
            height={100}
            data-aos="fade-up"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />

          <Image
            src={`/images/photo_editted_book_two.avif`}
            alt="Editted Book"
            width={100}
            height={100}
            data-aos="fade-up"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
          <Image
            src={`/images/photo_editted_book_three.avif`}
            alt="Editted Book"
            width={100}
            height={100}
            data-aos="fade-up"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
          <Image
            src={`/images/photo_editted_book_four.avif`}
            alt="Editted Book"
            width={100}
            height={100}
            data-aos="fade-up"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
        </div>
      </div>
    </>
  );
}
