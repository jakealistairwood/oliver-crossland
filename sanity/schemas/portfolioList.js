import { defineType, defineField } from "sanity";

const portfolioList = defineType({
    name: "portfolioList",
    type: "object",
    title: "Portfolio List",
    fields: [
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
    ],
})

export default portfolioList