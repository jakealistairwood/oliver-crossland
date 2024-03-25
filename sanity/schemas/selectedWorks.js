import { defineType, defineField } from "sanity";

const selectedWorks = defineType({
    name: "selectedWorks",
    type: "object",
    title: "Selected Works",
    fields: [
        {
            name: "section_title",
            type: "string",
            title: "Section Title",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        },
        {
            name: "featured_projects",
            type: "array",
            title: "Featured Projects",
            of: [
                {
                    type: "reference",
                    to: [{ type: "portfolio" }],
                }
            ]
        }
    ],
})

export default selectedWorks;