import CategoryDisplay from "./categoryDisplay";

export default function Category() {
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
            imgSrc="/public/tshirts.png"
            name="Crew Nech Tshirts"
          />
          <CategoryDisplay
            imgSrc="/public/tshirt2.png"
            name="Over Sized Tshirts"
          />
          <CategoryDisplay
            imgSrc="/public/tshirts3.png"
            name="Cotton Hydra Tshirts"
          />
          <CategoryDisplay
            imgSrc="/public/hoodies.png"
            name="Men Hoodies & Sweatshirts"
          />
        </div>

        <div className="h-[12px]" />

        <div className="w-[358px] h-[103px] space-x-[18px] flex">
          <CategoryDisplay
            imgSrc="/public/women-oversize.png"
            name="womens oversize tshirt"
          />
          <CategoryDisplay
            imgSrc="/public/women-graphic.png"
            name="Boyfriend Tshirts"
          />
          <CategoryDisplay imgSrc="/public/crop-top.png" name="Crop Tops" />
          <CategoryDisplay
            imgSrc="/public/women-hoodie.png"
            name="Women Hoodies & Sweatshirts"
          />
        </div>
      </div>
    </>
  );
}
