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
            name: "make_featured",
            title: "Make Featured",
            type: "boolean",
            description: "On the selected works/portfolio page, the thumbnail will span the full width",
            initialValue: false,
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
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                  { title: "Wildlife", value: "wildlife" },
                  { title: "Online Course", value: "online_course" },
                  { title: "Wedding", value: "wedding" },
                  { title: "Advert", value: "advert" },
                  { title: "Music Video", value: "music_video" },
                  { title: "Other", value: "other" },
                ],
              },
        },
        {
            name: "date",
            title: "Date",
            type: "date",
        }
    ]
});

export default portfolio;