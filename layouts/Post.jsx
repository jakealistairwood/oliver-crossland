"use client";

import React from "react";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import FullWidthVideo from "@/components/FullWidthVideo";
import ProjectPost from "@/pages/ProjectPost";

const Post = (props) => {
    const { project } = props;

    return (
        <section>
            <div className="container">
                <ProjectPost project={project} />
            </div>
        </section>
    )
}

export default Post;