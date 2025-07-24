"use client";

import { Award, ChevronRight, File, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Hero() {
  const router = useRouter();

  const redirectContact = () => {
    router.push("/contact");
  };
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-100 px-[2.5%] md:px-[5%] py-5 md:py-10 text-gray-900 w-full pb-24 md:pb-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 pt-5">
            <h1 className="text-[30px] md:text-[40px] font-poppins">
              Struggling with writting? {`We've`} got you covered
            </h1>
            <div className="text-[15px] md:text-lg flex flex-col gap-1">
              <p>
                Our dedicated team of experienced editors and writers is
                committed to helping you articulate your ideas with precision
                and impact. Whether you are working on an academic thesis,
                crafting a compelling business proposal, or developing a
                creative manuscript, we provide personalized support tailored to
                your specific needs.
              </p>
            </div>
            <div className="flex flex-row gap-4 md:gap-6 mt-5">
              <Link href="#editted-books">
                <button
                  type="button"
                  className="bg-orange-600 px-8 md:px-10 py-3.5 md:py-4 text-white text-[15px]"
                >
                  See Our Work
                </button>
              </Link>
              <button
                type="button"
                onClick={redirectContact}
                className="text-orange-600 border text-[15px] border-orange-600 px-8 md:px-10 py-3 md:py-3.5 flex flex-row items-center gap-2"
              >
                Contact Us
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-7 md:mt-0">
            <img
              src="/images/illustration_hero.svg"
              alt="hero image for pookers"
              width={650}
            />
          </div>
        </div>
      </div>

      {/*  Credibility Section*/}
      <div
        className="z-20 bg-white w-[95%] md:w-fit ml-[2.5%] md:ml-[10%] shadow-lg border border-gray-200 
          py-5 md:py-10 px-5 md:px-7 flex flex-row  justify-start
          gap-7 md:gap-14 rounded-md -mt-14 md:-mt-20"
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[20px] font-semibold">160</p>
          <p className="flex flex-row items-center gap-2.5 uppercase text-[12px] text-gray-600">
            <File />
            <span>cases done</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[20px] font-semibold">120+</p>
          <p className="flex flex-row items-center gap-2.5 uppercase text-[12px] text-gray-600">
            <Users />
            <span>satisfied customers</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[20px] font-semibold">7+</p>
          <p className="flex flex-row items-center gap-2.5 uppercase text-[12px] text-gray-600">
            <Award />
            <span>years of experience</span>
          </p>
        </div>
      </div>
    </>
  );
}
