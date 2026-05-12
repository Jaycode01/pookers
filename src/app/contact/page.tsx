"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import {
  Facebook,
  House,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  const [isSending, setisSending] = useState(false);
  const [formData, setformData] = useState({
    formType: "contact",
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      alert("Sent Successfully!");
      setformData({
        formType: "contact",
        name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } else {
      alert("Failed to send. Try again later.\nNote: Error not from you.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "5 Birrel Avenue, Sabo, Yaba, Lagos State",
      href: null,
    },
    { icon: Phone, label: "(+234) 703 009 4966", href: "tel:+2347030094966" },
    { icon: Phone, label: "(+234) 815 523 6196", href: "tel:+2348155236196" },
    {
      icon: Mail,
      label: "pookerseditorial@gmail.com",
      href: "mailto:pookerseditorial@gmail.com",
    },
    {
      icon: Twitter,
      label: "pookersworld",
      href: "https://x.com/pookersworld",
    },
    {
      icon: Instagram,
      label: "pookersworld",
      href: "https://www.instagram.com/pookersworld",
    },
    {
      icon: Facebook,
      label: "pookerseditorial",
      href: "https://facebook.com/pookerseditorial",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[400px]">
        <Image
          src="/images/photo_bg_about.avif"
          alt="Contact page background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 h-full flex flex-col gap-4 justify-center pl-10">
          <p className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-1.5">
            <House size={13} />
            <span>Pookers</span>
            <span>/</span>
            <span>Contact</span>
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm">
            Contact us.
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Get in touch
            </p>
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 leading-snug max-w-sm"
            >
              Send us a message.
            </h2>
            <div className="mt-6 h-px bg-gray-200 w-full" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left — Form */}
            <div className="w-full md:w-[60%]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors h-[180px] md:h-[260px] resize-none"
                />
                <div className="flex items-center gap-5">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-blue-600 text-white text-sm font-medium px-7 py-3 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50"
                  >
                    {isSending ? "Sending..." : "Send message"}
                  </button>
                  <div className="flex gap-4">
                    <Link
                      href="/request"
                      className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      Request a service →
                    </Link>
                    <Link
                      href="/apply"
                      className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                    >
                      Join our team →
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            {/* Right — Contact Info */}
            <div className="w-full md:w-[40%] flex flex-col gap-6">
              <div className="bg-gray-900 rounded-2xl p-6 flex flex-col gap-5">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  Contact info
                </p>
                <div className="flex flex-col divide-y divide-white/10">
                  {contactInfo.map(({ icon: Icon, label, href }, i) => (
                    <div key={i} className="flex items-center gap-3 py-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-white/60" />
                      </div>
                      {href ? (
                        <Link
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span className="text-sm text-white/60">{label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.10123624524!2d3.376178175847342!3d6.50886832333144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58aef0ab5f%3A0x35d0d9dce060b34e!2s5%20Birrel%20Ave%2C%20Onike%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1753044670209!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[260px] md:h-[480px]"
        />
      </section>

      <Footer />
    </div>
  );
}
