import ProductCard from '@/components/ProductCard';
import P1 from 'public/p1.webp';
import P2 from 'public/p2.png';
import P3 from 'public/p3.png';
import Image, {StaticImageData} from 'next/image';

const ProductList = () => {
  return (
    <div className='flex justify-evenly mt-16'>
      <ProductCard title="Product 1" price={123} img= {P1} />
      <ProductCard title="Product 2" price={456} img= {P2} />
      <ProductCard title="Product 3" price={789} img= {P3} />
    </div>
  );
};

export default ProductList;