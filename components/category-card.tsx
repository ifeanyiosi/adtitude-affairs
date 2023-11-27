import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  background: string;
  lowerStyle?: string;
  label: string;
  href: string;
}

const CategoryCard = ({
  background,
  lowerStyle,
  label,
  href,
}: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={` ${background}  relative flex flex-col items-center w-full h-[400px] `}
    >
      <div className="px-4 py-[10px] w-full z-[5] flex flex-col justify-between h-full rounded-[16px]  ">
        <div className="flex items-center justify-between"></div>

        <div className={`flex  items-center gap-[10px] ${lowerStyle} `}>
          <p className="text-[18px] text-[#fff] font-[700] ">{label} </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
