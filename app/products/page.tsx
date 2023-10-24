import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ProductsPage: React.FC = async () => {
  const products = await getData();

  return (
    <section className="container mx-auto py-10 min-h-screen">
      <h1 className="text-3xl font-semibold pb-10">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={200}
              className="w-full h-32 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2 line-clamp-2 py-1 h-16">{product.title}</h2>
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
    </section>
  );
};

export default ProductsPage;
