import React from "react";

export default function ReelVideo({ thumbnail, profilePic, username, views }) {
  return (
    <div className="w-[162px] h-[287px] relative rounded-lg bg-slate-400">
      <img
        className="absolute w-full h-full top-0 left-0  object-contain"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="absolute -left-6 -top-2  w-full h-full flex flex-col items-center justify-end">
        <div className=" w-[86px] h-[25px] flex items-center space-x-[6px]">
          <img
            className="w-[25px] h-[25px] rounded-full"
            src={profilePic}
            alt="profile"
          />

          <div className="w-[55px] h-full mb-[4px]">
            <p className="gilroy font-normal  text-sm text-white">{username}</p>
            <div className="h-[1px]" />

            <div className="w-[27px] h-[8px] flex space-x-[1px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path
                  d="M6.89743 3.55685L6.89742 3.55687L6.90155 3.55907C6.98155 3.60161 7.04846 3.66511 7.09513 3.74278C7.14179 3.82044 7.16644 3.90934 7.16644 3.99994C7.16644 4.09054 7.14179 4.17944 7.09513 4.2571L7.52372 4.51461L7.09513 4.2571C7.04846 4.33477 6.98155 4.39827 6.90155 4.44081L6.90154 4.44079L6.89745 4.44302L2.62679 6.76535L2.62659 6.76546C2.25632 6.96702 1.83331 6.6951 1.83331 6.32261V1.67761C1.83331 1.305 2.2562 1.03298 2.62676 1.23418C2.62677 1.23419 2.62679 1.2342 2.62681 1.23421C2.62685 1.23423 2.62688 1.23425 2.62692 1.23427L6.89743 3.55685Z"
                  stroke="white"
                />
              </svg>

              <p className="flex items-center gilroy font-normal text-[8px] space-y-[1px] text-white">
                {views}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
