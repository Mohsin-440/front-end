import { useEffect, useState } from "react";
import AdditionalButtons from "./AdditionalButtons";

const ProductCard = ({ title, price, old_price, newProduct, discount }) => {
  const [currentPrice, setCurrentPrice] = useState(old_price);
  useEffect(() => {
    const discountedPrice = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountedPrice;
    setCurrentPrice(finalPrice.toFixed());
  }, [old_price, discount]);

  return (
    <div className="w-[50%] px-[15px] mb-8 max-w-[345px] md:w-[33%] relative min-w-[200px] lg:min-w-[230px]  xl:min-w-[195px] xl:max-w-[275px] 2xl:min-w-[212px] 2xl:max-w-[277px]">
      {newProduct ? (
        <div className="text-white pt-[2px] w-[48px] h-[24px] z-10 bg-c-green absolute top-4 left-[32px] capitalize text-center text-5xs">
          <span>New</span>
        </div>
      ) : (
        ""
      )}
      {discount > 0 && discount < 100 && old_price ? (
        <div className="text-white pt-[2px] w-[48px] h-[24px] z-10 bg-c-orange absolute top-4 left-[32px] capitalize text-center text-5xs">
          <span>-{discount}%</span>
        </div>
      ) : (
        ""
      )}
      <div className="group relative ">
        <img src="/categories/Men.jpg" className="cursor-pointer" alt="" />
        <div>
          <button className="absolute hidden group-hover:block bg-white p-3 rounded-sm hover:text-c-orange text-c-gray-font cursor-pointer bottom-2 right-4 left-4 capitalize transition-all ease-in-out duration-1000 delay-0 text-5xs">
            + Quick View
          </button>
          <AdditionalButtons/>
        </div>
      </div>
      <div>
        <h3 className="pt-4 text-5xs  text-c-gray-font capitalize font-lf font-medium ">
          <a className="cursor-pointer hover:text-c-orange transition-all ease-in-out duration-300 delay-0">
            {title}
          </a>
        </h3>

        {discount > 0 && discount < 100 ? (
          <span className="text-5xs cursor-default">${currentPrice}.00</span>
        ) : (
          <span className="text-5xs cursor-default">${price}.00</span>
        )}

        {discount > 0 && discount < 100 && old_price ? (
          <span className="px-[6px] cursor-default text-5xs text-c-gray-font line-through">
            ${old_price}.00
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard;
