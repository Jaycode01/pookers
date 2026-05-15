"use client";

import { useState } from "react";
import React from "react";
import Footer from "@/components/footer";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RequestService() {
  const [isSending, setisSending] = useState(false);
  const [formData, setformData] = useState({
    formType: "request",
    name: "",
    email: "",
    phone_number: "",
    location: "",
    nature_of_work: "",
    nature_of_work_specify: "",
    deadline: "",
    other_informations: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSending(true);

    const res = await fetch("https://pookers.onrender.com/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setisSending(false);

    if (res.ok) {
      setformData({
        formType: "request",
        name: "",
        email: "",
        phone_number: "",
        location: "",
        nature_of_work: "",
        nature_of_work_specify: "",
        deadline: "",
        other_informations: "",
      });
      alert("Service Request Sent Successfully!");
    } else {
      alert("Failed to send. Try again later.\nNote: Error not from you.");
    }
  };

  const inputClass =
    "bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors w-full";

  const labelClass = "text-xs uppercase tracking-widest text-gray-400";

  const steps = [
    {
      step: "01",
      title: "We receive your request",
      desc: "Your form lands in our inbox instantly.",
    },
    {
      step: "02",
      title: "We review your brief",
      desc: "Our team goes through your requirements carefully.",
    },
    {
      step: "03",
      title: "We reach out",
      desc: "Expect a response within 24 hours to discuss scope and pricing.",
    },
    {
      step: "04",
      title: "We get to work",
      desc: "Once aligned, we begin and deliver on or before your deadline.",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[320px]">
        <Image
          src="/images/photo_bg_about.avif"
          alt="Request service background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 h-full flex flex-col gap-4 justify-center pl-10">
          <p className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-1.5">
            <House size={13} />
            <span>Pookers</span>
            <span>/</span>
            <span>Request a service</span>
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm">
            Request a service.
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Get started
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2
                data-aos="fade-right"
                className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
              >
                Tell us what you need.
              </h2>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                Fill in the details below and {`we'll`} get back to you as soon
                as possible.
              </p>
            </div>
            <div className="mt-6 h-px bg-gray-200 w-full" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-[60%] flex flex-col gap-6"
            >
              {/* Personal Info */}
              <div className="flex flex-col gap-4">
                <p className={labelClass}>Personal info</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+234 900 000 0000"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className={labelClass}>
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Lagos, Nigeria"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Service Details */}
              <div className="flex flex-col gap-4">
                <p className={labelClass}>Service details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nature" className={labelClass}>
                      Nature of work
                    </label>
                    <select
                      id="nature"
                      name="nature_of_work"
                      value={formData.nature_of_work}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select one</option>
                      <option value="Writing">Writing</option>
                      <option value="Editing">Editing</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nature_specify" className={labelClass}>
                      Specify
                    </label>
                    <input
                      type="text"
                      id="nature_specify"
                      name="nature_of_work_specify"
                      value={formData.nature_of_work_specify}
                      onChange={handleChange}
                      placeholder="Cover letter, SOP, thesis…"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="deadline" className={labelClass}>
                      Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="other" className={labelClass}>
                    Other information
                  </label>
                  <textarea
                    id="other"
                    name="other_informations"
                    value={formData.other_informations}
                    onChange={handleChange}
                    placeholder="Any additional details, instructions, or context we should know…"
                    className={`${inputClass} h-[180px] resize-none`}
                  />
                </div>
              </div>

              <button
                disabled={isSending}
                type="submit"
                className="bg-blue-600 text-white text-sm font-medium px-7 py-3 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50 w-fit"
              >
                {isSending ? "Sending request..." : "Send request"}
              </button>
            </form>

            {/* Side Info */}
            <div className="w-full md:w-[40%] sticky top-10">
              <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-5">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  What happens next
                </p>
                <div className="flex flex-col divide-y divide-white/10">
                  {steps.map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start gap-4 py-4">
                      <span className="text-xs font-mono text-white/20 mt-0.5 flex-shrink-0">
                        {step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white mb-1">
                          {title}
                        </p>
                        <p className="text-xs text-white/40 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <p className="text-xs text-white/30 leading-relaxed">
                  Need to talk first?{" "}
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Send us a message →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
