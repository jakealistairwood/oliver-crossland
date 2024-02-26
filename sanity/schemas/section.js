import { defineType, defineField } from "sanity";

export default defineType({
    name: "section",
    type: "object",
    title: "Section",
    fields: [
        defineField({
            name: "sectionTitle",
            type: "string",
            title: "Section Title",
        }),
        defineField({
            name: "components",
            title: "Components",
            type: "array",
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
                                    { title: "Scrollable Text", value: "scrollableText" },
                                    { title: "Scalable Image On Scroll", value: "scalableImageOnScroll" },
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
                        }
                    ]
                }
            ]
        })
    ]
})