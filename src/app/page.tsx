import Image from "next/image";
import { Button } from "../components/ui/button";
import Hero from "@/views/Hero";
import ProductsLists from "@/views/ProductsLists";

export default function Home() {
  return (
    <>
      <header />
      <Hero />
      <ProductsLists />
    </>
  );
}
