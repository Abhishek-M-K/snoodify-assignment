const CategoryDisplay = ({ imgSrc, name }) => {
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
};

export default function CategoryCard() {
  return (
    <>
      <div className="w-[358px] flex justify-between">
        <div className="flex space-x-[210px] w-[358px] h-[43px] ">
          <p className="font-bold gilroy">Categories</p>
          <p className="underline font-normal text-xs text-[#8D8D8D]">
            See more
          </p>
        </div>
      </div>

      <div>
        <div className="w-[358px] h-[125px] space-x-[18px] flex">
          <CategoryDisplay
            imgSrc="/images/tshirts.png"
            name="Crew Nech Tshirts"
          />
          <CategoryDisplay
            imgSrc="/images/tshirt2.png"
            name="Over Sized Tshirts"
          />
          <CategoryDisplay
            imgSrc="/images/tshirts3.png"
            name="Cotton Hydra Tshirts"
          />
          <CategoryDisplay
            imgSrc="/images/hoodies.png"
            name="Men Hoodies & Sweatshirts"
          />
        </div>

        <div className="h-[12px]" />

        <div className="w-[358px] h-[103px] space-x-[18px] flex">
          <CategoryDisplay
            imgSrc="/images/women-oversize.png"
            name="womens oversize tshirt"
          />
          <CategoryDisplay
            imgSrc="/images/women-graphic.png"
            name="Boyfriend Tshirts"
          />
          <CategoryDisplay imgSrc="/images/crop-top.png" name="Crop Tops" />
          <CategoryDisplay
            imgSrc="/images/women-hoodie.png"
            name="Women Hoodies & Sweatshirts"
          />
        </div>
      </div>
    </>
  );
}
