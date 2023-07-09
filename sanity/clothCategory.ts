import { defineField, defineType } from "sanity";

export const clothCategory = defineType({
    name: "clothCategory",
    title: "Cloth Category",
    type: "document",
    fields: [
      defineField({
        name: "product",
        title: "Product Cloth Title",
        type: "string",
      },
      ),
    ],
  });
  