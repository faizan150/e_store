import { defineField, defineType } from "sanity";

export const clothType = defineType({
    name: "clothType",
    title: "Cloth Type",
    type: "document",
    fields: [
      defineField({
        name: "clothType",
        title: "Product Cloth Type",
        type: "string",
      },
      ),
    ],
  });
  