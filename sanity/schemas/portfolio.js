import { defineField, defineArrayMember, defineType } from "sanity";

const portfolio = defineType({
    name: "portfolio",
    title: "Portfolio",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            description: "This is a basically a summary of the project.",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                { type: "block" }
            ],
            description: "More detailed overview of the project, e.g. what it involves, the challenges, techniques used etc",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "date",
        },
        {
            name: "featured_image",
            title: "Featured Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "video_id",
            title: "Video ID",
            type: "string",
        }
    ]
});

export default portfolio;