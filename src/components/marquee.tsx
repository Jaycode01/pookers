import Styles from "./styles/marquee.module.css";

const marqueeTexts = [
  "• Writing •",
  "• Editing •",
  "• Polished content •",
  "• Impactful Words •",
  "• Grammer Perfect •",
  "• Refined Expression •",
  "• Clarity First •",
  "• Words that works •",
  "• Thoughtfully Edited •",
  "• Academic Ready •",
  "• Voice Ready •",
  "• Structurally Sound •",
  "• On-Point Messaging •",
  "• Attention to Details •",
  "• Fast Turnaround •",
  "• Impacts That Lasts •",
];

export default function Marquee() {
  return (
    <div className="bg-white pt-9">
      <div className="relative overflow-hidden bg-white py-7 md:py-14 mt-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-gray-200 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-gray-200 to-transparent" />

        <div className={`${Styles.marqueeScroll} flex whitespace-nowrap gap-6`}>
          {[...marqueeTexts, ...marqueeTexts].map((marquee, i) => (
            <span
              key={i}
              className="px-6 py-2 bg-white text-black rounded-full font-medium text-sm"
            >
              {marquee}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
