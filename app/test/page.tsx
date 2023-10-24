import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/components/image-upload/search";

async function getData(search: string) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${
      search !== undefined ? search : ""
    }`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  const data = await getData(search);
 
  return (
    <main className="container mx-auto py-10 min-h-screen">
      <h1 className="text-3xl font-semibold pb-10">Test Product</h1>
      <SearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((product: any) => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={100}
              height={200}
              className="w-full h-32 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2 line-clamp-2 py-1 h-16">
              {product.title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
            <p className="text-blue-600 mt-2">${product.price}</p>
            <p className="text-blue-600 mt-2">${product.category}</p>
            <Link
              className="text-black mt-2 block bg-blue-600 p-3 rounded-md text-center hover:bg-opacity-80 transition-all"
              href={`/products/product/${product.id}`}
              scroll={false}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      {data.products.length === 0 && (
        <div className="text-center text-2xl">No products found</div>
      )}
    </main>
  );
}
