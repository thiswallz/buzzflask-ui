import Image from "next/image";

import Flask1 from "../assets/flasks/t_37.png";
import Flask2 from "../assets/flasks/t_24.png";
import Flask3 from "../assets/flasks/t_123.png";
import Flask4 from "../assets/flasks/t_153.png";
import Flask5 from "../assets/flasks/t_150.png";
import Flask6 from "../assets/flasks/t_157.png";

export default function LiveShocase() {
  return (
    <div className="transition-all fixed top-1/2 transform -translate-x-1/2 -right-[calc(120px-10px)] hover:-right-[calc(120px-20px)] z-30 group">
      <div className="w-[120px] h-[60px] transition-all cursor-pointer -rotate-[90deg] bg-[#141414] p-2 px-4 rounded-t-md">
        <a className="flex gap-3 items-center">
          <Image
            src={Flask1}
            className="max-w-none transition-all group-hover:rotate-[15deg]"
            width={20}
            height={227}
            alt="Flask feature x"
          />
          <span className="text-white text-sm">Example</span>
        </a>
      </div>
    </div>
  );
}
