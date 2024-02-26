import { defineType, defineField } from "sanity";

const page = defineField({
    name: "page",
    title: "Page",
    type: "document",
    groups: [
        {
            name: "pageContent",
            title: "Page Content",
            default: true,
        },
        {
            name: "pageOptions",
            title: "Page Options",
        },
        {
            name: "seo",
            title: "SEO",
        }
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            group: "pageOptions",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
            group: "pageOptions",
        },
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            group: "pageContent",
            of: [
                { type: "section" }
            ]
        })
    ]
})

export default page