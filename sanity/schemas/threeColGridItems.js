import { defineType, defineField } from "sanity";

const threeColGridItems = defineType({
    name: "threeColGridItems",
    type: "object",
    title: "Three Col Grid Items",
    fields: [
        {
            name: "section_header",
            type: "object",
            title: "Section Header",
            fields: [
                {
                    name: "subheading",
                    type: "string",
                    title: "Subheading",
                },
                {
                    name: "heading",
                    type: "string",
                    title: "Heading",
                },
                {
                    name: "description",
                    type: "text",
                    title: "Description",
                }
            ]
        },
        {
            name: "grid_items",
            type: "array",
            title: "Grid Items",
            of: [
                {
                    name: "grid_item",
                    type: "object",
                    title: "Grid Item",
                    fields: [
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
                        },
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                        },
                        {
                            name: "description",
                            type: "text",
                            title: "Description",
                        }
                    ]
                }
            ]
        },
        {
            name: "options",
            type: "object",
            title: "Options",
            fields: [
                {
                    name: "invert_colors",
                    type: "boolean",
                    title: "Invert Colors",
                    initialValue: false,
                },
                {
                    name: "center_header",
                    type: "boolean",
                    title: "Center Header",
                    initialValue: false,
                }
            ]
        }
    ]
})

export default threeColGridItems;