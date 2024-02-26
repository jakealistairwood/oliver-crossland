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