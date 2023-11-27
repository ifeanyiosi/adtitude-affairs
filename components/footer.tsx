import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsArrowUp,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#ede0d4] w-full flex flex-col min-h-[200px]   justify-center items-center [@media_(min-width:_658px)]:pt-[78px] pt-[108px] ">
      <div className="max-w-[1366px] flex flex-col gap-[32px]  mb-[40px] items-center justify-between w-full px-8">
        <div className="flex w-full gap-[67px] [@media_(min-width:_658px)]:flex-row flex-col justify-between">
          <div className="flex flex-col items-start gap-[8px] max-w-[300px]">
            {/* <Image
              height={100}
              width={100}
              src={SaveToBuyLogo}
              alt="save-to-buy-logo"
            /> */}
            <div className="flex items-center gap-[20px] w-full">
              <a href="https://instagram.com/usesavetobuy?igshid=YmM0MjE2YWMzOA==">
                <BsInstagram className="text-[#666]  " />
              </a>
              <a href="https://www.youtube.com/@usesavetobuy">
                <BsYoutube className="text-[#666]  " />
              </a>
              <a href="https://web.facebook.com/usesavetobuy">
                <BsFacebook className="text-[#666]" />
              </a>
              <a href="https://twitter.com/UseSavetoBuy">
                <BsTwitter className="text-[#666]" />
              </a>
              <a href="https://www.tiktok.com/@usesavetobuy">
                {" "}
                <BsTiktok className="text-[#666]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col text-[#666] items-start gap-[12px]">
            <h3 className=" text-[18px] text-[#666]  max-w-[466px] text-center font-bold leading-[21.6px]">
              Legal
            </h3>
            <Link href="/terms" className="text-[#666] text-[14px]">
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-primary-mint text-[14px]"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="text-[18px] text-[#666] max-w-[466px] text-center font-bold leading-[21.6px]">
              Company
            </h3>
            <Link href="/about" className="text-[#666] text-[14px]">
              About Us
            </Link>
            <Link href="/faqs" className="text-[#666] text-[14px]">
              FAQ
            </Link>
            <Link
              href="https://www.blog.savetobuy.io/"
              rel="noreferrer"
              className="text-[#666] text-[14px]"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-bold text-[18px] text-[#666] max-w-[466px] text-center  leading-[21.6px]">
              Contact Us
            </h3>

            <Link
              href="mailto:support@savetobuy.io"
              className="text-[#666] text-[14px]"
            >
              Mail
            </Link>
            <a
              className="text-[#666] text-[14px]"
              href="https://wa.link/xcesqo"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
