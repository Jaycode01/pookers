import Footer from "@/components/footer";
import { Eye, Goal } from "lucide-react";
import React from "react";

export default function Essence() {
  return (
    <>
      <div className="bg-gray-100 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-[5%] py-7 md:py-12">
          <div
            data-aos="fade-up"
            className="group bg-white p-5 border border-gray-200 flex flex-col gap-5 justify-center items-center shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <Eye
                size={30}
                className="text-gray-900 group-hover:text-white transition-colors duration-300"
              />
              <h2 className="text-gray-900 text-[20px] md:text-[25px] group-hover:text-white transition-colors duration-300">
                Vision
              </h2>
            </div>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 text-sm md:text[16px]">
              <span>
                To provide writing and editing services with distinction to
                local and international clients.
              </span>
              <br />
              <span>
                To raise a new generation of freelance writers and editors who
                uphold originality in the teeming world of artificial
                intelligence.
              </span>
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="group bg-white p-5 border border-gray-200 flex flex-col gap-5 justify-center items-center shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <Goal
                size={30}
                className="etxt-gray-900 group-hover:text-white transition-colors duration-300"
              />
              <h2 className="text-gray-900 text-[20px] md:text-[25px] group-hover:text-white transition-colors duration-300">
                Mission
              </h2>
            </div>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 text-sm md:text[16px]">
              Having noticed the English-language and communication gap existent
              in our current world, we, as people of letters, have decided to
              render literary and editing services with simplicity and style to
              clients who are interested in saving themselves from embarrassing
              writing errors in social, corporate and academic space.
            </p>
          </div>
        </div>
        <p
          data-aos="flip-left"
          className="italic flex justify-end w-full pr-[5%] text-[10px] md:text-[16px]"
        >
          - Error-free writing is our priority
        </p>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
