import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mockup";
import Image, { StaticImageData } from "next/image";

export default function Page({ params }: { params: { id: number } }) {
  const filter = products.filter((item) => {
    return item.id == params.id;
  });
  console.log(filter);

  return (
    <div className="flex  mt-16 py-10 flex-wrap">
      {filter.map((item) => {
        return (
          <div key={item.id} className="flex justify-between gap-6">
            <div>
              <Image src={item.image as StaticImageData} alt={item.name} />
            </div>
            <div className="font-bold">
              Product Details
              <p>Name: {item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
