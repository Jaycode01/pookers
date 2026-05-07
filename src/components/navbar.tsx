"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 md:px-14 py-6.5 md:py-10 bg-white shadow-md w-full relative">
        <img
          src="/images/pooker.png"
          alt="pookers logo"
          width={120}
          height={120}
        />

        {/* List Items */}
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-14 absolute md:relative z-40 bg-white md:bg-inherit w-full md:w-fit left-0 top-[70px] md:top-0 border md:border-none border-gray-200 shadow-md md:shadow-none py-5 md:py-0`}
        >
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/" className="text-[16px]">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/about" className="text-[16px]">
              About Us
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/contact" className="text-[16px]">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/services" className="text-[16px]">
              Services
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <div className="relative">
            <li className="relative group w-max cursor-pointer list-none">
              <Link href="/essence" className="text-[16px]">
                Essence
              </Link>
              <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
            </li>
          </div>
        </div>
        <div className="block md:hidden">
          {openMenu ? (
            <X onClick={() => setopenMenu(false)} />
          ) : (
            <Menu onClick={() => setopenMenu(true)} />
          )}
        </div>
      </div>
    </>
  );
}
