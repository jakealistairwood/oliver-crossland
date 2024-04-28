import { defineField, defineArrayMember, defineType } from "sanity";

const aboutContent = defineType({
    name: "aboutContent",
    title: "About Content",
    type: "object",
    fields: [
        {
            name: "subheading",
            title: "Subheading",
            type: "string",
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" }
            ],
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "object",
            fields: [
                {
                    name: "images",
                    title: "Images",
                    type: "array",
                    of: [
                        { type: "image" }
                    ]
                }
            ]
        },
    ]
});

export default aboutContent;