import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsMinecartLoaded, BsSearch } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import MobileSideBar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="w-full mx-auto z-[50]  top-0 sticky shadow-md  bg-white ">
      <div className="w-full flex items-center justify-center py-2 bg-[#EBE3D5] ">
        <p className="text-[12px] text-[#000] ">Shipping Nationwide</p>
      </div>

      <div className="bg-white  w-full py-[12px] flex items-center gap-8 justify-between  px-[30px] ">
        <div className="flex items-center">
          {" "}
          <Link
            className="text-[#000] whitespace-nowrap flex gap-2 font-[300] items-center justify-center  text-[22px] "
            href="/"
          >
            <Image
              width={24}
              className="hidden lg:flex"
              height={24}
              src="/adtitude-logo.png"
              alt="logo"
            />
            <MobileSideBar />{" "}
            <span className="hidden lg:flex">Ad.titude Affairs</span>
          </Link>
        </div>
        {/* <div className="lg:flex w-full hidden items-center">
          <SearchInput />
        </div> */}

        <div className="flex items-center">
          {" "}
          <Link
            className="text-[#000] whitespace-nowrap flex gap-2 font-[300] items-center justify-center  text-[22px] "
            href="/"
          >
            <Image
              width={24}
              className=" lg:hidden"
              height={24}
              src="/adtitude-logo.png"
              alt="logo"
            />

            <span className=" hidden">Ad.titude Affairs</span>
          </Link>
        </div>

        <div className=" hidden mx-auto w-full lg:flex flex-col gap-4 items-center justify-center ">
          <div className="flex items-center w-full gap-8 justify-center text-[#000] max-w-[1366px] px-[30px]">
            <Link
              className="text-[15px] text-center hover:underline "
              href="/ASOS"
            >
              ASOS
            </Link>

            <Link
              className="text-[15px] text-center hover:underline  "
              href="/ZARA"
            >
              ZARA
            </Link>

            <Link
              className="text-[15px] text-center hover:underline "
              href="/SHEIN"
            >
              SHEIN
            </Link>

            <Link className="text-[15px] text-center hover:underline" href="/ANKARA">
              ANKARA
            </Link>
            <Link className="text-[15px] text-center hover:underline " href="/RTW">
              READY TO WEAR
            </Link>
            <Link className="text-[15px] text-center hover:underline " href="/FASHION">
              FASHION ITEMS
            </Link>
            <Link className="text-[15px] text-center  hover:underline" href="/GIFTS">
              HOME APPLIANCES & GIFTS
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <IoIosHeartEmpty className="text-mainText  flex  text-[20px] " />{" "} */}
          {/* <BsPerson className="text-[#000] flex text-[20px]" /> */}
          <CiHeart className="text-[#000] text-[25px]" />
          <Link href="/cart">
            {" "}
            <BsMinecartLoaded className="text-[#000] text-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
