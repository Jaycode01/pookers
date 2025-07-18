import React from "react";
import Image from "next/image";
import Avatar_Male from "../../public/images/photo_avatar_male.jpeg";
// import Avatar_Female from "../../public/images/photo_avatar_female.png";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <>
      <div className="overflow-hidden w-full bg-gray-100 py-10 flex flex-col gap-16">
        <div className="mt-20 flex flex-col gap-2 justify-center items-center w-[35%] text-center mx-auto">
          <button
            type="button"
            className="text-sm border border-gray-600 py-3 px-7 rounded-md text-gray-600"
          >
            Testimonials
          </button>
          <h2 className="text-[40px]">Our Success Story</h2>
          <p className="text-[17px]">
            Real feedback from real clients who we have helped on their projects
            and ideas with our writing and editing service.
          </p>
        </div>
        <div className="flex w-max animate-scroll gap-5 px-5">
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5">
              <Image
                src={Avatar_Male}
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
