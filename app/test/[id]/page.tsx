import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

// Props Types
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata for this page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => {
      return res.json();
    }
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    metadataBase: new URL('http://localhost:3000'),
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/opengraph-image.png',
      // shortcut: '/shortcut-icon.png',
      // apple: '/apple-icon.png',
      // other: {
      //   rel: 'apple-touch-icon-precomposed',
      //   url: '/apple-touch-icon-precomposed.png',
      // },
    },
    title: product.title,
    description: product.description,
  };
}


// Generate static paths for all products
export async function generateStaticParams() {
  const posts = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  return posts.products.map((post: any) => ({
    id: post.id.toString(),
  }));
}

// Get Product data based on id
async function getProduct(productId: number) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  return res.json();
}

// This is the page component
const Page = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <section className="container mx-auto py-10 min-h-screen">
      <Link href="/products">All Products</Link>
      <div>
        <h1 className="text-2xl font-semibold py-10">{product.title}</h1>
        <Image
          src={product.images[0]}
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

export default Page;
