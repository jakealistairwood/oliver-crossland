import React from "react";
import { usePathname } from "next/navigation";
import { fetchProjectPage } from "@/sanity/sanity-api";
import Post from "@/layouts/Post";

// async function fetchProjectPage(pathname) {

// }

export default async function Project({ params }) {
  
    // const pathname = usePathname();

    // const strippedPathname = pathname.replace(/^\/portfolio\//, '')

    const project = await fetchProjectPage(params.project);

    return (
        <main className="">
            <Post project={project} />
        </main>
    );
}
