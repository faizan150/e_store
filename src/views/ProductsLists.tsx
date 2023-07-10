import ProductCard from '@/components/ProductCard';
import P1 from 'public/p1.webp';
import P2 from 'public/p2.png';
import P3 from 'public/p3.png';
import Image, {StaticImageData} from 'next/image';
import { products } from '@/utils/mockup';
import { client } from "@/lib/sanityClient";











export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price, product_image, cloth_type -> {
      cloth_tyoey_name
    }, product_care, cloth_category, title, product_details, _id
  }`)
  return res 
}

interface Iproduct {
  title: string;
  description: string;
}





const ProductList = async () => {
  const showproducts = products.slice(0,3) 
  // console.log(showproducts);
  const data = await getProductData()

  console.log(data);
  
  
  return (
    <div className='flex justify-evenly mt-16 py-16'>
      {/* <ProductCard title="Product 1" price={123} img= {P1} />
      <ProductCard title="Product 2" price={456} img= {P2} />
      <ProductCard title="Product 3" price={789} img= {P3} /> */}


      {
        showproducts.map((item) => {
          return <ProductCard id={item.id} key={item.id} title={item.name} price={item.price} img={item.image as StaticImageData} category={item.category} />
        })
      }

    </div>
  );
};

export default ProductList;