"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TumblrShareButton,
  TumblrIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

export const SocialShare = () => {
  const shareUrl = "https://www.facebook.com/";
  return (
    <>
      <FacebookShareButton
        url={"https://nextjs-app-expertchamber12-gmailcom.vercel.app/test/3"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://nextjs-app-expertchamber12-gmailcom.vercel.app/test/2"}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>
  );
};
