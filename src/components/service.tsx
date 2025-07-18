import {
  BookOpen,
  Brain,
  Compass,
  File,
  GraduationCap,
  NotebookPen,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { FaLaptopFile } from "react-icons/fa6";
import PhotoOne_Service from "../../public/images/photo1_service.jpg";
import PhotoTwo_Service from "../../public/images/photo2_service.jpg";

export default function Service() {
  return (
    <>
      <div className="py-10">
        <div className="relative w-full">
          <h1 className="absolute text-gray-300 text-[35px] md:text-[50px] -z-20 font-poppins">
            Our Services
          </h1>
          <h2 className="text-[25px] md:text-[40px] ml-16 md:ml-24 pt-7 font-poppins">
            Our Services
          </h2>
        </div>
        <div className="px-[3%] flex flex-col md:flex-row justify-between mt-10 h-fit md:h-[770px]">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <Brain size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">Research</h3>
                <p className="text-sm md:text-[16px]">
                  Let our team of experts put a touch of professionalism on your
                  essays, journal articles, etc.
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <BookOpen size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">
                  Book Writing/GhostWriting
                </h3>
                <p className="text-sm md:text-[16px]">
                  We can help you pen that story or idea while you take the
                  credit
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <FaLaptopFile size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">
                  Copyediting and Proofreading
                </h3>
                <p className="text-sm md:text-[16px]">
                  If you want your manuscript free of grammatical, style and
                  content errors, ring us now
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <Compass size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">
                  Statement of Purpose/Intent or Letter of Motivation
                </h3>
                <p className="text-sm md:text-[16px]">
                  With Pookers, you stand a chance of being considered for
                  further studies overseas
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <File size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">CV & Cover Letter</h3>
                <p className="text-sm md:text-[16px]">
                  Reach out to us for mind-blowing CVs and Cover Letters
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <NotebookPen size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">Blurb Writing</h3>
                <p className="text-sm md:text-[16px]">
                  We deliver compelling blurbs that generate massive sales for
                  authors
                </p>
              </div>
            </div>

            <div className="flex text-gray-700 flex-row gap-2.5  bg-white border border-gray-200 shadow-md:shadow-lg w-[95%] md:w-[90%] mx-auto p-3 md:p-5 rounded-none md:rounded-lg hover:border-l-4 hover:border-orange-600 hover:border-t-0 hover:border-r-0 hover:border-b-0">
              <GraduationCap size={35} />
              <div className="">
                <h3 className="text-[18px] font-[500]">
                  Intensive Literary Training
                </h3>
                <p className="text-sm md:text-[16px]">
                  We train people to become better writers and editors
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-1 h-full px-[2.5%] mt-8 md:mt-0">
            <div className="flex-1 overflow-hidden">
              <Image
                src={PhotoOne_Service}
                alt="Services Image One"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <Image
                src={PhotoTwo_Service}
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
