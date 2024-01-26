import BestDeals from "../components/BestDeals";
import HotDeals from "../components/HotDeals";
import PopularCategory from "../components/PopularCategory";
import ReelVideo from "../components/ReelVideo";
import Category from "../components/CategoryCard";

export default function HomeScreen() {
  return (
    <>
      <div className="w-[390px] h-[844px] sticky">
        <div className="relative w-[170px] h-[40px] ml-[16px] flex items-center justify-between">
          <img
            className="absolute top-[54px] left-[16px] w-[40px] h-[40px] rounded-full"
            src="/public/profile-pic.png"
            alt="profile"
          />

          <div className=" w-[118px] h-[40px]  gap-x-[12px]">
            <span className="absolute top-[58px] left-[68px] text-base gilroy font-bold">
              Snoodify
            </span>
            <p className="absolute top-[76px] left-[68px] w-full h-[18px] mt-[6px] gilroy font-normal text-xs text-[#9F9F9F]">
              Shop with your friends
            </p>
          </div>

          <div className="absolute top-[64px] left-[248px] w-[100px] h-[20px] gap-x-[20px] flex">
            <img className="w-[20px] h-[20px]" src="/Notification.png" alt="" />
            <img src="/Heart-outlined.png" alt="" />
            <img src="/message.png" alt="" />
          </div>
        </div>
        <div className="h-[12px]" />

        {/* search-bar starts */}
        <div
          className="w-[358px] h-[45px] mt-[54px] ml-[16px] flex items-center justify-between border-[1px] border-solid border-[#000000/10] rounded-[20px]"
          style={{ boxShadow: "0px 4px 8px -2px rgba(0, 0, 0, 0.10)" }}
        >
          <div className=" w-[178px] h-[21px] flex items-center ml-[16px] gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="flex  text-[#757575] space-y-[12px]"
              fill="none"
            >
              <path
                d="M17.5 17.4999L13.8808 13.8808M13.8808 13.8808C14.4999 13.2617 14.991 12.5267 15.326 11.7179C15.661 10.909 15.8335 10.0421 15.8335 9.16659C15.8335 8.29109 15.6611 7.42416 15.326 6.61531C14.991 5.80645 14.4999 5.0715 13.8808 4.45243C13.2617 3.83335 12.5268 3.34228 11.7179 3.00724C10.9091 2.6722 10.0422 2.49976 9.16666 2.49976C8.29115 2.49976 7.42422 2.6722 6.61537 3.00724C5.80651 3.34228 5.07156 3.83335 4.45249 4.45243C3.20221 5.7027 2.49982 7.39844 2.49982 9.16659C2.49982 10.9347 3.20221 12.6305 4.45249 13.8808C5.70276 15.131 7.3985 15.8334 9.16666 15.8334C10.9348 15.8334 12.6305 15.131 13.8808 13.8808Z"
                stroke="#757575"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="flex items-center font-normal text-sm text-[#000000]/25">
              Search on snoodify
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-[16px] text-[#757575]"
            fill="none"
          >
            <path
              d="M18.25 11C18.4312 11 18.6063 11.0656 18.7429 11.1848C18.8795 11.3039 18.9684 11.4684 18.993 11.648L19 11.75V12.25C19.0002 13.9536 18.3561 15.5942 17.1971 16.8428C16.0381 18.0914 14.4499 18.8556 12.751 18.982L12.75 21.25C12.7499 21.44 12.6778 21.6229 12.548 21.7618C12.4183 21.9006 12.2407 21.9851 12.0511 21.998C11.8615 22.011 11.6741 21.9515 11.5267 21.8316C11.3793 21.7117 11.2829 21.5402 11.257 21.352L11.25 21.25V18.982C9.59152 18.8588 8.03687 18.1278 6.88421 16.929C5.73155 15.7302 5.06201 14.148 5.004 12.486L5 12.25V11.75C5.00006 11.56 5.07224 11.3771 5.20197 11.2382C5.3317 11.0994 5.5093 11.0149 5.69888 11.002C5.88846 10.989 6.07589 11.0485 6.2233 11.1684C6.37071 11.2883 6.4671 11.4598 6.493 11.648L6.5 11.75V12.25C6.49989 13.6051 7.02372 14.9077 7.96194 15.8854C8.90015 16.8632 10.1801 17.4402 11.534 17.496L11.75 17.5H12.25C13.6051 17.5001 14.9077 16.9763 15.8854 16.0381C16.8632 15.0998 17.4402 13.8199 17.496 12.466L17.5 12.25V11.75C17.5 11.5511 17.579 11.3603 17.7197 11.2197C17.8603 11.079 18.0511 11 18.25 11ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM12 3.5C11.337 3.5 10.7011 3.76339 10.2322 4.23223C9.76339 4.70107 9.5 5.33696 9.5 6V12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12V6C14.5 5.33696 14.2366 4.70107 13.7678 4.23223C13.2989 3.76339 12.663 3.5 12 3.5Z"
              fill="#757575"
            />
          </svg>
        </div>
        {/* search-bar ends */}

        <div className="h-[16px]" />

        {/* categories starts */}
        <div className="ml-[16px]">
          <Category />
        </div>
        {/* categories ends */}
        <div className="h-[24px]" />

        {/* reels section starts */}
        <div className="flex flex-col">
          <div className="w-[373px] h-[325px] ml-[16px]">
            <p className="w-[109px] h-[20px] gilroy font-bold text-base text-[#212121]">
              Trending Reels
            </p>
            <div className="h-[8px]" />

            <div className="w-[492px] h-[319px] flex space-x-[2px] ">
              <ReelVideo
                thumbnail="/jeevan.png"
                profilePic="/jeevan1-pic.png"
                username="Jeevan_"
                views="12.5k"
              />

              <ReelVideo
                thumbnail="/chitra.png"
                profilePic="/chitra-pic.png"
                username="Chitra"
                views="72.9k"
              />

              <ReelVideo
                thumbnail="/unknown.png"
                profilePic="/jeevan2-pic.png"
                username="Jeevan_"
                views="12.5k"
              />
            </div>
          </div>
          {/* reels section ends */}

          {/* popular categories starts */}
          <div className="w-[358px] h-[191px] ml-[16px]">
            <p className="gilroy w-[145px] h-[21px] font-bold text-base">
              Popular Categories
            </p>
            <div className="h-[10px]" />

            <div className="w-[548px] h-[160px] flex space-x-[4px]">
              <PopularCategory
                imgSrc="/winter-essentials.png"
                title="Winter Essentials"
              />
              <PopularCategory imgSrc="/gaming.png" title="Gaming Essential" />
              <PopularCategory
                imgSrc="/winter-essentials.png"
                title="Winter Essentials"
              />
            </div>
          </div>
          {/* popular categories ends */}
          <div className="h-[20px]" />

          {/* hot deals starts */}
          <div className="w-[503px] h-[281px] ml-[16px] ">
            <p className="w-[73px] h-[21px] gilroy font-bold text-base text-[#1F2937]">
              Hot Deals
            </p>
            <div className="h-[10px]" />

            <div className="w-full h-[250px] flex space-x-[4px]">
              <HotDeals
                imgSrc="/tan-jacket.png"
                title="Winter Tan Jacket double.."
                likeSrc="/Heart.png"
                currentPrice="1,377"
                previousPrice="1999"
                discount="40%off"
              />
              <HotDeals
                imgSrc="/red-leather-jacket.png"
                title="D&N Leather Red Jacket.."
                likeSrc="/Heart-outlined.png"
                currentPrice="1,377"
                previousPrice="1999"
                discount="40%off"
              />
              <HotDeals
                imgSrc="/tan-jacket.png"
                title="Winter Tan Jacket double.."
                likeSrc="/Heart.png"
                currentPrice="1,377"
                previousPrice="1999"
                discount="40%off"
              />
            </div>
          </div>
          {/* hot deals ends */}

          {/* best deals starts */}
          <div className="w-[576px] h-[596px] ml-[16px] flex flex-col">
            <div className="h-[11.5px]" />
            <div className="flex">
              <div>
                <p className="w-[74px] h-[32px] mt-[14px] gilroy font-bold text-sm text-[#191C1F]">
                  Best Deals
                </p>

                <p className="w-[74px] h-[20px] ml-[13px] mt-[16px] flex items-center justify-center gilroy font-semibold text-xs text-[#929292]">
                  Deals ends in
                </p>

                <div className="w-[143px] h-[30px] ml-[17px] mt-[16px] bg-[#782DB2] rounded-md">
                  <p className="w-[112px] h-[24px] ml-[16px] mt-[3px] flex items-center  justify-center gilroy font-base text-xs text-center text-white">
                    16d : 21h : 57m : 23s
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[20.5px]" />
            <div>
              <BestDeals />
            </div>
          </div>
          {/* best deals ends */}
          <div className="h-[16px]" />

          {/* banner starts */}
          <div className="relative w-[358px] h-[336px]  mt-[52px] ml-[32px] flex rounded bg-[#F2F4F5]">
            <div className="absolute top-[28px] left-[25px] w-[118px] h-[32px] py-[6px] px-[12px] rounded-sm bg-[#782DB2]">
              <p className="gilroy font-semibold text-xs text-[#FFF] text-center">
                INTRODUCING
              </p>
            </div>
            <div className="h-[20px]" />

            <p className="absolute top-[80px] left-[25px] w-[166px] h-[57px] gilroy font-bold text-2xl text-[#191C1F]">
              New Apple Homepod Mini
            </p>
            <div className="h-[20px]" />

            <p className="absolute top-[145px] left-[25px] w-[160px] h-[96px] gilroy font-normal text-base text-[#929292]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <div className="h-[17px]" />

            <div className="absolute top-[258px] left-[25px] w-[141px] h-[48px] flex items-center bg-white">
              <p className="w-[65px] h-[48px] text-center gilroy font-bold text-sm ml-[24px] text-[#181818]">
                BUY NOW
              </p>

              <img src="/ArrowRight.png" alt="" />
            </div>
            <img
              className="absolute w-[159px] h-[192px] space-y-[16px] top-[66px] right-0"
              src="/homepod.png"
              alt="homepod"
            />
          </div>
        </div>
      </div>
    </>
  );
}
