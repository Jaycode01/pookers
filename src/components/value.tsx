"use client";

import { Briefcase, Globe, GraduationCap, MicVocal } from "lucide-react";

const values = [
  {
    icon: MicVocal,
    title: "Speech Writing",
    desc: "From graduation ceremonies to corporate keynotes — we craft speeches that captivate, inspire, and leave a lasting impression. Tailored to your voice, your audience, and your moment.",
    tag: "Oratory",
    tagClass: "bg-blue-50 text-blue-900",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
  },
  {
    icon: Briefcase,
    title: "Employment Service",
    desc: "Professionally written CVs, cover letters, and personal branding documents that position you as the strongest candidate — for Nigerian and international job markets.",
    tag: "Career",
    tagClass: "bg-amber-50 text-amber-900",
    iconBg: "bg-amber-50",
    iconColor: "#854f0b",
  },
  {
    icon: GraduationCap,
    title: "Literary Training",
    desc: "Professionally written CVs, cover letters, and personal branding documents that position you as the strongest candidate — for Nigerian and international job markets.",
    tag: "Training",
    tagClass: "bg-green-50 text-green-900",
    iconBg: "bg-green-50",
    iconColor: "#3b6d11",
  },
  {
    icon: Globe,
    title: "Web Content",
    desc: "SEO-optimised, audience-focused web copy for Nigerian businesses — landing pages, service descriptions, and blog content that boosts Google visibility and drives real action.",
    tag: "Digital",
    tagClass: "bg-pink-50 text-pink-900",
    iconBg: "bg-pink-50",
    iconColor: "#993556",
  },
];

export default function Value() {
  return (
    <div className="bg-gray-900 py-16 md:py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
            Why Choose Pookers
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm"
            >
              Professional Editorial Services Built Around Your Words.
            </h2>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Every service we offer is designed to make your writing more
              powerful, credible, and impactful — for individuals and businesses
              across Nigeria.
            </p>
          </div>
          <div className="mt-6 h-px bg-white/10 w-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(
            (
              { icon: Icon, title, desc, tag, tagClass, iconBg, iconColor },
              i,
            ) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col hover:bg-white/10 transition-colors duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}
                >
                  <Icon size={18} color={iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg font-medium text-white mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed flex-1">
                  {desc}
                </p>
                <span
                  className={`mt-4 self-start text-xs font-medium px-2.5 py-1 rounded-full ${tagClass}`}
                >
                  {tag}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
