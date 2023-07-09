import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "Product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
        name: "clothCategory",
        title: "Product Cloth Title",
        type: "reference",
        to: [{ type: "clothCategory" }],
      }),
    defineField({
        name: "clothType",
        title: "Product Cloth Type",
        type: "reference",
        to: [{ type: "clothType" }],
      }),
      defineField({
        name: "price",
        title: "Product Price",
        type: "number",
      }),
      defineField({
        name: "productDetails",
        title: "Product Details",
        type: "string",
      }),
      defineField({
        name: "productCare",
        title: "Product Care",
        type: "array",
        of:[{ type:'string' }]
      }),
      defineField({
        name: "productImage",
        title: "Product Image",
        type: "array",
        of:[{ type:'image' }]
      }),
  
  ],
});
