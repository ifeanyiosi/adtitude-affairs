import ImageGallery from "@/components/image-gallery";
import { Button } from "@/components/ui/button";
import { CiHeart, CiStar } from "react-icons/ci";

import { FaTruck } from "react-icons/fa";
import React from "react";

import { client } from "@/lib/sanity";

import Quantity from "@/components/quantity";
import AddToCartButton from "@/components/add-to-cart";
import AddToWishlist from "@/components/add-to-wishlist";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}" ][0]{
  _id,
    images,
    price,
    description,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
    
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div className="bg-white py-16 mt-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>

              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                {data.name}
              </h2>
              <AddToWishlist product={data} />
            </div>

            <div className="my-6 flex items-center gap-2 md:mb-10">
              <h5>Size:</h5>
              <ul className="flex cursor-pointer gap-2 items-center">
                <li className="px-2 bg-gray-200 rounded-full ">xs</li>
                <li className="px-2 bg-gray-200 rounded-full ">s</li>
                <li className="px-2 bg-gray-200 rounded-full ">m</li>
                <li className="px-2 bg-gray-200 rounded-full ">l</li>
                <li className="px-2 bg-gray-200 rounded-full ">xl</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl ">
                  {" "}
                  ₦{data.price.toLocaleString("en-US")}{" "}
                </span>

                <span className="mb-0.5 text-red-500 line-through ">
                  {" "}
                  ₦{(data.price + 5000).toLocaleString("en-US")}
                </span>
              </div>

              <div className="my-6 flex items-center gap-2 text-gray-500">
                <FaTruck className="w-6 h-6" />
                <span className="text-sm"> 2-4 Day Shipping </span>
              </div>

              <p className="mt-12 text-[15px] text-gray-500 tracking-wide ">
                {data.description}
              </p>
            </div>
            <Quantity data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
