import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanity";

async function getData(category) {
  const query = `*[_type == "product" && category->name == "${category}"]{
  _id,
    price,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
    "categoryName": category->name
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function CategoryPage({ params }) {
  const data = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight  text-gray-900 ">
            {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 gap-7-10 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product._id}
              className="group relative p-2 shadow-md "
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  width={300}
                  height={300}
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-4 flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
