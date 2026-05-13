"use client";

import { Award, ChevronRight, File, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  const redirectContact = () => {
    router.push("/contact");
  };
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f7f6f2] px-[5%] py-14 md:py-20 text-gray-900 w-full pb-28 md:pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Editorial services · Lagos
            </p>
            <h1
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug"
            >
              Professional Proofreading & Editing Services in Nigeria
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-md"
            >
              From academic theses to business proposals and creative
              manuscripts — Pookers connects you with experienced editors and
              writers in Lagos who deliver precision, clarity, and impact.
            </p>
            <div className="flex flex-row gap-3 mt-2">
              <Link href="#editted-books">
                <button
                  data-aos="fade-up"
                  type="button"
                  className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:opacity-85 transition-opacity"
                >
                  See our work
                </button>
              </Link>
              <button
                data-aos="fade-up"
                type="button"
                onClick={redirectContact}
                className="text-gray-900 border border-gray-300 text-sm font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Contact us
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/images/illustration_hero.svg"
              alt="hero image for pookers"
              width={650}
              height={100}
              data-aos="zoom-out"
              className="h-auto"
            />
          </div>
        </div>
      </div>

      {/* Credibility Section */}
      <div
        data-aos="flip-left"
        className="z-20 bg-white md:w-fit mx-auto w-[90%] md:ml-[10%] shadow-sm border border-gray-100
    py-6 md:py-8 px-6 md:px-10 flex flex-col md:flex-row justify-start
    gap-6 md:gap-16 rounded-2xl -mt-10 md:-mt-14"
      >
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-playfair font-medium text-gray-900">
            160
          </p>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
            <File size={13} className="hidden md:block" />
            Research papers written
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-playfair font-medium text-gray-900">
            120+
          </p>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
            <Users size={13} className="hidden md:block" />
            Satisfied customers
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-playfair font-medium text-gray-900">7+</p>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
            <Award size={13} className="hidden md:block" />
            Years of experience
          </p>
        </div>
      </div>
    </>
  );
}
