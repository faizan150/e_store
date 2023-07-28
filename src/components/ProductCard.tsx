"use client";

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

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  img,
  category,
}) => {
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: id,
      }),
    });
    const result = await res.json();
  };
  // console.log(title);
  // console.log(id);

  return (
    // <Link href={`/products/${id}`}>
    <div className="py-5">
      <Link href={`/products/${id}`}>
        <Image src={img} alt="Product-1" />
        <h3 className="font-bold text-lg mt-3">{title}</h3>
        <p className="font-bold text-lg">${price}</p>
        <p className="font-bold text-lg">
          Category:{" "}
          <span className="text-base text-end font-normal capitalize">
            {category}
          </span>
        </p>
      </Link>

      {/* <AddToCart /> */}
      {/* <button className="border bg-blue-500 text-white rounded px-3 py-2" onClick={handleAddToCart}>Add To Cart</button> */}
    </div>
    // </Link>
  );
};

export default ProductCard;




















// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit facilis cupiditate corporis impedit voluptatem incidunt odio? Odit quam atque beatae tempora provident quaerat officia nemo quia, facere ad quis, voluptas quod officiis pariatur quae. Dolor quos eius magnam nostrum perspiciatis, impedit accusantium consectetur minima autem veniam quis ratione facilis laudantium eaque deleniti corrupti eum tenetur fugit nihil labore libero error aperiam voluptatibus. Error, provident repudiandae at quasi fugiat excepturi placeat architecto, cumque unde, modi tempore nulla suscipit amet? Corporis quia magnam vel aliquid laudantium voluptate minima non hic debitis quibusdam exercitationem pariatur, est eligendi, in ipsa laborum, iure voluptates necessitatibus velit. Et sed, suscipit consectetur rerum ab possimus tenetur facere ut hic dolorem. Voluptate sequi excepturi sit expedita magni nihil aperiam fuga est ipsum saepe atque in, magnam asperiores laboriosam maxime ipsam ex hic omnis minus voluptas culpa modi. Repudiandae laudantium consectetur, molestias officiis voluptatibus necessitatibus dicta esse id, voluptates porro corrupti molestiae doloremque. Accusantium minima vero voluptatum possimus modi tempore voluptatibus esse, aliquam delectus rem, ullam nisi harum reiciendis dolores incidunt voluptate cumque rerum earum nemo culpa magnam, voluptatem deleniti voluptates. Vero excepturi illum sed amet consequuntur ducimus eaque laborum sapiente sit cupiditate iste ratione cum magnam ullam voluptas unde quae, labore saepe debitis earum aspernatur! Quia non maxime quis quo. Eligendi dolores sint fuga? Sed reiciendis unde nam? Libero quibusdam quaerat molestias asperiores porro numquam fuga enim mollitia, adipisci odio pariatur fugit consequatur? Qui nobis magnam sed iure, porro totam! Dolor, dicta cum. Vel, illo! Quis hic, illum, est expedita nam nihil natus earum quaerat enim, praesentium sunt? Voluptate at animi nobis sunt, molestiae praesentium iure atque quod expedita, ullam deleniti tempora repudiandae ducimus. Temporibus hic expedita assumenda impedit officia tenetur esse nostrum eligendi quam similique quod, tempora, voluptatum voluptatem, mollitia pariatur. Placeat quia exercitationem possimus obcaecati reprehenderit eum, magni corporis suscipit ex nulla minus officia delectus saepe eius doloremque ullam quaerat. Delectus quibusdam voluptatem autem itaque illum fugiat obcaecati commodi eligendi dolores ab, pariatur odit magni ut sint, dignissimos cumque quisquam aperiam in quas. Provident quasi mollitia et autem labore, facere soluta aliquid saepe, odit deleniti alias voluptatum perferendis earum impedit magnam dolorum eum. Voluptate nisi natus, reprehenderit harum laudantium expedita, exercitationem, quo eligendi possimus nemo modi adipisci blanditiis voluptatem! Possimus numquam facere dolorem sint quis suscipit, aperiam eum minus velit reprehenderit cum maiores tempore expedita autem cumque officia repudiandae accusamus beatae laboriosam, odit culpa, obcaecati laborum modi minima. Iure sequi quae voluptas, totam dicta aut sint, reiciendis itaque tenetur accusantium exercitationem consequatur distinctio quasi consequuntur quia facere illo quo magnam! Labore nemo architecto laborum recusandae fugit reiciendis ex quod quam, sequi consectetur nisi ipsam provident sapiente, officia aliquam soluta distinctio sint quaerat molestiae excepturi. Quibusdam qui ducimus, corrupti commodi repellendus deleniti inventore possimus consequuntur quos quod, obcaecati voluptatibus nesciunt atque. Doloremque, repellat necessitatibus iste magnam placeat id delectus facere atque? Enim veniam voluptas, quos vero fuga corrupti laudantium mollitia officia illo perferendis delectus atque error. Doloribus suscipit in commodi numquam reiciendis aspernatur nam quidem alias impedit facere? Repudiandae quos sequi, reiciendis temporibus ducimus voluptate cupiditate atque iste illum laborum rem adipisci suscipit dolorum quas porro blanditiis. Eius quam unde laudantium ipsam maiores, aliquam blanditiis maxime aperiam consequatur, quo explicabo est commodi, fugiat in inventore nisi. Quae nam iure necessitatibus aut inventore iste nulla voluptatibus maxime? Consequuntur illo laudantium harum? Ullam quibusdam deserunt velit sit commodi vel vero, omnis debitis beatae ratione sunt expedita exercitationem. Unde inventore ex eaque voluptate porro, quibusdam et error nesciunt commodi aliquid hic alias nemo, sit incidunt mollitia voluptatibus quasi atque tempore pariatur minima blanditiis autem quos assumenda delectus. Eligendi ex odit nemo labore qui illum, ipsum esse obcaecati ad, sed fugit nesciunt officia impedit quae illo ipsam rem doloremque, velit consequatur doloribus. Quidem quam reiciendis exercitationem error maxime veritatis, alias ullam odit odio ut vel quia tempora enim magnam nesciunt fugiat aperiam nobis explicabo aliquid hic cum provident, modi eligendi! Eius, dolore. Tenetur vel perferendis illum dicta impedit aliquid nemo praesentium sunt velit modi error repellendus, molestiae veniam, porro qui officiis dolore quia blanditiis at reiciendis asperiores assumenda! Illo expedita repellendus, dolorum provident magnam hic fugiat a eaque ipsa iure blanditiis obcaecati voluptatum, mollitia accusantium eveniet quod unde quia cumque porro quasi sed atque. Porro earum ipsam iusto maxime corporis vitae quia non. Et quidem eos totam fuga voluptatibus ullam eligendi quasi eius id fugiat, nam ipsa provident voluptatum saepe quae odit quisquam nobis vitae rem illo, similique cupiditate! Totam eos molestiae minus fuga laboriosam commodi blanditiis ducimus quaerat et, reprehenderit excepturi distinctio delectus earum! Mollitia expedita id dolorum quam provident voluptatibus sequi veniam reiciendis officia nisi a, iusto non quo, consectetur ullam minima, quidem libero. Corporis molestiae aspernatur ea cupiditate quae harum laborum dignissimos facilis veritatis reiciendis omnis, culpa beatae impedit? Magnam aliquid ex laudantium voluptas explicabo nisi neque? Aliquid vel possimus blanditiis perferendis doloremque veniam repellendus eum dolor, voluptate quod placeat. Expedita architecto sit debitis, hic deserunt molestiae. Cumque cum illum quae ex? Magnam porro illo corporis? Deleniti, explicabo sequi? Facere quis fugit, inventore asperiores itaque eligendi tempora. Aperiam, explicabo tempore earum voluptas temporibus et necessitatibus quod ex laborum corrupti. Dolore reprehenderit deserunt commodi tempora voluptate ea neque unde nesciunt voluptatibus itaque qui praesentium, incidunt, sunt iure, laboriosam doloremque rerum error. Beatae dolorem similique nostrum illo doloremque ducimus itaque rerum quis? At doloremque asperiores dignissimos tempore similique? Quibusdam sequi ex ipsa voluptatibus architecto hic quas nihil aliquid, animi in facere ut quam deleniti nisi dolores, cupiditate voluptas adipisci, incidunt omnis. Officia, est facilis dignissimos praesentium aspernatur iste perspiciatis id omnis odio voluptates architecto neque tempore doloremque placeat molestias quos repudiandae ipsam fugiat qui cupiditate molestiae expedita dolores. Ipsum autem consequatur debitis commodi, enim nam in iure numquam ut harum quia minus ipsam quisquam, animi blanditiis odio hic quasi tempora, fugit labore laboriosam? Doloribus labore, dolore ipsa sit neque suscipit? Exercitationem excepturi mollitia vitae possimus, quas doloribus labore ducimus culpa id sit dicta repellat quam cupiditate veritatis! Qui reiciendis odit itaque perferendis unde odio voluptas minus accusantium, rem quas.
// Just Adding all comments in the project here 