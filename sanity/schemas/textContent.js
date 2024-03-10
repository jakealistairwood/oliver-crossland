import { defineType, defineField } from "sanity";

const textContent = defineType({
    name: "textContent",
    type: "object",
    title: "Text Content",
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
        {
            name: "heading",
            type: "string",
            title: "Heading",
            group: "content",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            group: "content",
        },
        {
            name: "links",
            type: "array",
            title: "Links",
            group: "content",
            of: [
                {
                    name: "link",
                    title: "Link",
                    type: "object",
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
                        },
                        {
                            name: "type",
                            type: "string",
                            title: "Type",
                            options: {
                                list: [
                                    { title: "Button", value: "button" },
                                    { title: "Link", value: "link" },
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "add_container",
            type: "boolean",
            title: "Add Container?",
            group: "options",
            default: false,
        },
        {
            name: "center_content",
            type: "boolean",
            title: "Center Content",
            group: "options",
            default: false,
        },
        {
            name: "content_width",
            type: "string",
            title: "Content Width",
            group: "options",
        }
    ],
})

export default textContent;