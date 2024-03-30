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
                                    { title: "Home Masthead", value: "homeMasthead" },
                                    { title: "Text Content", value: "textContent" },
                                    { title: "Scrollable Text", value: "scrollableText" },
                                    { title: "Scalable Image On Scroll", value: "scalableImageOnScroll" },
                                    { title: "Selected Works", value: "selectedWorks" },
                                    { title: "Text Image Marquee", value: "textImageMarquee" },
                                    { title: "Full Width Video", value: "fullWidthVideo" },
                                    { title: "Image Divider", value: "imageDivider" },
                                    { title: "Logo Marquee", value: "logoMarquee" },
                                    { title: "Portfolio List", value: "portfolioList" },
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
                            name: "homeMasthead",
                            type: "homeMasthead",
                            title: "Home Masthead",
                            hidden: ({ parent }) => parent.component !== "homeMasthead",
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
                        },
                        {
                            name: "fullWidthVideo",
                            type: "fullWidthVideo",
                            title: "Full Width Video",
                            hidden: ({ parent }) => parent.component!== "fullWidthVideo",
                        },
                        {
                            name: "imageDivider",
                            type: "imageDivider",
                            title: "Image Divider",
                            hidden: ({ parent }) => parent.component!== "imageDivider",
                        },
                        {
                            name: "logoMarquee",
                            type: "logoMarquee",
                            title: "Logo Marquee",
                            hidden: ({ parent }) => parent.component!== "logoMarquee",
                        },
                        {
                            name: "portfolioList",
                            type: "portfolioList",
                            title: "Portfolio List",
                            hidden: ({ parent }) => parent.component!== "portfolioList",
                        }
                    ]
                }
            ]
        }),
        {
            name: "background_color",
            type: "string",
            title: "Background Color",
            group: "options",   
            options: {
                list: [
                    { title: "White", value: "white" },
                    { title: "offWhite", value: "offWhite" },
                    { title: "Gray", value: "gray" },
                    { title: "Black", value: "black" },
                    { title: "Navy", value: "navy" },
                ]
            },
            initialValue: "",
        },
        {
            name: "remove_container",
            type: "boolean",
            title: "Remove Container?",
            group: "options",
            default: false,
        },
        {
            name: "make_sticky",
            type: "boolean",
            title: "Make Sticky?",
            group: "options",
            default: false,
        },
        {
            name : "add_rounded_top_border",
            type: "boolean",
            title: "Add Rounded Top Border?",
            group: "options",
            default: false,
        },
        {
            name: "padding_top",
            type: "string",
            title: "Padding Top",
            group: "options",   
            options: {
                list: [
                    { title: "None", value: "none" },
                    { title: "Extra Small", value: "extra-small" },
                    { title: "Small", value: "small" },
                    { title: "Medium", value: "medium" },
                    { title: "Large", value: "large" },
                ]
            },
            initialValue: "",
        },
        {
            name: "padding_bottom",
            type: "string",
            title: "Padding Bottom",
            group: "options",   
            options: {
                list: [
                    { title: "None", value: "none" },
                    { title: "Extra Small", value: "extra-small" },
                    { title: "Small", value: "small" },
                    { title: "Medium", value: "medium" },
                    { title: "Large", value: "large" },
                ]
            },
            initialValue: "",
        },
    ]
})