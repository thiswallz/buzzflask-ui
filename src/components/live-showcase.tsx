import Image from "next/image";

import Flask1 from "../assets/flasks/t_37.png";
import Flask2 from "../assets/flasks/t_24.png";
import Flask3 from "../assets/flasks/t_123.png";
import Flask4 from "../assets/flasks/t_153.png";
import Flask5 from "../assets/flasks/t_150.png";
import Flask6 from "../assets/flasks/t_157.png";

export default function LiveShocase() {
  return (
    <div className="transition-all absolute top-1/2 transform -translate-x-1/2 -right-[calc(120px-10px)] hover:-right-[calc(120px-20px)] z-30 group">
      <div className="w-[120px] h-[60px] transition-all cursor-pointer -rotate-[90deg] bg-[#141414] p-2 px-4 rounded-t-md">
        <a className="flex gap-1 items-center">
        <svg
              className="shrink-0 fill-slate-300 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
            >
              <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
            </svg>
          <span className="text-white text-sm">Example</span>
        </a>
      </div>
    </div>
  );
}
