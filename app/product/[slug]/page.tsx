import ImageGallery from "@/components/image-gallery";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";

import { FaTruck } from "react-icons/fa";
import React from "react";

import { client } from "@/lib/sanity";
import { fullProduct } from "@/lib/interface";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white py-16 mt-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>

              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                {data.name}
              </h2>
            </div>

            <div className="border max-w-[100px] flex items-center gap-4 justify-center border-gray-300 ">
              <button className=" px-0.5 flex justify-center items-center border-gray-300">
                <FaMinus className="text-gray-600" />
              </button>
              <p>1</p>
              <button className=" px-0.5 flex items-center justify-center border-gray-300">
                <FaPlus className="text-gray-600" />
              </button>
            </div>

            <div className="my-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <CiStar className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 ratings
              </span>
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

              <div className="flex gap-2.5">
                <Button>Add to cart</Button>
                <Button variant={"secondary"}>Checkout now </Button>
              </div>

              <p className="mt-12 text-[15px] text-gray-500 tracking-wide ">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
