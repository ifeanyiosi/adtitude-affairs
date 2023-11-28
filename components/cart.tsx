"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/sanity";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Cart() {
  const cartRef = useRef(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  console.log(cartItems);

  return (
    <div ref={cartRef} className="w-full ">
      <div className="min-h-[100vh] w-full relative bg-white px-[10px] py-[40px] ">
        <div className="flex mt-[30px] items-center justify-center gap-4">
          {" "}
          <p className="text-18px font-bold">Your Cart</p>{" "}
          <p className="text-[#776B5D] text-[16px] ">({totalQuantities}) </p>
        </div>

        {cartItems.length < 1 && (
          <div className="flex gap-4 mt-[30px] flex-col items-center justify-center">
            <h1 className=" text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it up
              and make it happy.
            </p>

            <Link className="w-full mt-8" href="/">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-[15px] mt-[30px] w-full  ">
          {cartItems.length >= 1 &&
            cartItems.map((item: any) => (
              <div className="flex w-full gap-[20px] py-[10px] " key={item._id}>
                {item.images && (
                  <Image
                    width={130}
                    height={100}
                    className="rounded-[15px] w-[130px] h-[100px] object-cover bg-[#ebebeb]"
                    src={urlFor(item.images[0]).url()}
                    alt="cart-image"
                  />
                )}

                <div className="flex flex-col gap-2">
                  {" "}
                  <div className="flex items-center justify-between">
                    <h5 className="text-[12px] font-bold text-[#000] ">
                      {item.name}{" "}
                    </h5>
                    <Button
                      onClick={() => onRemove(item)}
                      variant="outline"
                      className="flex border-none items-center rounded-[50%] text-red-500"
                    >
                      <TiDeleteOutline />
                    </Button>
                  </div>{" "}
                  <p className="flex items-center text-[13px]">
                    ₦{item.price.toLocaleString("en-US")}{" "}
                  </p>
                  <div className="border rounded-sm text-[13px] max-w-[100px] flex items-center gap-4 justify-center border-gray-300 ">
                    <button
                      onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                      className=" px-0.5 flex justify-center items-center border-gray-300"
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <p> {item.quantity} </p>
                    <button
                      onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                      className=" px-0.5 flex items-center justify-center border-gray-300"
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="absolute bottom-[12px] right-[5px w-full py-[65px] px-[20px] ">
            <div className="flex flex-col mt-8 gap-2 items-center w-full">
              <Link className="w-full" href="/delivery/delivery-details">
                <Button className="w-full text-[#000] flex gap-3">
                  Pay <h3>₦{totalPrice.toLocaleString("en-US")} </h3>
                </Button>
              </Link>
              <Button variant="secondary" className="w-full">
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
