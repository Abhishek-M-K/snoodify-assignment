import React from "react";

export default function HotDeals({
  imgSrc,
  title,
  likeSrc,
  currentPrice,
  previousPrice,
  discount,
}) {
  return (
    <div className="w-[165px] h-[250px] border border-solid border-[#CBCBD4] rounded">
      <div className="relative w-full h-[180px]">
        <img
          className="w-[165px] h-[180px] rounded object-contain"
          src={imgSrc}
          alt={title}
        />

        <div
          className="absolute top-[10px] right-[10px] w-[30px] h-[30px] rounded-full flex justify-center items-center"
          style={{ boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <img
            className="w-[18px] h-[18px] object-contain"
            src={likeSrc}
            alt="like"
          />
        </div>
      </div>

      <div className="w-full h-[101px] ">
        <p className="w-[133px] h-[32px] ml-[14px] mt-[8px] leading-3 gilroy font-semibold text-sm line-clamp-2 text-[#3A3A3A]">
          {title}
        </p>

        <div className="w-[123px] h-[12px] ml-[16px] flex gap-x-[4px]">
          <p className="gilroy font-bold flex items-center text-base leading-3 text-[#3A3A3A]">
            &#x20B9;{currentPrice}
          </p>

          <p className="gilroy font-bold text-xs text-[#CBCBD4] line-through">
            &#x20B9;{previousPrice}
          </p>

          <p className="gilroy font-bold text-sm leading-3 text-[#09A681]">
            {discount}
          </p>
        </div>
      </div>
    </div>
  );
}
