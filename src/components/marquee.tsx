import Styles from "./styles/marquee.module.css";

const marqueeTexts = [
  "• Writing •",
  "• Editing •",
  "• Polished content •",
  "• Impactful Words •",
  "• Grammar Perfect •",
  "• Refined Expression •",
  "• Clarity First •",
  "• Words that work •",
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
    <div className="bg-white -mt-8">
      <div className="relative overflow-hidden bg-white py-5 md:py-6 mt-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-gray-200 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-gray-200 to-transparent" />

        <div className={`${Styles.marqueeScroll} flex whitespace-nowrap gap-6`}>
          {[...marqueeTexts, ...marqueeTexts].map((marquee, i) => (
            <span
              key={i}
              className="font-playfair px-6 py-2 bg-white text-black rounded-full font-medium text-[10px] md:text-sm"
            >
              {marquee}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
