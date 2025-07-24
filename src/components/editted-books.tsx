import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EdittedBooks() {
  return (
    <>
      <div
        className="py-14 flex flex-col gap-7 md:gap-10 bg-white"
        id="editted-books"
      >
        <div className="flex flex-row justify-between px-[2%]">
          <h2 className=" text-[22px] md:text-[30px]">
            <span className="border-b-2 border-orange-600">Recent</span>ly
            editted books.
          </h2>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-orange-600 hover:underline"
          >
            View more <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 w-full gap-5 px-[5%]">
          <img
            src="/images/photo_editted_book_one.jpg"
            alt="Editted Book One"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
          <img
            src="/images/photo_editted_book_two.jpg"
            alt="Editted Book Two"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
          <img
            src="/images/photo_editted_book_three.jpg"
            alt="Editted Book Three"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px]"
          />
          <img
            src="/images/photo_editted_book_four.jpg"
            alt="Editted Book Four"
            className="w-[95%] mx-auto md:mx-0 md:w-[250px] h-[400px] md:h-[300px] border-2 border-gray-300 p-2"
          />
        </div>
      </div>
    </>
  );
}
