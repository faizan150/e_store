import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mockup";
import Image, { StaticImageData } from "next/image";
import Quantity from "@/components/quantity";
import AddToCart from "@/components/ui/AddToCart";

export default function Page({ params }: { params: { id: number } }) {
  const filter = products.filter((item) => {
    return item.id == params.id;
  });

  const sizes = ["XS", "SM", "MD", "LG", "XL"];
  return (
    <div className="flex  mt-16 py-10 flex-wrap">
      {filter.map((item) => {
        return (
          <div key={item.id} className="flex justify-between gap-6">
            <div>
              <Image src={item.image as StaticImageData} alt={item.name} />
            </div>
            <div>
              <div className="font-bold">
                <h1 className="text-2xl ">{item.name}</h1>
                <h2 className="text-base text-gray-400 font-semibold">
                  {" "}
                  {item.tagline}
                </h2>
              </div>
              <div>
                <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                <div className="flex gap-x-2">
                  {sizes.map((item) => {
                    return (
                      <div
                        key={item}
                        className="h-5 w-5  mt-2 bg-gray-300  flex justify-center items-center rounded-full hover:shadow-2xl duration-300 "
                      >
                        <span className="text-[10px] font-bold text-gray-600">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Quantity Div */}
              {/* <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font-semibold">Quantity</h3> */}
                  <Quantity price={item.price} id={item.id} />
                  {/* Just Adding Some of the commit in the file  */}
              {/* </div> */}
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nam voluptatum, hic quos sed iste provident rem reprehenderit, ducimus sit ipsa iusto quibusdam sapiente tempore. Tenetur magnam vero dignissimos odit. Assumenda, atque sequi! Cum natus architecto quia sunt saepe alias magnam nesciunt iure illo praesentium rerum blanditiis, odit vitae. Sunt similique velit facere sequi voluptatibus quae neque magnam, libero exercitationem ipsum a quod amet ipsa officiis veritatis repudiandae explicabo odio id doloribus. Ipsam cupiditate mollitia modi autem consectetur, molestiae ipsum nulla numquam ex voluptatem voluptate quos ullam cumque amet, culpa totam maxime rerum? Adipisci, pariatur perspiciatis fuga saepe, temporibus corrupti nemo, similique sapiente veritatis quaerat debitis! Similique enim temporibus aliquam possimus natus rem quidem aut officiis fugit, officia atque quis ipsa maxime vel consequuntur eaque culpa facere. Ab vitae expedita beatae consectetur nesciunt iusto accusantium porro. Dolor, rem, expedita nam quos eum itaque est nesciunt quod, deserunt vitae nulla non fuga sapiente perspiciatis? A dolorum itaque sapiente facere nulla soluta dolorem sit sequi inventore illo nobis cupiditate consectetur voluptatum repellendus officia facilis temporibus unde obcaecati, molestiae cumque! Recusandae fugit vitae voluptate ducimus voluptas, quaerat minima cumque pariatur! Sint natus explicabo non architecto voluptas sit vero. Quae ratione fugiat culpa nesciunt similique dignissimos libero, dolores autem dicta harum amet unde quos voluptas eaque! Sed enim libero cum saepe quisquam aperiam asperiores dolorem iste id dolor rerum reprehenderit aspernatur, sit minima necessitatibus, eveniet debitis. Repellendus aut ad totam, nesciunt sequi dolore mollitia! Dolorem velit temporibus accusantium, tempora labore reprehenderit architecto, tenetur repellendus, fugit esse porro dolore? Laborum ipsam, autem consectetur ea accusantium quia voluptatem dolores libero eaque dolore expedita aliquam cum? Hic nulla error enim, quia exercitationem obcaecati quo voluptas ipsam iure atque totam doloribus temporibus aut modi amet! Tempora, earum natus quam corporis, quo, dolores facilis maiores perspiciatis quod dolore at quasi veritatis necessitatibus consequuntur eveniet accusamus suscipit pariatur inventore modi itaque! Aspernatur quibusdam, fuga exercitationem et odio maxime illo. Facilis fugiat ad dolore eum deserunt porro delectus molestiae, deleniti ullam similique ipsa, quasi quisquam eius explicabo veritatis facere nulla adipisci voluptatibus optio nesciunt, quam molestias ut. Facilis blanditiis eaque neque dolorem placeat aut, iure, eum harum quis eius pariatur possimus cupiditate qui totam iste? Dignissimos delectus cum nemo dolor voluptatibus, natus dolorem et eligendi? Aut assumenda temporibus distinctio accusantium voluptatibus? Quasi, dolorem iusto id laboriosam vero porro in dolore, voluptatibus ipsa quaerat dicta praesentium, a rem animi deserunt odio eveniet asperiores atque aliquid enim. Aspernatur, at fugit! Ea, facere nostrum? Ipsum quis voluptatibus cupiditate. Magni consectetur nobis numquam ipsa libero voluptatem vitae! Delectus aut ea maiores accusamus quidem suscipit autem, voluptatem, laborum repellat voluptate dolorem ipsa illo in? Vero nisi hic eveniet obcaecati sit recusandae et ut quod expedita reiciendis culpa rerum nobis modi porro harum aliquam ipsum odio laboriosam repellendus veniam cumque, ex, doloribus voluptatum. Nam at ad quos molestias quisquam molestiae natus voluptatibus sequi, autem, soluta itaque ullam porro fugiat! Eligendi perspiciatis saepe ea, nisi dolore eius qui facilis cumque ipsa, repellat ratione? Sequi deleniti nisi explicabo officiis est saepe consectetur repudiandae eum nostrum molestiae, corporis hic magnam dolorem qui distinctio accusantium commodi dolor sint perferendis dignissimos optio. Voluptate architecto cumque quisquam! Repellendus laborum blanditiis saepe accusamus magnam aspernatur suscipit voluptatem illo odit est, exercitationem, ex voluptatum laboriosam totam enim magni deleniti, repellat laudantium quae quisquam quibusdam. Molestiae, eum, earum, omnis fuga totam numquam possimus perspiciatis officia veritatis iste amet maiores fugiat? Atque perspiciatis facere, magnam, necessitatibus vel neque tempora, qui placeat nobis maxime fuga eligendi alias molestiae asperiores ex minima repellendus fugit nihil error esse id molestias magni. Iusto, minima cumque odio eius unde tempore voluptatem dolor. Repellat quos quasi numquam minima maxime accusamus impedit nisi ab eum assumenda, magni iure fugiat, aliquam officia non expedita delectus sunt neque cupiditate excepturi facere voluptas itaque corrupti? Ab harum repellendus molestias ad perspiciatis ducimus obcaecati ex alias eum deserunt est sint, minima iusto autem nobis, totam placeat voluptate! Nemo delectus ullam deleniti illum asperiores nesciunt optio sunt fugiat veritatis, labore quibusdam quaerat provident ut neque, enim perspiciatis voluptatibus ad deserunt blanditiis culpa incidunt architecto numquam. Est enim consequuntur nihil nisi debitis atque eligendi voluptatum recusandae delectus pariatur, fugit asperiores eius ab alias illo architecto fuga voluptatibus, quasi tempora! Libero laborum mollitia ea cupiditate et asperiores quisquam, necessitatibus nam nulla dolores delectus porro, doloribus qui totam animi, repudiandae perspiciatis! Asperiores exercitationem odit sint similique doloremque eligendi id quas velit aspernatur autem, molestias nostrum reiciendis blanditiis doloribus rem voluptatum impedit quidem quia voluptatibus laboriosam expedita! Eum unde excepturi totam esse mollitia, voluptas magnam cupiditate harum maxime, reiciendis consequuntur exercitationem illo dolorum aliquam! Ducimus qui veritatis quis quisquam magni consectetur, temporibus voluptas provident quae, fugiat, iste quo similique et nulla suscipit voluptatem nobis! Ducimus veritatis assumenda accusamus possimus harum provident doloremque, vitae similique, ipsam eveniet architecto aliquid tenetur dicta ipsa quae fugit. Nesciunt quod amet autem hic voluptates quae minus unde error odit, cupiditate sit quis numquam nemo neque commodi ea. Placeat voluptas praesentium consequatur iste labore iure, nostrum, voluptates assumenda similique repellat deserunt libero porro ipsum ipsa itaque? Laborum debitis quisquam sunt explicabo suscipit id at tenetur dicta quas ab, voluptatum placeat maiores pariatur consectetur praesentium omnis voluptates beatae quasi distinctio libero tempore cumque. Mollitia dolorem et voluptate nam, sequi perspiciatis vel placeat aliquam neque consectetur eos aspernatur culpa! Possimus aut ab asperiores quae minus numquam quia eius blanditiis saepe, est quis, magnam quaerat facilis quidem nihil tempore commodi eum molestiae adipisci omnis! Corporis consectetur hic esse sequi, repellendus debitis cum cumque natus amet earum molestiae sunt illo soluta deserunt iusto voluptates ab dignissimos eligendi, qui reiciendis et? Praesentium itaque ex nobis libero alias, sunt expedita nesciunt quae recusandae similique cupiditate iure dicta veniam quasi ut at vel placeat obcaecati beatae cumque modi voluptatem minus minima? Voluptates nesciunt nihil facere. Modi voluptate accusamus incidunt ipsum asperiores aliquid natus? Commodi, reprehenderit quidem! Temporibus quo deleniti suscipit, omnis consequatur quia. Mollitia assumenda nobis molestias eaque accusantium ea facere odit, eius laborum sed consectetur error cupiditate nemo aperiam ullam omnis incidunt ratione, est quaerat? */}

            </div>
          </div>
        );
      })}
    </div>
  );