import ProductCard from "./subComponents/ProductCard";

const Products = ({ category }) => {
  return (
    <>
    {category == "men" }
      <div className={`flex ${category == "men" ? "flex-col-reverse lg:flex-row-reverse":"flex-col lg:flex-row"}  mt-10  mb-5  mx-auto md:px-5 lg:mb-10 lg:px-10 2xl:px-[120px]`}>
        <div className="lg:w-[50%] mb-10">
          <img
            src="/categories/women.jpg"
            alt="women_image"
            className="w-full px-3 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300 delay-0"
          />
        </div>
        <div className="lg:w-[50%]">
          <div className="text-center font-lf px-3 mb-4">
            <h2 className="mb-3 capitalize text-c-black font-semibold text-2xl md:text-4xl md:font-bold">
              For {category}’s Collection
            </h2>
            <p className="text-4xs text-c-gray-font leading-6">
              Contemporary, minimal and modern designs embody the Lavish Alice
              handwriting
            </p>
          </div>
          <div>
            <div>
              <ul className="flex gap-4 justify-center font-lf px-3 text-4xs text-c-gray-font mb-7">
                <li className="cursor-pointer hover:text-c-orange transition-all ease-in-out duration-300 delay-0">
                  <a>Clothing</a>
                </li>
                <li className="cursor-pointer hover:text-c-orange transition-all ease-in-out duration-300 delay-0">
                  <a>Handbag</a>
                </li>
                <li className="cursor-pointer hover:text-c-orange transition-all ease-in-out duration-300 delay-0">
                  <a>Shoes</a>
                </li>
                <li className="cursor-pointer hover:text-c-orange transition-all ease-in-out duration-300 delay-0">
                  <a>Accessories</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center">
              <ProductCard price={10} title={"Marshell Portable Bluetooth"} />
              <ProductCard
                discount={10}
                old_price={100}
                price={20}
                title={"Apple iPad with Ratina"}
              />
              <ProductCard
                newProduct={true}
                price={100}
                old_price={90}
                title={"Apple iPad with Ratina"}
              />
              <ProductCard price={10} title={"Koss KPH7 Portable"} />
              <ProductCard
                price={50}
                old_price={90}
                title={"Apple iPad with Ratina"}
              />
              <ProductCard
                price={70}
                discount={5}
                old_price={100}
                title={"Koss KPH7 Portable"}
              />
              <ProductCard price={100} title={"Marshell Portable Bluetooth"} />
              <ProductCard price={20} title={"Apple iPad with Ratina"} />
              <ProductCard
                price={50}
                old_price={90}
                title={"Marshell Portable Bluetooth"}
              />
              <ProductCard
                price={60}
                old_price={90}
                title={"Apple iPad with Ratina"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
