import Link from "next/link";
import React from "react";
import {
  BsPerson,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

export default function NavbarContent() {
  return (
    <div className="w-ful px-[30px] h-full overflow-y-auto flex flex-col gap-4">
      <div className="flex pt-[80px] text-[#000] flex-col items-start justify-center gap-8 w-full">
        <div className="w-full border-b border-gray-300" />
        <Link className="text-[15px] lg:text-[18px]    " href="/ASOS">
          ASOS
        </Link>

        <div className="w-full border-b border-gray-300" />

        <Link className="text-[15px] lg:text-[18px] " href="/ZARA">
          ZARA
        </Link>
        <div className="w-full border-b border-gray-300" />

        <Link className="text-[15px] lg:text-[18px] " href="/SHEIN">
          SHEIN
        </Link>
        <div className="w-full border-b border-gray-300" />
        <Link className="text-[15px] lg:text-[18px] " href="/ANKARA">
          ANKARA
        </Link>
        <div className="w-full border-b border-gray-300" />
        <Link className="text-[15px] lg:text-[18px] " href="/RTW">
          READY TO WEAR
        </Link>
        <div className="w-full border-b border-gray-300" />
        <Link className="text-[15px] lg:text-[18px] " href="/">
          FASHION ITEMS
        </Link>
        <div className="w-full border-b border-gray-300" />
        <Link className="text-[15px]  lg:text-[18px] " href="/GIFTS">
          HOME APPLIANCES & GIFTS
        </Link>
        <div className="w-full border-b border-gray-300" />
      </div>

      <div className="flex pb-[50px] flex-col text-[#000]">
        {/* <button className="flex items-center text-[28px] justify-center gap-4">
          <BsPerson />
          <p>Login</p>
        </button> */}

        <div className="flex items-center mt-8 text-[15px]  gap-8">
          <BsTwitter />
          <BsPinterest />
          <BsInstagram />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
}
