import React from "react";
import Image from "next/image";
import { House } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="relative h-[400px]">
        <Image
          src="/images/photo_bg_about.jpg"
          alt="about page top bg image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-white flex flex-col gap-5 justify-center pl-10 h-full">
          <p className="text-white text-[15px] flex flex-row items-center">
            <House size={17} />
            <span className="pl-1.5">Pookers /</span>
            <span className="pl-1.5">About</span>
          </p>
          <h1 className="text-white uppercase text-3xl">about us</h1>
        </div>
      </section>
      <section className="flex flex-row gap-2 justify-center mt-20">
        <div className="w-[40%]">
          <div className="flex flex-col gap-5">
            <h1 className="uppercase text-2xl">
              <span className="border-b-4 border-orange-600 pb-1">abo</span>ut
              us
            </h1>
            <p className="">
              Pookers Literary & Editing World was established in 2018 out of
              the burning desire to create original and error-free writing for
              local and international clients who value top-quality services. We
              offer elegant writing across a wide range of disciplines and
              genres. We also provide enviable editing services for writers,
              authors and aspiring authors. We organise periodic training for
              individuals and members of corporate outfits who desire to scale
              up their writing skills. In the last 7 years, we have organised
              training, such as Intensive Copywriting Masterclass, Elegant
              Writing, How to Write Plagiarism-Free Proposals and The Business
              of Ghostwriting: Monetising Your Writing Skills, among other
              private, specialised training for interested learners at basic,
              intermediate and advanced levels. We have trained scores of
              writers, who now render high-value writing and editing services at
              home and abroad.
            </p>
          </div>
          <div className="">
            <h2 className="">Our Edges</h2>
          </div>
        </div>
        <div className="h-[400px]">
          <Image
            src="/images/photo_about.avif"
            alt="about us photo"
            width={600}
            height={600}
          />
        </div>
      </section>
    </>
  );
}
