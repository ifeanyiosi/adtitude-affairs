"use client";

import { useStateContext } from "@/context/StateContext";
import { RiDeleteBin7Line } from "react-icons/ri";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function WishList() {
  const wishRef = useRef(null);
  const { wishlistItems, removeWish } = useStateContext();

  return (
    <div
      ref={wishRef}
      className="min-h-screen px-6 py-16 mt-8 lg: flex flex-col w-full"
    >
      <div className="w-full">
        {wishlistItems.length >= 1 && (
          <h2 className="text-2xl font-bold tracking-tight  text-gray-900 ">
            Wishlist
          </h2>
        )}

        {wishlistItems.length < 1 && (
          <div className="flex gap-4 mt-[30px] flex-col items-center justify-center">
            <h1 className=" text-xl font-bold uppercase">Start a Wishlist</h1>
            <p className="text-sm text-center px-10 -mt-2">
              Keep track of all the items you love. Click the heart icon on each
              product image to save your favorites in a wishlist.
            </p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 gap-7-10 lg:grid-cols-4 xl:gap-x-8">
          {wishlistItems.length >= 1 &&
            wishlistItems.map((product: any) => (
              <Link
                href={`/product/${product.slug}`}
                key={product._id}
                className="group relative p-2 shadow-md "
              >
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    width={300}
                    height={300}
                    src={urlFor(product.images[0]).url()}
                    alt="Product image"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between ">
                  <div>
                    <h3 className="text-sm w-full flex items-center justify-between text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>

                    <p className="text-sm mt-4 font-medium text-gray-900">
                      {" "}
                      ₦{product.price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <button onClick={() => removeWish(product)}>
                    <RiDeleteBin7Line className="text-[20px] text-rose-600 " />
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
