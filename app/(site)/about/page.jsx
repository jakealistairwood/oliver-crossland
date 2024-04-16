import React from "react";
import Page from "@/layouts/Page";
import { fetchAboutData } from "@/sanity/sanity-api";

export default async function About() {
    const data = await fetchAboutData();

    return (
        <main className="">
            <Page data={data} />
        </main>
    );
}
