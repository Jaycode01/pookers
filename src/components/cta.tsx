import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#f7f6f2] py-16 md:py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-3xl px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-start">
          {/* Left — CTA */}
          <div className="flex flex-col gap-5 flex-1">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Get started
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-white leading-snug max-w-sm">
              Ready to transform your documents?
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Let our team of editors and writers handle the heavy lifting — so
              your words land the way they should.
            </p>
            <Link
              href="/contact"
              className="self-start inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-6 py-3 rounded-lg hover:opacity-85 transition-opacity"
            >
              Get started
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/10 self-stretch" />

          {/* Right — Newsletter */}
          <div className="flex flex-col gap-5 flex-1">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Newsletter
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white leading-snug">
              Writing tips, straight to your inbox.
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Subscribe for editing insights, writing advice, and Pookers
              updates — no spam, ever.
            </p>
            <div className="flex flex-row gap-0 w-full md:w-[90%] rounded-xl overflow-hidden border border-white/10">
              <input
                type="email"
                className="outline-none px-4 py-3 w-full text-sm bg-white/5 text-white placeholder:text-white/30"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-white text-gray-900 text-sm font-medium whitespace-nowrap hover:opacity-85 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
