"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";

export default function AvatarUpload() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const updateImageHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const file = inputFileRef.current?.files?.[0];
    if (!file) {
      return;
    }
    const response = await fetch(`/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });
    const newBlob = (await response.json()) as PutBlobResult;
    setBlob(newBlob);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid justify-center">
          <h1 className="font-bold pb-2">Upload Your Avatar</h1>
          <form onSubmit={updateImageHandler}>
            <input name="file" ref={inputFileRef} type="file" required /> <br />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded mt-5"
            >
              Upload
            </button>
          </form>
        </div>
        {blob && (
          <div className="grid justify-center">
            Blob url: <a href={blob.url}>{blob.url}</a>
            <br />
            <Image src={blob.url} width={800} height={800} alt="image" />
          </div>
        )}
      </div>
    </section>
  );
}
