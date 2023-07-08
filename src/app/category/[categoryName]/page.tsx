import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mockup";
import { StaticImageData } from "next/image";

// const getProductsByCategory = (category:string) => {
//   return products.filter(product) {

//   }
// }

export default function Page({ params }: { params: { categoryName: string } }) {
  const filter = products.filter((item) => {
    return item.category === params.categoryName;
  });
  return (
    <>
            <div className="flex justify-evenly mt-16 py-10 flex-wrap">
            {/* <ProductCard title="Product 1" price={123} img= {P1} />
              <ProductCard title="Product 2" price={456} img= {P2} />
              <ProductCard title="Product 3" price={789} img= {P3} /> */}
      
            {filter.map((item) => {
              return (
                <ProductCard
                  id={item.id}
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  img={item.image as StaticImageData}
                  category={item.category}
                />
              );
            })}
          </div>        
      
    </>
  );
}
