import ProductCard from '@/components/ProductCard';
import P1 from 'public/p1.webp';
import P2 from 'public/p2.png';
import P3 from 'public/p3.png';
import Image, {StaticImageData} from 'next/image';
import { products } from '@/utils/mockup';

const ProductList = () => {
  const showproducts = products.slice(0,3) 
  console.log(showproducts);
  
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