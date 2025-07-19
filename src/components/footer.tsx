import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pookers from "../../public/images/pooker.png";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-300 px-[5%] py-10 flex flex-col gap-7">
        <div className="flex flex-col gap-5 md:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <Image src={Pookers} alt="pookers logo" width={150} />
            <p className="w-full md:w-1/2">
              At Pookers, we believe words matter. We help you write, edit, and
              communicate with clarity and confidence — for projects that truly
              resonate.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <h2 className="text-[18px] font-semibold">Company</h2>
            <ul className="flex flex-col gap-1 md:gap-1.5 text-sm">
              <li className="">
                <Link href="/">About Us</Link>
              </li>
              <li className="">
                <Link href="/">Our Services</Link>
              </li>
              <li className="">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-5">
            <h2 className="text-[18px] font-semibold">Social Handles</h2>
            <ul className="flex flex-col gap-1 md:gap-1.5 text-sm">
              <li className="">
                <Link href="/">Instagram</Link>
              </li>
              <li className="">
                <Link href="/">Twitter</Link>
              </li>
              <li className="">
                <Link href="/">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 md:gap-5 justify-center w-full text-sm">
          <p className="flex flex-row items-center gap-1">
            <Copyright />
            <span>2025, Pookers.</span>
          </p>
          <p className="">
            Built with 🤍 by{" "}
            <Link href="/" className="text-white">
              Nexon
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
