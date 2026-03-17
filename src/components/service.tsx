"use client";

import {
  BookOpen,
  Brain,
  Compass,
  File,
  GraduationCap,
  NotebookPen,
} from "lucide-react";
import React from "react";
import { FaLaptopFile } from "react-icons/fa6";

export default function Service() {
  return (
    <>
      <div className="py-10">
        <div className="relative w-full">
          <h1
            data-aos="fade-right"
            className="absolute text-gray-300 text-[27px] md:text-[40px] -z-20 font-poppins"
          >
            Our Services
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[20px] md:text-[35px] ml-16 md:ml-24 pt-7 font-poppins"
          >
            Our Services
          </h2>
        </div>

        <div className="px-[3%] flex flex-col md:flex-row justify-between mt-10 h-fit md:h-[770px] items-stretch">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <Brain size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Research
                </h3>
                <p className="text-[12px] md:text-md">
                  Let our team of experts put a touch of professionalism on your
                  essays, journal articles, etc.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <BookOpen size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Book Writing/GhostWriting
                </h3>
                <p className="text-[12px] md:text-md">
                  We can help you pen that story or idea while you take the
                  credit
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <FaLaptopFile size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Copyediting and Proofreading
                </h3>
                <p className="text-[12px] md:text-md">
                  If you want your manuscript free of grammatical, style and
                  content errors, ring us now
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <Compass size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Statement of Purpose/Intent or Letter of Motivation
                </h3>
                <p className="text-[12px] md:text-md">
                  With Pookers, you stand a chance of being considered for
                  further studies overseas
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <File size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  CV & Cover Letter
                </h3>
                <p className="text-[12px] md:text-md">
                  Reach out to us for mind-blowing CVs and Cover Letters
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <NotebookPen size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Blurb Writing
                </h3>
                <p className="text-[12px] md:text-md">
                  We deliver compelling blurbs that generate massive sales for
                  authors
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0"
            >
              <GraduationCap size={35} />
              <div className="">
                <h3 className="md:text-[18px] text-md font-semibold">
                  Intensive Literary Training
                </h3>
                <p className="text-[12px] md:text-md">
                  We train people to become better writers and editors
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-1 h-full px-[2.5%] mt-8 md:mt-0">
            <div data-aos="zoom-in" className="flex-1 overflow-hidden">
              <img
                src="/images/photo1_service.jpg"
                alt="Services Image One"
                className="w-full h-full object-cover"
              />
            </div>

            <div data-aos="zoom-in" className="flex-1 overflow-hidden">
              <img
                src="/images/photo2_service.jpg"
                alt="Services Image Two"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
