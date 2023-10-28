import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Acme";

export const size = {
  width: 800,
  height: 400,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: number } }) {
  const post = await fetch(`https://dummyjson.com/products/${params.id}`).then(
    (res) => res.json()
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${post.images[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          fontWeight: 600,
          color: "white",
        }}
      >
        <h1
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            margin: 0,
            fontSize: 50,
            fontFamily: "NYT Cheltenham",
            maxWidth: 900,
            whiteSpace: "pre-wrap",
            letterSpacing: -1,
          }}
        >
          {post.title}
        </h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
