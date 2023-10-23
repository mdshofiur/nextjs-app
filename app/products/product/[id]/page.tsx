import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getProduct(productId: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return res.json();
}

const ProductPage = async ({ params }: { params: { id: number } }) => {
  const product = await getProduct(params.id);
  return (
    <section className="container mx-auto py-10 min-h-screen">
      <Link href="/products">All Products</Link>
      <div>
        <h1 className="text-2xl font-semibold py-10">{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-96 object-center"
        />
        <p className="text-gray-600 mt-5">{product.description}</p>
        <p className="text-blue-600 mt-2">${product.price}</p>
      </div>
    </section>
  );
};

export default ProductPage;
