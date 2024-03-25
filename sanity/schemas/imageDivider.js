import { defineType, defineField } from "sanity";

const imageDivider = defineType({
    name: "imageDivider",
    type: "object",
    title: "Image Divider",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image",
            description: "Simply an full width image that can be used to divide sections"
        },
    ],
})

export default imageDivider;