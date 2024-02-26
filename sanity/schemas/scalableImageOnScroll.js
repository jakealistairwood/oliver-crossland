import { defineType, defineField } from "sanity";

const scalableImageOnScroll = defineType({
    name: "scalableImageOnScroll",
    type: "object",
    title: "Scalable Image On Scroll",
    fields: [
        defineField({
            name: "image_to_animate",
            type: "image",
            title: "Image To Animate",
        }),
        {
            name: "add_caption",
            title: "Add Caption",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "caption",
            type: "object",
            title: "Caption",
            fields: [
                {
                    name: "heading",
                    type: "string",
                    title: "Heading",
                },
                {
                    name: "description",
                    type: "text",
                    title: "Description",
                },
                {
                    name: "link",
                    type: "string",
                    title: "Link",
                }
            ],
            hidden: ({ parent}) => !parent?.add_caption,
        }
    ],
})

export default scalableImageOnScroll