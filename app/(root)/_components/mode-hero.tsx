import Image from "next/image";
import React from "react";

interface ModeHeroProps {
  background: string;
  heading: string;
  label: string;
}

export default function ModeHero({
  background,
  heading,
  label,
}: ModeHeroProps) {
  return (
    <div
      className={` ${background} relative flex flex-col items-center w-full h-[270px] lg:max-w-[550px] `}
    >
      <div className=" py-[10px] w-full z-[5] flex flex-col items-start px-[50px] justify-center h-full  ">
        <div className="flex flex-col  items-start  gap-[10px]">
          <p className="text-[36px] font-[700]  "> {heading} </p>
          <p className="text-[12px] font-[700] "> {label} </p>
        </div>
      </div>
    </div>
  );
}
