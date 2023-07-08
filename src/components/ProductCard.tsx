import P1 from "public/p1.webp";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import AddToCart from "./ui/AddToCart";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  img: StaticImageData;
  category: string; 
}

const ProductCard: FC<ProductCardProps> = ({id, title, price, img, category }) => {
  // console.log(title);
  console.log(id);
  

  return (
    <Link href={`/products/${id}`}>
      <div className="py-5">
        <Image src={img} alt="Product-1" />
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <p className="font-bold text-lg">${price}</p>
        <p className="font-bold text-lg">
          Category:{" "}
          <span className="text-base text-end font-normal capitalize">
            {category}
          </span>
        </p>

        <AddToCart />
      </div>
    </Link>
  );
};

export default ProductCard;
