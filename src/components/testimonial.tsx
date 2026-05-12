import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pookers prepared my CV and Cover Letter for a job in a multinational company. I didn't know my CV and Cover Letter could be compelling. My career has found essence with Pookers Literary & Editing World.",
    name: "Segun Umoru",
    role: "Client",
    avatar: "/images/photo_avatar_male.jpeg",
    tag: "CV & Cover Letter",
  },
  {
    quote:
      "After the first publication of my novel, The Secret Killer, I knew I needed a professional editor. He and his team actually delivered. Their input in the novel is virtuoso, to say the least. In Pookers, I have found great comfort.",
    name: "Faith Ozioma Peter Diji",
    role: "Author, The Secret Killer",
    avatar: "/images/photo_avatar_female.png",
    tag: "Book Editing",
  },
  {
    quote:
      "The moment I was referred to Pookers, my story became different. Through their seasoned writers, our donors have now increased nationally and internationally.",
    name: "Mrs Amaka",
    role: "NGO Founder",
    avatar: "/images/photo_avatar_female.png",
    tag: "Content Writing",
  },
  {
    quote:
      "Through the 21-day online extensive training, I brushed up my writing skills and improved my grammar before my IELTS exam. I got a 7. Now I write better business correspondence for my company. Absolutely worth it.",
    name: "Efe John",
    role: "Client",
    avatar: "/images/photo_avatar_male.jpeg",
    tag: "Literary Training",
  },
  {
    quote:
      "I had a deadline for submitting a Statement of Purpose for master's admissions in a UK university. I never knew the work could be completed within such a short time. Pookers was my hope when I had none.",
    name: "Sandra",
    role: "Client",
    avatar: "/images/photo_avatar_female.png",
    tag: "SOP Writing",
  },
  {
    quote:
      "The training opened my eyes to common mistakes and gave me a thorough grasp of punctuation. I will recommend any Pookers writing course to anyone willing to be an elegant writer.",
    name: "Titilope Oluwatayo",
    role: "Client",
    avatar: "/images/photo_avatar_female.png",
    tag: "Literary Training",
  },
  {
    quote:
      "Since I engaged Pookers for weekly reports and articles on my youth campaign programmes, the result has been tremendous. You are the best!",
    name: "Oludamola Ogidan",
    role: "Client",
    avatar: "/images/photo_avatar_male.jpeg",
    tag: "Content Writing",
  },
  {
    quote:
      "The Business of Ghostwriting training was truly transformative. One key takeaway was the importance of carving out a writing niche. This training reignited my passion for writing. I wholeheartedly recommend Pookers.",
    name: "Chioma Okonkwo",
    role: "Client",
    avatar: "/images/photo_avatar_female.png",
    tag: "Ghostwriting",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gray-900 py-16 md:py-24 px-[5%] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
            Testimonials
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              data-aos="fade-right"
              className="font-playfair text-4xl md:text-5xl font-medium text-white leading-snug max-w-sm"
            >
              Our success stories.
            </h2>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Real feedback from real clients {`we've`} helped with writing and
              editing.
            </p>
          </div>
          <div className="mt-6 h-px bg-white/10 w-full" />
        </div>

        {/* Scrolling ticker */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-gray-900 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-gray-900 to-transparent" />

          <div className="flex w-max animate-scroll gap-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[340px] bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 flex-shrink-0"
              >
                {/* Quote icon + tag */}
                <div className="flex items-center justify-between">
                  <Quote size={18} className="text-white/20" />
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60">
                    {t.tag}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-white/60 leading-relaxed flex-1">
                  {t.quote}
                </p>

                <div className="h-px bg-white/10 w-full" />

                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-white/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {t.name}
                    </span>
                    <span className="text-xs text-white/40">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
