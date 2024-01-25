import React from "react";

export default function CategoryDisplay({ imgSrc, name }) {
  return (
    <div className="text-center">
      <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-[#DFDCD7]">
        <img
          src={imgSrc}
          alt="category"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[4px]" />
      <p className=" gilroy font-semibold line-clamp-2 text-xs text-center">
        {name}
      </p>
    </div>
  );
}

// export default categoryDisplay;
