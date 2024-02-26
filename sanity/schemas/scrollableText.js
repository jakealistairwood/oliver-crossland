import { defineType, defineField } from "sanity";

const scrollableText = defineType({
    name: "scrollableText",
    type: "object",
    title: "Scrollable Text",
    fields: [
        defineField({
            name: "text_to_animate",
            type: "text",
            title: "Text To Animate",
        }),
    ],
})

export default scrollableText;