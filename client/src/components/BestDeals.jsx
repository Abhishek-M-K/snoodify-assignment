export default function BestDeals() {
  return (
    <div className="w-[576px] h-[523px] ml-[16px] grid grid-cols-2 border border-[#E4E7E9]">
      <div className=" col-span-1 w-[328px] h-[523px]  border border-[#E4E7E9]">
        <div className="relative w-[280px] h-[268px] ">
          <img className="" src="/images/ps5.png" alt="" />

          <div className="absolute top-[15.5px] left-[19px] w-[67px] h-[26px] py-[5px] px-[10px] rounded-sm bg-[#782DB2]">
            <p className="gilroy font-semibold text-xs text-[#FFF] text-center">
              32% OFF
            </p>
          </div>
          <div className="absolute top-[50px] left-[19px] w-[44px] h-[26px] py-[5px] px-[10px] rounded-sm bg-[#EE5858]">
            <p className="gilroy font-semibold text-xs text-[#FFF] text-center">
              HOT
            </p>
          </div>
        </div>
        <div className="h-[24px]" />
        <div className="w-[280px] h-[74px] ml-[16px]">
          <div className="w-[149px] h-[20px] flex space-x-[2px] ml-[16px]">
            <img
              className="w-[20px] h-[20px"
              src="/images/star.png"
              alt="rating"
            />
            <img
              className="w-[20px] h-[20px"
              src="/images/star.png"
              alt="rating"
            />
            <img
              className="w-[20px] h-[20px"
              src="/images/star.png"
              alt="rating"
            />
            <img
              className="w-[20px] h-[20px"
              src="/images/star.png"
              alt="rating"
            />
            <img
              className="w-[20px] h-[20px"
              src="/images/star.png"
              alt="rating"
            />
          </div>
          <div className="h-[6px]" />

          <p className="w-[280px] h-[48px] ml-[16px] gilroy font-bold text-base text-[#191C1F]">
            Playstation 5 - 1TB SSD Console with Wireless Controller - EU
            Versio...
          </p>
        </div>

        <div className="h-[12px]" />

        <div className="w-[127px] h-[24px] flex ml-[32px] space-x-[5px]">
          <p className="gilroy font-bold text-base line-through  text-[#ADB7BC]">
            &#x20B9;50,999
          </p>
          <p className="gilroy font-bold text-lg text-[#782DB2]">
            &#x20B9;45,599
          </p>
        </div>

        <div className="h-[12px]" />

        <p className="w-[286px] h-[60px] ml-[32px] gilroy font-medium text-base text-[#5F6C72]">
          Games built using the Playstation 5 development kit showcase
          unparalleled load times, visuals.
        </p>
      </div>

      <div className="ml-[40px] col-span-1 w-[248px] h-[255px] border border-[#E4E7E9]">
        <div className="relative w-[216px] h-[180px]">
          <img src="/images/drone.png" alt="drone" />

          <div className="absolute top-[12px] left-[12px] w-[78px] h-[26px] py-[5px] px-[10px]  rounded-sm bg-[#929FA5]">
            <p className="w-[58px] h-[16px] gilroy font-semibold text-xs text-[#FFFFFF] text-center">
              SOLD
            </p>
          </div>
        </div>
        <div className="w-[216px] h-[40px] ">
          <p className="w-full h-full mt-[12px] gilroy font-semibold text-sm text-[#191C1F]">
            Drone 4k UHD, 30M Radious
          </p>
          <p className="w-[44px] h-full ml-[15px]  gilroy font-semibold text-sm text-[#782DB2]">
            $2,300
          </p>
        </div>
      </div>
    </div>
  );
}
