import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mockup";
import Image, { StaticImageData } from "next/image";
import Quantity from "@/components/quantity";
import AddToCart from "@/components/ui/AddToCart";

export default function Page({ params }: { params: { id: number } }) {
  const filter = products.filter((item) => {
    return item.id == params.id;
  });

  const sizes = ["XS", "SM", "MD", "LG", "XL"];
  return (
    <div className="flex  mt-16 py-10 flex-wrap">
      {filter.map((item) => {
        return (
          <div key={item.id} className="flex justify-between gap-6">
            <div>
              <Image src={item.image as StaticImageData} alt={item.name} />
            </div>
            <div>
              <div className="font-bold">
                <h1 className="text-2xl ">{item.name}</h1>
                <h2 className="text-base text-gray-400 font-semibold">
                  {" "}
                  {item.tagline}
                </h2>
              </div>
              <div>
                <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                <div className="flex gap-x-2">
                  {sizes.map((item) => {
                    return (
                      <div
                        key={item}
                        className="h-5 w-5  mt-2 bg-gray-300  flex justify-center items-center rounded-full hover:shadow-2xl duration-300 "
                      >
                        <span className="text-[10px] font-bold text-gray-600">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Quantity Div */}
              {/* <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font-semibold">Quantity</h3> */}
                  <Quantity price={item.price} id={item.id} />
                  {/* Just Adding Some of the commit in the file  */}
              {/* </div> */}

            </div>
          </div>
        );
      })}
    </div>
  );
}
