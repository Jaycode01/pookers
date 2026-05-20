"use client";

import React from "react";
import { Cog, House, Star, Brain } from "lucide-react";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const coreValues = [
  {
    icon: Star,
    title: "Originality",
    desc: "Every piece we deliver is 100% plagiarism-free — original writing you can submit, publish, or present with full confidence.",
  },
  {
    icon: Brain,
    title: "Creativity",
    desc: "We approach every writing and editing task with style, precision, and creative intelligence.",
  },
  {
    icon: Cog,
    title: "Industry",
    desc: "Our writers and editors are ready to apply themselves and meet your deadline.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[250px] md:h-[400px]">
        <Image
          src="/images/photo_bg_about.avif"
          alt="Pookers editorial team in Lagos Nigeria providing professional writing and proofreading services"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 h-full flex flex-col gap-4 justify-center pl-10">
          <p className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-1.5">
            <House size={13} />
            <span>Pookers</span>
            <span>/</span>
            <span>About</span>
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm">
            About us.
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Our story
            </p>
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
            >
              Who We Are
            </h2>
            <div className="mt-6 h-px bg-gray-200 w-full" />
          </div>

          {/* Two Column */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left — Text + Values */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 leading-relaxed"
              >
                Pookers Literary & Editing World is a professional editorial and
                writing service based in Lagos, Nigeria. Founded in 2018, we
                were built on a commitment to delivering original, error-free
                writing for local and international clients who demand
                top-quality results. We offer expert writing across a wide range
                of disciplines and genres — and provide professional editing and
                proofreading services for writers, authors, businesses, and
                students across Nigeria.
              </p>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 leading-relaxed"
              >
                Pookers Literary & Editing World is a professional editorial and
                writing service based in Lagos, Nigeria. Founded in 2018, we
                were built on a commitment to delivering original, error-free
                writing for local and international clients who demand
                top-quality results. We offer expert writing across a wide range
                of disciplines and genres — and provide professional editing and
                proofreading services for writers, authors, businesses, and
                students across Nigeria.
              </p>

              {/* Core Values */}
              <div data-aos="fade-up" className="flex flex-col gap-4 mt-2">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Core values
                </p>
                <div className="flex flex-col divide-y divide-gray-200">
                  {coreValues.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4 py-4">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-gray-500" />
                      </div>
                      <div>
                        <p className="font-playfair text-base font-medium text-gray-900 mb-1">
                          {title}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href={`/services`} className="text-gray-400 text-sm">
                Our Services
              </Link>
            </div>

            {/* Right — Image */}
            <div
              data-aos="zoom-in"
              className="w-full md:w-1/2 overflow-hidden rounded-2xl sticky top-10"
            >
              <Image
                src="/images/photo_about.avif"
                alt="About Pookers"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
