import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getProduct(productId: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return res.json();
}

const Modal = async ({ params }: { params: { id: number } }) => {
  const product = await getProduct(params.id);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 `}
    >
      <div className="fixed inset-0 bg-gray-800 opacity-40" />
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto p-5">
        <div>
          <h1 className="text-2xl font-semibold py-10">{product.title}</h1>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-40 object-center"
          />
          <p className="text-gray-600 mt-5 line-clamp-2">
            {product.description}
          </p>
          <p className="text-blue-600 mt-2">${product.price}</p>
        </div>
        <div className="modal-footer mt-6 p-3 text-center rounded-lg bg-blue-500 w-fit hover:bg-opacity-80 transition-all">
          <Link href="/products" scroll={false}>CLose</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
