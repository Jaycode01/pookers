"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Pookers from "../../public/images/pooker.png";

export default function Navbar() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 md:px-14 py-10 bg-white shadow-md w-full relative">
        <Image src={Pookers} alt="pookers logo" width={120} height={120} />

        {/* List Items */}
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-14 absolute md:relative z-40 bg-white md:bg-inherit w-full md:w-fit left-0 top-[105px] md:top-0 border md:border-none border-gray-200 shadow-md md:shadow-none py-5 md:py-0`}
        >
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/" className="text-lg">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/" className="text-lg">
              Services
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/" className="text-lg">
              Contact Us
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/" className="text-lg">
              About Us
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
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
