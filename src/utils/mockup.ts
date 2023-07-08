import P1 from "public/p1.webp";
import P2 from "public/p2.png";
import P3 from "public/p3.png";
import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Product-1",
    category: "female",
    price: 20,
    image: P1,
  },
  {
    id: 2,
    name: "Product-2",
    category: "female",
    price: 150,
    image: P2,
  },
  {
    id: 3,
    name: "Product-3",
    category: "female",
    price: 250,
    image: P3,
  },
  {
    id: 5,
    name: "Product-5",
    category: "male",
    price: 550,
    image: P1,
  },
  {
    id: 4,
    name: "Product-4",
    category: "male",
    price: 350,
    image: P2,
  },
  {
    id: 6,
    name: "Product-6",
    category: "kids",
    price: 650,
    image: P3,
  },
  {
    id: 7,
    name: "Product-7",
    category: "kids",
    price: 550,
    image: P1,
  },
  
];
