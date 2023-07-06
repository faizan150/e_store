import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section>
      {/* Left Side Div */}
      <div>
        <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 ">
          Badge
        </Badge>
      </div>
      {/* Right Side Div */}
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take On Streetwear
      </h1>
      <div></div>
    </section>
  );
};

export default Hero;
