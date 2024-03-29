import { defineType, defineField } from "sanity";

const logoMarquee = defineType({
    name: "logoMarquee",
    type: "object",
    title: "Logo Marquee",
    fields: [
        {
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "logos",
            type: "array",
            title: "Logos",
            of: [
                {
                    name: "logo",
                    type: "object",
                    title: "Logo",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                        },
                        {
                            name: "link",
                            type: "string",
                            title: "Link",
                        }
                    ]
                }
            ]
        }
    ]
})

export default logoMarquee;