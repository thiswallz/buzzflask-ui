"use client";

import { useState } from "react";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";
import Flask1 from "../assets/flasks/t_37.png";
import Flask2 from "../assets/flasks/t_24.png";
import Flask3 from "../assets/flasks/t_123.png";
import Flask4 from "../assets/flasks/t_153.png";
import Flask5 from "../assets/flasks/t_150.png";
import Flask6 from "../assets/flasks/t_157.png";

function generateRandomId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

const Flask = ({
  flaskImage,
  baseColor,
  title,
  subtitle,
  linear1,
  linear2,
}: any) => {
  const randomId = generateRandomId();

  return (
    <div className="relative py-24 -mt-12 group">
      {/* Particles animation */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={8}
        staticity={30}
      />

      <div className="flex items-center justify-center">
        {/* Title */}
        <div className="absolute top-20 z-10 text-xl font-medium text-center text-slate-400 group-hover:text-slate-300">
          {title}
        </div>
        {/* SubTitle */}
        <div className="absolute mx-20 md:mx-0 transition-opacity md:opacity-0 group-hover:opacity-100 bottom-10 z-10 text-sm text-center md:mx-20 text-slate-400">
          {subtitle}
        </div>
        <div className="absolute mx-20 md:mx-0 transition-opacity md:opacity-0 group-hover:opacity-100 bottom-10 z-10 text-sm text-center md:mx-20 text-slate-400">
          <a
            className="btn text-slate-200 hover:text-white bg-bgprimary bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
            href="#0"
          >
            <svg
              className="shrink-0 fill-slate-300 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
            </svg>
            <span>Read the docs</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48 flex justify-center items-center">
          {/* Halo effect */}
          <svg
            className="absolute opacity-10 inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
            width="480"
            height="480"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={`pulse-a-${randomId}`}
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={baseColor} />
                <stop offset="76.382%" stopColor="#FAF5FF" />
                <stop offset="100%" stopColor={baseColor} />
              </linearGradient>
            </defs>
            <g fillRule="evenodd">
              <path
                className="pulse"
                fill={`url(#pulse-a-${randomId})`}
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
              <path
                className="pulse pulse-1"
                fill={`url(#pulse-a-${randomId})`}
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
              <path
                className="pulse pulse-2"
                fill={`url(#pulse-a-${randomId})`}
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
            </g>
          </svg>
          {/* Grid */}
          <div className="absolute transition-opacity opacity-20 group-hover:opacity-50 inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
            <div className="h-[200%] animate-endless">
              <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
              <div className={`absolute inset-0 ${linear1}`} />
              <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
              <div className={`absolute inset-0 ${linear2}`} />
            </div>
          </div>
          {/* Icons */}
          <Transition
            show={true}
            className="absolute"
            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
            enterFrom="opacity-0 -rotate-[60deg]"
            enterTo="opacity-100 rotate-0"
            leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
            leaveFrom="opacity-100 rotate-0"
            leaveTo="opacity-0 rotate-[60deg]"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl -rotate-[14deg] before:absolute ">
              <Image
                src={flaskImage}
                className="max-w-none transition-all animate-glow group-hover:animate-none group-hover:rotate-[15deg]"
                width={80}
                height={227}
                alt="Flask feature x"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default function Flasks() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <h1
          className="h1 pt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
          data-aos="fade-down"
        >
          Our Flasks!
        </h1>
        <div className="pt-10 pb-12 md:pt-28 md:pb-20">
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:w-full md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Image */}
              <div
                className="grid md:grid-cols-3 gap-4 w-full"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Flask
                  title="Quick Feedback"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask1}
                  baseColor={"#f41a0d"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.red.500)_48px,_theme(colors.red.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.red.500)_48px,_theme(colors.red.500)_49px)]"
                  }
                />
                <Flask
                  title="Social Media"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask2}
                  baseColor={"#8f0192"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"
                  }
                />
                <Flask
                  title="Smart Reviews"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask3}
                  baseColor={"#379026"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"
                  }
                />
                <Flask
                  title="Dynamic Upselling"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask4}
                  baseColor={"#00889a"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.blue.500)_48px,_theme(colors.blue.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.blue.500)_48px,_theme(colors.blue.500)_49px)]"
                  }
                />

                <Flask
                  title="Accesibility"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask5}
                  baseColor={"#ffee07"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.yellow.500)_48px,_theme(colors.yellow.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.yellow.500)_48px,_theme(colors.yellow.500)_49px)]"
                  }
                />

                <Flask
                  title="Appointment Scheduler"
                  subtitle="Use AI algorithms to recommend personalized content or products based on visitor behavior."
                  flaskImage={Flask6}
                  baseColor={"#a22e6e"}
                  linear1={
                    "[background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.pink.500)_48px,_theme(colors.pink.500)_49px)]"
                  }
                  linear2={
                    "[background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.pink.500)_48px,_theme(colors.pink.500)_49px)]"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
