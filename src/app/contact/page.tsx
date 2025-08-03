"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { Facebook, House, Instagram, Mail, Phone, Twitter } from "lucide-react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSending(true);

    const res = await fetch("../api/send-email", {
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
    } else alert("Failed to send. Try again later.\nNote: Error not from you.");
  };

  return (
    <>
      <section className="relative h-[200px] md:h-[400px]">
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
            <span className="pl-1.5">Contact</span>
          </p>
          <h1 className="text-white uppercase text-[23px] md:text-3xl">
            contact us
          </h1>
        </div>
      </section>
      <section className="text-gray-600 mt-20 px-[5%] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-[65%]">
          <h1 className="text-xl md:text-2xl uppercase">send us a message</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
                required
              />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-500 text-inherit p-3 text-sm outline-none h-[150px] md:h-[250px]"
              required
            />
            <button
              type="submit"
              disabled={isSending}
              className="text-left bg-blue-500 w-fit px-7  py-3 text-white text-sm"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl uppercase">contact info</h1>
          <ul className="flex flex-col gap-2.5 mt-5">
            <li className="flex flex-row gap-1.5 items-center">
              <House size={18} />
              <span>5 Birrel Avenue, Sabo, Yaba, Lagos State</span>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Phone size={18} />
              <span>(+234) 703 009 4966</span>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Phone size={18} />
              <span>(+234) 815 523 6196</span>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Mail size={18} />
              <Link href="mailto:pookerseditorial@gmail.com">
                pookerseditorial@gmail.com
              </Link>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Twitter size={18} />
              <Link href="https://x.com/pookersworld" target="_blank">
                pookersworld
              </Link>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Instagram size={18} />
              <Link
                href="https://www.instagram.com/pookersworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                pookersworld
              </Link>
            </li>
            <li className="flex flex-row gap-1.5 items-center">
              <Facebook size={18} />
              <Link
                href="https://facebook.com/pookerseditorial"
                target="_blank"
              >
                pookerseditorial
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="ml-[5%] mt-7 flex gap-5 text-blue-600 text-sm">
        <Link href="/request" className="hover:underline">
          Request Service
        </Link>
        <Link href="/apply" className="hover:underline">
          Join Team
        </Link>
      </div>
      <section className="w-full mt-10 md:mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.10123624524!2d3.376178175847342!3d6.50886832333144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c58aef0ab5f%3A0x35d0d9dce060b34e!2s5%20Birrel%20Ave%2C%20Onike%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1753044670209!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[250px] md:h-[500px]"
        ></iframe>
      </section>
      <footer className="mt-2">
        <Footer />
      </footer>
    </>
  );
}
