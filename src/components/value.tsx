"use client";

import { Briefcase, Globe, GraduationCap, MicVocal } from "lucide-react";
import React from "react";

export default function Value() {
  return (
    <>
      <div className="mt-16">
        <div className="relative w-full">
          <h1
            data-aos="fade-right"
            className="absolute text-gray-300 text-[27px] md:text-[40px] -z-20 font-poppins"
          >
            Why Choose Us
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[20px] md:text-[35px] ml-16 md:ml-24 pt-7 font-poppins"
          >
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 px-[5%] mt-8 md:mt-16">
          <div
            data-aos="fade-up"
            className="bg-white shadow-md border border-gray-200 py-5 px-3.5 flex flex-col gap-5 text-center justify-center items-center"
          >
            <div className="text-blue-600 flex flex-col justify-center items-center gap-2 font-semibold">
              <MicVocal size={50} />
              <h2 className="text-gray-900 text-[18px] md:text-[23px]">
                Speech Writing
              </h2>
            </div>
            <p className="text-[12px] md:text-[15px]">
              Whether {`you're`} preparing for a graduation, a corporate pitch,
              a wedding toast, or a keynote address, we can help you deliver
              speeches that captivate, inspire, and leave a lasting impression.
              Our team combines emotional intelligence, effective rhetorical
              techniques, and a keen awareness of your audience to create
              powerful speeches tailored to your unique voice and purpose.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white shadow-md border border-gray-200 py-5 px-3.5 flex flex-col gap-5 text-center justify-center items-center"
          >
            <div className="text-blue-600 flex flex-col justify-center items-center gap-2 font-semibold">
              <Briefcase size={50} />
              <h2 className="text-gray-900 text-[18px] md:text-[23px]">
                Employment Service
              </h2>
            </div>
            <p className="text-[12px] md:text-[15px]">
              Helping You Stand Out in the Job Market From tailored CVs and
              compelling cover letters to job interview prep and personal
              branding, we equip you with the tools you need to confidently
              pursue and secure your dream job. Our goal is to present you as
              the best candidate — on paper and in person.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white shadow-md border border-gray-200 py-5 px-3.5 flex flex-col gap-5 text-center justify-center items-center"
          >
            <div className="text-blue-600 flex flex-col justify-center items-center gap-2 font-semibold">
              <GraduationCap size={50} />
              <h2 className="text-gray-900 text-[18px] md:text-[23px]">
                Literary Training
              </h2>
            </div>
            <p className="text-[12px] md:text-[15px]">
              Our intensive literary training programs are designed to refine
              your writing, editing, and storytelling skills. Whether {`you're`}{" "}
              an aspiring author, student, or professional, we offer practical
              lessons, expert feedback, and real-world exercises to help you
              write with clarity, creativity, and confidence.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="bg-white shadow-md border border-gray-200 py-5 px-3.5 flex flex-col gap-5 text-center justify-center items-center"
          >
            <div className="text-blue-600 flex flex-col justify-center items-center gap-2">
              <Globe size={50} />
              <h2 className="text-gray-900 text-[18px] md:text-[23px] font-semibold">
                Web Content
              </h2>
            </div>
            <p className="text-[12px] md:text-[15px]">
              We craft SEO-friendly, engaging, and audience-focused web content
              that helps you inform, sell, and connect. Whether {`it's`} landing
              pages, service descriptions, or blogs, our writing is tailored to
              boost visibility and drive user action—ensuring your website
              speaks your {`brand's`} voice clearly and professionally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
