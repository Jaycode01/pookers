import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pookers from "../../public/images/pooker.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-[5%] py-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Image src={Pookers} alt="Pookers logo" width={130} />
            <p className="text-sm text-white/40 leading-relaxed">
              At Pookers, we believe words matter. We help you write, edit, and
              communicate with clarity and confidence — for projects that truly
              resonate.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-row gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Company
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request"
                    className="hover:text-white transition-colors"
                  >
                    Request Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/essence"
                    className="hover:text-white transition-colors"
                  >
                    Mission & Vision
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Socials
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                <li>
                  <Link
                    href="https://www.instagram.com/pookersworld"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/pookersworld"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/pookerseditorial"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2025 Pookers Literary & Editing World. All rights reserved.</p>
          <p>
            Built with 🤍 by{" "}
            <Link
              href="mailto:josephlamidijoslam@gmail.com"
              className="text-white/50 hover:text-white transition-colors"
            >
              Nexon
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
