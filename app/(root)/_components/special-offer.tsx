import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { client } from "../../../lib/sanity";

async function getData() {
  const query = `*[_type == 'product'][2...6] | order(_createdAt desc) {
  _id,
    price,
    name,
    "slug":slug.current,
    "categoryName": category->name,
    "imageUrl":images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function SpecialOffer() {
  const data = await getData();
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-8   w-full lg:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight  text-gray-900 ">
            Special Offer
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/shop">
            See more <MdArrowRightAlt />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 gap-7-10 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product: any) => (
            <Link
              href={`/product/${product.slug}`}
              key={product._id}
              className="group relative p-2 shadow-md "
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  width={800}
                  height={800}
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-auto object-cover  object-center"
                />
              </div>

              <div className="mt-4 flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700 line-clamp-2 ">
                    <Link
                      className="line-clamp-2"
                      href={`/product/${product.slug}`}
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="text-sm mt-4 font-medium text-gray-900">
                    {" "}
                    ₦{product.price.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
