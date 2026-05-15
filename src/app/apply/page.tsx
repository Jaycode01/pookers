"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoinTeam() {
  const [isSending, setisSending] = useState(false);
  const [formData, setformData] = useState({
    formType: "join",
    name: "",
    email: "",
    phoneNumber: "",
    strength: "",
    genre: "",
    years_of_experience: "",
    cv: "",
    prev_work1_url: "",
    prev_work2_url: "",
    message: "",
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
      alert("Application to Join Sent Successfully!");
      setformData({
        formType: "join",
        name: "",
        email: "",
        phoneNumber: "",
        strength: "",
        genre: "",
        years_of_experience: "",
        cv: "",
        prev_work1_url: "",
        prev_work2_url: "",
        message: "",
      });
    } else {
      alert("Failed to send. Try again later.\nNote: Error not from you.");
    }
  };

  const inputClass =
    "bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors w-full";

  const labelClass = "text-xs uppercase tracking-widest text-gray-400";

  const perks = [
    { title: "Flexible work", desc: "Work remotely on your own schedule." },
    {
      title: "Real clients",
      desc: "Contribute to projects that genuinely matter to people.",
    },
    {
      title: "Grow your craft",
      desc: "Work alongside experienced editors and writers.",
    },
    {
      title: "Fair compensation",
      desc: "We reward quality work appropriately.",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[320px]">
        <Image
          src="/images/photo_bg_about.avif"
          alt="Join team background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 h-full flex flex-col gap-4 justify-center pl-10">
          <p className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-1.5">
            <House size={13} />
            <span>Pookers</span>
            <span>/</span>
            <span>Join the team</span>
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm">
            Join our team.
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Apply now
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2
                data-aos="fade-right"
                className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
              >
                Write with us.
              </h2>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                {`We're`} always looking for talented writers and editors who
                take their craft seriously.
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
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+234 900 000 0000"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Professional Details */}
              <div className="flex flex-col gap-4">
                <p className={labelClass}>Professional details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="strength" className={labelClass}>
                      Area of strength
                    </label>
                    <select
                      id="strength"
                      name="strength"
                      value={formData.strength}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select one</option>
                      <option value="Writing">Writing</option>
                      <option value="Editing">Editing</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="genre" className={labelClass}>
                      Genre of writing
                    </label>
                    <input
                      type="text"
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      placeholder="Fiction, academic, copywriting…"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="experience" className={labelClass}>
                      Years of experience
                    </label>
                    <input
                      type="number"
                      id="experience"
                      name="years_of_experience"
                      value={formData.years_of_experience}
                      onChange={handleChange}
                      placeholder="e.g. 3"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cv" className={labelClass}>
                      CV link
                    </label>
                    <input
                      type="url"
                      id="cv"
                      name="cv"
                      value={formData.cv}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/…"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Previous Works */}
              <div className="flex flex-col gap-4">
                <p className={labelClass}>Two best previous works</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="work1" className={labelClass}>
                      Work one URL
                    </label>
                    <input
                      type="url"
                      id="work1"
                      name="prev_work1_url"
                      value={formData.prev_work1_url}
                      onChange={handleChange}
                      placeholder="https://…"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="work2" className={labelClass}>
                      Work two URL
                    </label>
                    <input
                      type="url"
                      id="work2"
                      name="prev_work2_url"
                      value={formData.prev_work2_url}
                      onChange={handleChange}
                      placeholder="https://…"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <button
                disabled={isSending}
                type="submit"
                className="bg-blue-600 text-white text-sm font-medium px-7 py-3 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50 w-fit"
              >
                {isSending ? "Submitting application..." : "Submit application"}
              </button>
            </form>

            {/* Side Info */}
            <div className="w-full md:w-[40%] sticky top-10 flex flex-col gap-4">
              {/* Why join */}
              <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-5">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Why join us
                </p>
                <div className="flex flex-col divide-y divide-white/10">
                  {perks.map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-4 py-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0" />
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
              </div>

              {/* Already a client? */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Looking for a service instead?
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  If you need writing or editing help rather than looking to
                  join us, head to our services page.
                </p>
                <Link
                  href="/request"
                  className="self-start text-sm text-gray-900 font-medium hover:underline transition-colors"
                >
                  Request a service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
