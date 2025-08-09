import React from "react";
import { CircleCheckBig, House } from "lucide-react";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <div>
        <section className="relative h-[250px] md:h-[400px]">
          <img
            src="/images/photo_bg_about.jpg"
            alt="about page top bg image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80 text-white flex flex-col gap-5 justify-center pl-10 h-full">
            <p className="text-white text-[15px] flex flex-row items-center">
              <House size={17} />
              <span className="pl-1.5">Pookers /</span>
              <span className="pl-1.5">About</span>
            </p>
            <h1 className="text-white uppercase text-[23px] md:text-3xl">
              about us
            </h1>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-10 md:gap-2 justify-center mt-20 text-gray-600 mb-10 md:mb-20">
          <div className="w-[90%] mx-auto md:mx-0 md:w-[40%]">
            <div className="flex flex-col gap-5">
              <h1 className="uppercase text-2xl">
                <span className="border-b-4 border-blue-600 pb-1">abo</span>ut
                us
              </h1>
              <p className="">
                Pookers Literary & Editing World was established in 2018 out of
                the burning desire to create original and error-free writing for
                local and international clients who value top-quality services.
                We offer elegant writing across a wide range of disciplines and
                genres. We also provide enviable editing services for writers,
                authors and aspiring authors. We organise periodic training for
                individuals and members of corporate outfits who desire to scale
                up their writing skills. In the last 7 years, we have organised
                training, such as Intensive Copywriting Masterclass, Elegant
                Writing, How to Write Plagiarism-Free Proposals and The Business
                of Ghostwriting: Monetising Your Writing Skills, among other
                private, specialised training for interested learners at basic,
                intermediate and advanced levels. We have also trained scores of
                writers, who now render high-value writing and editing services
                at home and abroad.
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold">Core Values:</h2>
              <ul className="mt-2 flex flex-col gap-2">
                <li className="flex flex-row items-center gap-1.5">
                  <CircleCheckBig size={19} style={{ color: "#2b7fff" }} />
                  <span>Premium Quality Writing</span>
                </li>
                <li className="flex flex-row items-center gap-1.5">
                  <CircleCheckBig size={19} style={{ color: "#2b7fff" }} />
                  <span>Client-Centric Approach</span>
                </li>
                <li className="flex flex-row items-center gap-1.5">
                  <CircleCheckBig size={19} style={{ color: "#2b7fff" }} />
                  <span>Quick Turnaround</span>
                </li>
                <li className="flex flex-row items-center gap-1.5">
                  <CircleCheckBig size={19} style={{ color: "#2b7fff" }} />
                  <span>Versatile Expertise</span>
                </li>
                <li className="flex flex-row items-center gap-1.5">
                  <CircleCheckBig size={19} style={{ color: "#2b7fff" }} />
                  <span>Guaranteed Privacy & Ownership</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[400px]">
            <img
              src="/images/photo_about.avif"
              alt="about us photo"
              width={600}
              height={600}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
