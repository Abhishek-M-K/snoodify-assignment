const Products = ({
  imgSrc,
  title,
  likeSrc,
  currentPrice,
  previousPrice,
  discount,
}) => {
  return (
    <div className="w-[179px] h-[325px] border border-solid border-[#CBCBD4] ">
      <div className="relative w-full h-[245px]">
        <img
          className="w-[193px] h-[245px] rounded object-cover"
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
        <p className="w-[146px] h-[36px] ml-[14px] mt-[8px] leading-[18px] gilroy font-semibold text-base line-clamp-2 text-[#3A3A3A]">
          {title}
        </p>
        <div className="h-[8px]" />

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
};

export default function Recommendations() {
  return (
    <div className="w-[358px] h-[979px] p-[1px]">
      <div className="flex flex-1 flex-row">
        <div>
          <Products
            imgSrc="/images/tan-jacket.png"
            title="Winter Tan Jacket double.."
            likeSrc="/images/heart.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
          <Products
            imgSrc="/images/padded-jacket.png"
            title="Black Padded Jacket.."
            likeSrc="/images/heart-outlined.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
        </div>

        <div>
          <Products
            imgSrc="/images/red-leather-jacket.png"
            title="D&N Leather Red Jacket.."
            likeSrc="/images/heart-outlined.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
          <Products
            imgSrc="/images/maroon-jacket.png"
            title="D&N Winter Maroon Jacket.."
            likeSrc="/images/heart-outlined.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
        </div>
      </div>

      <div className="w-full flex">
        <div className="flex">
          <Products
            imgSrc="/images/tan-jacket.png"
            title="Winter Tan Jacket double.."
            likeSrc="/images/heart.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
          <Products
            imgSrc="/images/red-leather-jacket.png"
            title="D&N Leather Red Jacket.."
            likeSrc="/images/heart-outlined.png"
            currentPrice="1,377"
            previousPrice="1999"
            discount="40%off"
          />
        </div>
      </div>
    </div>
  );
}
