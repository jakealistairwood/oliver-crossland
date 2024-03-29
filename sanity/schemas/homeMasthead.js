import { defineType, defineField } from "sanity";

const homeMasthead = defineType({
    name: "homeMasthead",
    type: "object",
    title: "Home Masthead",
    fields: [
        defineField({
            name: "marquee",
            type: "array",
            title: "Marquee",
            description: "This will display a list of text that will scroll across the page continuously",
            of: [
                {
                    name: "marquee_item",
                    type: "object",
                    title: "Marquee Item",
                    fields: [
                        {
                            name: "text",
                            type: "string",
                            title: "Text",
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: "heading",
            type: "text",
            title: "Heading",
        }),
        defineField({
            name: "link",
            type: "object",
            title: "Link",
            fields: [
                {
                    name: "label",
                    type: "string",
                    title: "Label",
                },
                {
                    name: "url",
                    type: "string",
                    title: "URL",
                }
            ],
        }),
        defineField({
            name: "background_asset",
            type: "string",
            title: "Background Asset",
            options: {
                list: [
                    { title: "Image", value: "image" },
                    { title: "Video", value: "video" },
                    { title: "Vimeo Embed", value: "vimeo_embed" },
                ]
            },
            initialValue: "",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            hidden: ({ parent }) => parent.background_asset !== "image",
        }),
        defineField({
            name: "video_thumbnail",
            type: "image",
            title: "Video Thumbnail",
            description: "(optional) If left empty will use whatever YouTube/Vimeo defaults it to",
            hidden: ({ parent }) => parent.background_asset !== "vimeo_embed",
        }),
        defineField({
            name: "video_embed",
            type: "string",
            title: "Video Embed",
            description: "Just need to paste in the id of a Youtube/Vimeo embed here",
            hidden: ({ parent }) => parent.background_asset !== "vimeo_embed",
        }),
    ],
})

export default homeMasthead