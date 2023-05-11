import React from "react";
import checkoutImg from "../../../assets/images/checkout/checkout.png";

const HeroSection = ({ pageName }) => {
  return (
    <div className="carousel-item relative w-full mb-12">
      <img src={checkoutImg} className="w-full rounded-md" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full rounded-md">
        <div className="text-white ml-2 md:ml-12">
          <h2 className="text-2xl md:text-4xl font-bold">{pageName}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
