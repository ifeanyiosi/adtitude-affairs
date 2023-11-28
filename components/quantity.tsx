"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import AddToCartButton from "./add-to-cart";
import { Button } from "./ui/button";

interface QProps {
  data: any;
}

export default function Quantity({ data }: QProps) {
  const { qty, incQty, decQty } = useStateContext();
  return (
    <>
      <div className="border max-w-[100px] flex items-center gap-4 justify-center border-gray-300 ">
        <button
          onClick={decQty}
          className=" px-0.5 flex justify-center items-center border-gray-300"
        >
          <FaMinus className="text-gray-600" />
        </button>
        <p> {qty} </p>
        <button
          onClick={incQty}
          className=" px-0.5 flex items-center justify-center border-gray-300"
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>
      <div className="flex lg:max-w-[400px] w-full flex-col lg:flex-row items-center mt-4 gap-4 ">
        <AddToCartButton product={data} qty={qty} />
        <div className="flex w-full gap-2.5">
          <Button className="w-full" variant={"secondary"}>
            Checkout now{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
