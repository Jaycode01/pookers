import Footer from "@/components/footer";
import { Eye, Goal } from "lucide-react";
import React from "react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    body: [
      "To become the most trusted professional writing and editing service for local and international clients — delivering distinction, originality, and excellence in every project.",
      "To raise a new generation of Nigerian freelance writers and editors who uphold originality, quality, and integrity in an increasingly AI-driven world.",
    ],
    tag: "Where We're Going",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
    tagClass: "bg-blue-50 text-blue-900",
  },
  {
    icon: Goal,
    title: "Mission",
    body: [
      "At Pookers, we exist to close the English-language and communication gap that holds individuals, businesses, and academics back. As experienced editorial professionals based in Lagos, Nigeria, we deliver literary and editing services with simplicity, style, and precision — helping clients across corporate, academic, and social spaces eliminate embarrassing writing errors and communicate with confidence.",
    ],
    tag: "Why We Exist",
    iconBg: "bg-amber-50",
    iconColor: "#854f0b",
    tagClass: "bg-amber-50 text-amber-900",
  },
];

export default function Essence() {
  return (
    <div>
      <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Our Essence
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2
                data-aos="fade-right"
                className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
              >
                Our Vision & Mission
              </h2>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed italic font-playfair">
                — Error-free, professional writing for every Nigerian and
                international client we serve.
              </p>
            </div>
            <div className="mt-6 h-px bg-gray-200 w-full" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map(
              (
                { icon: Icon, title, body, tag, iconBg, iconColor, tagClass },
                i,
              ) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
                >
                  {/* Icon + tag row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}
                    >
                      <Icon size={18} color={iconColor} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagClass}`}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-playfair text-2xl md:text-3xl font-medium text-gray-900">
                    {title}
                  </h2>

                  <div className="h-px bg-gray-100 w-full" />

                  {/* Body */}
                  <div className="flex flex-col gap-3">
                    {body.map((para, j) => (
                      <p
                        key={j}
                        className="text-sm text-gray-500 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
