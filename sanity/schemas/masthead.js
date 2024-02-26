import { defineType, defineField } from "sanity";

const masthead = defineType({
    name: "masthead",
    type: "object",
    title: "Masthead",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
        }),
    ],
})

export default masthead