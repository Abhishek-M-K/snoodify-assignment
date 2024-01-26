import React from "react";

export default function PopularCategory({ imgSrc, title }) {
  return (
    <div className="relative w-[180px] h-[160px] rounded-sm">
      <img
        className="w-full h-full rounded object-contain"
        src={imgSrc}
        alt={title}
      />
      <p className="absolute bottom-2 left-3 w-[125px] h-[20px] gilroy font-semibold text-base text-white">
        {title}
      </p>
    </div>
  );
}
