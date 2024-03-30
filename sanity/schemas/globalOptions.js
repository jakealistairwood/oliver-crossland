import { defineType, defineField } from "sanity";

const globalOptions = defineType({
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
        {
            name: "footer",
            type: "object",
            title: "Footer",
            fields: [
                {
                    name: "cta",
                    type: "object",
                    title: "CTA",
                    fields: [
                        {
                            name: "heading",
                            type: "text",
                            title: "Heading",
                        },
                        {
                            name: "link",
                            type: "object",
                            title: "Link",
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
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "social_links",
                    type: "array",
                    title: "Social Links",
                    of: [
                        {
                            name: "social_link",
                            title: "Social Link",
                            type: "object",
                            fields: [
                                {
                                    name: "icon",
                                    type: "image",
                                    title: "Icon",
                                },
                                {
                                    name: "url",
                                    type: "string",
                                    title: "URL",
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "contact_links",
                    type: "object",
                    title: "Contact Links",
                    fields: [
                        {
                            name: "phone_number",
                            type: "string",
                            title: "Phone Number",
                        },
                        {
                            name: "email",
                            type: "string",
                            title: "Email",
                        }
                    ]
                }
            ],
        }
    ]
})

export default globalOptions;