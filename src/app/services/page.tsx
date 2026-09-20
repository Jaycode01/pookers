import Image from "next/image";
import { BsGear } from "react-icons/bs";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Writing, Editing & Proofreading Services in Lagos",
  description:
    "Professional writing, editing, proofreading, ghostwriting and SOP services in Lagos. Clear, error-free content for students, authors and businesses across Nigeria.",
};

const Services = () => {
  return (
    <>
      <section className="relative h-[200px] md:h-[400px]">
        <Image
          src={`/images/photo_bg_about.avif`}
          alt="about page top bg image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 text-white flex flex-col gap-4 justify-center pl-10 h-full">
          <p className="text-xs uppercase tracking-widest text-white/50 flex flex-row items-center gap-1.5">
            <BsGear size={14} />
            <span>Pookers</span>
            <span>/</span>
            <span>Services</span>
          </p>
          <h1 className="font-playfair text-2xl md:text-5xl font-medium text-white leading-snug max-w-md">
            Professional Writing & Editing Services in Lagos
          </h1>
        </div>
      </section>
      <section>
        <ServicesSection />
      </section>

      <Footer />
    </>
  );
};

export default Services;
