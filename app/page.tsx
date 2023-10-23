import React from "react";
import AvatarUpload from "@/components/image-upload/profile";
import { ProductModal } from "@/components/modal";



const Home = () => {
  return (
    <main className="container mx-auto bg-white-500/50 min-h-screen py-10">
      <h1 className="text-center text-4xl underline underline-offset-8 my-10">Home Page</h1>
      {/* <AvatarUpload /> */}
      <ProductModal/>
    </main>
  );
};

export default Home;
