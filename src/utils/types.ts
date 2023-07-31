import Image, {  StaticImageData } from "next/image"

export type Product ={
    id:number,
    tagline:string,
    name:string,
    price:number,
    category:string,
    image:StaticImageData  | string,
}



