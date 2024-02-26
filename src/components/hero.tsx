"use client";
import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/assets/images/glow-bottom.svg";
import { supabase } from "@/config/supabaseClient";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("subscribers")
        .insert([{ email }]);
      if (error) {
        throw error;
      }
      console.log("Subscriber added:", data);
      setEmail("");
      toast("Thanks for subscribing! 🎉")
    } catch (error: any) {
      console.error("Error adding subscriber:", error.message);
      toast.error("Error adding subscriber")
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            {/*  <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" /> */}
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-green-500 before:blur-md">
                {/* 
            <a className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.green.500),_theme(colors.green.500))_padding-box,_linear-gradient(theme(colors.green.500),_theme(colors.green.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                  <span className="relative inline-flex items-center">
                    Check Demo Page<span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
           */}
              </div>
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Boost Engagement with Interactive Tools
            </h1>
            <p
              className="text-lg text-slate-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Boost engagement instantly! Our interactive modules offer social
              sharing, reviews, feedback, upselling and more. Elevate your site
              now!{" "}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-slate-900 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    required
                  />
                  <button
                    type="submit"
                    className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  >
                    Join Waiting List{" "}
                    {loading && (
                      <svg
                        className="animate-spin h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <circle
                          className="opacity-75"
                          cx="2"
                          cy="12"
                          r="2"
                          fill="currentColor"
                        ></circle>
                      </svg>
                    )}
                    {!loading && (
                      <span className="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    )}
                  </button>
                </form>
              </div>
              <div>
                {/* 
                <a className="btn text-slate-200 hover:text-white bg-bgprimary bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" href="#0">
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Read the docs</span>
                </a>
           */}
              </div>
            </div>

            <p
              className="text-base text-slate-600 mb-8 pt-4"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Enjoy our interactive features for{" "}
              <span className="text-green-600">free</span>, always!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
