"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setopenMenu] = useState(false);
  const [openDropdown, setopenDropdown] = useState(false);

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
            <Link href="/" className="text-lg">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/about" className="text-lg">
              About Us
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <li className="relative group w-max cursor-pointer list-none">
            <Link href="/contact" className="text-lg">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
          </li>
          <div className="relative">
            <li
              className="relative group w-max cursor-pointer list-none"
              onClick={() => setopenDropdown(!openDropdown)}
            >
              <button
                type="button"
                className="text-lg flex flex-row gap-1 items-center cursor-pointer"
              >
                Get Started
                {openDropdown ? <ChevronUp /> : <ChevronDown />}
              </button>
              <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-[500ms]"></span>
            </li>
            {openDropdown && (
              <ul className="relative md:absolute z-0 md:z-20 w-36 text-sm bg-inherit  md:bg-white shadow-none md:shadow-md border-none md:border border-gray-300 p-2 flex flex-col gap-1.5 left-0 top-2 md:top-10">
                <li>
                  <Link
                    href="/request"
                    className="text-gray-700 hover:underline cursor-pointer"
                  >
                    Request Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply"
                    className="text-gray-700  hover:underline cursor-pointer"
                  >
                    Join Team
                  </Link>
                </li>
              </ul>
            )}
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
