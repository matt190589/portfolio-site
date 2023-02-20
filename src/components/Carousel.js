import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { blue } from "@mui/material/colors";

export default function CarouselItem({ children, width }) {
  const [currentInsex, setCurrentIndex] = useState(0);

  const coverImage = "https://unsplash.com/photos/CAMwIxYk5Xg";
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <img src="/fantasy_football_blog.png" />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 cursor-pointer">
        <ArrowCircleLeftIcon />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer">
        <ArrowCircleRightIcon />
      </div>
    </div>
  );
}
