"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Essence", href: "/essence" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-100 w-full sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-[5%] py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setOpenMenu(false)}>
          <img
            src="/images/pooker.png"
            alt="Pookers logo"
            width={110}
            height={110}
            className="h-auto"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="list-none">
                <Link
                  href={href}
                  className={`text-sm transition-colors duration-150 ${
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/request"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
        >
          Request a service
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-gray-900"
          aria-label="Toggle menu"
        >
          {openMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white border-t border-gray-100 px-[5%] py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpenMenu(false)}
                className={`text-sm transition-colors duration-150 ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="h-px bg-gray-100 w-full" />
          <Link
            href="/request"
            onClick={() => setOpenMenu(false)}
            className="self-start bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
          >
            Request a service
          </Link>
        </div>
      )}
    </nav>
  );
}
