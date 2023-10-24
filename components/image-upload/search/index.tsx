"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();

  return (
    <div className="relative text-gray-600 my-10">
      <input
        type="text"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="Search"
        onChange={(e) => {
          router.push(`/test?search=${e.target.value}`);
        }}
      />
    </div>
  );
};

export default SearchInput;
