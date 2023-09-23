"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";

export default function AvatarUploadPage() {
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
    <section className="bg-white-500/50 min-h-screen">
      <div className="container mx-auto p-10">
      <h1>Upload Your Avatar</h1>
      <form onSubmit={updateImageHandler}>
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
          <br />
          <Image src={blob.url} width={800} height={800} alt="image" />
        </div>
      )}
      </div>
    </section>
  );
}
