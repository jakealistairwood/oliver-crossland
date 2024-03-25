import { defineType, defineField } from "sanity";

const fullWidthVideo = defineType({
    name: "fullWidthVideo",
    type: "object",
    title: "Full Width Video",
    fields: [
        {
            name: "video_id",
            type: "string",
            title: "Video ID",
        },
        {
            name: "video_thumbnail",
            type: "image",
            title: "Video Thumbnail",
        }
    ],
})

export default fullWidthVideo;