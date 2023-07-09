import { defineField, defineType } from "sanity";

export const clothSize = defineType({
    name: "clothSize",
    title: "Cloth Sizes",
    type: "document",
    fields: [
      defineField({
        name: "clothSize",
        title: "Product Cloth Size",
        type: "string",
      },
      ),
    ],
  });
  