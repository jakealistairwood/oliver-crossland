import React from "react";
import { fetchProjectPage } from "@/sanity/sanity-api";
import Post from "@/layouts/Post";

export default async function Project({ params }) {
    const project = await fetchProjectPage(params.project);

    return (
        <main className="">
            <Post project={project} />
        </main>
    );
}
