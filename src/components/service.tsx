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
import ScrollFadeIn from "./scrollFadeIn";
import { FaLaptopFile } from "react-icons/fa6";

export default function Service() {
  return (
    <>
      <div className="py-10">
        <ScrollFadeIn>
          <div className="relative w-full">
            <h1 className="absolute text-gray-300 text-[35px] md:text-[50px] -z-20 font-poppins">
              Our Services
            </h1>
            <h2 className="text-[25px] md:text-[40px] ml-16 md:ml-24 pt-7 font-poppins">
              Our Services
            </h2>
          </div>
        </ScrollFadeIn>
        <div className="px-[3%] flex flex-col md:flex-row justify-between mt-10 items-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <Brain size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">Research</h3>
                  <p className="text-sm md:text-sm">
                    Let our team of experts put a touch of professionalism on
                    your essays, journal articles, etc.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <BookOpen size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">
                    Book Writing/GhostWriting
                  </h3>
                  <p className="text-sm md:text-sm">
                    We can help you pen that story or idea while you take the
                    credit
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <FaLaptopFile size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">
                    Copyediting and Proofreading
                  </h3>
                  <p className="text-sm md:text-sm">
                    If you want your manuscript free of grammatical, style and
                    content errors, ring us now
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <Compass size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">
                    Statement of Purpose/Intent or Letter of Motivation
                  </h3>
                  <p className="text-sm md:text-sm">
                    With Pookers, you stand a chance of being considered for
                    further studies overseas
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <File size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">CV & Cover Letter</h3>
                  <p className="text-sm md:text-sm">
                    Reach out to us for mind-blowing CVs and Cover Letters
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <NotebookPen size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">Blurb Writing</h3>
                  <p className="text-sm md:text-sm">
                    We deliver compelling blurbs that generate massive sales for
                    authors
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-blue-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
                <GraduationCap size={35} />
                <div className="">
                  <h3 className="text-[18px] font-[500]">
                    Intensive Literary Training
                  </h3>
                  <p className="text-sm md:text-sm">
                    We train people to become better writers and editors
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-0.5 px-[2.5%] mt-8 md:mt-0">
            <ScrollFadeIn zoom>
              <div className="aspect-video h-1/2 overflow-hidden">
                <img
                  src="/images/photo1_service.jpg"
                  alt="Services Image One"
                  className="w-full h-full"
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn zoom>
              <div className="aspect-video h-1/2 overflow-hidden">
                <img
                  src="/images/photo2_service.jpg"
                  alt="Services Image Two"
                  className="w-full h-full"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </>
  );
}
