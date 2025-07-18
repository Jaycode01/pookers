import Image from "next/image";
import Photo_Hero from "../../public/illustration_hero.svg";
import { Award, ChevronRight, File, Users } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-gray-100 px-[2.5%] md:px-[5%] py-0  md:py-10 text-gray-900 w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-3 pt-5 md:pt-[3%]">
          <h1 className="text-[30px] md:text-[40px] font-poppins">
            Struggling with writting? {`We've`} got you covered
          </h1>
          <div className="text-[15px] md:text-lg flex flex-col gap-1">
            <p>
              Our dedicated team of experienced editors and writers is committed
              to helping you articulate your ideas with precision and impact.
              Whether you are working on an academic thesis, crafting a
              compelling business proposal, or developing a creative manuscript,
              we provide personalized support tailored to your specific needs.
            </p>
            <p>
              We understand the importance of clear communication and are here
              to ensure that your work engages your audience effectively. Let us
              partner with you to elevate your writing and transform your vision
              into a polished and professional final product. Together, we can
              achieve clarity and excellence in every piece you create.
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-5">
            <button
              type="button"
              className="bg-orange-600 px-10 py-4 text-white text-[15px]"
            >
              See Our Work
            </button>
            <button
              type="button"
              className="text-orange-600 border text-[15px] border-orange-600 px-10 py-3.5 flex flex-row items-center gap-2"
            >
              Contact Us
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center mt-7 md:mt-0">
          <Image src={Photo_Hero} alt="hero image for pookers" width={650} />
        </div>
        {/* Creditibility box/container */}
        <div className="absolute z-20 bg-white w-[95%] md:w-fit mx-auto shadow-lg border border-gray-200 top-[80%] md:top-[75%] py-5 md:py-10 px-5 md:px-7 flex md:flex-row items-center justify-center gap-7 md:gap-14 rounded-md ml-0 md:ml-20">
          <div className="flex flex-col gap-2">
            <p className="text-[20px]">160</p>
            <p className="flex flex-row items-center gap-2.5 uppercase text-sm">
              <File />
              <span>cases done</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px]">120+</p>
            <p className="flex flex-row items-center gap-2.5 uppercase text-sm">
              <Users />
              <span>satisfied customers</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px]">7+</p>
            <p className="flex flex-row items-center gap-2.5 uppercase text-sm">
              <Award />
              <span>years of experience</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
