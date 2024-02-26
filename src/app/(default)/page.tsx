export const metadata = {
  title: "Home - Stellar",
  description: "Page description",
};

import Image from "next/image";
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Features04 from "@/components/features-04";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Flasks from "@/components/flasks";
import LiveShowcase from "@/components/live-showcase";
import Arrow from "@/assets/arrow.svg";
import LogoImg from "@/assets/images/logo.png";

export default function Home() {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-1 mx-2 md:mx-12">
        <div className="lg:w-1/2 flex items-center">
          <Hero />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center lg:pt-24">
          <div className="border w-full h-full rounded-md relative overflow-hidden relative max-h-[450px] min-h-[450px] min-w-[500px] max-w-[600px]">
            <div className="p-4 border-b">Your Website</div>
            <div className="p-4 absolute top-[180px] right-40">Get Started with Just One Click!</div>
            <Image
              className="max-w-none absolute top-24 right-56"
              src={LogoImg}
              width={108}
              height={338}
              priority
              alt="Stellar"
            />
            <Image
              src={Arrow}
              width={120}
              height={40}
              alt="Icon 05"
              className="absolute top-[220px] right-24 transform rotate-[180deg]"
            />
            <LiveShowcase />
          </div>
        </div>
      </div>
      <Clients />
      <Flasks />

        {/* 
          <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      <Testimonials />
      <Cta />    
        */}

    </>
  );
}
