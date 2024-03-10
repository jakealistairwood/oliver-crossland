import { defineType, defineField } from "sanity";

const textImageMarquee = defineType({
    name: "textImageMarquee",
    type: "object",
    title: "Text Image Marquee",
    fields: [
        {
            name: "marquee_items",
            type: "array",
            title: "Marquee Items",
            of: [
                {
                    title: "Marquee Item",
                    name: "marquee_item",
                    type: "object",
                    fields: [
                        {
                            name: "text",
                            type: "string",
                            title: "Text",
                        },
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                        }
                    ]
                }
            ]
        }
    ]
})

export default textImageMarquee;