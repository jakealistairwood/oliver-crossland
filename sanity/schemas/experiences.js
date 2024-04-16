import { defineType, defineField } from "sanity";

const experiences = defineType({
    name: "experiences",
    type: "object",
    title: "Experiences",
    fields: [
        {
            name: "section_header",
            type: "object",
            title: "Section Header",
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
            ]
        },
        {
            name: "job_positions",
            type: "array",
            title: "Job Positions",
            of: [
                {
                    name: "job_position",
                    type: "object",
                    title: "Job Position",
                    fields: [
                        {
                            name: "company",
                            type: "object",
                            title: "Company",
                            fields: [
                                {
                                    name: "name",
                                    type: "string",
                                    title: "Name",
                                },
                                {
                                    name: "link",
                                    type: "string",
                                    title: "Link",
                                }
                            ]
                        },
                        {
                            name: "position",
                            type: "string",
                            title: "Position",
                        },
                        {
                            name: "date",
                            type: "string",
                            title: "Date",
                        },
                        {
                            name: "responsibilites",
                            type: "array",
                            title: "Responsibilites",
                            of: [
                                {
                                    type: "string",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
})

export default experiences;