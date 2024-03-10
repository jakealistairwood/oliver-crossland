import { defineType, defineField } from "sanity";

const masthead = defineType({
    name: "masthead",
    type: "object",
    title: "Masthead",
    groups: [
        {
            name: "content",
            title: "Content",
        },
        {
            name: "options",
            title: "Options",
        },
    ],
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            group: "content",
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            group: "content",
        }),
        defineField({
            name: "background_asset",
            type: "string",
            title: "Background Asset",
            group: "content",
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
            group: "content",
            hidden: ({ parent }) => parent.background_asset !== "image",
        }),
        defineField({
            name: "video",
            type: "file",
            title: "Video",
            group: "content",
            hidden: ({ parent }) => parent.background_asset !== "video",
        }),
        defineField({
            name: "vimeo_embed",
            type: "string",
            title: "Vimeo Embed",
            group: "content",
            hidden: ({ parent }) => parent.background_asset !== "vimeo_embed",
        }),
        defineField({
            name: "add_bottom_banner",
            type: "boolean",
            title: "Add Bottom Banner?",
            group: "options",
            default: false,
        }),
        defineField({
            name: "bottom_banner",
            type: "object",
            title: "Bottom Banner",
            group: "content",
            fields: [
                {
                    name: "location",
                    type: "string",
                    title: "Location",
                },
                {
                    name: "social_links",
                    type: "array",
                    title: "Social Links",
                    of: [
                        {
                            name: "social_link",
                            title: "Social Link",
                            type: "object",
                            fields: [
                                {
                                    name: "link",
                                    type: "string",
                                    title: "Link",
                                },
                                {
                                    name: "label",
                                    type: "string",
                                    title: "Label",
                                }
                            ]
                        }
                    ]
                }
            ],
            hidden: ({ parent }) => !parent.add_bottom_banner,
        })
    ],
})

export default masthead