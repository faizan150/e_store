import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import HeroImage from "public/hero.webp";

const Hero = () => {
  return (
    <section className="flex py-6 flex-col gap-y-10 lg:flex-row">
      {/* Left Side Div */}
      <div  className="flex-1">
        <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 ">
          Badge
        </Badge>
        <h1 className="scroll-m-20 text-4xl  font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className=" py-3 bg-black text-white px-4 mt-4"> <ShoppingCart className="p-1"/> Start Shopping</Button>
      </div>
      {/* Right Side Div */}

      <div className="flex-1">
        <Image src={HeroImage} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
