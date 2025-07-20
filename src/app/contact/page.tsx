import { Facebook, House, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="relative h-[250px] md:h-[400px]">
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
      <section className="text-gray-600 mt-20 px-[5%] flex flex-row gap-10">
        <div className="w-[65%]">
          <h1 className="text-2xl uppercase">send us a message</h1>
          <form className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-3 gap-10">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-500 text-inherit p-3 text-sm outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-500 text-inherit p-3 text-sm outline-none h-[250px]"
            />
            <button type="submit" className=""></button>
          </form>
        </div>
        <div className="">
          <h1 className="text-2xl uppercase">contact info</h1>
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
    </>
  );
}
