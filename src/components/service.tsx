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
import Image from "next/image";

export default function Service() {
  return (
    <>
      <div className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            What we offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
            >
              Our services.
            </h2>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              From first draft to final polish — we handle every stage of the
              writing process.
            </p>
          </div>
          <div className="mt-6 h-px bg-gray-200 w-full" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Service List */}
          <div className="w-full md:w-1/2 flex flex-col divide-y divide-gray-200">
            {[
              {
                icon: Brain,
                title: "Research",
                desc: "Expert-level essays, journal articles, and academic papers with a professional touch.",
              },
              {
                icon: BookOpen,
                title: "Book Writing & Ghostwriting",
                desc: "We pen your story or idea — you take the credit, fully and rightfully.",
              },
              {
                icon: FaLaptopFile,
                title: "Copyediting & Proofreading",
                desc: "Manuscripts free of grammatical, stylistic, and content errors — guaranteed.",
              },
              {
                icon: Compass,
                title: "Statement of Purpose / Letter of Motivation",
                desc: "Stand out for overseas admissions with a compelling, tailored SOP.",
              },
              {
                icon: File,
                title: "CV & Cover Letter",
                desc: "Mind-blowing CVs and cover letters that open doors.",
              },
              {
                icon: NotebookPen,
                title: "Blurb Writing",
                desc: "Compelling blurbs that hook readers and drive sales for authors.",
              },
              {
                icon: GraduationCap,
                title: "Intensive Literary Training",
                desc: "We train people to become sharper writers and more confident editors.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="group flex flex-row items-start gap-4 py-5 hover:pl-2 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Icon
                    size={16}
                    className="text-gray-500 group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-playfair text-base md:text-lg font-medium text-gray-900 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 h-full sticky top-10">
            <div
              data-aos="zoom-in"
              className="overflow-hidden rounded-2xl flex-1"
            >
              <Image
                src="/images/photo1_service.avif"
                alt="Services Image One"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
              />
            </div>
            <div
              data-aos="zoom-in"
              className="overflow-hidden rounded-2xl flex-1"
            >
              <Image
                src="/images/photo2_service.avif"
                alt="Services Image Two"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
