import { defineType, defineField } from "sanity";

export default defineType({
    name: "section",
    type: "object",
    title: "Section",
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
            name: "sectionTitle",
            type: "string",
            title: "Section Title",
            group: "content",
        }),
        defineField({
            name: "components",
            title: "Components",
            type: "array",
            group: "content",
            of: [
                {
                    type: "object",
                    title: "Component",
                    fields: [
                        {
                            name: "component",
                            title: "Component",
                            type: "string",
                            validation: (Rule) => Rule.required().min(1).max(200).error("Pick a component or remove"),
                            options: {
                                list: [
                                    { title: "Choose component", value: "" },
                                    { title: "Masthead", value: "masthead" },
                                    { title: "Text Content", value: "textContent" },
                                    { title: "Scrollable Text", value: "scrollableText" },
                                    { title: "Scalable Image On Scroll", value: "scalableImageOnScroll" },
                                    { title: "Selected Works", value: "selectedWorks" },
                                    { title: "Text Image Marquee", value: "textImageMarquee" },
                                ]
                            },
                            initialValue: "",
                        },
                        {
                            name: "masthead",
                            type: "masthead",
                            title: "Masthead",
                            hidden: ({ parent }) => parent.component !== "masthead",
                        },
                        {
                            name: "textContent",
                            type: "textContent",
                            title: "Text Content",
                            hidden: ({ parent }) => parent.component!== "textContent",
                        },
                        {
                            name: "scrollableText",
                            type: "scrollableText",
                            title: "Scrollable Text",
                            hidden: ({ parent }) => parent.component !== "scrollableText",
                        },
                        {
                            name: "scalableImageOnScroll",
                            type: "scalableImageOnScroll",
                            title: "Scalable Image On Scroll",
                            hidden: ({ parent }) => parent.component!== "scalableImageOnScroll",
                        },
                        {
                            name: "selectedWorks",
                            type: "selectedWorks",
                            title: "Selected Works",
                            hidden: ({ parent }) => parent.component!== "selectedWorks",
                        },
                        {
                            name: "textImageMarquee",
                            type: "textImageMarquee",
                            title: "Text Image Marquee",
                            hidden: ({ parent }) => parent.component!== "textImageMarquee",
                        }
                    ]
                }
            ]
        }),
        {
            name: "remove_container",
            type: "boolean",
            title: "Remove Container?",
            group: "options",
            default: false,
        }
    ]
})