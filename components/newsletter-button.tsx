import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NewsLetterButton() {
  return (
    <div className="mt-4 w-full justify-center flex [@media_(min-width:_760px)]:flex-row flex-col [@media_(min-width:_760px)]:items-start items-center gap-4">
      <div className="bg-white p-6 w-full">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            placeholder="Email"
          />

          <button className="absolute inset-y-0 right-0 px-4 py-2  text-[#000] rounded-r-md">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
