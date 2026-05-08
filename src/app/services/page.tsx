import Image from "next/image";
import { BsGear } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section className="relative h-[200px] md:h-[400px]">
        <Image
          src={`/images/photo_bg_about.jpg`}
          alt="about page top bg image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-white flex flex-col gap-5 justify-center pl-10 h-full">
          <p className="text-white text-[15px] flex flex-row items-center">
            <BsGear size={17} />
            <span className="pl-1.5">Pookers /</span>
            <span className="pl-1.5">Services</span>
          </p>
          <h1 className="text-white uppercase text-[23px] md:text-3xl">
            Services we render
          </h1>
        </div>
      </section>
      <section>
        <div className="">
          <h2></h2>
        </div>
      </section>
    </>
  );
};

export default Services;
